// Documents per collection: everything is in Romanian and hosted on burmatex.ro.
// Technical sheets are on-site pages (translated from the Burmatex sheets, printable to PDF);
// shade cards, samples, EPDs and certificates are sent on request.
import sheets from "./techsheets.json";
import { plainName, type Collection } from "./collections";

export type SiteDoc = { label: string; note: string; href: string; pdf?: boolean };
export type TechSheet = { edition?: string; sections: { title: string; rows: [string, string][] }[]; certifications?: string[] };

export const techSheets = sheets as unknown as Record<string, TechSheet>;
export const techSheetPath = (slug: string) => `/colectii/${slug}/fisa-tehnica`;

// Collections presented in the InsightFLOOR "Catalog de produse Burmatex 2026" (PDF, Romanian).
const inCatalog = new Set(["surface-story", "surface-trace", "surface-memory", "arctic", "snowfall", "alaska", "osaka", "tivoli", "tivoli-mist", "go-to", "rocklines", "threads", "standing-stones", "balance", "armour", "grimebuster-50", "chevrolay-50"]);
const biogenic = new Set(["threads", "tivoli", "tivoli-mist"]);

export function docsFor(c: Collection): SiteDoc[] {
  const name = encodeURIComponent(plainName(c.name));
  const docs: SiteDoc[] = [{ label: "Fișă tehnică", note: "în română · se poate salva ca PDF", href: techSheetPath(c.slug) }];
  if (c.slug === "go-to") docs.push({ label: "Catalog go to® 2026", note: "PDF · 12 pagini", href: "/cataloage/go-to-catalog-burmatex-2026.pdf", pdf: true });
  if (c.slug.startsWith("surface-")) docs.push({ label: "Design Connection™", note: "ghid de combinații", href: "/cataloage/design-connection" });
  if (biogenic.has(c.slug)) docs.push({ label: "Firul bio-genic", note: "broșură în română", href: "/cataloage/fir-biogenic" });
  if (inCatalog.has(c.slug)) docs.push({ label: "Catalog Burmatex 2026", note: "PDF · 40 de pagini", href: "/cataloage/catalog-mocheta-burmatex-2026.pdf", pdf: true });
  docs.push({ label: "Paletar și mostre", note: "gratuit, la cerere", href: `/contact?tip=mostre&produs=${name}` });
  docs.push({ label: "Declarație de mediu (EPD)", note: "la cerere", href: `/contact?tip=documente&produs=${name}` });
  return docs;
}
