/* ---------------------------------------------------------------------------
   TRIPS — the whole website's content lives in this one file.
   Add a trip by adding an object to the array. Nothing else needs editing.

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
    lede: 'Four nights, five days — bridges and boats, a Chelsea away-day watch party, and the West African corners of South London. Built around the Park Plaza Waterloo.',

    /* ---- the info grid ---- */
    info: [
      {
        label: 'Base camp',
        value: 'Park Plaza London Waterloo',
        detail: '6 Hercules Rd, SE1 7DP — steps from Waterloo &amp; Lambeth North'
      },
      {
        label: 'Work (Thu–Fri)',
        value: '2:30–10:30pm London',
        detail: '= 9:30am–5:30pm Eastern — London runs 5h ahead this time of year'
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
        value: 'Early autumn, ~15–20°C',
        detail: 'Pack a light rain layer — always a fair bet in London'
      }
    ],


    callouts: [
      {
        tone: 'fix',
        mark: 'TZ',
        text: '<strong>The time-zone math is 5 hours, not 4:</strong> both the US and UK are in their own daylight-saving time in September, so London runs a full 5 hours ahead of Eastern. Your 9:30am–5:30pm Eastern workday lands as <strong>2:30pm–10:30pm London time</strong> — it eats the entire afternoon and evening of Thursday and Friday. Days 1 and 2 are built around that: sightseeing before you log on, and Tower Bridge moved to Sunday morning, where the weekend is work-free. Nothing got cut, just reshuffled into the hours you actually have.'
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
        title: 'Landing, a quick look around, then straight to work',
        lede: 'An overnight flight out on the 2nd lands you in London the morning of the 3rd — before your Eastern workday even starts. That gap is today\'s whole sightseeing window, so it\'s deliberately light: land, drop bags, one iconic walk, then you\'re logged on by 2:30pm London time.',
        rows: [
          {
            time: 'on land',
            title: 'Airport → Park Plaza London Waterloo',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Heathrow: Elizabeth line or Heathrow Express to Paddington, then Bakerloo line direct to Waterloo (~55–70 min total). Gatwick: Gatwick Express to Victoria, then District/Circle line to Waterloo or a short taxi (~50 min). Check in when you arrive — bags can usually be dropped even before the official 3pm check-in.',
            address: '6 Hercules Rd, Lambeth, London SE1 7DP'
          },
          {
            time: '11:00 AM',
            title: 'Freshen up, then Westminster Bridge → Big Ben → South Bank',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Ten minutes on foot from the hotel gets you onto Westminster Bridge with the Houses of Parliament and the Elizabeth Tower (Big Ben) right in front of you — genuinely one of the best free views in London, and a gentle way to shake off travel legs. Cross back over and wander the South Bank promenade past the London Eye toward the National Theatre.'
          },
          {
            time: '1:00 PM',
            title: 'Casual lunch on the South Bank',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Plenty of quick, no-reservation options right along the river walk — keep it simple, you\'re on the clock. Aim to be back at the hotel and logged in with a few minutes to spare.'
          },
          {
            time: '2:30–10:30 PM',
            title: 'Working (9:30am–5:30pm Eastern)',
            chips: [{ label: 'Working', tone: 'grey' }],
            body: 'From the hotel room or a nearby café with decent wifi. This is the trade-off for the overnight flight landing you a free morning — the whole afternoon and evening are spoken for.'
          },
          {
            time: '10:30 PM',
            title: 'Off the clock — dinner near the hotel, then bed',
            body: 'Keep it low-key: Lower Marsh and the streets around Waterloo have easy late options. If you\'ve genuinely got the energy after a red-eye plus a full workday, Big Ben is lit up and 10 minutes away on foot — but there\'s no shame in an early night here. Days 3 and 4 are the big ones.'
          }
        ]
      },
      {
        id: 'day-2',
        counter: 'Day 2 / 5',
        date: 'Friday, September 4',
        title: 'Parliament, the river, and Borough Market — before 2:30',
        lede: 'Same work window as yesterday, so today\'s sightseeing is a tight, self-contained morning loop: Parliament up close, the Uber Boat your friends told you about, and Borough Market for lunch. Tower Bridge, which would\'ve followed this afternoon, now lives on Sunday morning instead. Once you\'re off the clock at 10:30 there\'s a short window to go see Shoreditch, which is worth taking — just kept brief on purpose, since Saturday is the big night.',
        rows: [
          {
            time: '9:00 AM',
            title: 'Houses of Parliament &amp; Big Ben, up close',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Go early to beat the crowds. Walk the full length of Parliament Square, get the close-up shots of the Elizabeth Tower, and swing past Westminster Abbey\'s exterior on your way back toward the river.'
          },
          {
            time: '10:15 AM',
            title: 'Board the Uber Boat at Westminster Pier',
            chips: [{ label: 'Uber Boat', tone: 'grey' }],
            body: 'This is the ferry your friends meant. Tap in with the same contactless card you\'re using on the Tube, and ride it from <strong>Westminster Pier</strong> to <strong>Bankside Pier</strong> (or on to <strong>London Bridge City Pier</strong>) — about 15–20 minutes on the water past the London Eye, the Oxo Tower, and the Millennium Bridge, with a totally different perspective on the skyline than you get on foot.'
          },
          {
            time: '11:00 AM',
            title: 'Borough Market',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'One of London\'s oldest food markets, right by the pier. Graze rather than sit — this is the spot for an early, unhurried lunch: try a few stalls instead of committing to one restaurant. As a bonus, you\'re standing right by <strong>London Bridge</strong> — the plain concrete one — which gets confused for Tower Bridge constantly; the one with the twin Victorian towers is 10 minutes further east and is properly visited on Sunday morning, see Day 4.',
            address: '8 Southwark St, SE1 1TL'
          },
          {
            time: '1:00 PM',
            title: 'Head back to the hotel',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Walk back along the river (~25 min) or hop a bus/tube if you\'re cutting it close — either way, leave enough buffer to be settled in before 2:30.'
          },
          {
            time: '2:30–10:30 PM',
            title: 'Working (9:30am–5:30pm Eastern)',
            chips: [{ label: 'Working', tone: 'grey' }],
            body: 'Second and last work day of the trip — the weekend from here on is completely free.'
          },
          {
            time: '10:30 PM',
            title: 'Off the clock — quick dinner, then Shoreditch',
            body: 'Something fast near the hotel first — don\'t lose more time than you have to. Northern line from Waterloo to Old Street (~20 min) gets you into Shoreditch by around 11:15.'
          },
          {
            time: '11:15 PM',
            title: 'One stop, just to see it: Callooh Callay',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'A quirky, well-loved cocktail bar just off Shoreditch High Street with a secret room hidden behind a wardrobe — a good one-stop way to get a real feel for the neighbourhood\'s energy without committing to a full night out. Walk up and down Redchurch Street or toward Brick Lane first to take in the street art and late-night food stalls.',
            address: '65 Rivington St, EC2A 3AY'
          },
          {
            time: '~1:00 AM',
            title: 'Head back — tonight is the preview, tomorrow\'s the main event',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Night bus or a taxi back to Waterloo. The Northern line does run Night Tube on a Friday, but only down the Charing Cross branch — Old Street is on the Bank branch, which shuts as normal, so don\'t count on riding back the way you came. Call it a night here on purpose: Saturday is the one with the big Peckham/Brixton day <em>and</em> the night out in Soho.'
          }
        ]
      },
      {
        id: 'day-3',
        counter: 'Day 3 / 5',
        date: 'Saturday, September 5',
        title: 'Peckham first and longest, Brixton in the afternoon, Soho at night',
        lede: 'The biggest day of the trip, split deliberately in Peckham\'s favour — it\'s genuinely London\'s biggest West African hub, where the Ghanaian and Nigerian communities concentrate, so it gets the morning, the long browse, and lunch. Brixton is a different story — Black British and Windrush-generation history — and gets the afternoon plus a Caribbean dinner instead of a second Ghanaian meal, since you\'ve already got that covered in Peckham. Then straight out to Soho for the night.',
        rows: [
          {
            time: '10:00 AM',
            title: 'Waterloo → Peckham Rye',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Southeastern train from Waterloo East, roughly 15–20 minutes direct to Peckham Rye station.'
          },
          {
            time: '10:30 AM',
            title: 'Rye Lane, at length',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'This street is where West African London actually lives day to day: fabric shops selling kente cloth alongside Ankara prints, hair and beauty stores, and food stalls with kelewele (spiced fried plantain), waakye, and kenkey. It\'s not a tourist attraction with opening hours — it\'s just walk-and-browse, so take your time here rather than rushing through; this is the part of today built to linger in.'
          },
          {
            time: '12:45 PM',
            title: 'Lunch: Agrobeso African Cuisine',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'A proper sit-down West African restaurant right on Peckham High Street — bright, lively, and highly rated for hearty, generous plates. This is the trip\'s main Ghanaian meal.',
            address: '139 Peckham High St, SE15 5SL'
          },
          {
            time: '2:00 PM',
            title: 'More Peckham: Peckham Levels or Bussey Building',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'Since you\'ve got the extra time, use it here rather than rushing to Brixton — Peckham Levels (a converted multi-storey car park turned food hall, studios, and bars) or the Bussey Building (arts and events space in a converted Victorian factory) are both a short walk from the high street and worth a browse.'
          },
          {
            time: '3:30 PM',
            title: 'Peckham → Brixton',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'No direct rail link, so it\'s bus (322 or a combination via Denmark Hill/Herne Hill) or a taxi/rideshare — budget 25–35 minutes. Worth double-checking the exact route in a journey planner on the day, since bus routings shift.'
          },
          {
            time: '4:15 PM',
            title: 'Windrush Square &amp; the Black Cultural Archives',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'Windrush Square is the civic heart of Black British Brixton, named for the Empire Windrush generation. On the appointment question: the reading room/research library really is booking-only (Wed–Fri) — and given you land Thursday and work both those afternoons, there\'s no clean way to use it this trip. The ground-floor exhibition space is a separate, walk-in area, though — worth just showing up for. Current hours are worth a quick check at <a href="https://blackculturalarchives.org">blackculturalarchives.org</a> before you go.'
          },
          {
            time: '5:00 PM',
            title: 'Brixton Village, Electric Avenue &amp; the David Bowie mural',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'Electric Avenue was the first market street in London lit by electricity and is still a working Afro-Caribbean market by day. The Bowie memorial mural sits opposite Brixton tube station (he was born locally) and has become an informal shrine — a quick stop on the way toward dinner.'
          },
          {
            time: '7:00 PM',
            title: 'Dinner: Fish, Wings &amp; Tings',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'A Brixton institution inside Brixton Village Market — modern Caribbean cooking (think jerk, saltfish, spiced wings) in a small, always-buzzing spot. This is inside the covered market itself, not out on the open street — see the note above on Brixton after dark.',
            address: 'Unit 21, Brixton Village Market, SW9 8PS'
          },
          {
            time: '8:45 PM',
            title: 'Brixton → Soho',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Victoria line from Brixton to Oxford Circus (~20 min), then a 5-minute walk into Soho — straight from the market to the tube, no lingering on the street.'
          },
          {
            time: '9:15 PM',
            title: 'The big night out: Soho',
            chips: [{ label: 'Nightlife', tone: 'blue' }],
            body: 'Soho over Shoreditch tonight — it\'s the better fit for what you actually described wanting: dance floors, chart and pop hits, and a crowd that\'s there to mingle, all walkable to each other around Greek Street. <strong>Soho Zebrano</strong> (cocktail bar upstairs, dancefloor basement) and <strong>Thirst Soho</strong> (intimate, buzzy, always packed) are both right there; <strong>Bar Soho</strong> nearby leans more playful if you want a change of scene. Cover charges and queues pick up after 11 — earlier arrival means an easier door.'
          },
          {
            time: 'late',
            title: 'Whenever you\'re done',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'It\'s a Saturday, so the Night Tube is running: walk ten minutes west to <strong>Bond Street</strong> and the Jubilee line drops you at Waterloo in four stops. A night bus or taxi works too — but the Bakerloo from Oxford Circus, the obvious daytime route, doesn\'t run overnight. Sunday\'s plan starts a little later than it otherwise would, on purpose.'
          }
        ]
      },
      {
        id: 'day-4',
        counter: 'Day 4 / 5',
        date: 'Sunday, September 6',
        title: 'Tower Bridge, then match day: Arsenal v Chelsea, 4:30pm KO',
        lede: 'Chelsea are away at the Emirates, so the goal isn\'t getting <em>into</em> a stadium — it\'s getting into a room full of Chelsea supporters. The move for that is a Stamford Bridge-area pub, where fans without an away ticket gather for every game, home or away. This is also where the Tower Bridge visit bumped from Friday lands — it sits on the same District line as Fulham, so the morning flows straight into the afternoon. Start time is pushed back an hour from the original plan, given last night.',
        rows: [
          {
            time: '10:30 AM',
            title: 'Tower Bridge &amp; Tower of London (exterior)',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Sleep in a bit after Soho — this is deliberately an hour later than it would otherwise be. Walk across Tower Bridge itself, then decide on the spot whether the Tower Bridge Exhibition (glass floor, engine rooms) or just the view is enough for you — either works. The Tower of London\'s walls and moat are worth a slow look even without going inside.'
          },
          {
            time: '12:15 PM',
            title: 'Tower Hill → Fulham Broadway',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'One line, no changes: the District line runs the full width of London from Tower Hill to Fulham Broadway, about 45–50 minutes.'
          },
          {
            time: '1:10 PM',
            title: 'Lunch near Fulham Broadway',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Grab something to eat before the pre-match crowds build — you\'ll want your hands free and a seat claimed well before kickoff. Keep it quick given the tighter window today.'
          },
          {
            time: '2:00 PM',
            title: 'Claim a spot: The Butcher\'s Hook',
            chips: [{ label: 'Chelsea pub', tone: 'amber' }],
            body: 'Directly opposite the Stamford Gate entrance to Stamford Bridge — and the actual pub where Chelsea FC was founded in 1905. Widely considered the number-one spot for fans without a ticket: big screens, wall-to-wall Chelsea supporters, and the loudest atmosphere in the area for kickoff.',
            address: 'Fulham Rd, Fulham, SW6 1HS'
          },
          {
            time: '4:30 PM',
            title: 'Kickoff',
            chips: [{ label: 'Match', tone: 'amber' }],
            body: 'Backup options two minutes away if The Butcher\'s Hook is rammed: <strong>McGettigan\'s</strong> (opposite Fulham Broadway station) or <strong>The Tommy Tucker</strong> (between Fulham Rd and King\'s Rd) — both reliably full of Chelsea supporters on matchday.'
          },
          {
            time: '~6:15 PM',
            title: 'Post-match dinner in the same neighbourhood',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'Whatever the result, this stretch of Fulham Road has plenty of casual dinner options within a five-minute walk — an easy way to keep the matchday energy going a little longer before heading back.'
          },
          {
            time: '8:30 PM',
            title: 'Back to Waterloo',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'District line back to Embankment, then Bakerloo/Northern one stop to Waterloo — about 30 minutes door to door.'
          }
        ]
      },
      {
        id: 'day-5',
        counter: 'Day 5 / 5',
        date: 'Monday, September 7',
        title: 'One last look, then home',
        lede: 'A short, flexible morning built around checkout — scale it to your actual flight time.',
        rows: [
          {
            time: '8:00 AM',
            title: 'Breakfast near the hotel, pack, check out',
            body: 'Park Plaza Waterloo\'s location means you can leave bags with the front desk and still have a couple of free hours before heading to the airport.'
          },
          {
            time: '9:00 AM',
            title: 'Ride the London Eye, or one more walk across Westminster Bridge',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'If you haven\'t gone up yet, mornings are the quietest time to ride — it\'s right by the hotel. If you\'d rather not spend the money on a repeat view, one more slow walk across Westminster Bridge is a fitting bookend to Day 1\'s first look at Big Ben.'
          },
          {
            time: 'time to airport',
            title: 'Head to the airport with a buffer',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'From Waterloo: Bakerloo line to Paddington then Elizabeth line/Heathrow Express for Heathrow (~55–70 min total); or Northern/Victoria line connections to Victoria for the Gatwick Express (~50–60 min total). Build in extra time on a Monday morning for possible Tube delays.'
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
        value: '~78°F days, ~57°F nights',
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

    callouts: [
      {
        tone: 'note',
        mark: '+',
        text: "<strong>\"Famous Beach\" is a real place, not a placeholder:</strong> it's Famous Beach Marrakech on Route de l'Ourika — 20,000 m², three pools, a restaurant and cocktail bar, and a stage running live shows and DJ sets. Saturday's whole midday is already spoken for by the venue itself."
      },
      {
        tone: 'fix',
        mark: '!',
        text: "<strong>Monday's evening is tight:</strong> the Palmeraie quad bike ride ends around 4pm, and dinner at Safran by Kôya is assumed to start around 5pm — that's about an hour to get back, shower, and cross town. Worth confirming the reservation time directly and arranging a car back rather than cutting it close."
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
      { label: 'Day 4 · Mon', title: 'Balloon + Palmeraie',    href: 'day-4' },
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
            body: 'Shower, nap, let the sun exposure wear off. Nothing else planned here on purpose.'
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
        title: 'Hot air balloon, a proper nap, then the Palmeraie',
        lede: "A 5:30am pickup earns a real nap before anything else. Dinner is assumed at 5pm, which makes for a tight turnaround after the afternoon's quad bike ride — see the flag above.",
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
            title: 'Quad bike &amp; camel ride, the Palmeraie',
            chips: [{ label: 'Adventure', tone: 'blue' }],
            body: 'Palm groves outside the city, about two hours.'
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
