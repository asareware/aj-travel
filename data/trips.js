/* ---------------------------------------------------------------------------
   TRIPS — the whole website's content lives in this one file.
   Add a trip by adding an object to the array. Nothing else needs editing.

   HOW MUCH TO SAY, AND WHERE
   The first people this site was sent to all said the same thing: it was
   overwhelming. Not wrong, not lacking — too much at once. The detail is
   the good part, so none of it was cut. It moved.

   Every trip is written to the same shape, and a new one should follow it:

     info      Five or six cells, always visible. Base, weather, money,
               getting around, the one date that anchors the trip. Facts a
               reader wants without asking.

     wear      One collapsed card holding the dress guidance for the whole
               trip. `summary` is the single line shown while it is closed,
               so write it to stand alone — it is what most readers will
               ever see. `blocks` are for whoever opens it: cultural rules,
               the temperature swing, shoes, the one dressy night.

     stay      Optional, same shape as wear: which neighbourhoods to look
               in. Areas only, never the booking itself.

     callouts  Collapsed behind "Worth knowing". Timing traps, closed
               booking windows, anything deliberately left alone. Reasoning
               belongs here, not in the days.

     days      The plan, and nothing else. `outfit` is ONE SHORT LINE —
               "Loose linen, shoulders and knees covered, closed shoes." If
               it needs a paragraph, the paragraph belongs in `wear` and the
               day says the short version. `outfitNote` is optional and rare:
               one line for a real exception, like long trousers being
               mandatory on the quad bikes. Every day links back up to the
               full card on its own, so a day never has to explain itself.

   The test before adding a sentence to a day: could someone skim this page
   in a minute and still know what they are doing? If not, it belongs in a
   fold.

   PHOTOS
   Every photo starts as `src: null`, which renders an empty frame.
   To fill one: drop the image file into the photos/ folder, then change
       src: null
   to
       src: 'photos/london-01.jpg'
   Filled frames become clickable and join the full-screen carousel
   automatically. Empty ones are skipped. See photos/README.md.

   The `body` and `text` fields accept simple HTML (<strong>, <em>, <a>) so
   emphasis carries through. It is your own copy, written by you — nothing
   here comes from anywhere else.
--------------------------------------------------------------------------- */

window.TRIPS = [

  {
    id: 'london',

    /* ---- how the trip shows up on the index page ---- */
    card: {
      title: "Aj's First London",
      length: '5 days',
      dates: '3–7 Sept 2026 · England',
      blurb: 'Bridges and boats, a Chelsea away-day watch party, and the West African corners of South London.',
      cover: { src: null, placeholder: 'Cover photograph to come' }
    },

    /* ---- the trip page masthead ---- */
    eyebrow: 'First time in London · 3–7 Sept 2026',
    title: "Aj's London, Sorted Day by Day",
    lede: 'Four nights, five days — bridges and boats, a Chelsea away-day watch party, and the West African corners of South London. Based on the South Bank.',

    /* ---- where it is. Used to look up the live forecast, and for the
       seasonal averages shown until the trip is inside forecast range. ---- */
    place: {
      lat: 51.5045,
      lon: -0.1136,
      timezone: 'Europe/London',
      normals: { high: 70, low: 55, summary: 'Typical for early September' }
    },

    /* ---- the info grid ---- */
    info: [
      {
        label: 'Base',
        value: 'Waterloo, South Bank',
        detail: 'Central and on the river — walkable to Westminster, direct lines everywhere else'
      },
      {
        label: 'Blocked out (Thu–Fri)',
        value: '2:30–10:30pm',
        detail: 'Afternoons and evenings are committed on both work days'
      },
      {
        label: 'Getting around',
        value: 'Contactless tap-in/out',
        detail: 'Same card on Tube, bus, rail &amp; Uber Boat — daily fares auto-cap'
      },
      {
        label: 'Match',
        value: 'Arsenal v Chelsea, Sun 6 Sept',
        detail: '4:30pm KO — Emirates Stadium (away day)'
      },
      {
        label: 'Weather',
        value: '~70°F days, ~55°F nights',
        detail: 'Pack a light rain layer — always a fair bet in London'
      }
    ],

    /* ---- what to wear, for the whole trip ----
       The summary is the line that shows while the card is closed, so it
       has to answer the question on its own. The blocks are for the reader
       who opens it.                                                    ---- */
    wear: {
      summary: 'Layers you can peel off, one packable rain shell, and shoes that survive an eight-hour day.',
      blocks: [
        {
          label: 'The one rule',
          text: 'London changes its mind faster than you can get back to the hotel. A <strong>packable waterproof</strong> lives in your bag every single day, whatever it looked like out of the window at breakfast. Not the good jacket — the one you would not mind wringing out.'
        },
        {
          label: 'The daily base',
          text: 'Dark jeans or chinos, a tee with a shirt or fine knit over the top. September afternoons sit around <strong>70°F</strong> and drop to the mid-50s once the sun goes, so the layer you shed at noon is the one you want at nine.'
        },
        {
          label: 'Shoes',
          text: 'You will walk much further than the plan makes it look — Rye Lane, the South Bank, Borough Market, the whole of Day 3. One pair has to be comfortable enough for that and dark and clean enough for a Soho door, which rules out running shoes.'
        },
        {
          label: 'Going out',
          text: 'Soho leans smart-casual and the doors do actually turn people away: a collared shirt or a dress, nothing sportswear-shaped. Shoreditch on Day 2 is looser and will not care.'
        },
        {
          label: 'Match day',
          text: 'You are watching Arsenal v Chelsea in a room that is <strong>entirely Chelsea</strong>. Blue if you want to belong in it. Nothing red, which in that pub reads as the wrong side of the fixture.'
        },
        {
          label: 'The work days',
          text: 'The two work afternoons are on camera. Anything that reads clean on video from the waist up does the job.'
        }
      ]
    },


    callouts: [
      {
        tone: 'fix',
        mark: 'TZ',
        text: '<strong>The two work afternoons are committed:</strong> the working block runs <strong>2:30pm–10:30pm London time</strong> on Thursday and Friday, which takes the whole afternoon and evening of both days. Days 1 and 2 are built around that — sightseeing in the mornings, and Tower Bridge moved to Sunday, where the weekend is free. Nothing was cut, just reshuffled.'
      },
      {
        tone: 'fix',
        mark: 'Sale',
        text: '<strong>The ticket window has closed:</strong> Chelsea\'s members\' sale for the Arsenal away tickets ran on <strong>Wednesday 26 August</strong> — loyalty-point windows at 10am, 12pm and 2pm, then any leftovers to all members from 4pm. Away allocations are tiny, and this itinerary never depended on landing one: <strong>Day 4 is built around the pub, not the turnstile</strong>. If you did get a ticket, the Emirates is on the Piccadilly line — Arsenal station sits practically at the ground — and The Butcher\'s Hook still works as the post-match stop.'
      },
      {
        tone: 'note',
        mark: '+',
        text: '<strong>It\'s Arsenal <em>away</em>, not Stamford Bridge:</strong> kickoff is at the Emirates Stadium in North London, so there\'s no "go to the ground" option even with a ticket in hand — away allocations are tiny. The move that actually gets you around a wall of Chelsea fans is watching from a pub right by Stamford Bridge, where the crowd gathers for away games too. Full plan on Day 4.'
      },
      {
        tone: 'warn',
        mark: '!',
        text: '<strong>Brixton after dark, with one exception:</strong> the outdoor stretch — Electric Avenue, Windrush Square, wandering the streets — is scheduled in daylight, same street sense as anywhere with a lively nightlife scene after dusk. The one thing that runs into evening is dinner, and that\'s inside <strong>Brixton Village Market</strong> — a busy, covered, well-lit arcade, not open street. Head there and out again by taxi or tube rather than lingering outside afterward.'
      }
    ],


    nav: [
      { label: 'Day 1 · Thu', title: 'Arrival',              href: 'day-1' },
      { label: 'Day 2 · Fri', title: 'Icons &amp; river',        href: 'day-2' },
      { label: 'Day 3 · Sat', title: 'Peckham → Brixton → Soho', href: 'day-3' },
      { label: 'Day 4 · Sun', title: 'Tower Bridge + match',  href: 'day-4' },
      { label: 'Day 5 · Mon', title: 'Departure',             href: 'day-5' }
    ],

    /* ---- the written days ----
       chip tone: 'grey' | 'blue' | 'amber'                             ---- */
    days: [
      {
        id: 'day-1',
        counter: 'Day 1 / 5',
        date: 'Thursday, September 3',
        iso: '2026-09-03',
        outfit: 'Dark jeans, a shirt that reads clean on camera, trainers you can walk in.',
        outfitNote: 'Nothing you would regret sleeping in on the plane — you land and go straight into the day.',
        title: 'Landing, a quick look around, then straight to work',
        lede: 'An overnight flight arriving on the morning of the 3rd leaves the whole morning free, so day one is deliberately light: land, drop bags, one iconic walk, then the afternoon block starts at 2:30pm London time.',
        rows: [
          {
            time: 'on land',
            title: 'Airport → Waterloo',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Heathrow: Elizabeth line or Heathrow Express to Paddington, then Bakerloo line direct to Waterloo (~55–70 min). Gatwick: Gatwick Express to Victoria, then District/Circle line to Waterloo, or a taxi (~50 min). Bag drop is usually available before the 3pm check-in.'
          },
          {
            time: '11:00 AM',
            title: 'Freshen up, then Westminster Bridge → Big Ben → South Bank',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Ten minutes on foot to Westminster Bridge, facing the Houses of Parliament and the Elizabeth Tower (Big Ben) — one of the best free views in London. The South Bank promenade continues past the London Eye toward the National Theatre.'
          },
          {
            time: '1:00 PM',
            title: 'Casual lunch on the South Bank',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Quick, no-reservation options all along the river walk.'
          },
          {
            time: '2:30–10:30 PM',
            title: 'Working',
            chips: [{ label: 'Working', tone: 'grey' }],
            body: 'Remote working block, from the hotel room or a nearby café with wifi.'
          },
          {
            time: '10:30 PM',
            title: 'Off the clock — dinner near the hotel, then bed',
            body: 'Lower Marsh and the streets around Waterloo have easy late options. Big Ben is lit after dark, ten minutes away on foot.'
          }
        ]
      },
      {
        id: 'day-2',
        counter: 'Day 2 / 5',
        date: 'Friday, September 4',
        iso: '2026-09-04',
        outfit: 'Same jeans-and-shirt, plus the light jacket.',
        outfitNote: 'The open boat deck runs colder than the street, and you are out again near midnight.',
        title: 'Parliament, the river, and Borough Market — before 2:30',
        lede: 'Same committed window as yesterday, so the sightseeing is a tight, self-contained morning loop: Parliament up close, the Uber Boat along the Thames, and Borough Market before the afternoon starts.',
        rows: [
          {
            time: '9:00 AM',
            title: 'Houses of Parliament &amp; Big Ben, up close',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Early start beats the crowds. Parliament Square end to end, close-up views of the Elizabeth Tower, and the exterior of Westminster Abbey on the way back to the river.'
          },
          {
            time: '10:15 AM',
            title: 'Board the Uber Boat at Westminster Pier',
            chips: [{ label: 'Uber Boat', tone: 'grey' }],
            body: 'Uber Boat by Thames Clippers, contactless tap-in with the same card used on the Tube. <strong>Westminster Pier</strong> to <strong>Bankside Pier</strong>, or on to <strong>London Bridge City Pier</strong> — 15–20 minutes on the water past the London Eye, the Oxo Tower and the Millennium Bridge.'
          },
          {
            time: '11:00 AM',
            title: 'Borough Market',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'One of London\'s oldest food markets, right by the pier, and built for grazing across stalls rather than a sit-down meal. <strong>London Bridge</strong> — the plain concrete one often mistaken for Tower Bridge — is alongside; Tower Bridge itself is ten minutes further east, on Day 4.',
            address: '8 Southwark St, SE1 1TL'
          },
          {
            time: '1:00 PM',
            title: 'Head back to the hotel',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Riverside walk back (~25 min), or bus and tube if time is short.'
          },
          {
            time: '2:30–10:30 PM',
            title: 'Working',
            chips: [{ label: 'Working', tone: 'grey' }],
            body: 'Second and last work day of the trip.'
          },
          {
            time: '10:30 PM',
            title: 'Off the clock — quick dinner, then Shoreditch',
            body: 'Something quick nearby, then Northern line from Waterloo to Old Street (~20 min), into Shoreditch around 11:15.'
          },
          {
            time: '11:15 PM',
            title: 'One stop, just to see it: Callooh Callay',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'A cocktail bar just off Shoreditch High Street with a hidden room behind a wardrobe. Redchurch Street and Brick Lane are nearby for street art and late-night food stalls.',
            address: '65 Rivington St, EC2A 3AY'
          },
          {
            time: '~1:00 AM',
            title: 'Head back — tonight is the preview, tomorrow\'s the main event',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Night bus or taxi back to Waterloo. Night Tube runs on the Northern line on Fridays, but only on the Charing Cross branch — Old Street sits on the Bank branch, which closes as normal.'
          }
        ]
      },
      {
        id: 'day-3',
        counter: 'Day 3 / 5',
        date: 'Saturday, September 5',
        iso: '2026-09-05',
        outfit: 'Comfortable enough for eight hours on your feet, smart enough for a Soho door.',
        outfitNote: 'Dark, clean trainers rather than running shoes — the doors are picky about this one.',
        title: 'Peckham first and longest, Brixton in the afternoon, Soho at night',
        lede: 'The biggest day of the trip, split deliberately in Peckham\'s favour — it\'s genuinely London\'s biggest West African hub, where the Ghanaian and Nigerian communities concentrate, so it gets the morning, the long browse, and lunch. Brixton is a different story — Black British and Windrush-generation history — and gets the afternoon plus a Caribbean dinner instead of a second Ghanaian meal, since you\'ve already got that covered in Peckham. Then straight out to Soho for the night.',
        rows: [
          {
            time: '10:00 AM',
            title: 'Waterloo → Peckham Rye',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Southeastern train from Waterloo East, 15–20 minutes direct to Peckham Rye.'
          },
          {
            time: '10:30 AM',
            title: 'Rye Lane, at length',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'West African London day to day: fabric shops with kente cloth alongside Ankara prints, hair and beauty stores, and food stalls with kelewele (spiced fried plantain), waakye and kenkey. Walk-and-browse rather than fixed opening hours.'
          },
          {
            time: '12:45 PM',
            title: 'Lunch: Agrobeso African Cuisine',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'A sit-down West African restaurant on Peckham High Street, known for hearty, generous plates. The main Ghanaian meal of the trip.',
            address: '139 Peckham High St, SE15 5SL'
          },
          {
            time: '2:00 PM',
            title: 'More Peckham: Peckham Levels or Bussey Building',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'Peckham Levels, a converted multi-storey car park with a food hall, studios and bars, and the Bussey Building, an arts and events space in a Victorian factory — both a short walk from the high street.'
          },
          {
            time: '3:30 PM',
            title: 'Peckham → Brixton',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'No direct rail link: bus (322, or via Denmark Hill/Herne Hill) or taxi, 25–35 minutes. Bus routings shift, so worth checking a journey planner on the day.'
          },
          {
            time: '4:15 PM',
            title: 'Windrush Square &amp; the Black Cultural Archives',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'Windrush Square is the civic heart of Black British Brixton, named for the Empire Windrush generation. The reading room and research library are booking-only (Wed–Fri); the ground-floor exhibition space is walk-in. Current hours at <a href="https://blackculturalarchives.org">blackculturalarchives.org</a>.'
          },
          {
            time: '5:00 PM',
            title: 'Brixton Village, Electric Avenue &amp; the David Bowie mural',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'Electric Avenue was the first market street in London lit by electricity, and still runs as an Afro-Caribbean market by day. The Bowie memorial mural sits opposite Brixton tube station.'
          },
          {
            time: '7:00 PM',
            title: 'Dinner: Fish, Wings &amp; Tings',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Modern Caribbean cooking — jerk, saltfish, spiced wings — in a small, busy spot inside Brixton Village Market rather than out on the open street.',
            address: 'Unit 21, Brixton Village Market, SW9 8PS'
          },
          {
            time: '8:45 PM',
            title: 'Brixton → Soho',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Victoria line from Brixton to Oxford Circus (~20 min), then a five-minute walk into Soho.'
          },
          {
            time: '9:15 PM',
            title: 'The big night out: Soho',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: '<strong>Soho Zebrano</strong> (cocktail bar upstairs, dancefloor basement), <strong>Thirst Soho</strong> and <strong>Bar Soho</strong>, all walkable to each other around Greek Street. Cover charges and queues build after 11pm.'
          },
          {
            time: 'late',
            title: 'Whenever you\'re done',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Night Tube runs on Saturdays: ten minutes west to <strong>Bond Street</strong>, then the Jubilee line to Waterloo in four stops. Night bus or taxi also work. The Bakerloo from Oxford Circus does not run overnight.'
          }
        ]
      },
      {
        id: 'day-4',
        counter: 'Day 4 / 5',
        date: 'Sunday, September 6',
        iso: '2026-09-06',
        outfit: 'Jeans, trainers, a jacket you would not mind a spilled pint on.',
        outfitNote: 'Blue works, red does not — the pub will be wall-to-wall Chelsea.',
        title: 'Tower Bridge, then match day: Arsenal v Chelsea, 4:30pm KO',
        lede: 'Chelsea are away at the Emirates, so the goal isn\'t getting <em>into</em> a stadium — it\'s getting into a room full of Chelsea supporters. The move for that is a Stamford Bridge-area pub, where fans without an away ticket gather for every game, home or away. This is also where the Tower Bridge visit bumped from Friday lands — it sits on the same District line as Fulham, so the morning flows straight into the afternoon. Start time is pushed back an hour from the original plan, given last night.',
        rows: [
          {
            time: '10:30 AM',
            title: 'Tower Bridge &amp; Tower of London (exterior)',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Tower Bridge on foot, with the Tower Bridge Exhibition (glass floor, engine rooms) as an option. The walls and moat of the Tower of London are worth a slow look from outside.'
          },
          {
            time: '12:15 PM',
            title: 'Tower Hill → Fulham Broadway',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'One line, no changes: District line from Tower Hill to Fulham Broadway, about 45–50 minutes.'
          },
          {
            time: '1:10 PM',
            title: 'Lunch near Fulham Broadway',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Something quick before the pre-match crowds build.'
          },
          {
            time: '2:00 PM',
            title: 'Claim a spot: The Butcher\'s Hook',
            chips: [{ label: 'Chelsea pub', tone: 'amber' }],
            body: 'Directly opposite the Stamford Gate entrance to Stamford Bridge, and the pub where Chelsea FC was founded in 1905. Big screens and a full house of Chelsea supporters for kickoff.',
            address: 'Fulham Rd, Fulham, SW6 1HS'
          },
          {
            time: '4:30 PM',
            title: 'Kickoff',
            chips: [{ label: 'Match', tone: 'amber' }],
            body: 'Two minutes away if The Butcher\'s Hook is full: <strong>McGettigan\'s</strong> (opposite Fulham Broadway station) or <strong>The Tommy Tucker</strong> (between Fulham Rd and King\'s Rd), both busy with Chelsea supporters on matchday.'
          },
          {
            time: '~6:15 PM',
            title: 'Post-match dinner in the same neighbourhood',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Casual dinner options along this stretch of Fulham Road, within a five-minute walk.'
          },
          {
            time: '8:30 PM',
            title: 'Back to Waterloo',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'District line back to Embankment, then Bakerloo or Northern one stop to Waterloo — about 30 minutes.'
          }
        ]
      },
      {
        id: 'day-5',
        counter: 'Day 5 / 5',
        date: 'Monday, September 7',
        iso: '2026-09-07',
        outfit: 'Soft travel layers and shoes that come off easily at security.',
        title: 'One last look, then home',
        lede: 'A short, flexible morning built around checkout, scaled to the flight time.',
        rows: [
          {
            time: '8:00 AM',
            title: 'Breakfast near the hotel, pack, check out',
            body: 'Bags can be left at the front desk after check-out, leaving a couple of free hours before the airport.'
          },
          {
            time: '9:00 AM',
            title: 'Ride the London Eye, or one more walk across Westminster Bridge',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Mornings are the quietest time to ride. Otherwise a last walk across Westminster Bridge bookends the first view from Day 1.'
          },
          {
            time: 'time to airport',
            title: 'Head to the airport with a buffer',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'From Waterloo: Bakerloo line to Paddington, then Elizabeth line or Heathrow Express for Heathrow (~55–70 min); or Northern and Victoria line connections to Victoria for the Gatwick Express (~50–60 min). Allow extra time on a Monday morning.'
          }
        ]
      }
    ],

    /* ---- the photo grid ---- */
    photosIntro: {
      eyebrow: 'Photographs',
      title: 'From the trip',
      lede: 'Click any photograph to open it full-screen.'
    },
    photos: [
      { caption: 'Day 1 · Westminster Bridge',  src: null },
      { caption: 'Day 2 · Uber Boat on the Thames', src: null },
      { caption: 'Day 2 · Borough Market',      src: null },
      { caption: 'Day 3 · Rye Lane, Peckham',   src: null },
      { caption: 'Day 3 · Brixton Village',     src: null },
      { caption: 'Day 3 · Soho at night',       src: null },
      { caption: 'Day 4 · Tower Bridge',        src: null },
      { caption: 'Day 4 · Match day',           src: null }
    ],

    /* ---- the strip that closes the trip page ---- */
    footer: { left: "Aj's First London", right: '3–7 Sept 2026' }
  },

  {
    id: 'morocco',

    /* ---- how the trip shows up on the index page ---- */
    card: {
      title: 'Marrakech, Birthday Edition',
      length: '6 days',
      dates: '30 Oct – 4 Nov 2026 · Morocco',
      blurb: "A friend's birthday trip — Agafay desert camp, a hot air balloon, and a beach club day, planned together with the gaps worked out ahead of time.",
      cover: { src: null, placeholder: 'Cover photograph to come' }
    },

    /* ---- where it is. Used to look up the live forecast, and for the
       seasonal averages shown until the trip is inside forecast range. ---- */
    place: {
      lat: 31.6295,
      lon: -7.9811,
      timezone: 'Africa/Casablanca',
      normals: { high: 79, low: 55, summary: 'Typical for late October' }
    },

    /* ---- the trip page masthead ---- */
    eyebrow: 'Birthday trip to Marrakech · 30 Oct – 4 Nov 2026',
    title: 'Marrakech, Day by Day',
    lede: "Six days built on a friend's original plan — beach club, Agafay desert camp, a hot air balloon, and her birthday on day five — with the open stretches (rest blocks, free afternoons, the nightcap) worked out and locked in ahead of time.",

    /* ---- the info grid ---- */
    info: [
      {
        label: 'Length',
        value: '6 days / 5 nights',
        detail: '30 Oct – 4 Nov 2026'
      },
      {
        label: 'Weather',
        value: '~79°F days, ~55°F nights',
        detail: 'Early November — warm afternoons, cool evenings after sundown'
      },
      {
        label: 'Currency',
        value: 'Moroccan Dirham (MAD)',
        detail: 'Beach clubs and desert camps often run a minimum-spend model rather than a flat entry fee'
      },
      {
        label: 'The birthday',
        value: 'Tuesday, Nov 3',
        detail: 'The whole day stays exactly as originally planned — hers to run'
      }
    ],

    /* ---- what to wear, for the whole trip ----
       The summary is the line that shows while the card is closed, so it
       has to answer the question on its own. The blocks are for the reader
       who opens it.                                                    ---- */
    wear: {
      summary: 'Loose and covered in the city; wear what you like inside the riad, the beach club and the camp.',
      blocks: [
        {
          label: 'The rule that matters',
          text: 'Marrakech is a conservative Muslim city and the medina is where that shows most. <strong>Shoulders and knees covered, loose rather than tight</strong> — long linen trousers, a maxi skirt, a midi dress. Nobody enforces this and nobody will stop you, but it is the difference between moving through the souks easily and being looked at all afternoon. You will also be cooler in it than in shorts.'
        },
        {
          label: 'Where it relaxes',
          text: 'Private space plays by its own rules. Inside the riad, at the beach club, at the desert camp and in most restaurants, wear whatever you want — swimwear at the pool included. The cover-up goes back on for the drive there and back.'
        },
        {
          label: 'The temperature swing',
          text: 'Early November runs about <strong>78°F in the afternoon and mid-50s at night</strong>, and Agafay drops further than the city does. Every day is a layers day, including the ones that start hot enough to make that feel unnecessary.'
        },
        {
          label: 'Shoes',
          text: 'The medina underfoot is uneven, dusty, and wet in places you will not see coming. Closed shoes you can walk a long way in, and nothing you would mind scuffing. Sandals are for the pool.'
        },
        {
          label: 'Sun',
          text: 'The light is stronger than the temperature suggests, and two of these days are spent fully exposed. Sunglasses always; something for your head on the desert and balloon mornings.'
        },
        {
          label: 'The dressy night',
          text: 'The birthday dinner is the one night to actually dress. Marrakech\'s golden hour is low, warm and forgiving, and solid colours hold up against the pink walls and tilework far better than busy prints do.'
        }
      ]
    },

    callouts: [
      {
        tone: 'note',
        mark: '+',
        text: "<strong>\"Famous Beach\" is a real place, not a placeholder:</strong> it's Famous Beach Marrakech on Route de l'Ourika — 20,000 m², three pools, a restaurant and cocktail bar, and a stage running live shows and DJ sets. Saturday's whole midday is already spoken for by the venue itself."
      },
      {
        tone: 'fix',
        mark: '!',
        text: "<strong>Monday's evening is tight:</strong> the garden closes at 5pm and you want to be out by 4, and dinner at Safran by Kôya is assumed to start around 5pm — that's about an hour to get back, shower, and cross town. Worth confirming the reservation time directly and arranging a car back rather than cutting it close."
      },
      {
        tone: 'note',
        mark: '🎂',
        text: "<strong>Tuesday is intentionally untouched:</strong> it's her birthday, so the day runs exactly as originally planned, including the night out afterward — no suggestions plugged in on top of it."
      }
    ],

    nav: [
      { label: 'Day 1 · Fri', title: 'Casablanca → Marrakech', href: 'day-1' },
      { label: 'Day 2 · Sat', title: 'Beach club + rest',      href: 'day-2' },
      { label: 'Day 3 · Sun', title: 'Agafay desert',          href: 'day-3' },
      { label: 'Day 4 · Mon', title: 'Balloon + Majorelle',    href: 'day-4' },
      { label: 'Day 5 · Tue', title: 'Birthday girl',          href: 'day-5' },
      { label: 'Day 6 · Wed', title: 'Marrakech → Casablanca', href: 'day-6' }
    ],

    /* ---- the written days ----
       chip tone: 'grey' | 'blue' | 'amber'                             ---- */
    days: [
      {
        id: 'day-1',
        counter: 'Day 1 / 6',
        date: 'Friday, October 30',
        iso: '2026-10-30',
        outfit: 'Loose linen, shoulders and knees covered, closed shoes.',
        outfitNote: 'First walk through the medina — open the full guide if you want the detail on what covering up means here.',
        title: 'Landing, the road south, and straight into the medina',
        lede: 'An early landing in Casablanca leaves the whole day free — road trip down to Marrakech, check in, and the first walk through the souks before dinner.',
        rows: [
          {
            time: '7:30 AM',
            title: 'Land in Casablanca',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'First stop after landing is the road south to Marrakech — roughly 2.5–3 hours by car.'
          },
          {
            time: 'midday',
            title: 'Road trip to Marrakech, check in',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Arrive, drop bags, settle into the riad before heading back out.'
          },
          {
            time: 'afternoon',
            title: 'Medina &amp; the souks',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: "First walk through the medina's souks — spices, leather, lanterns, the whole maze. No fixed plan needed here, just wander."
          },
          {
            time: 'evening',
            title: 'Dinner: La Trattoria',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'First dinner in Marrakech.'
          }
        ]
      },
      {
        id: 'day-2',
        counter: 'Day 2 / 6',
        date: 'Saturday, October 31',
        iso: '2026-10-31',
        outfit: 'Swimwear under a cover-up you can travel in.',
        outfitNote: 'Dinner is the grandest room of the trip, and it will be genuinely cold by the time you leave it.',
        title: 'Famous Beach Club, then real rest before the desert',
        lede: "A full pool-club day, then deliberate downtime — tomorrow is the big Agafay day, so tonight's gap is recovery, not a second outing.",
        rows: [
          {
            time: '11:00 AM – 4:30 PM',
            title: 'Famous Beach Club',
            chips: [{ label: 'Beach club', tone: 'blue' }],
            body: "20,000 m² grounds, three pools with loungers, a restaurant (Mediterranean/international plus Moroccan dishes) and cocktail bar, and a stage running live shows and DJ sets through the afternoon. A quieter lounge zone on one side, a livelier dance-floor zone on the other.",
            address: "Route de l'Ourika, Marrakech"
          },
          {
            time: '5:15 – 7:15 PM',
            title: 'Rest, back at the riad',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: 'Rest block — nothing else scheduled.'
          },
          {
            time: '~8:30 PM',
            title: 'Dinner: Palais Dar Soukkar',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: ''
          }
        ]
      },
      {
        id: 'day-3',
        counter: 'Day 3 / 6',
        date: 'Sunday, November 1',
        iso: '2026-11-01',
        outfit: 'Long trousers, closed shoes, and a real jacket for after dark.',
        outfitNote: '<strong>Long trousers are not optional</strong> on the quad bikes or the camel — stones kick up and the saddle chafes.',
        title: 'Agafay Desert — the full lineup',
        lede: "Basically the whole day. Pool and lunch at camp, then the three classic Agafay activities back to back before sunset, then dinner under the stars.",
        rows: [
          {
            time: 'late morning',
            title: 'Arrive at Agafay Luxury Camp',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: ''
          },
          {
            time: 'midday',
            title: 'Pool &amp; lunch',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: ''
          },
          {
            time: '~2:00 PM',
            title: 'Quad biking',
            chips: [{ label: 'Adventure', tone: 'blue' }],
            body: 'Rocky Agafay terrain, built for it — about an hour.'
          },
          {
            time: '~3:15 PM',
            title: 'Camel or horseback ride',
            chips: [{ label: 'Adventure', tone: 'blue' }],
            body: 'Slower pace after the quads — the classic desert-camp photo op, about 45 minutes.'
          },
          {
            time: '~4:15 PM',
            title: 'Berber tea ceremony',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'A sit-down close to the afternoon — mint tea prepared traditionally with the camp hosts, about 30 minutes.'
          },
          {
            time: 'sunset',
            title: 'Sunset viewpoint',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: ''
          },
          {
            time: 'evening',
            title: 'Dinner &amp; stargazing',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Stargazing at Agafay is usually telescope-guided given how little light pollution there is, often paired with Berber music and dance around dinner.'
          }
        ]
      },
      {
        id: 'day-4',
        counter: 'Day 4 / 6',
        date: 'Monday, November 2',
        iso: '2026-11-02',
        outfit: 'Layers you can shed — near-freezing at dawn, warm by ten.',
        outfitNote: 'Gloves are not overkill in the balloon basket at that hour.',
        title: 'Hot air balloon, a proper nap, then the blue garden',
        lede: "A 5:30am pickup earns a real nap before anything else. The afternoon is deliberately the calmest of the trip: quad bikes and a camel the day after Agafay would only be Sunday played back, so this is the green half of Marrakech instead. Dinner is still assumed at 5pm, which makes for a tight turnaround — see the flag above.",
        rows: [
          {
            time: '~5:30 AM pickup',
            title: 'Hot air balloon flight',
            chips: [{ label: 'Adventure', tone: 'blue' }],
            body: 'Balloon flight, landing champagne/Berber breakfast, transfer back — roughly 9:30am back at the riad.'
          },
          {
            time: '10:00 AM – 2:00 PM',
            title: 'Nap, back at the riad',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: ''
          },
          {
            time: '2:00 – 4:00 PM',
            title: 'Jardin Majorelle &amp; the Yves Saint Laurent Museum',
            chips: [{ label: 'Adventure', tone: 'blue' }],
            body: 'Not desert and not souk: two and a half acres of cactus, bamboo and that particular cobalt blue, laid out by Jacques Majorelle across forty years and later restored by Yves Saint Laurent. The museum devoted to him sits next door and takes about forty minutes. Shaded, flat and slow. <strong>Book the timed entry in advance</strong> — it sells out days ahead.',
            address: 'Rue Yves Saint Laurent, Gueliz'
          },
          {
            time: '~5:00 PM',
            title: 'Dinner: Safran by Kôya',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: "A rooftop restaurant built around a live show, so the evening is already extended by the venue itself.",
            address: 'Rue Jbel Lakhdar, Marrakech'
          },
          {
            time: 'nightcap',
            title: 'DarDar Rooftop',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'Central medina, quieter and more bohemian than a club scene.',
            address: '4 Rue Riad Zitoun el Kdim, Marrakech 40000'
          }
        ]
      },
      {
        id: 'day-5',
        counter: 'Day 5 / 6',
        date: 'Tuesday, November 3',
        iso: '2026-11-03',
        outfit: 'The night to actually dress. Solid colours over busy prints.',
        outfitNote: 'Marrakech\'s golden hour does most of the work in photographs; prints fight the tilework.',
        title: 'Birthday girl 🎂',
        lede: "Her day. The plan stays exactly as originally set, night out included — nothing added on top.",
        rows: [
          {
            time: 'morning',
            title: 'Breakfast',
            body: ''
          },
          {
            time: 'late morning',
            title: "Café D'Elmer",
            chips: [{ label: 'Food', tone: 'amber' }],
            body: ''
          },
          {
            time: 'afternoon',
            title: 'Spa / relax &amp; get ready',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: ''
          },
          {
            time: 'golden hour',
            title: 'Birthday photos',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: ''
          },
          {
            time: 'evening',
            title: 'Birthday dinner',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: ''
          }
        ]
      },
      {
        id: 'day-6',
        counter: 'Day 6 / 6',
        date: 'Wednesday, November 4',
        iso: '2026-11-04',
        outfit: 'Soft, loose travel clothes, layered.',
        outfitNote: 'The car will be cold and the airport will not be.',
        title: 'Marrakech → Casablanca',
        lede: 'A short morning, then the drive back north for the flight home.',
        rows: [
          {
            time: 'morning',
            title: 'Breakfast, check out',
            body: ''
          },
          {
            time: '10:00 AM',
            title: 'Leave Marrakech',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Road trip back to Casablanca for the flight.'
          }
        ]
      }
    ],

    /* ---- the photo grid ---- */
    photosIntro: {
      eyebrow: 'Photographs',
      title: 'From the trip',
      lede: 'Click any photograph to open it full-screen.'
    },
    photos: [
      { caption: 'Day 1 · Marrakech medina', src: null },
      { caption: 'Day 2 · Famous Beach Club', src: null },
      { caption: 'Day 3 · Agafay Desert',     src: null },
      { caption: 'Day 3 · Sunset at the camp', src: null },
      { caption: 'Day 4 · Hot air balloon',   src: null },
      { caption: 'Day 5 · Birthday',          src: null }
    ],

    /* ---- the strip that closes the trip page ---- */
    footer: { left: 'Marrakech, Birthday Edition', right: '30 Oct – 4 Nov 2026' }
  },

  {
    id: 'amsterdam-belgium',

    /* ---- how the trip shows up on the index page ---- */
    card: {
      title: 'Amsterdam &amp; Belgium',
      length: '6 days',
      dates: '29 Oct – 3 Nov 2026 · Netherlands &amp; Belgium',
      blurb: 'Rembrandt and the canals, Halloween in Amsterdam, then the train south to Brussels, Bruges and Ghent.',
      cover: { src: null, placeholder: 'Cover photograph to come' }
    },

    /* ---- where it is. Used to look up the live forecast, and for the
       seasonal averages shown until the trip is inside forecast range.
       The Belgian days carry their own `place` further down.        ---- */
    place: {
      lat: 52.3676,
      lon: 4.9041,
      timezone: 'Europe/Amsterdam',
      normals: { high: 55, low: 45, summary: 'Typical for late October' }
    },

    /* ---- the trip page masthead ---- */
    eyebrow: 'Two countries by train · 29 Oct – 3 Nov 2026',
    title: 'Amsterdam to Brussels, Day by Day',
    lede: 'Five nights: three in Amsterdam across the weekend, two in Brussels with a day in Bruges and Ghent. Museums and old towns by day, a rest before dark, out after ten.',

    /* ---- the info grid ---- */
    info: [
      {
        label: 'Bases',
        value: 'Amsterdam 3 nights · Brussels 2',
        detail: 'One train between them on Sunday; the flight home leaves from Brussels'
      },
      {
        label: 'Weather',
        value: '~55°F days, ~45°F nights',
        detail: 'Grey, breezy, showers likely — and dark by about 5pm'
      },
      {
        label: 'Currency',
        value: 'Euro (€), both countries',
        detail: 'Cards almost everywhere; cash is rarely needed'
      },
      {
        label: 'Getting around',
        value: 'On foot, then tram',
        detail: 'Tap a contactless card on Amsterdam trams and metro; Belgian trains on the SNCB app or station machines'
      },
      {
        label: 'Halloween',
        value: 'Saturday, Oct 31 — Amsterdam',
        detail: 'The biggest night of the trip. Party tickets sell in advance'
      }
    ],

    /* ---- what to wear, for the whole trip ---- */
    wear: {
      summary: 'Warm layers under a real waterproof, shoes for wet cobblestones, one step smarter after dark.',
      blocks: [
        {
          label: 'The one rule',
          text: 'Rain here comes sideways off the canals more often than straight down, and an umbrella turns inside out on the first bridge. A <strong>hooded waterproof jacket</strong> does the job an umbrella cannot. Wear it every day, whatever the morning looks like.'
        },
        {
          label: 'The daily base',
          text: 'Around <strong>55°F by day and mid-40s at night</strong>, with wind that makes it feel colder. Jeans or chinos, a knit or a hoodie, and a coat over the top. You will be outside from late morning to well past midnight, so dress for the walk home, not the walk out.'
        },
        {
          label: 'Shoes',
          text: 'Cobblestones in all four cities, usually wet. One pair that grips, can walk ten miles, and is clean and dark enough for a club door — leather trainers or boots, not running shoes.'
        },
        {
          label: 'Going out',
          text: 'Amsterdam and Brussels both run smart-casual at the door. Club doors on Rembrandtplein and Leidseplein can turn away sportswear and sliders; bars do not care. Most clubs have a coat check, so bring the coat and stop worrying about it.'
        },
        {
          label: 'Halloween',
          text: 'Costumes are normal at Halloween parties here, but most people go simple rather than full American-style. Pick something that still works with a jacket over it and survives a shower on the way between bars.'
        },
        {
          label: 'Pockets',
          text: 'Pickpockets work the busiest spots — Dam Square, Amsterdam Centraal, the Red Light District, and Grand-Place in Brussels. A zipped crossbody bag or an inside pocket for your phone and cards.'
        }
      ]
    },

    /* ---- where to stay. Neighbourhoods only, never the booking. ---- */
    stay: {
      summary: 'Amsterdam: De Pijp or the Jordaan. Brussels: near Brussels-Central or Saint-Géry. All walkable to the sights and the bars.',
      blocks: [
        {
          label: 'Amsterdam · Best pick',
          text: '<strong>De Pijp.</strong> Lively, safe, and full of bars and restaurants, with the Albert Cuyp Market at its centre. Ten to fifteen minutes on foot to the Rijksmuseum, the Van Gogh Museum and Leidseplein, so most nights you walk home. Usually a little cheaper than the canal ring.'
        },
        {
          label: 'Amsterdam · Prettiest',
          text: '<strong>The Jordaan and the canal ring.</strong> The postcard Amsterdam: old canal houses, quiet at night, very safe, and walkable to almost everything. Also the most expensive.'
        },
        {
          label: 'Amsterdam · Quiet &amp; upscale',
          text: '<strong>Museum Quarter (Oud-Zuid).</strong> Leafy and calm, with the museums on the doorstep and Leidseplein about ten minutes away on foot.'
        },
        {
          label: 'Amsterdam · Cheaper, still safe',
          text: '<strong>Oud-West</strong> (around De Hallen), fifteen minutes on foot to Leidseplein. Or <strong>Amsterdam Noord</strong>, a few minutes across the river on the free ferry from behind Centraal, which runs day and night. Both cost less than the centre and are safe; Noord means a ferry ride every evening.'
        },
        {
          label: 'Amsterdam · Skip',
          text: '<strong>The Red Light District and the Damrak strip</strong> by Centraal: loud all night, crowded, and the pickpocket capital of the city. Hotels near Schiphol or out in the suburbs look cheap until you add up the trips in.'
        },
        {
          label: 'Brussels · Best pick',
          text: '<strong>Near Brussels-Central station.</strong> Five minutes on foot to Grand-Place, direct trains to Bruges, Ghent and the airport, and the Saint-Géry bars about ten minutes away. That covers both the day trip and the trip home without a single transfer.'
        },
        {
          label: 'Brussels · Nightlife',
          text: '<strong>Saint-Géry and Dansaert.</strong> The bar quarter of the old centre: walk out of the door and you are there. Busier and louder on weekends, and still central for everything else.'
        },
        {
          label: 'Brussels · Quiet &amp; upscale',
          text: '<strong>Sablon.</strong> Antique shops, chocolatiers and a quiet square, about ten minutes on foot from Grand-Place. Safe and calm, and priced to match.'
        },
        {
          label: 'Brussels · Cheaper, still safe',
          text: '<strong>Ixelles</strong>, around Porte de Namur and Place Flagey. Lively, residential and well served by metro and tram, about ten minutes to the centre. Matongé, the Congolese and Central African quarter, sits right here.'
        },
        {
          label: 'Brussels · Skip',
          text: '<strong>The streets right around Brussels-Midi and Brussels-Nord stations.</strong> Fine to pass through, rough to come back to after dark, and the cheap rooms there are cheap for a reason. The same goes for the stretch along the canal to the west of the centre.'
        }
      ]
    },

    callouts: [
      {
        tone: 'fix',
        mark: 'Book',
        text: '<strong>Book these ahead, online:</strong> the <strong>Rijksmuseum</strong> and <strong>Van Gogh Museum</strong> sell timed entry slots, and the Van Gogh Museum sells no tickets at the door. <strong>Anne Frank House</strong> tickets are online only and usually sell out weeks ahead — check the official site anyway; Day 3 has a fallback if not. Also the <strong>Halloween party</strong> ticket, the <strong>Amsterdam–Brussels train</strong> (cheaper the earlier you book), and the <strong>Bruges Belfry</strong> climb.'
      },
      {
        tone: 'note',
        mark: '1/11',
        text: '<strong>Sunday is a holiday in Belgium:</strong> All Saints\' Day, 1 November. Some shops and museums close; bars and restaurants stay open. And <strong>most Belgian museums close on Mondays</strong>, which is why Monday is built around the Belfry, the canals and a castle that open every day.'
      },
      {
        tone: 'warn',
        mark: '!',
        text: '<strong>The Red Light District has rules:</strong> no photographs of the windows, no smoking cannabis on the street, and the bars there close earlier than in the rest of the city. It is worth walking through for the Oude Kerk and the old streets — Day 3 does it in daylight. The night out happens elsewhere.'
      },
      {
        tone: 'warn',
        mark: 'Bike',
        text: '<strong>The red lanes are for bikes,</strong> and Amsterdam cyclists do not slow down. Look both ways before stepping off any kerb, and never stand in a red lane for a photograph.'
      },
      {
        tone: 'note',
        mark: '✈',
        text: '<strong>In one city, out of another:</strong> a multi-city ticket (New York to Amsterdam, then Brussels to New York) usually costs about the same as a round trip and saves backtracking. Brussels Airport is about 20 minutes by train from Brussels-Central.'
      }
    ],

    nav: [
      { label: 'Day 1 · Thu', title: 'Canals &amp; the Jordaan',  href: 'day-1' },
      { label: 'Day 2 · Fri', title: 'Rembrandt + Van Gogh',       href: 'day-2' },
      { label: 'Day 3 · Sat', title: 'Old city + Halloween',       href: 'day-3' },
      { label: 'Day 4 · Sun', title: 'Amsterdam → Brussels',       href: 'day-4' },
      { label: 'Day 5 · Mon', title: 'Bruges + Ghent',             href: 'day-5' },
      { label: 'Day 6 · Tue', title: 'Brussels → home',            href: 'day-6' }
    ],

    /* ---- the written days ----
       chip tone: 'grey' | 'blue' | 'amber'                             ---- */
    days: [
      {
        id: 'day-1',
        counter: 'Day 1 / 6',
        date: 'Thursday, October 29',
        iso: '2026-10-29',
        outfit: 'Soft travel layers, the waterproof, shoes you can walk all afternoon in.',
        outfitNote: 'You land and keep going — nothing you would regret sleeping in on the plane.',
        title: 'Landing, the canals, and the brown cafés',
        rows: [
          {
            time: 'morning',
            title: 'Schiphol → Amsterdam Centraal',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Direct train, about 15 minutes, every few minutes. Tap in and out with a contactless card. Most hotels hold bags before check-in.'
          },
          {
            time: 'late morning',
            title: 'Sleep off the flight',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: 'A few hours, alarm set — enough to take the edge off without wrecking tonight\'s sleep.'
          },
          {
            time: '2:00 PM',
            title: 'Dam Square &amp; the Royal Palace',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'The square the city grew around. The palace was built in the 1600s as the city hall, when Amsterdam was the richest port in the world; the interior is open most days when there is no royal event on.'
          },
          {
            time: '3:00 PM',
            title: 'The canal ring &amp; the Jordaan, on foot',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Prinsengracht and Keizersgracht, the Westerkerk (where Rembrandt is buried), and the Nine Streets for small shops. The canal ring is a UNESCO World Heritage site, and the light is best before it goes at about five.'
          },
          {
            time: '5:00 – 8:00 PM',
            title: 'Rest',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: ''
          },
          {
            time: '8:30 PM',
            title: 'Dinner: Indonesian rijsttafel',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'A "rice table" of a dozen small dishes — the most Amsterdam meal there is, and a direct line back to Dutch colonial history in Indonesia.'
          },
          {
            time: '10:00 PM',
            title: 'Brown cafés in the Jordaan',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'Old, wood-panelled Dutch pubs, named for walls stained by centuries of smoke. <strong>Café \'t Smalle</strong> (canal-side, from 1780), <strong>Café Chris</strong> near the Westerkerk, and <strong>De Twee Zwaantjes</strong> on Prinsengracht, where the room sings along to Dutch songs. An easy first night.'
          }
        ]
      },
      {
        id: 'day-2',
        counter: 'Day 2 / 6',
        date: 'Friday, October 30',
        iso: '2026-10-30',
        outfit: 'Jeans, a knit, the coat — and shoes that pass a club door.',
        outfitNote: 'You go straight from dinner to the clubs, so leave the hotel dressed for the night.',
        title: 'Rembrandt, Van Gogh, and the first big night',
        rows: [
          {
            time: '10:30 AM',
            title: 'Rijksmuseum',
            chips: [{ label: 'Museum', tone: 'blue' }],
            body: 'The national museum: Rembrandt\'s <em>Night Watch</em>, Vermeer, and the whole Dutch Golden Age. Two and a half to three hours covers the highlights. Timed tickets.',
            address: 'Museumstraat 1, Museumplein'
          },
          {
            time: '1:30 PM',
            title: 'Lunch on Museumplein',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'The museum cafés or the streets behind the square — quick, not a sit-down.'
          },
          {
            time: '2:30 PM',
            title: 'Van Gogh Museum',
            chips: [{ label: 'Museum', tone: 'blue' }],
            body: 'The largest Van Gogh collection in the world — <em>Sunflowers</em>, the self-portraits, the letters — hung in the order he painted them. About ninety minutes. Timed tickets only.',
            address: 'Museumplein 6'
          },
          {
            time: '4:30 – 8:00 PM',
            title: 'Rest',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: 'Back to the hotel. Nap now; the night runs late.'
          },
          {
            time: '8:30 PM',
            title: 'Dinner in De Pijp',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'The densest run of restaurants in the city, ten minutes on foot from Leidseplein.'
          },
          {
            time: '10:30 PM',
            title: 'Leidseplein',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'A square packed with bars. <strong>Paradiso</strong> (club nights in a converted church) and <strong>Melkweg</strong> (a former dairy, now concerts and club nights) are both here — check what is on that night.'
          },
          {
            time: '~1:00 AM',
            title: 'Rembrandtplein, for the late part',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'Fifteen minutes on foot. Late bars around the square, with <strong>Escape</strong> and <strong>AIR</strong> as the big clubs. Queues build after midnight; cover charges vary.'
          }
        ]
      },
      {
        id: 'day-3',
        counter: 'Day 3 / 6',
        date: 'Saturday, October 31',
        iso: '2026-10-31',
        outfit: 'Daytime layers, then the costume — something that works under a coat.',
        outfitNote: 'Leave room in the afternoon for a long rest; this is the latest night of the trip.',
        title: 'Anne Frank, the old city, and Halloween night',
        rows: [
          {
            time: '11:00 AM',
            title: 'Anne Frank House',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'The canal house where Anne Frank hid for two years during the Second World War, behind a bookcase in the back annex. About an hour. Online tickets only. <strong>If sold out:</strong> the Dutch Resistance Museum in Plantage tells the wider story of the occupation, and is far easier to get into.',
            address: 'Westermarkt 20'
          },
          {
            time: '12:30 PM',
            title: 'Lunch',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Dutch pancakes or a broodje (filled roll) on the way across the old centre.'
          },
          {
            time: '1:30 PM',
            title: 'Our Lord in the Attic',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'A whole Catholic church hidden in the attic of a 1600s canal house, built when Catholic worship was banned in public. About an hour, and one of the most surprising rooms in the city.',
            address: 'Oudezijds Voorburgwal 38'
          },
          {
            time: '2:45 PM',
            title: 'The Oude Kerk, De Wallen &amp; Nieuwmarkt, in daylight',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'The Oude Kerk is the oldest building in Amsterdam, from the 1300s, standing in the middle of the Red Light District. Then on to Nieuwmarkt and De Waag, a 15th-century city gate.'
          },
          {
            time: '4:00 – 9:00 PM',
            title: 'Long rest &amp; get ready',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: 'Five hours on purpose. Costume on at the end of it.'
          },
          {
            time: '9:00 PM',
            title: 'Dinner',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Near wherever the party is.'
          },
          {
            time: '11:00 PM',
            title: 'Halloween night',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'Most clubs run themed Halloween parties with advance tickets — check the listings on Resident Advisor and the venues\' own sites for <strong>Paradiso</strong>, <strong>Melkweg</strong> and <strong>Shelter</strong> (a club under the A\'DAM Tower in Noord, reached by the free 24-hour ferry). Or skip the ticket and crawl the bars of <strong>Rembrandtplein</strong> in costume.'
          }
        ]
      },
      {
        id: 'day-4',
        counter: 'Day 4 / 6',
        date: 'Sunday, November 1',
        iso: '2026-11-01',
        place: {
          lat: 50.8467,
          lon: 4.3525,
          timezone: 'Europe/Brussels',
          normals: { high: 55, low: 45, summary: 'Typical for early November' }
        },
        outfit: 'Comfortable travel layers, then the coat for an evening out.',
        outfitNote: 'Grand-Place is at its best after dark, and it is cold out on the cobbles.',
        title: 'A canal cruise, the train south, and Grand-Place lit up',
        rows: [
          {
            time: '11:00 AM',
            title: 'Sleep in, check out, brunch',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: 'Lockers at Amsterdam Centraal if the bags need to go somewhere.'
          },
          {
            time: '12:30 PM',
            title: 'Canal cruise',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'An hour on the water through the canal ring — sightseeing sitting down. Boats leave from in front of Centraal and along the Damrak.'
          },
          {
            time: '2:00 PM',
            title: 'Train: Amsterdam → Brussels',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: '<strong>Eurostar</strong>, about 1 hour 50 minutes into Brussels-Midi, or the slower, usually cheaper <strong>Eurocity Direct</strong>, about 2 hours 50, which also stops at Brussels-Central. A good stretch to nap.'
          },
          {
            time: '4:30 PM',
            title: 'Check in near Brussels-Central',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'From Brussels-Midi, a local train hops to Brussels-Central in about five minutes.'
          },
          {
            time: '5:30 PM',
            title: 'Grand-Place, the Galeries &amp; Manneken Pis',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'Grand-Place is one of the most beautiful squares in Europe: gilded guildhalls and a Gothic town hall from the 1400s, lit up after dark. Next door, the <strong>Galeries Royales Saint-Hubert</strong> — glass-roofed shopping arcades from 1847. Manneken Pis is five minutes away, and smaller than anyone expects.'
          },
          {
            time: '6:30 – 8:30 PM',
            title: 'Rest',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: ''
          },
          {
            time: '8:30 PM',
            title: 'Dinner: moules-frites, or Matongé',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Mussels and frites, the Belgian classic, anywhere in the centre — avoid the touts on Rue des Bouchers. Or <strong>Matongé</strong> in Ixelles, the Congolese and Central African quarter around Porte de Namur, about ten minutes by metro.'
          },
          {
            time: '10:30 PM',
            title: 'Delirium Café, then Saint-Géry',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: '<strong>Delirium Café</strong>, down an alley off Rue des Bouchers, pours from a list of more than two thousand beers across several floors. Then the bars around <strong>Place Saint-Géry</strong>, a few minutes away. Sunday is a quieter night everywhere; Delirium stays busy regardless.',
            address: 'Impasse de la Fidélité 4'
          }
        ]
      },
      {
        id: 'day-5',
        counter: 'Day 5 / 6',
        date: 'Monday, November 2',
        iso: '2026-11-02',
        place: {
          lat: 50.8467,
          lon: 4.3525,
          timezone: 'Europe/Brussels',
          normals: { high: 55, low: 45, summary: 'Typical for early November' }
        },
        outfit: 'The waterproof and the walking shoes — this is the longest day on foot.',
        outfitNote: 'Bruges is almost all cobblestones, and the Belfry is 366 narrow steps.',
        title: 'Bruges by day, Ghent at dusk, a last night in Brussels',
        rows: [
          {
            time: '9:30 AM',
            title: 'Train: Brussels-Central → Bruges',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'About an hour, direct, several an hour. Buy on the SNCB app or at the station.'
          },
          {
            time: '10:45 AM',
            title: 'The Markt &amp; the Belfry',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'The medieval centre of Bruges is a UNESCO World Heritage site and the most-visited place in Belgium. The 13th-century Belfry towers over the Markt; the climb is 366 steps, with timed tickets.'
          },
          {
            time: '12:00 PM',
            title: 'The Burg, the canals &amp; the Rozenhoedkaai',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'The Basilica of the Holy Blood on the Burg square, then the Rozenhoedkaai, the most photographed corner of the canals. Canal boats run from the quays when the season allows.'
          },
          {
            time: '1:00 PM',
            title: 'Lunch: frites, waffles, chocolate',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: ''
          },
          {
            time: '2:00 PM',
            title: 'Minnewater &amp; the Begijnhof',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'The "Lake of Love" and the whitewashed beguinage beside it, a walled community of religious women from the 1200s. The quietest half hour of the trip.'
          },
          {
            time: '3:00 PM',
            title: 'Train: Bruges → Ghent',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'About 25 minutes. Then a tram or a twenty-minute walk into the centre.'
          },
          {
            time: '3:45 PM',
            title: 'Gravensteen, then the Graslei at dusk',
            chips: [{ label: 'History', tone: 'blue' }],
            body: '<strong>Gravensteen</strong>, the Castle of the Counts, is a moated stone castle from 1180 in the middle of the city, open every day. Then the <strong>Graslei and Korenlei</strong>, the medieval guild houses along the water, as the lights come on.'
          },
          {
            time: '5:30 PM',
            title: 'Train: Ghent → Brussels, then rest',
            chips: [{ label: 'Rest', tone: 'grey' }],
            body: 'About 30 minutes back to Brussels-Central, then a rest until dinner. <strong>Or stay in Ghent:</strong> it is a big student city, and the bars around Overpoortstraat and the Vrijdagmarkt are busiest on weeknights. Check the time of the last train back before heading out.'
          },
          {
            time: '9:00 PM',
            title: 'Last night out: Saint-Géry &amp; Rue du Marché au Charbon',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'The two busiest bar streets in central Brussels, a few minutes apart. Monday means bars rather than clubs.'
          }
        ]
      },
      {
        id: 'day-6',
        counter: 'Day 6 / 6',
        date: 'Tuesday, November 3',
        iso: '2026-11-03',
        place: {
          lat: 50.8467,
          lon: 4.3525,
          timezone: 'Europe/Brussels',
          normals: { high: 55, low: 45, summary: 'Typical for early November' }
        },
        outfit: 'Soft, loose travel clothes, layered.',
        title: 'Brussels → home',
        rows: [
          {
            time: 'morning',
            title: 'Breakfast, a last waffle, the Mont des Arts',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'The Mont des Arts, five minutes from Brussels-Central, has the best free view over the old city — on the way to the station.'
          },
          {
            time: 'late morning',
            title: 'Train: Brussels-Central → Brussels Airport',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'About 20 minutes, several an hour. Allow three hours at the airport for a flight to the US.'
          }
        ]
      }
    ],

    /* ---- the photo grid ---- */
    photosIntro: {
      eyebrow: 'Photographs',
      title: 'From the trip',
      lede: 'Click any photograph to open it full-screen.'
    },
    photos: [
      { caption: 'Day 1 · The canal ring',      src: null },
      { caption: 'Day 2 · Rijksmuseum',         src: null },
      { caption: 'Day 3 · Halloween night',     src: null },
      { caption: 'Day 4 · Grand-Place, Brussels', src: null },
      { caption: 'Day 5 · Bruges',              src: null },
      { caption: 'Day 5 · Ghent',               src: null }
    ],

    /* ---- the strip that closes the trip page ---- */
    footer: { left: 'Amsterdam &amp; Belgium', right: '29 Oct – 3 Nov 2026' }
  }

];
