# KGWF Website

Website for **Kalindi Global Welfare Foundation (KGWF)**, a registered charitable organisation in Jaipur, Rajasthan. *Helping, because we can.*

## Use case

KGWF works with underserved communities through education, skill development, sustainability, community wellness and volunteerism. The site gives it a credible public home for:

- **Donors:** donate via the official UPI QR or bank transfer, with receipt instructions. No payments are processed on the site.
- **Volunteers and mentors:** see how to get involved and get in touch.
- **CSR partners:** see what KGWF implements, how a partnership runs, and send an enquiry.
- **Corporate clients:** explore the Learning & Leadership training offer.
- **Everyone:** programmes, impact figures, stories, leadership and registration details.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the build at http://localhost:4173
```

## Run with Docker

```bash
docker build -t kgwf-website .
docker run -p 8080:80 kgwf-website   # http://localhost:8080
```

## Editing content

All text and facts live in `src/content/`. Items still to confirm with KGWF are listed in `REVIEW.md`. Set `VITE_SHOW_REVIEW_FLAGS=false` in `.env` to hide the review markers once they're resolved.
