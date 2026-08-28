/* ===========================================================================
   Travel Log
   Plain HTML, CSS and JavaScript — no framework, no build step, no CDN.
   Content comes from data/trips.js.
   =========================================================================== */

(function () {
  'use strict';

  var TRIPS   = window.TRIPS || [];
  var view    = document.getElementById('view');
  var lbHost  = document.getElementById('lightbox');
  var SITE    = 'Travel Log';

  /* --- little helpers ---------------------------------------------------- */

  /* Content fields in trips.js are authored HTML (they carry <strong>, <em>).
     They land in innerHTML as written. When one of those strings has to go
     into an attribute instead, decode it back to plain text first, then
     escape — otherwise "&amp;" would come out as "&amp;amp;". */
  function decode(html) {
    var d = document.createElement('div');
    d.innerHTML = String(html == null ? '' : html);
    return d.textContent || '';
  }

  function attr(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function text(html) { return attr(decode(html)); }

  function findTrip(id) {
    for (var i = 0; i < TRIPS.length; i++) {
      if (TRIPS[i].id === id) return TRIPS[i];
    }
    return null;
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* --- frames ------------------------------------------------------------ */

  var PHOTO_ICON =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
    '<path d="m21 15-5-5L5 21"/></svg>';

  /* A frame is filled when its photo has a src. Empty frames are inert:
     no image request goes out for a photograph that isn't there yet. */
  function frame(photo, placeholder) {
    if (photo && photo.src) {
      return '<div class="frame frame--filled">' +
               '<img src="' + attr(photo.src) + '" alt="' + text(photo.caption || '') + '" loading="lazy">' +
             '</div>';
    }
    return '<div class="frame">' +
             '<div class="frame-ring"></div>' +
             '<div class="frame-empty">' + PHOTO_ICON +
               '<div class="cap">' + (placeholder || 'Photograph to come') + '</div>' +
             '</div>' +
           '</div>';
  }

  /* =====================================================================
     INDEX
     ===================================================================== */

  function renderIndex() {
    var cards = TRIPS.map(function (t) {
      var cover = t.card.cover || {};
      return '' +
        '<a class="trip-card" href="#/' + attr(t.id) + '">' +
          '<div class="trip-card-head">' +
            '<h2 class="display">' + t.card.title + '</h2>' +
            '<div class="trip-card-length">' + t.card.length + '</div>' +
          '</div>' +
          '<div class="trip-card-cover">' + frame(cover, cover.placeholder) + '</div>' +
          '<div class="trip-card-body">' +
            '<div class="trip-card-dates">' + t.card.dates + '</div>' +
            '<p class="trip-card-blurb">' + t.card.blurb + '</p>' +
            '<div class="trip-card-open">Open itinerary →</div>' +
          '</div>' +
        '</a>';
    }).join('');

    var count = TRIPS.length === 1 ? 'One trip' : TRIPS.length + ' trips';

    view.innerHTML = '' +
      '<div class="index-hero">' +
        '<div class="eyebrow">Trips · 2026</div>' +
        '<h1 class="display">Where we have been</h1>' +
        '<p>Itineraries as they were planned, photographs as they came back. Pick a trip to open it.</p>' +
      '</div>' +
      cards +
      '<div class="strip index-footer"><div>Travel log</div><div>' + count + '</div></div>';

    document.title = SITE;
  }

  /* =====================================================================
     TRIP
     ===================================================================== */

  function renderInfo(info) {
    if (!info || !info.length) return '';
    return '<div class="info-grid">' + info.map(function (cell) {
      var live = /^weather$/i.test(cell.label) ? ' info-cell--weather' : '';
      return '<div class="info-cell' + live + '">' +
               '<div class="info-label">' + cell.label + '</div>' +
               '<div class="info-value">' + cell.value + '</div>' +
               '<div class="info-detail">' + cell.detail + '</div>' +
             '</div>';
    }).join('') + '</div>';
  }

  function renderCallouts(callouts) {
    if (!callouts || !callouts.length) return '';
    return '<div class="callouts">' + callouts.map(function (c) {
      return '<div class="callout callout--' + attr(c.tone) + '">' +
               '<div class="callout-mark">' + c.mark + '</div>' +
               '<div class="callout-text">' + c.text + '</div>' +
             '</div>';
    }).join('') + '</div>';
  }

  function renderNav(trip) {
    if (!trip.nav || !trip.nav.length) return '';
    return '<nav class="day-nav" aria-label="Days">' + trip.nav.map(function (item) {
      var inner = '<div class="day-nav-label">' + item.label + '</div>' +
                  '<div class="day-nav-title">' + item.title + '</div>';
      if (item.pending) {
        return '<div class="day-nav-item day-nav-item--pending" title="Waiting on the itinerary text">' +
                 inner + '</div>';
      }
      return '<a class="day-nav-item" href="#/' + attr(trip.id) + '/' + attr(item.href) + '">' +
               inner + '</a>';
    }).join('') + '</nav>';
  }

  function renderRow(row) {
    var chips = (row.chips || []).map(function (chip) {
      return '<span class="chip chip--' + attr(chip.tone) + '">' + chip.label + '</span>';
    }).join('');

    return '<div class="row">' +
             '<div class="row-time">' + row.time + '</div>' +
             '<div>' +
               '<div class="row-title">' + row.title + '</div>' +
               '<div class="row-body">' + chips + row.body + '</div>' +
               (row.address ? '<div class="row-address">' + row.address + '</div>' : '') +
             '</div>' +
           '</div>';
  }

  /* ---------------------------------------------------------------------
     WEATHER & WHAT TO WEAR

     Open-Meteo needs no key and allows requests straight from the browser,
     which is the only reason this works on a static site with no backend.
     Its forecast reaches roughly sixteen days out, so a trip further off
     than that simply has no forecast to show — those days fall back to the
     seasonal averages in trips.js and say so on the label rather than
     dressing a guess up as a prediction.

     Nothing waits on the network. The averages render with the page and the
     forecast replaces them if and when it lands, so a blocked request or a
     dead connection costs the reader nothing.

     The outfit itself is written per day in trips.js, grounded in what that
     day actually holds and how people dress there — neither of which the
     weather knows. What the forecast adds is only the part that could not
     be written in advance: real rain, a cold snap, a wide day-to-night swing.
     --------------------------------------------------------------------- */

  var FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';
  var forecastCache = {};

  /* WMO weather codes, collapsed to the distinctions worth dressing for. */
  var SKY = {
    0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Fog', 48: 'Freezing fog',
    51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
    56: 'Freezing drizzle', 57: 'Freezing drizzle',
    61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
    66: 'Freezing rain', 67: 'Freezing rain',
    71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 77: 'Snow grains',
    80: 'Showers', 81: 'Showers', 82: 'Heavy showers',
    85: 'Snow showers', 86: 'Snow showers',
    95: 'Thunderstorms', 96: 'Thunderstorms', 99: 'Thunderstorms'
  };

  function fetchForecast(trip) {
    var place = trip.place;
    var days = trip.days || [];
    if (!place || !days.length || !window.fetch) return Promise.resolve(null);
    if (forecastCache[trip.id]) return Promise.resolve(forecastCache[trip.id]);

    var first = days[0].iso;
    var last = days[days.length - 1].iso;
    if (!first || !last) return Promise.resolve(null);

    var url = FORECAST_URL +
      '?latitude=' + encodeURIComponent(place.lat) +
      '&longitude=' + encodeURIComponent(place.lon) +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
      '&timezone=' + encodeURIComponent(place.timezone) +
      '&start_date=' + first + '&end_date=' + last;

    return fetch(url)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        var daily = data && data.daily;
        var byDate = {};
        if (daily && daily.time) {
          daily.time.forEach(function (iso, i) {
            var high = daily.temperature_2m_max[i];
            var low = daily.temperature_2m_min[i];
            /* Past the forecast horizon the arrays still hold the dates but
               the readings come back null. Those days keep their average. */
            if (high === null || low === null) return;
            var rain = daily.precipitation_probability_max;
            var code = daily.weather_code[i];
            byDate[iso] = {
              high: Math.round(high),
              low: Math.round(low),
              sky: SKY[code] || '',
              /* The code is the better signal: London can read 26% and still
                 be forecast as drizzle all day. */
              wet: (code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95,
              rain: rain ? rain[i] : null
            };
          });
        }
        forecastCache[trip.id] = byDate;
        return byDate;
      })
      .catch(function () { return null; });
  }

  /* Only ever run against a real forecast — a seasonal average is far too
     blunt a number to tell someone to pack a coat on. */
  function forecastNotes(w) {
    var notes = [];

    var chance = w.rain === null ? '' : ', ' + w.rain + '% chance';

    if (w.wet && w.rain !== null && w.rain >= 50) {
      notes.push(w.sky + ' forecast' + chance + ' — take the waterproof layer, not the good jacket.');
    } else if (w.wet) {
      notes.push(w.sky + ' forecast' + chance + ' — something packable in a pocket covers it.');
    } else if (w.rain !== null && w.rain >= 40) {
      notes.push('A shower is possible' + chance + ' — worth a light shell.');
    }

    if (w.low <= 6) {
      notes.push('Down to ' + w.low + '° overnight — hat-and-gloves cold once the sun goes.');
    } else if (w.low <= 12) {
      notes.push('Down to ' + w.low + '° after dark, so plan the evening layer as a coat rather than a shirt.');
    }

    if (w.high >= 28) {
      notes.push('Up to ' + w.high + '° — sun cover, and more water than you think you need.');
    }

    var swing = w.high - w.low;
    if (swing >= 12) {
      notes.push('A ' + swing + '° swing between afternoon and night — layers you can peel off and put back on.');
    }

    return notes;
  }

  function renderDayKit(trip, day) {
    if (!day.outfit) return '';
    var normals = (trip.place && trip.place.normals) || null;

    return '<div class="daykit" data-iso="' + attr(day.iso || '') + '">' +
             '<div class="daykit-weather">' +
               '<div class="daykit-label">Weather</div>' +
               '<div class="daykit-temp">' +
                 (normals ? normals.high + '° / ' + normals.low + '°' : '—') +
               '</div>' +
               '<div class="daykit-sky">' + (normals ? normals.summary : '') + '</div>' +
               '<div class="daykit-tag">Seasonal average</div>' +
             '</div>' +
             '<div class="daykit-wear">' +
               '<div class="daykit-label">What to wear</div>' +
               '<p class="daykit-outfit">' + day.outfit + '</p>' +
               '<ul class="daykit-notes"></ul>' +
             '</div>' +
           '</div>';
  }

  /* Swap averages for the forecast once it arrives, if the reader is still
     on the trip it was fetched for. */
  function hydrateForecast(trip) {
    fetchForecast(trip).then(function (byDate) {
      if (!byDate || currentTripId !== trip.id) return;

      var kits = view.querySelectorAll('.daykit[data-iso]');
      var highs = [];
      var lows = [];

      for (var i = 0; i < kits.length; i++) {
        var kit = kits[i];
        var w = byDate[kit.getAttribute('data-iso')];
        if (!w) continue;

        highs.push(w.high);
        lows.push(w.low);

        kit.querySelector('.daykit-temp').textContent = w.high + '° / ' + w.low + '°';

        var sky = w.sky;
        if (w.rain !== null && w.rain >= 20) sky += ' · ' + w.rain + '% rain';
        kit.querySelector('.daykit-sky').textContent = sky;

        kit.querySelector('.daykit-tag').textContent = 'Live forecast';
        kit.classList.add('daykit--live');

        kit.querySelector('.daykit-notes').innerHTML =
          forecastNotes(w).map(function (n) { return '<li>' + n + '</li>'; }).join('');
      }

      /* The masthead's weather cell was written months ago. If a forecast
         now covers the trip, say what it actually is. */
      var cell = view.querySelector('.info-cell--weather .info-value');
      if (cell && highs.length) {
        cell.textContent = Math.min.apply(null, lows) + '°–' + Math.max.apply(null, highs) +
                           '°C across the trip';
      }
    });
  }

  function renderDay(trip, day) {
    return '<section class="day" id="' + attr(day.id) + '">' +
             '<div class="day-head">' +
               '<div class="day-counter">' + day.counter + '</div>' +
               '<div class="day-date">' + day.date + '</div>' +
             '</div>' +
             '<h2>' + day.title + '</h2>' +
             '<p class="day-lede">' + day.lede + '</p>' +
             renderDayKit(trip, day) +
             '<div class="day-rows">' + (day.rows || []).map(renderRow).join('') + '</div>' +
           '</section>';
  }

  function renderPending(p) {
    if (!p) return '';
    return '<section class="day day--pending">' +
             '<div class="day-head">' +
               '<div class="day-counter">' + p.counter + '</div>' +
               '<div class="day-date">' + p.date + '</div>' +
             '</div>' +
             '<h2>' + p.title + '</h2>' +
             '<p class="day-lede">' + p.lede + '</p>' +
           '</section>';
  }

  function renderPhotos(trip) {
    var intro = trip.photosIntro || {};
    var cells = (trip.photos || []).map(function (photo, i) {
      return '<div class="photo-cell" data-photo="' + i + '">' +
               frame(photo, photo.placeholder) +
             '</div>';
    }).join('');

    return '<div class="photos-intro">' +
             '<div class="eyebrow">' + (intro.eyebrow || 'Photographs') + '</div>' +
             '<h2>' + (intro.title || 'From the trip') + '</h2>' +
             '<p>' + (intro.lede || '') + '</p>' +
           '</div>' +
           '<div class="photo-grid">' + cells + '</div>';
  }

  function renderTrip(trip) {
    view.innerHTML = '' +
      '<a class="back" href="#/">← All trips</a>' +
      '<div class="trip-hero">' +
        '<div class="eyebrow">' + trip.eyebrow + '</div>' +
        '<h1 class="display">' + trip.title + '</h1>' +
        '<p>' + trip.lede + '</p>' +
      '</div>' +
      renderInfo(trip.info) +
      renderCallouts(trip.callouts) +
      renderNav(trip) +
      (trip.days || []).map(function (d) { return renderDay(trip, d); }).join('') +
      renderPending(trip.pending) +
      renderPhotos(trip) +
      '<div class="strip trip-footer">' +
        '<div>' + (trip.footer ? trip.footer.left : '') + '</div>' +
        '<div>' + (trip.footer ? trip.footer.right : '') + '</div>' +
      '</div>';

    document.title = decode(trip.card.title) + ' · ' + SITE;

    hydrateForecast(trip);
  }

  /* =====================================================================
     LIGHTBOX
     ===================================================================== */

  var lb = { items: [], i: 0, open: false, lastFocus: null };

  var CHEVRON_L = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><polyline points="14,4 6,11 14,18"></polyline></svg>';
  var CHEVRON_R = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><polyline points="8,4 16,11 8,18"></polyline></svg>';

  function paintLightbox() {
    if (!lb.open || !lb.items.length) {
      lbHost.innerHTML = '';
      document.body.classList.remove('lb-open');
      return;
    }

    var cur = lb.items[lb.i];
    var many = lb.items.length > 1;

    lbHost.innerHTML = '' +
      '<div class="lb" role="dialog" aria-modal="true" aria-label="Photograph">' +
        '<div class="lb-stage">' +
          '<div class="lb-holder">' +
            '<img class="lb-photo" src="' + attr(cur.src) + '" alt="' + text(cur.caption) + '">' +
          '</div>' +
          (many ? '<button class="lb-nav lb-prev" data-lb="prev" aria-label="Previous photo">' + CHEVRON_L + '</button>' : '') +
          (many ? '<button class="lb-nav lb-next" data-lb="next" aria-label="Next photo">' + CHEVRON_R + '</button>' : '') +
          '<button class="lb-close" data-lb="close" aria-label="Close">×</button>' +
        '</div>' +
        '<div class="lb-bar">' +
          '<div class="lb-caption">' + cur.caption + '</div>' +
          '<div class="lb-counter">' + pad(lb.i + 1) + ' / ' + pad(lb.items.length) + '</div>' +
        '</div>' +
      '</div>';

    document.body.classList.add('lb-open');
  }

  function openLightbox(items, index) {
    if (!items.length) return;
    lb.items = items;
    lb.i = index;
    lb.open = true;
    lb.lastFocus = document.activeElement;
    paintLightbox();
    var close = lbHost.querySelector('.lb-close');
    if (close) close.focus();
  }

  function closeLightbox() {
    if (!lb.open) return;
    lb.open = false;
    paintLightbox();
    if (lb.lastFocus && lb.lastFocus.focus) lb.lastFocus.focus();
    lb.lastFocus = null;
  }

  function step(d) {
    if (!lb.open || lb.items.length < 2) return;
    lb.i = (lb.i + d + lb.items.length) % lb.items.length;
    paintLightbox();
  }

  /* Only photographs that actually exist enter the carousel, in grid order,
     opening on the one that was clicked. */
  function openFromCell(cell) {
    var trip = findTrip(currentTripId);
    if (!trip) return;

    var items = [];
    var index = 0;
    var clicked = parseInt(cell.getAttribute('data-photo'), 10);

    (trip.photos || []).forEach(function (photo, i) {
      if (!photo.src) return;
      if (i === clicked) index = items.length;
      items.push(photo);
    });

    openLightbox(items, index);
  }

  /* =====================================================================
     THEME
     Two buttons, sun and moon. Until one is pressed nothing is stored and
     the site simply follows the operating system — including a system that
     switches itself at dusk, which is why the media query is listened to
     rather than only read once at load.

     A press stores an override that outlives the visit. Pressing the button
     that is already lit clears it again, which is what the caption spells
     out, so there is a way back to the system without a third button.

     A stored override is applied before first paint by the inline script in
     index.html. What is left for here is the part that can wait: which
     button is lit, the caption, and the browser-chrome colour.
     ===================================================================== */

  var THEME_KEY = 'travellog-theme';
  var THEME_GROUND = { light: '#f5f7f8', dark: '#0e1317' };
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  /* localStorage throws outright in some privacy modes, so every touch of it
     is guarded and simply falls back to following the system. */
  function storedTheme() {
    var saved;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { saved = null; }
    return (saved === 'light' || saved === 'dark') ? saved : null;
  }

  function storeTheme(choice) {
    try {
      if (choice) localStorage.setItem(THEME_KEY, choice);
      else localStorage.removeItem(THEME_KEY);
    } catch (e) {}
  }

  function applyTheme() {
    var chosen = storedTheme();
    var showing = chosen || (darkQuery.matches ? 'dark' : 'light');
    var root = document.documentElement;

    /* No attribute at all means the stylesheet's color-scheme stays
       "light dark", which is what lets the system keep deciding. */
    if (chosen) root.setAttribute('data-theme', chosen);
    else root.removeAttribute('data-theme');

    /* Both theme-color tags carry a media attribute, so the browser uses
       whichever one the OS matches. Writing the showing colour to both means
       the answer is right even when the reader has overridden the OS. */
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].setAttribute('content', THEME_GROUND[showing]);
    }

    var light = document.getElementById('theme-light');
    var dark = document.getElementById('theme-dark');
    if (light) light.setAttribute('aria-pressed', showing === 'light' ? 'true' : 'false');
    if (dark) dark.setAttribute('aria-pressed', showing === 'dark' ? 'true' : 'false');

    var note = document.getElementById('theme-note');
    if (note) {
      note.textContent = chosen
        ? 'Press again to follow your system'
        : 'Following your system';
    }
  }

  function initTheme() {
    var pick = function (choice) {
      return function () {
        storeTheme(storedTheme() === choice ? null : choice);
        applyTheme();
      };
    };

    var light = document.getElementById('theme-light');
    var dark = document.getElementById('theme-dark');
    if (light) light.addEventListener('click', pick('light'));
    if (dark) dark.addEventListener('click', pick('dark'));

    /* Keep up with the system while the page is open — it can switch under
       us at dusk. Harmless when an override is set: applyTheme reads the
       stored choice first and the system answer is only the fallback. */
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', applyTheme);
    else if (darkQuery.addListener) darkQuery.addListener(applyTheme);

    applyTheme();
  }

  /* =====================================================================
     ROUTING
     ===================================================================== */

  var currentTripId = null;

  function route() {
    closeLightbox();

    var parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    var trip = parts[0] ? findTrip(parts[0]) : null;

    if (parts[0] && !trip) {
      currentTripId = null;
      location.replace('#/');
      return;
    }

    if (!trip) {
      if (currentTripId !== null) { currentTripId = null; renderIndex(); }
      else if (!view.querySelector('.index-hero')) renderIndex();
      window.scrollTo(0, 0);
      return;
    }

    /* Already on this trip — a day link only needs a scroll, not a rebuild. */
    var rebuilt = false;
    if (currentTripId !== trip.id) {
      currentTripId = trip.id;
      renderTrip(trip);
      rebuilt = true;
    }

    var target = parts[1] ? document.getElementById(parts[1]) : null;
    if (target) {
      target.scrollIntoView({
        behavior: rebuilt ? 'auto' : 'smooth',
        block: 'start'
      });
    } else if (rebuilt) {
      window.scrollTo(0, 0);
    }
  }

  /* =====================================================================
     EVENTS
     ===================================================================== */

  document.addEventListener('click', function (e) {
    var control = e.target.closest('[data-lb]');
    if (control) {
      e.preventDefault();
      var act = control.getAttribute('data-lb');
      if (act === 'prev') step(-1);
      else if (act === 'next') step(1);
      else closeLightbox();
      return;
    }

    /* Clicking the backdrop closes; clicking the photograph itself does not.
       The test is the photograph, not its holder — the holder spans the whole
       stage, so the letterboxed margins beside a photograph still close. */
    if (lb.open) {
      if (e.target !== lbHost.querySelector('.lb-photo')) closeLightbox();
      return;
    }

    var cell = e.target.closest('.photo-cell');
    if (cell && cell.querySelector('.frame--filled')) openFromCell(cell);
  });

  document.addEventListener('keydown', function (e) {
    if (!lb.open) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); step(-1); }
  });

  window.addEventListener('hashchange', route);

  initTheme();
  route();
})();
