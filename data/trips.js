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

    /* ---- the four-cell info grid ---- */
    info: [
      {
        label: 'Base camp',
        value: 'Park Plaza London Waterloo',
        detail: '6 Hercules Rd, SE1 7DP — steps from Waterloo &amp; Lambeth North'
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

    /* ---- the three callouts. tone: 'fix' | 'note' | 'warn' ---- */
    callouts: [
      {
        tone: 'fix',
        mark: 'Fix',
        text: '<strong>Ticket sale date correction:</strong> Chelsea\'s members\' sale for the Arsenal away tickets is <strong>Wednesday 26 August</strong> (not the 25th) — three loyalty-point windows at 10am, 12pm and 2pm, then any leftover tickets open to all members from 4pm. Away allocations are small and go fast, so realistically don\'t bank on a ticket — see Day 4 for the backup plan that doesn\'t need one.'
      },
      {
        tone: 'note',
        mark: '+',
        text: '<strong>It\'s Arsenal <em>away</em>, not Stamford Bridge:</strong> kickoff is at the Emirates Stadium in North London, so there\'s no "go to the ground" option even with a ticket in hand — away allocations are tiny. The move that actually gets you around a wall of Chelsea fans is watching from a pub right by Stamford Bridge, where the crowd gathers for away games too. Full plan on Day 4.'
      },
      {
        tone: 'warn',
        mark: '!',
        text: '<strong>Brixton, daytime only:</strong> everything below in Brixton is scheduled before ~6:30pm. It\'s a completely normal, well-visited part of London by day — just use the same street sense you would anywhere with a lively nightlife scene after dark, and this itinerary has you gone before then.'
      }
    ],

    /* ---- the day-nav strip. `pending: true` renders it dimmed ---- */
    nav: [
      { label: 'Day 1 · Thu', title: 'Arrival',           href: 'day-1' },
      { label: 'Day 2 · Fri', title: 'Icons &amp; river',     pending: true },
      { label: 'Day 3 · Sat', title: 'Peckham + Brixton', pending: true },
      { label: 'Day 4 · Sun', title: 'Match day',         pending: true },
      { label: 'Day 5 · Mon', title: 'Departure',         pending: true }
    ],

    /* ---- the written days ----
       chip tone: 'grey' | 'blue' | 'amber'                             ---- */
    days: [
      {
        id: 'day-1',
        counter: 'Day 1 / 5',
        date: 'Thursday, September 3',
        title: 'Landing &amp; first steps into London',
        lede: 'A deliberately light day — get settled, get your bearings, and see Big Ben lit up after dark. Times below assume a mid-afternoon landing; slide the whole block earlier or later to match your actual flight.',
        rows: [
          {
            time: 'on land',
            title: 'Airport → Park Plaza London Waterloo',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Heathrow: Elizabeth line or Heathrow Express to Paddington, then Bakerloo line direct to Waterloo (~55–70 min total). Gatwick: Gatwick Express to Victoria, then District/Circle line to Waterloo or a short taxi (~50 min). Check in when you arrive — bags can usually be dropped even before the official 3pm check-in.',
            address: '6 Hercules Rd, Lambeth, London SE1 7DP'
          },
          {
            time: '4:30 PM',
            title: 'Orientation walk: Westminster Bridge → Big Ben → South Bank',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Ten minutes on foot from the hotel gets you onto Westminster Bridge with the Houses of Parliament and the Elizabeth Tower (Big Ben) right in front of you — genuinely one of the best free views in London, and a gentle way to shake off travel legs. Cross back over and wander the South Bank promenade past the London Eye toward the National Theatre.'
          },
          {
            time: '6:30 PM',
            title: 'Dinner + first proper London pint: Founders Arms',
            chips: [{ label: 'Food', tone: 'amber' }, { label: 'Historic pub', tone: 'grey' }],
            body: 'A riverside pub on Bankside with a terrace looking straight across at St Paul\'s Cathedral — pub food, a good pint, and a view that does a lot of the "wow, I\'m actually in London" work for you. About a 25-minute riverside walk from the hotel, or hop the bus.',
            address: '52 Hopton St, Bankside, SE1 9JH'
          },
          {
            time: '8:30 PM',
            title: 'Big Ben by night, then early to bed',
            body: 'Walk back along the river — Parliament and the Eye are lit up after dark and the crowds thin out. Aim to be back and asleep at a reasonable hour to get ahead of jet lag before the bigger days start.'
          }
        ]
      }
    ],

    /* ---- the "still to come" block. delete it once every day is written ---- */
    pending: {
      counter: 'Days 2–5',
      date: 'Friday 4 – Monday 7 September',
      title: 'Icons &amp; river, Peckham + Brixton, Match day, Departure',
      lede: 'Days 2–5 are waiting on the text from your Claude itinerary — paste it in and they drop straight into this pattern.'
    },

    /* ---- the photo grid ---- */
    photosIntro: {
      eyebrow: 'Photographs',
      title: 'From the trip',
      lede: 'Click any photograph to open it full-screen.'
    },
    photos: [
      { caption: 'Day 1 · Westminster Bridge', src: null },
      { caption: 'Day 1 · South Bank',         src: null },
      { caption: 'Day 1 · Founders Arms',      src: null },
      { caption: 'Day 2 · Icons &amp; river',      src: null },
      { caption: 'Day 3 · Peckham',            src: null },
      { caption: 'Day 3 · Brixton',            src: null },
      { caption: 'Day 4 · Match day',          src: null },
      { caption: 'Day 5 · Last morning',       src: null }
    ],

    /* ---- the strip that closes the trip page ---- */
    footer: { left: "Aj's First London", right: '3–7 Sept 2026' }
  }

];
