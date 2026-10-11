# CA Imesh Adhikari — Website

Personal-brand website for CA Imesh Adhikari (Imesh & Associates), built from `CA_Website_Blueprint.pdf`.

- **Astro** static site: fast, SEO-friendly, free to host.
- **Decap CMS** at `/admin`: Imesh writes blogs, uploads resources and edits his details in a browser, with no code.
- **WhatsApp everywhere**: floating button, mobile sticky bar, and contact and booking forms that open WhatsApp with the message pre-filled.

## Run locally

Requires [Node.js 20+](https://nodejs.org).

```bash
npm install
npm run dev          # site at http://localhost:4321
npm run cms          # (second terminal) lets /admin edit local files without GitHub
```

## Where things live

| What | File |
| --- | --- |
| Name, photo, **WhatsApp number**, phone, email, offices, stats, socials | `src/data/site.json` (or Admin → Settings) |
| Blog articles | `src/content/blog/*.md` |
| Downloads / lead magnets | `src/content/resources/*.md`, files in `public/uploads/` |
| Services | `src/content/services/*.md` |
| About + legal pages | `src/content/pages/*.md` |
| Testimonials, FAQs | `src/data/testimonials.json`, `src/data/faqs.json` |
| Blog categories | `src/data/categories.ts` **and** `public/admin/config.yml` (keep both in sync) |
| Colours, fonts | `:root` in `src/styles/global.css` |

### WhatsApp
Set `whatsapp.number` in `site.json` to digits only with the country code, e.g. `9779812345678`. Every link is built from it by `src/lib/whatsapp.ts`. Pages pre-fill context-specific messages: the service name, article title, requested resource, or booking details.

Resources set to **"Request on WhatsApp"** act as lead magnets: the visitor messages Imesh to receive the file.

## Pages

`/` home · `/about/` · `/services/` + detail pages · `/blog/` + categories + articles · `/resources/` · `/tools/` (VAT, EMI) · `/book/` · `/contact/` (+FAQ) · `/legal/disclaimer|privacy|terms/` · `/rss.xml` · `/sitemap-index.xml` · `/admin/`

## Deploy (Netlify, free)

1. Push this folder to a GitHub repository.
2. Netlify → *Add new site → Import from GitHub*. Build settings come from `netlify.toml`.
3. Enable CMS login: create a GitHub OAuth App (callback `https://api.netlify.com/auth/done`), then add it in Netlify → *Site configuration → Access & security → OAuth → GitHub*.
4. In `public/admin/config.yml`, set `repo: OWNER/REPO` and `site_url`. Give Imesh's GitHub account write access to the repo.
5. Set the real domain in `astro.config.mjs` and `public/robots.txt`.

After that, Imesh logs in at `https://<domain>/admin`. Each publish commits to GitHub, and Netlify rebuilds within about a minute.

## Before launch checklist
- [ ] Replace every placeholder in `site.json` (WhatsApp number, phone, email, addresses, photo)
- [ ] Write About page, service descriptions; delete `sample-post.md`
- [ ] Have disclaimer / privacy / terms reviewed
- [ ] Review content against the **ICAN Code of Ethics** on publicity and solicitation (factual, no comparative claims)
- [ ] Add Google Analytics ID; verify in Google Search Console; create Google Business Profile

## Phase 2 (from the blueprint)
- Income tax / TDS / salary calculators (after verifying current slabs)
- Online booking with payment (Cal.com + eSewa/Khalti): set `bookingUrl` to show it on `/book/`
- Email newsletter automation (Brevo): set `newsletterFormAction`
- Courses & templates store, Startup Corner, Find-a-Professional directory
