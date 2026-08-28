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
          '<div class="trip-card-cover">' + frame(cover, cover.placeholder) + '</div>' +
          '<div class="trip-card-body">' +
            '<div>' +
              '<div class="trip-card-head">' +
                '<h2 class="display">' + t.card.title + '</h2>' +
                '<div class="trip-card-length">' + t.card.length + '</div>' +
              '</div>' +
              '<div class="trip-card-dates">' + t.card.dates + '</div>' +
              '<p class="trip-card-blurb">' + t.card.blurb + '</p>' +
            '</div>' +
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
      return '<div class="info-cell">' +
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

  function renderDay(day) {
    return '<section class="day" id="' + attr(day.id) + '">' +
             '<div class="day-head">' +
               '<div class="day-counter">' + day.counter + '</div>' +
               '<div class="day-date">' + day.date + '</div>' +
             '</div>' +
             '<h2>' + day.title + '</h2>' +
             '<p class="day-lede">' + day.lede + '</p>' +
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
      (trip.days || []).map(renderDay).join('') +
      renderPending(trip.pending) +
      renderPhotos(trip) +
      '<div class="strip trip-footer">' +
        '<div>' + (trip.footer ? trip.footer.left : '') + '</div>' +
        '<div>' + (trip.footer ? trip.footer.right : '') + '</div>' +
      '</div>';

    document.title = decode(trip.card.title) + ' · ' + SITE;
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
     Three states, cycled by the topbar control: auto (follow the system),
     light, dark. Auto is the default and stores nothing — only a deliberate
     override is written down, so a reader who never touches the control
     keeps tracking their system setting forever.

     The stored choice is applied before first paint by the inline script in
     index.html. Everything here is the parts that can wait: the control's
     own state, and the browser-chrome colour.
     ===================================================================== */

  var THEME_KEY = 'travellog-theme';
  var THEME_CYCLE = ['auto', 'light', 'dark'];
  var THEME_GROUND = { light: '#f5f7f8', dark: '#0e1317' };
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  /* localStorage throws outright in some privacy modes, so every touch of it
     is guarded and simply falls back to auto. */
  function storedTheme() {
    var saved;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { saved = null; }
    return (saved === 'light' || saved === 'dark') ? saved : 'auto';
  }

  function storeTheme(choice) {
    try {
      if (choice === 'auto') localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, choice);
    } catch (e) {}
  }

  function applyTheme(choice) {
    var root = document.documentElement;
    if (choice === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', choice);

    /* Both theme-color tags carry a media attribute, so the browser uses
       whichever one the OS matches. Writing the resolved colour to both
       means the answer is right even when the reader has overridden the OS. */
    var ground = THEME_GROUND[choice === 'auto' ? (darkQuery.matches ? 'dark' : 'light') : choice];
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) metas[i].setAttribute('content', ground);

    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.setAttribute('data-state', choice);
    btn.querySelector('.theme-label').textContent = choice;
    btn.setAttribute('aria-label', 'Colour theme: ' + choice + '. Activate to change.');
  }

  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = THEME_CYCLE[(THEME_CYCLE.indexOf(storedTheme()) + 1) % THEME_CYCLE.length];
        storeTheme(next);
        applyTheme(next);
      });
    }

    /* On auto, keep up with the system as it changes under us — macOS Auto
       flips at dusk while the page is open. */
    var onSystemChange = function () {
      if (storedTheme() === 'auto') applyTheme('auto');
    };
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', onSystemChange);
    else if (darkQuery.addListener) darkQuery.addListener(onSystemChange);

    applyTheme(storedTheme());
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
