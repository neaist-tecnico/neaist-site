# NEAIST Website

Static website for NEAIST, the African Students' Association at Instituto Superior Tecnico.

## Structure

```text
new-site/
├── index.html
├── noticias.html
├── dia-de-africa.html
├── semana-africa-ulisboa.html
├── loja.html
├── study-squads.html
├── recursos.html
├── contactos.html
├── sobre-nos.html
├── guia-caloiro.html
├── mentoria.html
├── noticia-game-day-2026.html
├── noticia-tomada-posse-2026.html
├── css/
├── js/
├── images/
├── files/
├── media/
├── manifest.json
├── sitemap.xml
└── README.md
```

## Local preview

Use a simple static server from the `new-site/` directory:

```bash
cd new-site
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://localhost:8000/guia-caloiro.html` to preview **Novo no Técnico**,
or `http://localhost:8000/` for the homepage. Run this from the `new-site/`
directory, which is the actual Git repository and deployed site root.

No install or build step is needed. Keep the terminal running while previewing;
refresh after editing (Ctrl+Shift+R for a hard refresh). Press Ctrl+C to stop.
If port 8000 is busy, use 8001 in both the command and URL. In a Windows browser,
the same localhost URL works when the server runs in WSL.

Use the browser's responsive/device toolbar to check the page at 390px and on
desktop. Check the guide, both form actions, mobile navigation, and PT/EN switching.
Previewing does not push or deploy anything. Python's server does not apply
Apache `.htaccess` redirects; use the direct `.html` URL above locally.

## Main runtime files

- `css/style.css`: shared site styling
- `css/animations.css`: animation helpers
- `js/main.js`: navigation, interactions, and shared behavior
- `js/languages.js`: shared PT/EN content and page-specific copy
- `js/news-data.js`: homepage and archive news cards
- `js/gallery-sections.js`: gallery sections, captions, image dimensions and event links
- `css/onboarding.css`: styles scoped to Novo no Técnico
- `js/onboarding.js`: shared onboarding destinations and page accessibility helpers

## Content notes

- HTML pages are hand-maintained static files.
- Shared translations/styles and onboarding assets use `?v=` URLs in the HTML
  to refresh browser caches after deployment. When changing these assets, update
  their version in every referencing page to the first 12 characters of the
  file's SHA-256 hash.
- Images used by the live site are kept under `images/`.
- PDFs and downloadable resources are kept under `files/`.
- Video assets are kept under `media/`.

## SEO maintenance

The deployable HTML includes metadata and JSON-LD directly. No additional browser
library or server build is required. The audit and remaining hosting requirements
are documented in [the SEO report](docs/seo/report.md).

Edit titles, descriptions and social-image assignments in `scripts/seo-pages.json`.
After content changes have been committed, regenerate metadata, source-history
dates, the sitemap and asset hashes with:

```bash
python3 -m venv /tmp/neaist-seo-check
/tmp/neaist-seo-check/bin/pip install -r scripts/requirements-seo.txt
/tmp/neaist-seo-check/bin/python scripts/build_seo.py
/tmp/neaist-seo-check/bin/python scripts/check_seo.py
```

`lastmod` uses meaningful HTML text changes and the content sources declared per
page (news, gallery and guide editions). It is not reset to each deployment date.
Article publication dates must be confirmed before adding `datePublished`.

Edit redirect mappings in `scripts/legacy-redirects.json`, then run
`python3 scripts/build_redirects.py`. Test the generated rules on Apache using
`scripts/check_seo.py --http ORIGIN`; Python's preview server cannot test them.
See [hosting requirements and post-deployment checks](docs/seo/hosting.md).

Social cards are checked-in 1200 × 630 JPEGs in `images/social/`. The optional
`scripts/render-social.mjs` renderer uses Playwright and the existing logo/photos
to rebuild them. The deployment workflow validates the static SEO before rsync
and excludes development scripts and audit reports from publication.

## Novo no Técnico

- Keep the public route `guia-caloiro.html`; the top-level navigation label is “Novos Alunos” in PT and “New Students” in EN, after Académico.
- Both final 2026/2027 guides have **eight pages** and live in
  `files/caloiros/2026-2027/`: `guia-novos-alunos-neaist-2026-2027.pdf` (PT) and
  `new-students-guide-neaist-2026-2027.pdf` (EN). Their cover images in the same
  directory are rendered from the actual first pages.
- Group access and mentor requests use the same existing Google Form. The URL is
  centralized in `NEAIST_ONBOARDING` in `js/onboarding.js`; when changing a destination,
  also update the matching HTML `href` fallbacks so links still work without JavaScript.
- Never publish the private WhatsApp invitation link. Access is requested via the form.
- The whole hub uses the site's PT/EN switch, including accessibility labels and
  page metadata. The selected language is remembered across visits. Its copy lives
  under `onboarding_*` keys in `js/languages.js`; the HTML keeps Portuguese fallbacks.
- Guide links on the onboarding and resources pages, plus the onboarding cover,
  follow the selected language. `applyGuideLanguage()` in `js/languages.js` maps
  the editions through `[data-guide-link]` and `[data-guide-cover]`. Keep Portuguese
  HTML fallbacks in sync. Both languages use the same onboarding form.
