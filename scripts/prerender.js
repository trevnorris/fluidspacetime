// Post-build step: render each route to a static HTML file in dist/.
//
//   dist/ (from `vite build`) contains index.html (the template with hashed
//   script/style tags) and the client assets. We import the SSR bundle from
//   .server-build/, render each route through React Router's StaticRouter,
//   inject the rendered HTML + per-route SEO tags into a copy of the template,
//   and write one index.html per route.

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = join(root, 'dist');
const serverDir = join(root, '.server-build');

const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  throw new Error(`missing ${templatePath} — run \`vite build\` first`);
}
const template = readFileSync(templatePath, 'utf-8');

const serverEntry = pathToFileURL(join(serverDir, 'entry-server.js')).href;
const { render } = await import(serverEntry);
const { allRoutes, SITE_ORIGIN } = await import(
  pathToFileURL(join(serverDir, 'seo.js')).href
).catch(async () => {
  // seo.js may not be emitted as a separate chunk; fall back to pulling it
  // directly from source (Node can load plain ES modules).
  return await import(pathToFileURL(join(root, 'src/data/seo.js')).href);
});

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);
}

function seoBlock(seo) {
  const tags = [];
  tags.push(`<title>${escapeHtml(seo.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(seo.description)}" />`);
  tags.push(`<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`);
  if (seo.noindex) {
    tags.push(`<meta name="robots" content="noindex" />`);
  }
  tags.push(`<meta property="og:type" content="${escapeHtml(seo.type || 'website')}" />`);
  tags.push(`<meta property="og:title" content="${escapeHtml(seo.title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(seo.description)}" />`);
  tags.push(`<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`);
  tags.push(`<meta property="og:site_name" content="Fluid Spacetime" />`);
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`);
  return tags.join('\n  ');
}

function outputPathFor(route) {
  if (route === '/') return join(distDir, 'index.html');
  const rel = route.replace(/^\//, '').replace(/\/$/, '');
  return join(distDir, rel, 'index.html');
}

let count = 0;
for (const route of allRoutes()) {
  const { html, seo } = render(route);
  const page = template
    .replace('<!--ssr-outlet-->', html)
    .replace('<!--seo-outlet-->', seoBlock(seo));
  const out = outputPathFor(route);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page);
  count++;
  console.log(`  → ${route.padEnd(40)}  ${out.replace(root + '/', '')}`);
}

// sitemap.xml
const urls = allRoutes()
  .map((r) => `  <url><loc>${SITE_ORIGIN}${r === '/' ? '/' : r}</loc></url>`)
  .join('\n');
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
writeFileSync(join(distDir, 'sitemap.xml'), sitemapXml);

// robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
writeFileSync(join(distDir, 'robots.txt'), robots);

console.log(`\nprerendered ${count} routes · wrote sitemap.xml, robots.txt`);
