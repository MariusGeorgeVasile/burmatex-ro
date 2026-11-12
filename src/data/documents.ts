// Documents per collection, all hosted on burmatex.ro (never linked to the manufacturer's site).
// Burmatex originals are in English; the Romanian version is sent on request.
// Romanian InsightFLOOR catalogues are added where the collection is presented in them.
import { plainName, type Collection } from "./collections";

export type SiteDoc = { label: string; note: string; href: string; pdf?: boolean };

const originals: Record<string, [string, string][]> = {
  "surface-story": [["Fișă tehnică", "/documente/surface-story-fisa-tehnica.pdf"], ["Broșură", "/documente/surface-story-brosura.pdf"], ["Paletar", "/documente/surface-story-paletar.pdf"]],
  "surface-trace": [["Fișă tehnică", "/documente/surface-trace-fisa-tehnica.pdf"], ["Broșură", "/documente/surface-trace-brosura.pdf"], ["Paletar", "/documente/surface-trace-paletar.pdf"]],
  "arctic": [["Fișă tehnică", "/documente/arctic-fisa-tehnica.pdf"], ["Broșură", "/documente/arctic-brosura.pdf"], ["Paletar", "/documente/arctic-paletar.pdf"]],
  "snowfall": [["Fișă tehnică", "/documente/snowfall-fisa-tehnica.pdf"], ["Broșură", "/documente/snowfall-brosura.pdf"], ["Paletar", "/documente/snowfall-paletar.pdf"]],
  "alaska": [["Fișă tehnică", "/documente/alaska-fisa-tehnica.pdf"], ["Broșură", "/documente/alaska-brosura.pdf"], ["Paletar", "/documente/alaska-paletar.pdf"]],
  "osaka": [["Fișă tehnică", "/documente/osaka-fisa-tehnica.pdf"], ["Broșură", "/documente/osaka-brosura.pdf"], ["Paletar", "/documente/osaka-paletar.pdf"]],
  "tivoli": [["Fișă tehnică", "/documente/tivoli-fisa-tehnica.pdf"], ["Broșură", "/documente/tivoli-brosura.pdf"], ["Paletar", "/documente/tivoli-paletar.pdf"]],
  "tivoli-mist": [["Fișă tehnică", "/documente/tivoli-mist-fisa-tehnica.pdf"], ["Broșură", "/documente/tivoli-mist-brosura.pdf"], ["Paletar", "/documente/tivoli-mist-paletar.pdf"]],
  "go-to": [["Fișă tehnică", "/documente/go-to-fisa-tehnica.pdf"], ["Broșură", "/documente/go-to-brosura.pdf"], ["Paletar", "/documente/go-to-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/go-to-epd.pdf"]],
  "surface-memory": [["Fișă tehnică", "/documente/surface-memory-fisa-tehnica.pdf"], ["Broșură", "/documente/surface-memory-brosura.pdf"], ["Paletar", "/documente/surface-memory-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/surface-memory-epd.pdf"]],
  "rocklines": [["Fișă tehnică", "/documente/rocklines-fisa-tehnica.pdf"], ["Broșură", "/documente/rocklines-brosura.pdf"], ["Paletar", "/documente/rocklines-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/rocklines-epd.pdf"]],
  "threads": [["Fișă tehnică", "/documente/threads-fisa-tehnica.pdf"], ["Broșură", "/documente/threads-brosura.pdf"], ["Paletar", "/documente/threads-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/threads-epd.pdf"]],
  "standing-stones": [["Fișă tehnică", "/documente/standing-stones-fisa-tehnica.pdf"], ["Broșură", "/documente/standing-stones-brosura.pdf"], ["Paletar", "/documente/standing-stones-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/standing-stones-epd.pdf"]],
  "balance": [["Fișă tehnică", "/documente/balance-fisa-tehnica.pdf"], ["Broșură", "/documente/balance-brosura.pdf"], ["Paletar", "/documente/balance-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/balance-epd.pdf"]],
  "infinity": [["Fișă tehnică", "/documente/infinity-fisa-tehnica.pdf"], ["Broșură", "/documente/infinity-brosura.pdf"], ["Paletar", "/documente/infinity-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/infinity-epd.pdf"]],
  "origin": [["Fișă tehnică", "/documente/origin-fisa-tehnica.pdf"], ["Broșură", "/documente/origin-brosura.pdf"], ["Paletar", "/documente/origin-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/origin-epd.pdf"]],
  "armour": [["Fișă tehnică", "/documente/armour-fisa-tehnica.pdf"], ["Broșură", "/documente/armour-brosura.pdf"], ["Paletar", "/documente/armour-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/armour-epd.pdf"]],
  "eco-cordiale": [["Fișă tehnică", "/documente/eco-cordiale-fisa-tehnica.pdf"], ["Broșură", "/documente/eco-cordiale-brosura.pdf"], ["Paletar", "/documente/eco-cordiale-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/eco-cordiale-epd.pdf"]],
  "academy": [["Fișă tehnică", "/documente/academy-fisa-tehnica.pdf"], ["Broșură", "/documente/academy-brosura.pdf"], ["Paletar", "/documente/academy-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/academy-epd.pdf"]],
  "velour-excel": [["Fișă tehnică", "/documente/velour-excel-fisa-tehnica.pdf"], ["Paletar", "/documente/velour-excel-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/velour-excel-epd.pdf"], ["EPD rulou 5500 luxury", "/documente/velour-excel-epd-rulou.pdf"]],
  "grimebuster-50": [["Fișă tehnică", "/documente/grimebuster-50-fisa-tehnica.pdf"], ["Paletar", "/documente/grimebuster-50-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/grimebuster-50-epd.pdf"]],
  "chevrolay-50": [["Fișă tehnică", "/documente/chevrolay-50-fisa-tehnica.pdf"], ["Paletar", "/documente/chevrolay-50-paletar.pdf"], ["Declarație de mediu (EPD)", "/documente/chevrolay-50-epd.pdf"]]
};

// Collections presented in the InsightFLOOR "Catalog de produse Burmatex 2026" (PDF, Romanian).
const inCatalog = new Set(["surface-story", "surface-trace", "surface-memory", "arctic", "snowfall", "alaska", "osaka", "tivoli", "tivoli-mist", "go-to", "rocklines", "threads", "standing-stones", "balance", "armour", "grimebuster-50", "chevrolay-50"]);
const biogenic = new Set(["threads", "tivoli", "tivoli-mist"]);

export function docsFor(c: Collection): SiteDoc[] {
  const name = encodeURIComponent(plainName(c.name));
  const docs: SiteDoc[] = [];
  if (c.slug === "go-to") docs.push({ label: "Catalog go to® 2026", note: "PDF · română", href: "/cataloage/go-to-catalog-burmatex-2026.pdf", pdf: true });
  if (inCatalog.has(c.slug)) docs.push({ label: "Catalog Burmatex 2026", note: "PDF · română", href: "/cataloage/catalog-mocheta-burmatex-2026.pdf", pdf: true });
  if (c.slug.startsWith("surface-")) docs.push({ label: "Design Connection™", note: "ghid în română", href: "/cataloage/design-connection" });
  if (biogenic.has(c.slug)) docs.push({ label: "Firul bio-genic", note: "în română", href: "/cataloage/fir-biogenic" });
  for (const [label, href] of originals[c.slug] ?? []) docs.push({ label, note: "PDF · original Burmatex, engleză", href, pdf: true });
  docs.push({ label: "Documentele în limba română", note: "fișă tehnică, EPD, la cerere", href: `/contact?tip=documente&produs=${name}` });
  docs.push({ label: "Paletar fizic și mostre", note: "gratuit, la cerere", href: `/contact?tip=mostre&produs=${name}` });
  return docs;
}
