# Uzair & Daud Communication Centers — static website

Bilingual (Urdu RTL / English LTR) static site. No build step, no dependencies.

## Structure
- `index.html` — markup (English text is the source; Urdu lives in `js/script.js`)
- `css/style.css` — aurora/glass design (dark + light theme), logical properties for RTL/LTR
- `js/script.js` — language + theme switch (saved in localStorage, default Urdu, dark), mobile menu, active nav, reveal, copy number
- `images/` — optimized proprietor photos (`dawod.jpg`, `uzair.jpg`)

## Run
Open `index.html`, or deploy the folder to any static host (Vercel, Netlify, GitHub Pages).

## Editing text
Every translatable element has a `data-i18n="key"` attribute. Change English in `index.html`, Urdu in the `UR` object in `js/script.js`.

## To add later (not provided, so not invented)
Canonical URL, exact addresses, email, social links, map embeds.
