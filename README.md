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

## How much to say, and where

Readers kept saying the same thing about the first version: overwhelming. The
detail was the good part, so none of it was cut — it moved. Every trip is
written to the same shape, and a new one should follow it.

**Always visible.** The `info` grid (five or six facts) and the days
themselves. That is the plan, and it should be skimmable in about a minute.

**Collapsed, one line each.** Two cards sit under the info grid:

- `wear` — the dress guidance for the whole trip. Its `summary` is the line
  shown while the card is closed, so write it to stand on its own; that is
  what most people will ever read. The `blocks` inside are for whoever opens
  it: cultural rules, the temperature swing, shoes, the one dressy night.
- `callouts` — timing traps, closed booking windows, anything left alone on
  purpose. Collapsed behind *Worth knowing*.

**In the days.** A day's `outfit` is **one short line** — "Loose linen,
shoulders and knees covered, closed shoes." If it wants a paragraph, the
paragraph belongs in `wear` and the day keeps the short version. `outfitNote`
is optional and rare: one line for a genuine exception, like long trousers
being mandatory on the quad bikes. Every day links back up to the full card
on its own, so no day has to explain itself.

The test before adding a sentence to a day: could someone skim this page in a
minute and still know what they're doing? If not, it belongs in a fold.

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
