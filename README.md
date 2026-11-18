# The Outfit Edit

A fashion lookbook and outfit styling website for a Digital Marketing class. Inspired by curated shopping experiences, with an original autumn palette, editorial typography and layered paper boards.

## Run locally

Node.js 22+ and pnpm 10+:

```sh
pnpm install
pnpm dev
```

Open the printed address, normally http://127.0.0.1:5180/midterm.proj/ .

```sh
pnpm test
pnpm build
```

The static production site is generated in `dist/`. GitHub Actions builds and deploys main to GitHub Pages; select GitHub Actions as the Pages source in repository Settings → Pages.

Repository: https://github.com/madelynnmcdonough-git/midterm.proj

Expected deployed URL: https://madelynnmcdonough-git.github.io/midterm.proj/

## What works

- 42 photographed pieces from Reformation, Zara, DÔEN, MOTHER, AGOLDE, PAIGE, Alex Mill, Hiro Clark and Comme des Garçons PLAY.
- Search, designer/color/category filters and price sorting.
- Product detail dialogs with original retailer links and price snapshots.
- Local favorites and personal saved lookbooks.
- Outfit studio: add/remove pieces, drag or move with arrow keys, resize, rotate, change layers and board backgrounds, clear and undo.
- Nine editable starter lookbooks, including four inspired by relaxed knits, full-length denim, long coats and canvas totes.
- HTML piece-list export with source links, plus an on-screen linked list when a browser does not download files.
- Responsive desktop/mobile layouts, keyboard controls, focus-trapped dialogs, and reduced-motion support.

## Product integrity and sources

Product names, links and listed USD snapshots were collected November 17–18, 2026 from public retailer pages and public product data. Snapshots are not a live inventory or price feed; prices, regions, stock, sizes and promotions can change. The Aritzia pant and Gucci bag were removed because their product photos were unavailable. Zara's selected cardigan was out of stock when checked and is marked archive inspiration; confirm sizing/category at Zara. Original retailer photos are credited in `ASSET-SOURCES.md`; no affiliation or endorsement is claimed. Several products are shown on a model rather than as a cutout. The boards are styling collages with CSS depth, not 3D garment models, measurements or virtual try-on. The site does not purchase items or combine retailer carts. Shopping takes place on the original retailers' websites.

## Data and persistence

Favorites and explicitly saved lookbooks use this browser's localStorage. No account, server, analytics or private-account access is involved. A draft board resets on reload unless saved. Saved looks do not sync between devices. The site requests Google Fonts and serves credited product photography from its static assets. Clearing browser site data clears saved looks. Export is a shoppable text piece list, not an image rendering of the collage; file downloads depend on browser support, and the same links remain accessible on screen.

## Verification

Eight Node tests cover catalog coverage and HTTPS links, deduplication, totals, layout validation, malformed storage data, template references and escaped HTML export. Browser QA exercises searching, favorites, adding, dragging, keyboard positioning, resize/rotation controls, saving and reloading looks, removal/undo, retailer links, and responsive layout. Build and GitHub Pages deployment should be verified before reporting a live launch.


Created by Madelynn McDonough. The November 18 shoe edit adds seven kitten-heel options and a dedicated filter. Kelly Wearstler’s public ShopMy latest finds and Closet collection informed the selection: the Hiro Clark and Comme des Garçons PLAY tees appear in her Closet, while the Alex Mill poplin shirt is an independent alternative inspired by her poplin selections. Reformation heels are independently selected, not claimed as Kelly’s recommendations. The striped tee was out of stock and is marked archive inspiration.


The Nuuly edit adds eight photographed jackets from Madelynn’s shared list, with a dedicated filter and original Nuuly links. Rentals display “Rent at Nuuly”; subscription charges are not included in purchase subtotals or piece-list export totals. Retail reference values are labeled separately inside details. Ayla, Phoebe and Quinn had all sizes rented when checked. No Nuuly account access or subscription action is performed.
