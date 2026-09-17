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
- `js/gallery-data.js`: gallery image list
- `css/onboarding.css`: styles scoped to Novo no Técnico
- `js/onboarding.js`: shared onboarding destinations and page accessibility helpers

## Content notes

- HTML pages are hand-maintained static files.
- Images used by the live site are kept under `images/`.
- PDFs and downloadable resources are kept under `files/`.
- Video assets are kept under `media/`.

## Novo no Técnico

- Keep the public route `guia-caloiro.html`; the navigation label is “Novo no Técnico”.
- The current guide is the verified **eight-page final 2026/2027 edition** at
  `files/caloiros/2026-2027/guia-novos-alunos-neaist-2026-2027.pdf`. Its cover image
  in the same directory is rendered from the actual first page.
- Group access and mentor requests use the same existing Google Form. The URL is
  centralized in `NEAIST_ONBOARDING` in `js/onboarding.js`; when changing a destination,
  also update the matching HTML `href` fallbacks so links still work without JavaScript.
- Never publish the private WhatsApp invitation link. Access is requested via the form.
- The whole hub uses the site's PT/EN switch, including accessibility labels and
  page metadata. The selected language is remembered across visits. Its copy lives
  under `onboarding_*` keys in `js/languages.js`; the HTML keeps Portuguese fallbacks.
- The same guide and onboarding form are linked in both languages. The English
  page identifies the guide PDF as Portuguese; the PDF itself is not translated.
