# Photographs

Drop your image files straight into this folder, then point the site at them.

## Adding a photo

1. Put the file here, e.g. `london-01.jpg`.
2. Open `../data/trips.js` and find the `photos` list for that trip.
3. Change that photo's line from:

   ```js
   { caption: 'Day 1 · Westminster Bridge', src: null },
   ```

   to:

   ```js
   { caption: 'Day 1 · Westminster Bridge', src: 'photos/london-01.jpg' },
   ```

That's it. The frame fills, it becomes clickable, and it joins the
full-screen carousel automatically. Frames still set to `null` stay as empty
placeholders and are skipped by the carousel — so you can add photographs one
at a time and the site is never broken in between.

The trip's cover photograph on the front page works the same way — it's the
`cover` line near the top of the trip.

## A note on size

These are shown large when opened, so anything around 2000px on the long edge
looks good. Much bigger than that just makes the page slow to load. JPEG or
WebP are both fine.
