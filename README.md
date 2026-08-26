# Travel Log

A travel journal: itineraries as they were planned, photographs as they came
back. Plain HTML, CSS and JavaScript — no framework, no build step, nothing to
install. Open `index.html` in any browser and it works.

## What's here

```
index.html          the page
assets/styles.css   the whole design
assets/app.js       rendering, routing, the photo carousel
data/trips.js       ← all the content lives here
photos/             ← drop your photographs here
```

## Adding a trip

Everything is in `data/trips.js`. Copy the existing trip object, change the
`id`, and fill in the text. The front page picks it up on its own — a new card
appears, and the trip gets its own link at `#/your-trip-id`.

## Adding a day

Each trip has a `days` list. Add a day object with its `rows` (time, title,
optional category chips, body text, optional address). Days that aren't written
yet are listed in `nav` with `pending: true`, which renders them dimmed, and the
`pending` block covers them until they arrive. Delete the `pending` block once
every day is written.

## Adding photographs

See `photos/README.md`. Short version: drop the file in `photos/`, then swap
that photo's `src: null` for `src: 'photos/your-file.jpg'`.

## Publishing

The site is completely static, so any host works. It's set up for GitHub Pages —
push to `main` and enable Pages under **Settings → Pages**, serving from the
`main` branch, root folder.

## Where the design came from

The look was designed in Claude Design and handed off as `Travel Log.dc.html`.
That original is kept in `design/` for reference. It isn't part of the site —
it only renders inside the design tool, which is why this standalone version
exists.
