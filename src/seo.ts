// Single source of truth for page metadata and structured data, used both at build time (static HTML)
// and in the browser (title updates on navigation).
import { collections, collectionBySlug, collectionPath, families, plainName, type Collection } from "./data/collections";
import { generalFaqs, landingByPath, landings, type Faq } from "./data/landings";
import { dealerFaqs } from "./data/faqs";
import { steps as installSteps, technicalFaqs } from "./data/technical";
import { site } from "./data/site";
import { formatArea, references, referencesFor, TOTAL_M2 } from "./data/references";

export type Meta = { title: string; description: string; image?: string; jsonLd: object[]; noindex?: boolean };

const abs = (path: string) => `${site.domain}${path}`;
const clip = (text: string, max = 158) => (text.length <= max ? text : `${text.slice(0, text.lastIndexOf(" ", max - 1))}…`);
const ORG_ID = `${site.domain}/#organizatie`;

const organization = {
  "@type": "Organization", "@id": ORG_ID, name: site.dealer.name, alternateName: site.name, sameAs: [site.dealer.url], url: `${site.domain}/`, email: site.email, ...(site.phone ? { telephone: site.phone, contactPoint: { "@type": "ContactPoint", telephone: site.phone, email: site.email, contactType: "sales", areaServed: "RO", availableLanguage: ["ro", "en"] } } : {}),
  logo: abs("/favicon.svg"), areaServed: { "@type": "Country", name: "România" },
  brand: { "@type": "Brand", name: "Burmatex" },
  description: "InsightFLOOR este dealerul oficial Burmatex® în România: mochetă în dale, lamele, rulouri și covoare de intrare produse în Marea Britanie, livrate și montate direct sau prin rețeaua națională de parteneri.",
  knowsAbout: ["mochetă dale", "mochetă în plăci", "mochetă pentru birouri", "covoare de intrare", "pardoseli textile comerciale"],
};
const website = { "@type": "WebSite", "@id": `${site.domain}/#website`, url: `${site.domain}/`, name: site.name, inLanguage: "ro-RO", publisher: { "@id": ORG_ID } };

const breadcrumb = (items: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: [["Acasă", "/"] as [string, string], ...items].map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});
const faqPage = (faqs: Faq[]) => ({ "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
const itemList = (items: Collection[], name: string) => ({
  "@type": "ItemList", name, numberOfItems: items.length,
  itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: abs(collectionPath(c.slug)), name: `Mochetă Burmatex ${c.name}` })),
});

export function collectionFaqs(c: Collection): Faq[] {
  const name = c.name;
  const faqs: Faq[] = [
    { q: `În ce formate este disponibilă mocheta ${name}?`, a: `${name} este disponibilă în: ${c.formats.join(", ")}.` },
    { q: `Câte nuanțe are ${name}?`, a: `${c.colours} ${c.coloursNote ? `(${c.coloursNote})` : "nuanțe"}. Toate nuanțele sunt prezentate pe această pagină; culoarea finală se alege pe mostră fizică.` },
  ];
  const cls = c.specs.find(([label]) => label === "Clasă de utilizare");
  if (cls) faqs.push({ q: `Ce clasă de trafic are ${name}?`, a: `Clasa ${cls[1]}, conform fișei tehnice a producătorului.` });
  if (c.carbon) faqs.push({ q: `Este ${name} o mochetă sustenabilă?`, a: `${c.carbon === "neutral" ? "Producătorul o prezintă ca neutră din punctul de vedere al carbonului (reducere de impact plus compensare la sursă; nu înseamnă emisii zero)." : "Producătorul o încadrează în gama cu amprentă de carbon redusă."}${c.recycled ? ` Conținut reciclat total: ${c.recycled}.` : ""}${c.gwp ? ` GWP declarat în EPD: ${c.gwp} kg CO₂e.` : ""}` });
  const refs = referencesFor(c.slug);
  if (refs.length) faqs.push({ q: `Unde a fost folosită mocheta ${name} în România?`, a: `În ${refs.length === 1 ? "proiectul" : "proiecte precum"} ${refs.slice(0, 6).map(r => `${r.name}${r.location ? ` (${r.location})` : ""}, ${formatArea(r)}`).join("; ")}.` });
  faqs.push({ q: `De unde cumpăr ${name} în România?`, a: `Prin InsightFLOOR, dealer oficial Burmatex® în România, direct sau prin rețeaua sa de parteneri din toată țara. ${c.inStock ? "Colecția este disponibilă din stoc în România. " : "Termenul de livrare se confirmă la ofertare. "}Solicitați mostre sau ofertă de pe această pagină.` });
  return faqs;
}

function productLd(c: Collection) {
  const images = [...c.rooms.map(r => r.img), ...c.swatches.slice(0, 6).map(s => s.img)].map(abs);
  const props: [string, string][] = [...c.specs, ["Număr de nuanțe", String(c.colours)], ["Familie", families[c.family].label]];
  if (c.gwp) props.push(["GWP (EPD)", `${c.gwp} kg CO₂e`]);
  if (c.recycled) props.push(["Conținut reciclat total", c.recycled]);
  return {
    "@type": "Product", "@id": `${abs(collectionPath(c.slug))}#produs`,
    name: `Mochetă dale Burmatex ${c.name}`, description: c.summary,
    brand: { "@type": "Brand", name: "Burmatex" },
    manufacturer: { "@type": "Organization", name: "Burmatex", url: "https://www.burmatex.co.uk" },
    category: `Mochetă dale / ${families[c.family].label}`,
    image: images,
    color: c.swatches.map(s => s.name).join(", "),
    additionalProperty: props.map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
    ...(c.priceFrom ? { offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: c.priceFrom, availability: c.inStock ? "https://schema.org/InStock" : "https://schema.org/PreOrder", seller: { "@id": ORG_ID } } } : {}),
  };
}

export const staticPages: Record<string, { title: string; description: string; crumb?: string }> = {
  "/": { title: "Mochetă dale Burmatex — mochetă britanică | Burmatex România", description: "Mochetă în dale 50×50, lamele, rulouri și covoare de intrare Burmatex, produse în UK. Peste 400 de nuanțe, clasa 33, stoc în România, dealeri în toată țara." },
  "/colectii": { title: "Colecții mochetă dale Burmatex — 22 colecții, 405 nuanțe", description: "Toate colecțiile Burmatex: buclă multilevel, buclă uniformă, fir tăiat, fibră presată, covoare de intrare. Peste 400 de nuanțe cu imagini, fișe tehnice și EPD.", crumb: "Colecții" },
  "/selector-mocheta": { title: "Selector mochetă: buget, design, culoare | Burmatex România", description: "Filtrați colecțiile de mochetă în dale Burmatex după buget, spațiu, design, culoare, acustică și impact de mediu. Comparați până la 3 colecții.", crumb: "Selector mochetă" },
  "/devino-dealer": { title: "Devino dealer Burmatex — mochetă dale | Burmatex România", description: "Magazin de pardoseli, firmă de montaj sau amenajări? Vindeți mocheta Burmatex: stoc în România, mostre, documentație în română și suport la ofertare.", crumb: "Devino dealer" },
  "/de-ce-burmatex": { title: "De ce Burmatex — producător britanic de mochetă din 1967", description: "Burmatex produce mochetă la Ossett, UK: reciclare textilă din 1912, mochetă din 1967, ISO 9001 și 14001, fire reciclate, EPD și parcurs către Net Zero.", crumb: "De ce Burmatex" },
  "/resurse": { title: "Resurse tehnice mochetă: fișe, EPD, montaj | Burmatex România", description: "Fișe tehnice, declarații de mediu (EPD), broșuri și paletare Burmatex, plus ghiduri de montaj, întreținere și pregătire a suportului pentru mocheta în dale.", crumb: "Resurse" },
  "/proiecte": { title: "Proiecte cu mochetă Burmatex în România | Burmatex România", description: `Peste 2,5 milioane m² de mochetă Burmatex livrați în România: Nokia, Continental, ING, Raiffeisen, Aeroportul Otopeni, Holcim, Ursus Breweries și alte ${references.length - 7} proiecte.`, crumb: "Proiecte" },
  "/ghid-tehnic": { title: "Montaj mochetă dale: suport, adezivi, întreținere | Burmatex", description: "Ghid tehnic pentru mocheta în dale Burmatex: pregătirea suportului, aclimatizare 48 h, adezivi tackifier, montaj pas cu pas, direcții de montaj, întreținere și pete.", crumb: "Ghid tehnic" },
  "/cataloage": { title: "Cataloage mochetă Burmatex în română (PDF) | Burmatex România", description: "Catalogul de produse Burmatex 2026, ghidul Design Connection™, catalogul go to® și principiile de sustenabilitate, în limba română. Citiți online sau descărcați PDF.", crumb: "Cataloage" },
  "/cataloage/design-connection": { title: "Design Connection™ — surface trace, story, memory | Burmatex", description: "Ghidul Design Connection™ în română: cum combinați surface trace®, surface story® și surface memory®. Culori conectate, culori în contrast și banca de culori.", crumb: "Design Connection™" },
  "/cataloage/organic-merge-colour-link": { title: "Organic Merge™ și Colour Link™ — concepte Burmatex", description: "Organic Merge™ și Colour Link™ în română: familii de culori comune pentru balance®, standing stones®, snowfall®, rocklines® și threads®, cu toate nuanțele.", crumb: "Organic Merge™ și Colour Link™" },
  "/cataloage/principii-sustenabilitate": { title: "Principiile de sustenabilitate Burmatex (eco₂matters) | RO", description: "Principiile de sustenabilitate Burmatex în română: drumul spre Net Zero, fir cu amprentă negativă, BioBase®, energie regenerabilă, Zero Landfill, EPD.", crumb: "Principii de sustenabilitate" },
  "/cataloage/fir-biogenic": { title: "Fir bio-genic Burmatex: threads, tivoli, tivoli mist | RO", description: "Primul fir 100% reciclat din deșeuri organice: threads®, tivoli® și tivoli mist® cu amprentă redusă de carbon, suport BioBase® și montaj circular IOBAC.", crumb: "Fir bio-genic" },
  "/cataloage/well": { title: "Mochetă Burmatex și WELL Building Standard | Burmatex România", description: "Cum contribuie mocheta în dale Burmatex la WELL: VOC A+ și M1, intrare sănătoasă, materiale fără substanțe toxice, mediu ușor de curățat, biofilie, EPD.", crumb: "WELL Building Standard" },
  "/contact": { title: "Contact — mostre, oferte, dealeri | Burmatex România", description: "Solicitați mostre de mochetă Burmatex, o ofertă de preț sau datele dealerului din zona dumneavoastră.", crumb: "Contact" },
};

export const allRoutes = [...Object.keys(staticPages), ...landings.map(l => l.path), ...collections.map(c => collectionPath(c.slug))];

export function getMeta(path: string): Meta {
  const base = [organization, website];
  const stat = staticPages[path];
  if (stat) {
    const ld: object[] = [...base];
    if (stat.crumb) ld.push(breadcrumb(path.startsWith("/cataloage/") ? [["Cataloage", "/cataloage"], [stat.crumb, path]] : [[stat.crumb, path]]));
    if (path === "/colectii") ld.push(itemList(collections, "Colecții de mochetă Burmatex"));
    if (path === "/proiecte") ld.push({ "@type": "ItemList", name: `Proiecte cu mochetă Burmatex în România (total ${TOTAL_M2} m²)`, numberOfItems: references.length, itemListElement: references.map((r, i) => ({ "@type": "ListItem", position: i + 1, name: `${r.name}${r.location ? `, ${r.location}` : ""} — ${formatArea(r)}, ${r.collections.join(", ")}` })) });
    if (path === "/devino-dealer") ld.push(faqPage(dealerFaqs));
    if (path === "/ghid-tehnic") ld.push(faqPage(technicalFaqs), { "@type": "HowTo", name: "Cum se montează mocheta în dale", totalTime: "PT48H", supply: [{ "@type": "HowToSupply", name: "Adeziv de fixare Mapei Ultrabond Eco Fix" }], tool: [{ "@type": "HowToTool", name: "Sfoară cu cretă" }, { "@type": "HowToTool", name: "Cutter" }], step: installSteps.map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })) });
    if (path === "/") ld.push(faqPage(generalFaqs.slice(0, 3)));
    return { title: stat.title, description: stat.description, jsonLd: ld, image: "/img/c/go-to/mocheta-dale-go-to-ambient-2.webp" };
  }
  const landing = landingByPath[path];
  if (landing) {
    const picked = collections.filter(landing.pick);
    return { title: landing.title, description: landing.description, image: landing.image, jsonLd: [...base, breadcrumb([[landing.label, path]]), faqPage(landing.faqs), itemList(picked, landing.pickTitle)] };
  }
  const slug = path.startsWith("/colectii/") ? path.slice("/colectii/".length) : "";
  const c = collectionBySlug[slug];
  if (c) {
    return {
      title: `${plainName(c.name)}® — mochetă dale Burmatex, ${c.colours} nuanțe`,
      description: clip(`${c.headline} ${families[c.family].label}, ${c.colours} nuanțe, ${c.formats.join(" și ").toLowerCase()}. ${c.inStock ? "Din stoc în România. " : ""}Mostre și ofertă prin InsightFLOOR, dealer oficial Burmatex.`),
      image: c.image,
      jsonLd: [...base, breadcrumb([["Colecții", "/colectii"], [c.name, path]]), productLd(c), faqPage(collectionFaqs(c))],
    };
  }
  return { title: "Pagina nu există | Burmatex România", description: staticPages["/"].description, jsonLd: base, noindex: true };
}
