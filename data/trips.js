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
  }

];
