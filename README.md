# Kalindi Global Welfare Foundation — website

Static website for KGWF, Jaipur. *Helping, because we can.*

Built with React 19, React Router 7, Tailwind CSS 4 and Vite. The design
follows Concept A (“Pathway”) from the Phase 1 design review in `design/`,
plus Concept B's donate panel and programme explorer.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Deploy

`dist/` is a static single-page app; every route must fall back to
`index.html`.

- **Netlify:** `public/_redirects` is already included.
- **Vercel:** `vercel.json` is already included.
- **Other hosts (S3/CloudFront, Azure Static Web Apps, nginx):** configure a
  404 → `/index.html` rewrite.

## Before launch

1. Resolve every item in [`REVIEW.md`](REVIEW.md).
2. Copy `.env.example` to `.env` and set `VITE_SHOW_REVIEW_FLAGS=false` to
   hide the review markers.
3. Replace placeholder illustrations and low-resolution photos
   (see [`IMAGE-PROMPTS.md`](IMAGE-PROMPTS.md)).
4. Add the production domain to `og:image` in `index.html` (social previews
   need an absolute URL) and add a `sitemap.xml`.

## Where things live

| Path | What |
|------|------|
| `src/content/` | **All site copy and facts** — edit here, not in pages. |
| `src/pages/` | One file per route. |
| `src/components/sections/` | Reusable homepage/inner-page sections. |
| `src/components/support/` | “Support KGWF” donation panel (UPI QR, bank details, receipts). |
| `src/index.css` | Design tokens (colours, fonts) and global styles. |
| `public/images/` | Optimised photographs, logo mark, UPI QR, illustrations. |
| `design/` | Phase 1 design review sources and curated assets. |

## Routes

`/` · `/about` · `/programmes` · `/programmes/:slug` · `/impact` ·
`/stories` · `/stories/:slug` · `/get-involved` · `/csr-partnerships` ·
`/corporate-learning` · `/contact`

## Notes

- **No payment processing.** Donations are by the official UPI QR or bank
  transfer; the site never collects payment details.
- **Forms** open the visitor's email app with a pre-filled message to
  kalindiglobal@gmail.com. Nothing is sent or stored by the site. To collect
  submissions directly, connect a form service (e.g. Netlify Forms, Formspree)
  in `src/components/blocks/EnquiryForm.tsx`.
- **Numbers** are always labelled by vertical: community programmes,
  founder-led initiatives, or Learning & Leadership.
- Accessibility: skip link, keyboard-operable menus, dialogs and tabs,
  visible focus, AA contrast, and `prefers-reduced-motion` support.
