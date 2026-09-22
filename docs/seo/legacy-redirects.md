# Legacy URL migration map

Source: the migration brief, existing redirects, and the WordPress HTML/REST export beside `new-site/`.

Status below is the **configured** status. See `redirect-verification.json` for actual local Apache HTTP results and `production-before.json` for the production baseline. Rules are not claimed live until post-deployment verification passes.

| Old path | Canonical target | Configured HTTP status | Reason |
| --- | --- | --- | --- |
| `/wp-content/uploads/2022/02/Guia-para-Novos-Alunos.pdf` | `https://neaist.tecnico.ulisboa.pt/guia-caloiro.html` | 301 | Verified legacy new-student guide; current bilingual onboarding hub. |
| `/wp-content/uploads/2022/02/Guia-1-Primeiros-Passos-Caloiros-1.pdf` | `https://neaist.tecnico.ulisboa.pt/guia-caloiro.html` | 301 | Legacy first-steps guide specified in the migration brief. |
| `/wp-content/uploads/2022/03/Regulamento-Mentores-1.pdf` | `https://neaist.tecnico.ulisboa.pt/guia-caloiro.html` | 301 | Mentor regulations; onboarding destination explicitly requested in the brief. |
| `/wp-content/uploads/2022/02/Guia-2-Proximos-Passos-Caloiros.pdf` | `https://neaist.tecnico.ulisboa.pt/guia-caloiro.html` | 301 | Second guide linked from the exported WordPress new-student page. |
| `/guia-do-caloiro/` | `https://neaist.tecnico.ulisboa.pt/guia-caloiro.html` | 301 | WordPress page 29, confirmed by exported REST data and HTML. |
| `/programa-mentorado/` | `https://neaist.tecnico.ulisboa.pt/mentoria.html` | 301 | WordPress page 544; existing mentoring programme page. |
| `/sobre-nos/` | `https://neaist.tecnico.ulisboa.pt/sobre-nos.html` | 301 | WordPress page 22; association profile. |
| `/contactos/` | `https://neaist.tecnico.ulisboa.pt/contactos.html` | 301 | WordPress page 20; contact information. |
| `/recursos/` | `https://neaist.tecnico.ulisboa.pt/recursos.html` | 301 | WordPress page 27; academic resources. |
| `/252-2/` | `https://neaist.tecnico.ulisboa.pt/galeria.html` | 301 | WordPress page 252 was the gallery, not a news article. |
| `/galeria/` | `https://neaist.tecnico.ulisboa.pt/galeria.html` | 301 | Existing gallery alias in the repository redirect configuration. |
| `/sessoes-informativas/` | `https://neaist.tecnico.ulisboa.pt/noticias.html` | 301 | WordPress page 737; former information-session listing maps to the initiatives archive. |
| `/inicio/` | `https://neaist.tecnico.ulisboa.pt/` | 301 | WordPress page 18 has slug inicio and homepage URL in exported REST data. |
| `/files/Guia-para-Novos-Alunos.pdf` | `https://neaist.tecnico.ulisboa.pt/files/caloiros/2026-2027/guia-novos-alunos-neaist-2026-2027.pdf` | 301 | Preserve the existing static-site PDF download redirect. |
| `/files/Guia-2-Proximos-Passos-Caloiros.pdf` | `https://neaist.tecnico.ulisboa.pt/files/caloiros/2026-2027/guia-novos-alunos-neaist-2026-2027.pdf` | 301 | Preserve the existing static-site PDF download redirect. |
| `/files/GUIA PARA NOVOS ALUNOS NEAIST.docx (1).pdf` | `https://neaist.tecnico.ulisboa.pt/files/caloiros/2026-2027/guia-novos-alunos-neaist-2026-2027.pdf` | 301 | Preserve the previous uploaded-guide download URL. |

## WordPress IDs

Each ID is supported as `/?p=ID`, `/?page_id=ID`, `/index.php?p=ID`, `/index.html?p=ID` and the exported `/index.html%3Fp=ID.html` URL, directly to the target below.

| ID | Canonical target | Configured status |
| --- | --- | --- |
| 18 | `https://neaist.tecnico.ulisboa.pt/` | 301 |
| 20 | `https://neaist.tecnico.ulisboa.pt/contactos.html` | 301 |
| 22 | `https://neaist.tecnico.ulisboa.pt/sobre-nos.html` | 301 |
| 27 | `https://neaist.tecnico.ulisboa.pt/recursos.html` | 301 |
| 29 | `https://neaist.tecnico.ulisboa.pt/guia-caloiro.html` | 301 |
| 252 | `https://neaist.tecnico.ulisboa.pt/galeria.html` | 301 |
| 544 | `https://neaist.tecnico.ulisboa.pt/mentoria.html` | 301 |
| 737 | `https://neaist.tecnico.ulisboa.pt/noticias.html` | 301 |

`/index.html`, `/index.htm`, `/index.php` and their case variants consolidate to `/`. Known page extensionless, case and trailing-slash variants consolidate to their existing `.html` routes. Unknown numeric WordPress IDs return 410; unrelated missing URLs, old CSS/JS, feeds and WordPress API endpoints return 404. There is no blanket homepage redirect.

No historical server/access logs are available in the repository. Additional mappings should be added only with evidence of an equivalent destination.
