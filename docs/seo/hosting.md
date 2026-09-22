# Técnico hosting and deployment requirements

The deployment root is `new-site/`. GitHub Actions copies it with rsync over SSH to
the AFS path held in `DEPLOY_PATH`. This is static HTML/CSS/JavaScript; only the
separate tournament uses PHP. There is no Next.js/Vercel/WordPress runtime.

Técnico documents [AFS-backed group web hosting](https://si.tecnico.ulisboa.pt/servicos/servidores-e-dados/paginas-web/).
Production responses identify Apache 2.4.68 (Debian). The repository's existing
`.htaccess` rules were **not effective on production during the audit**:

| Request | Observed production status before this change |
| --- | --- |
| `http://neaist.tecnico.ulisboa.pt/` | 200, no redirect |
| `/index.html` | 200, no redirect |
| `/sobre-nos` | 200, extensionless duplicate |
| `/sobre-nos/` | 404, despite the existing redirect rule |
| Three legacy PDFs specified in the brief | 404 |
| An arbitrary missing URL | 404, Apache's default error page |

The evidence is saved in [production-before.json](production-before.json). It
does not establish whether overrides are disabled, the file is absent from the
active document root, or a different virtual-host configuration is being used.
No server configuration or access logs are available in this checkout.

## What the server administrator needs to confirm

1. The active document root is the AFS directory receiving the workflow's rsync,
   and its `.htaccess` matches this repository. rsync includes dotfiles.
2. `mod_rewrite`, `mod_headers`, `mod_dir`, and `mod_authz_core` are available.
3. The document-root directory permits the directives in `.htaccess`. For example,
   with the **actual** AFS path substituted:

   ```apache
   <Directory "/afs/ACTUAL-GROUP-PATH/web">
       AllowOverride FileInfo AuthConfig Indexes Options=Indexes,MultiViews
       Require all granted
   </Directory>
   ```

   If overrides cannot be enabled, the administrator can instead include the
   generated `.htaccess` contents in that `<Directory>` block in the native
   virtual-host configuration. Keep the rules in directory context. Apply the
   tournament `X-Robots-Tag` header to its subdirectory as well.
4. Confirm how HTTPS reaches Apache. The rules recognise native TLS or a trusted
   `X-Forwarded-Proto: https` header. If TLS terminates upstream, the proxy must set
   or overwrite that header; otherwise HTTPS enforcement can loop. An equivalent
   HTTPS redirect at the trusted virtual-host/proxy layer is also appropriate.
5. Disable `MultiViews` for this document root: otherwise Apache can serve
   extensionless duplicates through content negotiation. Preserve PHP handlers
   for the tournament; this change adds no PHP/front-controller routing.
6. Check the server configuration and rerun the production HTTP verification below.

The rules do not redirect unknown URLs to the homepage. Known old WordPress
documents and IDs redirect directly to their replacements. Unmapped numeric
WordPress IDs return 410; unrelated missing paths remain real 404s.

## Local verification

An isolated Apache 2.4.58 instance was used with `AllowOverride All` and the
repository as document root. The HTTP checks actually requested the old paths,
checked the 301 `Location`, then requested each final destination and checked
200/no further redirect. The results are in
[redirect-verification.json](redirect-verification.json).

The fixture simulates the production Host and the trusted HTTPS proxy header.
It also checks HTTP-to-HTTPS and alternate-host consolidation. This proves local
Apache rule behaviour, **not that production has loaded the rules**.

Python's `http.server` previews the HTML, images and language switch, but does not
implement `.htaccess`, redirects, header rules or custom error responses.

## After deployment

Use the same validator from the repository, with the optional development
dependencies installed:

```bash
python3 scripts/check_seo.py --http https://neaist.tecnico.ulisboa.pt \
  --output /tmp/neaist-production-check.json
```

Also check plain HTTP separately:

```bash
curl -I http://neaist.tecnico.ulisboa.pt/
curl -I https://neaist.tecnico.ulisboa.pt/index.html
curl -I https://neaist.tecnico.ulisboa.pt/wp-content/uploads/2022/02/Guia-para-Novos-Alunos.pdf
curl -I https://neaist.tecnico.ulisboa.pt/a-page-that-does-not-exist
```

Expected statuses: 301, 301, 301, 404. Inspect `Location` rather than following
redirects blindly. New social images must return 200 with `image/jpeg` at their
absolute production URLs. Request fresh previews in the relevant social-platform
debuggers only after deployment; previously cached previews can persist.

Search Console access is needed to submit the corrected sitemap, inspect Google’s
rendered pages and request recrawls. Preserve the existing verification file.
Actual indexing, ranking, rich-result eligibility and preview cache refreshes are
controlled by external services, not by this repository.
