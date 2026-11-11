// Writes dist/<route>/index.html for each route with its own <title>, description and canonical,
// so static hosts serve every URL directly and crawlers see per-page metadata. Also writes sitemap.xml and 404.html.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const domain = "https://burmatex.ro";
const dist = new URL("../dist/", import.meta.url).pathname;
const seo = JSON.parse(readFileSync(new URL("../src/data/seo.json", import.meta.url)));
const collectionsSrc = readFileSync(new URL("../src/data/collections.ts", import.meta.url), "utf8");
const template = readFileSync(join(dist, "index.html"), "utf8");

const escape = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const pages = { ...seo };
for (const m of collectionsSrc.matchAll(/slug: "([^"]+)", name: "([^"]+)"[\s\S]*?summary: "([^"]+)"/g)) {
  const [, slug, name, summary] = m;
  pages[`/colectii/${slug}`] = { title: `${name} — Mochetă Burmatex | Burmatex România`, description: `${summary} Disponibilă prin rețeaua de dealeri Burmatex din România.` };
}

const render = (path, { title, description }) => template
  .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
  .replace(/(<meta name="description" content=")[^"]*"/, `$1${escape(description)}"`)
  .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escape(title)}"`)
  .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${escape(description)}"`)
  .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${domain}${path === "/" ? "/" : path}"`);

for (const [path, meta] of Object.entries(pages)) {
  const dir = join(dist, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), render(path, meta));
}
writeFileSync(join(dist, "404.html"), render("/404", { title: "Pagina nu există | Burmatex România", description: seo["/"].description }).replace('content="index, follow', 'content="noindex, follow'));
const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map(p => `  <url><loc>${domain}${p === "/" ? "/" : p}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
console.log(`Prerendered ${Object.keys(pages).length} routes + 404.html + sitemap.xml`);
