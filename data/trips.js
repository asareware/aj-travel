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
      { label: 'Day 2 · Fri', title: 'Icons &amp; river',     href: 'day-2' },
      { label: 'Day 3 · Sat', title: 'Peckham + Brixton', href: 'day-3' },
      { label: 'Day 4 · Sun', title: 'Match day',         href: 'day-4' },
      { label: 'Day 5 · Mon', title: 'Departure',         href: 'day-5' }
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
      },
      {
        id: 'day-2',
        counter: 'Day 2 / 5',
        date: 'Friday, September 4',
        title: 'Big Ben, the two bridges, and the river by boat',
        lede: 'The "postcard London" day — Parliament, Borough Market, Tower Bridge, and the Uber Boat your friends told you about, used exactly the way it\'s best used: as a scenic shortcut between sights, not a full-day cruise.',
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
            body: 'One of London\'s oldest food markets, right by the pier. Graze rather than sit — this is the spot for an early, unhurried lunch: try a few stalls instead of committing to one restaurant.',
            address: '8 Southwark St, SE1 1TL'
          },
          {
            time: '1:00 PM',
            title: 'London Bridge vs. Tower Bridge — see both, know the difference',
            body: 'Quick myth-buster before you walk it: <strong>London Bridge</strong> (the plain concrete one you\'re standing near now) is the famously unglamorous crossing — it\'s <strong>Tower Bridge</strong>, 10 minutes further east, with the twin Victorian towers, that\'s the one on all the postcards. Walk the riverside path from London Bridge past HMS Belfast to reach it.'
          },
          {
            time: '1:45 PM',
            title: 'Tower Bridge &amp; Tower of London (exterior)',
            chips: [{ label: 'Sightseeing', tone: 'blue' }],
            body: 'Walk across Tower Bridge itself, then decide on the spot whether the Tower Bridge Exhibition (glass floor, engine rooms) or just the view is enough for you — either works. The Tower of London\'s walls and moat are worth a slow look even without going inside.'
          },
          {
            time: '3:30 PM',
            title: 'Boat back west: Tower Pier → Westminster or Waterloo',
            chips: [{ label: 'Uber Boat', tone: 'grey' }],
            body: 'Ride the river back in the golden-hour light — same ticketing, same card. This time you\'ll recognise everything you\'re passing.'
          },
          {
            time: '7:00 PM',
            title: 'Evening in Covent Garden: dinner + The Lamb &amp; Flag',
            chips: [{ label: 'Food', tone: 'amber' }, { label: 'Historic pub', tone: 'grey' }],
            body: 'Street performers, market stalls, and one of London\'s oldest pubs tucked down a side alley — a 300-year-old spot with a genuinely rough history (illegal boxing matches used to be held upstairs). Good for a nightcap pint after dinner.',
            address: '33 Rose St, Covent Garden, WC2E 9EB'
          }
        ]
      },
      {
        id: 'day-3',
        counter: 'Day 3 / 5',
        date: 'Saturday, September 5',
        title: 'Peckham &amp; Brixton — West African &amp; Windrush London',
        lede: 'A worthwhile clarification up front: London\'s biggest West African hub is actually <strong>Peckham</strong>, not Brixton — Rye Lane is where the Ghanaian and Nigerian communities really concentrate, with kente cloth stalls next to kenkey and waakye vendors. Brixton\'s story is different and just as important: it\'s the heart of Black British and Windrush-generation history, plus a couple of excellent standalone Ghanaian restaurants. Today does both, back to back.',
        rows: [
          {
            time: '10:00 AM',
            title: 'Waterloo → Peckham Rye',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Southeastern train from Waterloo East, roughly 15–20 minutes direct to Peckham Rye station.'
          },
          {
            time: '10:30 AM',
            title: 'Rye Lane market walk',
            chips: [{ label: 'Culture', tone: 'blue' }],
            body: 'This street is where West African London actually lives day to day: fabric shops selling kente cloth alongside Ankara prints, hair and beauty stores, and food stalls with kelewele (spiced fried plantain), waakye, and kenkey. It\'s not a tourist attraction with opening hours — it\'s just walk-and-browse, so wander at your own pace and don\'t be shy about asking vendors what something is.'
          },
          {
            time: '12:15 PM',
            title: 'Peckham → Brixton',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'No direct rail link, so it\'s bus (322 or a combination via Denmark Hill/Herne Hill) or a taxi/rideshare — budget 25–35 minutes. Worth double-checking the exact route in a journey planner on the day, since bus routings shift.'
          },
          {
            time: '1:00 PM',
            title: 'Lunch: Asafo Ghanaian Restaurant',
            chips: [{ label: 'Food', tone: 'amber' }],
            body: 'A proper sit-down Ghanaian restaurant right in Brixton — known for being authentic and for booking up quickly, so it\'s worth calling ahead or booking a table before you arrive rather than just walking in.',
            address: 'Brixton Hill, SW2'
          },
          {
            time: '2:30 PM',
            title: 'Windrush Square &amp; the Black Cultural Archives building',
            chips: [{ label: 'History', tone: 'blue' }],
            body: 'Windrush Square is the civic heart of Black British Brixton, named for the Empire Windrush generation. The Black Cultural Archives sits right on the square — worth knowing its reading room runs by appointment only (Wed–Fri), so treat this as a look at the building and square rather than a planned museum visit unless you\'ve booked ahead at <a href="https://blackculturalarchives.org">blackculturalarchives.org</a>.'
          },
          {
            time: '3:15 PM',
            title: 'Brixton Village &amp; Electric Avenue',
            chips: [{ label: 'Food', tone: 'amber' }, { label: 'Culture', tone: 'blue' }],
            body: 'Brixton Village Market is a covered arcade of stalls spanning Caribbean, Asian, and South American food — a good spot to graze even right after lunch. Electric Avenue next door was the first market street in London lit by electricity and is still a working Afro-Caribbean market by day.'
          },
          {
            time: '4:15 PM',
            title: 'David Bowie mural &amp; Pop Brixton',
            body: 'The Bowie memorial mural sits right opposite Brixton tube station (he was born locally) and has become an informal shrine. Pop Brixton, a short walk away, is a shipping-container market of independent shops and food stalls if you want one more stop before heading back.'
          },
          {
            time: '6:00 PM',
            title: 'Head back toward the hotel before dark',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'Victoria line direct from Brixton to Waterloo (change at Green Park or Oxford Circus for the Bakerloo/Jubilee) or a straightforward taxi — either way, plan to be out of Brixton by early evening as scheduled above. A quiet dinner near the hotel or South Bank is the easy close to today.'
          }
        ]
      },
      {
        id: 'day-4',
        counter: 'Day 4 / 5',
        date: 'Sunday, September 6',
        title: 'Match day: Arsenal v Chelsea, 4:30pm KO',
        lede: 'Chelsea are away at the Emirates, so the goal isn\'t getting <em>into</em> a stadium — it\'s getting into a room full of Chelsea supporters. The move for that is a Stamford Bridge-area pub, where fans without an away ticket gather for every game, home or away.',
        rows: [
          {
            time: '10:00 AM',
            title: 'Easy morning: Columbia Road Flower Market',
            chips: [{ label: 'Sunday-only', tone: 'grey' }],
            body: 'Sundays-only flower and plant market in East London — colourful, low-key, and a good way to fill the morning without tiring yourself out before kickoff. Optional; sleeping in and having a slow brunch near the hotel works just as well.'
          },
          {
            time: '1:30 PM',
            title: 'Head to Fulham / Stamford Bridge early',
            chips: [{ label: 'Transit', tone: 'grey' }],
            body: 'District line to Fulham Broadway (roughly 30–35 minutes from Waterloo, one change). Arriving 2.5–3 hours before a 4:30pm kickoff isn\'t overkill here — these pubs are described as "crazy busy" before kickoff and fill up fast, even for away games.'
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
