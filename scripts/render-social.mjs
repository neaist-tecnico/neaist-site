// Development-only renderer. Uses existing NEAIST assets; no generated logos/photos.
// npm install --no-save playwright, then: node scripts/render-social.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
async function dataUrl(file) {
  const mime = file.endsWith('.png') ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,${(await fs.readFile(path.join(root, file))).toString('base64')}`;
}
const logo = await dataUrl('images/branding/neaist-logo.png');
const cards = [
  ['neaist', 'NEAIST', 'Núcleo de Estudantes Africanos<br>do Instituto Superior Técnico', null, 'Comunidade · Cultura · Apoio académico'],
  ['novos-alunos', 'Novo no<br>Técnico?', 'Guia para Novos Alunos<br>2026/2027', 'files/caloiros/2026-2027/guia-novos-alunos-2026-2027-capa.jpg', 'Integração · Mentoria · Comunidade'],
  ['study-squads', 'Estudar em<br>comunidade.', 'Study Squads NEAIST<br>Apoio académico entre colegas', 'files/study-squads/study-squads-poster.png', 'Instituto Superior Técnico'],
  ['dia-de-africa', 'Dia de África<br>no Técnico', 'Cultura, reflexão e comunidade<br>27 de maio de 2026', 'images/news/dia-de-africa-2026/group-photo.jpg', 'Técnico Innovation Center'],
  ['tomada-posse', 'Um novo<br>mandato.', 'Tomada de posse NEAIST<br>2025/2026', 'images/news/tomada-posse-direcao-neaist-2026.jpeg', 'Representação · Comunidade · Compromisso'],
  ['game-day', 'Game Day<br>NEAIST', 'Uma tarde de jogos e convívio<br>23 de abril de 2026', 'images/news/game-day/img-7765.jpeg', 'Instituto Superior Técnico'],
  ['semana-africa', 'Semana de<br>África ULisboa', 'Sem Margem · 2026<br>Com a participação do NEAIST', 'images/news/semana-de-africa-ulisboa.jpg', 'Africa Quiz Challenge'],
  ['galeria', 'A nossa<br>comunidade.', 'Galeria NEAIST<br>Encontros que nos aproximam', 'images/news/dia-de-africa-2026/group-photo.jpg', 'Instituto Superior Técnico'],
  ['loja', 'Leva o NEAIST<br>contigo.', 'Merchandising oficial<br>do núcleo', 'images/merch/loja-preview.png', 'Loja NEAIST']
];
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--no-sandbox']
});
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await fs.mkdir(path.join(root, 'images/social'), { recursive: true });
  for (const [name, title, subtitle, source, note] of cards) {
    const picture = source ? await dataUrl(source) : logo;
    await page.setContent(`<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><style>
      *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;overflow:hidden;background:#102d3d;color:#fff;font-family:Arial,sans-serif}
      .accent{position:absolute;left:0;top:0;width:12px;height:630px;background:#21a1de}
      .brand{position:absolute;left:62px;top:42px;display:flex;align-items:center;gap:18px;font-size:30px;font-weight:700;letter-spacing:2px}
      .brand img{width:68px;height:68px;object-fit:contain;background:white;border-radius:50%;padding:3px}
      h1{position:absolute;left:64px;top:166px;width:625px;margin:0;font-size:${name === 'neaist' ? 84 : 57}px;line-height:1.08;letter-spacing:-2px}
      .subtitle{position:absolute;left:66px;top:${name === 'neaist' ? 282 : 325}px;margin:0;width:610px;font-size:${name === 'neaist' ? 30 : 27}px;line-height:1.45;color:#d6ecf7}
      .note{position:absolute;left:66px;bottom:99px;font-size:21px;color:#b2ddef}
      .site{position:absolute;left:66px;bottom:43px;font-size:20px;letter-spacing:.3px}
      .rule{position:absolute;left:66px;bottom:78px;width:72px;height:4px;background:#21a1de}
      .visual{position:absolute;right:42px;top:43px;width:440px;height:514px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:${name === 'neaist' ? 'transparent' : '#f4fafd'};overflow:hidden}
      .visual img{display:block;width:100%;height:100%;object-fit:contain}
      .visual.logo{right:70px;top:122px;width:330px;height:350px}
      .visual.logo img{background:white;border-radius:50%;padding:9px;width:320px;height:320px}
    </style></head><body><div class="accent"></div><div class="brand"><img src="${logo}" alt="">NEAIST</div>
    <h1>${title}</h1><p class="subtitle">${subtitle}</p><p class="note">${escape(note)}</p><div class="rule"></div><div class="site">neaist.tecnico.ulisboa.pt</div>
    <div class="visual${source ? '' : ' logo'}"><img src="${picture}" alt=""></div></body></html>`);
    await page.evaluate(async () => { await Promise.all([...document.images].map(img => img.decode())); });
    await page.screenshot({ path: path.join(root, 'images/social', `${name}.jpg`), type: 'jpeg', quality: 90 });
    console.log(`${name}.jpg — 1200 × 630`);
  }
} finally { await browser.close(); }
