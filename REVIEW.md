# Items to confirm with KGWF before launch

While `VITE_SHOW_REVIEW_FLAGS` is not `false`, each item below shows a small
`[VERIFY WITH KGWF]` or `[CONTENT TO BE ADDED]` marker on the site. Once KGWF
has resolved them, fix the content in `src/content/*.ts` and set
`VITE_SHOW_REVIEW_FLAGS=false` in `.env` before building.

## Conflicting facts — `[VERIFY WITH KGWF]`

| # | Item | Where it conflicts | File |
|---|------|--------------------|------|
| 01 | **Address** | CSR document and banner: *141, Krishna Vihar, Gopalpura Bypass, Jaipur 302015*. UPI card and receipt: *120, Vishveshwariya Nagar, Gopalpura Bypass, Jaipur 302018*. The site currently shows the first. | `src/content/site.ts` |
| 03 | **80G wording** | CSR document: “80G Approval No”. Receipt: “Provisional Registration No. under section 80G”. | `src/content/site.ts` |
| 04 | **Years of experience** | Capability Statement says both 15+ and 20+ years. | `src/content/impact.ts`, `src/pages/CorporateLearning.tsx` |
| 05 | **20,000+ / 10,000+ students** | Long-run founder figures. Present as KGWF impact or as the founder’s prior work? Currently labelled “Founder-led”. | `src/content/impact.ts` |
| 06 | **Government of Rajasthan figures** | Case Study 3 says 3,000+ youth; Impact at Scale lists 3,000+ and 1,200+ separately. | `src/content/impact.ts`, `src/content/learning.ts` |
| 07 | **Founder titles** | “Global IT & Automation leader” vs “Global IT Manager” at Amazon; “former” vs current Professor of Practice. | `src/content/people.ts` |
| 08 | **Advisory panel** | “RPS officer, RAS officer” are mentioned, but no named advisor holds those roles. | `src/content/partnerships.ts` |
| 09 | **Credentials** | ₹10M+ grants, NITI Aayog, Govt. of Rajasthan partner, AIM contributor — Capability Statement only. | `src/content/learning.ts` |
| 10 | **Spelling** | “Proff (Dr) Abhineet Saxena”. | `src/content/people.ts` |

## Missing content — `[CONTENT TO BE ADDED]`

- Full story text for each story (`src/content/stories.ts`). Never invent names or quotes; get consent for any named person.
- Programme outcomes and participant numbers per programme.
- Annual and impact reports.
- Portraits of the board and advisors (monograms are shown for now).
- A description of the **KGWF Career Connect — Veterans** programme.
- A **vector logo** (SVG). The current mark is cropped from the Career Connect emblem.
- **Original, high-resolution photographs.** The supplied community photos are 330–690 px wide and were upscaled 2×; they look soft on large screens.
- Real photographs for the four illustrated slots — see `IMAGE-PROMPTS.md`.
