// Renders every route to static HTML with its own metadata and JSON-LD,
// then writes sitemap.xml (with images), robots.txt, llms.txt and llms-full.txt.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const server = await import(pathToFileURL(join(root, "dist-server/entry-server.js")).href);
const { render, getMeta, allRoutes, collections, families, collectionPath, landings, generalFaqs, priceTiers, site, references, formatArea } = server;
const template = readFileSync(join(dist, "index.html"), "utf8");
const domain = site.domain;
const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function page(path) {
  const meta = getMeta(path);
  const url = `${domain}${path === "/" ? "/" : path}`;
  const image = meta.image ? `${domain}${meta.image}` : `${domain}/img/c/go-to/mocheta-dale-go-to-ambient-2.webp`;
  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": meta.jsonLd }).replace(/</g, "\\u003c");
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
    .replace(/(<meta name="robots" content=")[^"]*"/, meta.noindex ? `$1noindex, follow"` : "$&")
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(meta.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(meta.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${image}"`)
    .replace("<!--head-->", `<script type="application/ld+json">${ld}</script>`)
    .replace("<!--app-->", render(path));
}

// "/x/y" is written as dist/x/y.html: Cloudflare Pages, Netlify and most static hosts serve it at "/x/y"
// (no trailing slash), which matches the canonical URL.
for (const path of allRoutes) {
  const file = path === "/" ? join(dist, "index.html") : join(dist, `${path}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(path));
}
writeFileSync(join(dist, "404.html"), page("/pagina-inexistenta"));

// Sitemap with image entries (collection photos and every colour swatch).
const today = new Date().toISOString().slice(0, 10);
const imagesFor = path => {
  const c = collections.find(c => collectionPath(c.slug) === path);
  if (!c) return [];
  return [...c.rooms.map(r => [r.img, `Mochetă dale Burmatex ${c.name}`]), ...c.swatches.map(s => [s.img, `Mochetă dale Burmatex ${c.name}, nuanța ${s.name}`])];
};
const priority = p => (p === "/" ? "1.0" : p.startsWith("/colectii/") ? "0.8" : "0.9");
writeFileSync(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes.map(p => `  <url><loc>${domain}${p}</loc><lastmod>${today}</lastmod><priority>${priority(p)}</priority>${imagesFor(p).map(([img, t]) => `<image:image><image:loc>${domain}${encodeURI(img)}</image:loc><image:title>${esc(t)}</image:title></image:image>`).join("")}</url>`).join("\n")}
</urlset>
`);

writeFileSync(join(dist, "robots.txt"), `# Burmatex România — content is open to search engines and AI assistants.
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${domain}/sitemap.xml
`);

// llms.txt: a concise map of the site for AI assistants; llms-full.txt: all product facts in plain Markdown.
const line = c => `- [${c.name}](${domain}${collectionPath(c.slug)}): ${c.headline} ${families[c.family].label}, ${c.colours} nuanțe, ${c.formats.join(" / ")}.`;
writeFileSync(join(dist, "llms.txt"), `# ${site.name}

> Mocheta Burmatex® este distribuită în România prin InsightFLOOR (https://insightfloor.ro), dealer oficial Burmatex®. Site-ul prezintă mocheta în dale (mochetă în plăci) produsă de Burmatex în Ossett, West Yorkshire, Marea Britanie: dale 50×50 cm, lamele 25×100 cm, rulouri din fibră presată și covoare de intrare. Vânzarea se face prin rețeaua națională de dealeri. Contact: ${site.email}.

## Ghiduri
${landings.map(l => `- [${l.label}](${domain}${l.path}): ${l.description}`).join("\n")}
- [Selector mochetă](${domain}/selector-mocheta): filtrare după buget, spațiu, design, culoare, acustică și impact de mediu.

## Colecții
${collections.map(line).join("\n")}

## Proiecte Burmatex în România
Peste 2,5 milioane m² de mochetă Burmatex livrați și instalați în România. Lista completă: ${domain}/proiecte
${references.map(r => `- ${r.name}${r.location ? `, ${r.location}` : ""}: ${formatArea(r)}, ${r.collections.join(", ")}`).join("\n")}

## Cataloage în limba română
- [Cataloage și broșuri](${domain}/cataloage): catalogul de produse Burmatex 2026 (PDF), ghidul Design Connection™ (PDF), catalogul go to® (PDF).
- [Design Connection™](${domain}/cataloage/design-connection): combinarea surface trace®, surface story® și surface memory®; culori conectate, culori în contrast, banca de culori.
- [Organic Merge™ și Colour Link™](${domain}/cataloage/organic-merge-colour-link): familii de culori comune între balance®, standing stones®, snowfall®, rocklines® și threads®.
- [Principiile de sustenabilitate Burmatex](${domain}/cataloage/principii-sustenabilitate): Net Zero, fir cu amprentă negativă de carbon, BioBase®, 100% energie regenerabilă, Zero Landfill, EPD.

## Parteneri
- [Devino dealer Burmatex](${domain}/devino-dealer): program pentru magazine de pardoseli, firme de montaj și amenajări din toată România.
- [Contact, mostre și oferte](${domain}/contact)

## Optional
- [Toate datele despre produse](${domain}/llms-full.txt)
`);

const full = collections.map(c => `## ${c.name}
URL: ${domain}${collectionPath(c.slug)}
Familie: ${families[c.family].label}
${c.summary}
Recomandare: ${c.use}
Formate: ${c.formats.join(", ")}
Nuanțe (${c.colours}): ${c.swatches.map(s => (s.code ? `${s.name} (${s.code})` : s.name)).join(", ")}
Clasă de preț: ${priceTiers[c.priceTier].label}${c.inStock ? "\nDisponibil din stoc în România" : ""}
${c.specs.map(([k, v]) => `- ${k}: ${v}`).join("\n")}${c.recycled ? `\n- Conținut reciclat total: ${c.recycled}` : ""}${c.gwp ? `\n- GWP (EPD): ${c.gwp} kg CO2e` : ""}${c.impactDb ? `\n- Reducerea zgomotului de impact: ${c.impactDb} dB` : ""}
Documente: ${c.docs.map(d => `${d.label} ${d.href}`).join(" | ")}
`).join("\n");
writeFileSync(join(dist, "llms-full.txt"), `# ${site.name} — date complete despre produse

Sursa datelor: paginile și fișele tehnice oficiale Burmatex (burmatex.co.uk). Valorile nepublicate de producător sunt omise.

## Întrebări frecvente despre mocheta în dale
${generalFaqs.map(f => `### ${f.q}\n${f.a}`).join("\n\n")}

${full}`);

rmSync(join(root, "dist-server"), { recursive: true, force: true });
console.log(`Prerendered ${allRoutes.length} routes, 404, sitemap (${allRoutes.length} URLs), robots.txt, llms.txt, llms-full.txt`);
