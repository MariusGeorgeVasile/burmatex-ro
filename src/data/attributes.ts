// Selector attributes and official documents per collection.
// priceTier follows the Burmatex CEE trade price list (June 2026): economic up to ~€26/m², standard ~€29–37/m²,
// premium above ~€39/m² (trade prices themselves are not published on the site). priceFrom (EUR/m², excl. VAT) stays empty until the price list exists.

export type PriceTier = "economic" | "standard" | "premium";
export type DesignKey = "uni" | "textura" | "organic" | "geometric" | "linii" | "culoare";
export type SectorKey = "birouri" | "cladiri-noi" | "scoli" | "public" | "hotel" | "retail" | "intrari" | "rezidential";
export type Doc = { label: string; href: string };

export const priceTiers: Record<PriceTier, { label: string; text: string; marks: string }> = {
  economic: { label: "Economic", marks: "€", text: "Buclă uniformă și fibră presată: cel mai mic cost pe metru pătrat, pentru birouri, școli și spații publice." },
  standard: { label: "Standard", marks: "€€", text: "Desen, textură și culoare la un cost mediu: colecțiile cu care un birou capătă personalitate." },
  premium: { label: "Premium", marks: "€€€", text: "Colecții de design, fir tăiat și sisteme de intrare de mare densitate, pentru spații reprezentative și trafic extrem." },
};

export const designs: Record<DesignKey, { label: string; text: string }> = {
  uni: { label: "Uni / discret", text: "Suprafață uniformă, ușor de combinat cu orice mobilier." },
  textura: { label: "Textură", text: "Relief și variație de ton, fără un desen evident." },
  organic: { label: "Desen organic", text: "Forme inspirate din natură: piatră, zăpadă, peisaj." },
  geometric: { label: "Geometric", text: "Linii, grile și ritmuri ordonate." },
  linii: { label: "Linii / dungi", text: "Direcție vizuală, bună pentru coridoare și zonare." },
  culoare: { label: "Culori vii", text: "Palete largi, cu nuanțe intense pentru zonare și identitate." },
};

export const sectorsMeta: Record<SectorKey, { label: string; short: string }> = {
  birouri: { label: "Birouri", short: "Birouri" },
  "cladiri-noi": { label: "Clădiri de birouri noi (fit-out)", short: "Clădiri noi" },
  scoli: { label: "Școli și universități", short: "Educație" },
  public: { label: "Clădiri publice", short: "Public" },
  hotel: { label: "Hoteluri și agrement", short: "Hotel" },
  retail: { label: "Retail și showroom", short: "Retail" },
  intrari: { label: "Intrări și holuri de acces", short: "Intrări" },
  rezidential: { label: "Rezidențial", short: "Rezidențial" },
};

type Attr = { boxM2?: number; priceTier: PriceTier; priceFrom?: number; design: DesignKey[]; sectors: SectorKey[]; impactDb?: number; thicknessMm?: number; pileGm2?: number; docs?: Doc[] };

const u = (path: string) => `https://www.burmatex.co.uk/wp-content/uploads/${path}`;
const d = (spec?: string, brochure?: string, shade?: string, epd?: string): Doc[] => [
  spec && { label: "Fișă tehnică", href: u(spec) },
  brochure && { label: "Broșură", href: u(brochure) },
  shade && { label: "Paletar", href: u(shade) },
  epd && { label: "Declarație de mediu (EPD)", href: u(epd) },
].filter(Boolean) as Doc[];

export const attributes: Record<string, Attr> = {
  "go-to": { priceTier: "economic", design: ["uni", "linii"], sectors: ["birouri", "cladiri-noi", "public", "retail", "rezidential"],
    docs: d("2025/07/burmatex-go-to-technical-spec-2024-05-1.pdf", "2025/10/go-to-brochure-250x250mm-ENG-Sep-2025-optimised.pdf", "2025/07/go-to-shade-card-burmatex.pdf", "2025/07/EPD-burmatex-carpet-go-to-S-P-08174.pdf") },
  "surface-memory": { priceTier: "premium", design: ["textura", "organic"], sectors: ["birouri", "cladiri-noi", "hotel"],
    docs: d("2026/10/surface-memory-technical-spec-2026-10-2.pdf", "2026/10/surface-memory%C2%AE-brochure.pdf", "2026/10/Burmatex-surface-memory-shade-card-optimised.pdf", "2026/10/surface-memory-EPD.pdf") },
  "surface-story": { priceTier: "premium", design: ["geometric", "textura"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 24, thicknessMm: 7.5, pileGm2: 825 },
  "surface-trace": { priceTier: "premium", design: ["textura"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 24, thicknessMm: 7.5, pileGm2: 825 },
  arctic: { priceTier: "standard", design: ["textura", "organic"], sectors: ["birouri", "cladiri-noi", "hotel", "rezidential"], impactDb: 26, thicknessMm: 7, pileGm2: 624 },
  rocklines: { priceTier: "premium", design: ["organic"], sectors: ["birouri", "cladiri-noi", "hotel"],
    docs: d("2025/05/rocklines-technical-spec-2025-02.pdf", "2025/05/rocklines-brochure-2025-02-optimised-V2.pdf", "2025/05/rocklines-digital-shade-card-optimised-1.pdf", "2025/05/Rocklines-Data-2025-01-20T164419.604.pdf") },
  threads: { priceTier: "standard", design: ["linii", "culoare", "uni"], sectors: ["birouri", "cladiri-noi", "scoli", "hotel"],
    docs: d("2025/05/threads-technical-spec-2025-02.pdf", "2025/05/threads-brochure-2026-05-250x250mm.pdf", "2025/05/threads-digital-shade-card-optimised.pdf", "2025/05/Threads-Data-2025-01-20T164041.633.pdf") },
  snowfall: { priceTier: "standard", design: ["organic", "culoare"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 25, thicknessMm: 7, pileGm2: 670 },
  alaska: { priceTier: "premium", design: ["textura"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 22, thicknessMm: 7.5, pileGm2: 800 },
  osaka: { priceTier: "premium", design: ["geometric", "organic"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 28, thicknessMm: 7.5, pileGm2: 695 },
  "standing-stones": { priceTier: "standard", design: ["organic", "culoare"], sectors: ["birouri", "cladiri-noi", "public", "hotel"],
    docs: d("2025/05/standing-stones-technical-spec-2024-08.pdf", "2025/05/Burmatex-standing-stones-e-brochure-January-2025.pdf", "2025/05/Burmatex-standing-stones-digital-shade-September-2024.pdf", "2025/05/burmatex-carpet-tiles-standing-stones-EPD-IES-0015976.pdf") },
  balance: { priceTier: "standard", design: ["geometric", "linii", "culoare"], sectors: ["birouri", "cladiri-noi", "scoli", "public"],
    docs: d("2025/05/burmatex-balance-collection-grid-ratio-scale-technical-spec-2024-05.pdf", "2025/05/balance-collection-e-brochure-October-2024.pdf", "2025/05/balance-collection-digital-shade-card-2024-05.pdf", "2025/05/burmatex-carpet-tiles-balance-EPD-IES-000817204.pdf") },
  tivoli: { priceTier: "economic", design: ["uni", "culoare", "linii"], sectors: ["birouri", "cladiri-noi", "scoli", "public", "retail"], impactDb: 23, thicknessMm: 6.5, pileGm2: 600 },
  "tivoli-mist": { priceTier: "economic", design: ["textura", "culoare"], sectors: ["birouri", "cladiri-noi", "scoli", "public"], impactDb: 23, thicknessMm: 6.5, pileGm2: 600 },
  infinity: { priceTier: "economic", design: ["uni", "textura"], sectors: ["birouri", "cladiri-noi", "public", "scoli", "rezidential"], pileGm2: 550,
    docs: d("2025/07/burmatex-infinity-technical-spec-2024-05.pdf", "2025/11/infinity-brochure-250x250mm-ENG-Nov-2025-optimised.pdf", "2025/07/infinity-carpet-tiles-shade-card.pdf", "2025/07/Infinity-EPD-1.pdf") },
  origin: { priceTier: "premium", design: ["uni"], sectors: ["birouri", "hotel", "rezidential"],
    docs: d("2025/07/burmatex-origin-technical-spec-2024-10.pdf", "2025/07/origin-carpet-tiles-brochure-from-Burmatex-2024-10.pdf", "2025/07/origin-carpet-tiles-shade-card-Burmatex.pdf", "2025/07/EPD-burmatex-carpet-tiles-origin-S-P-08175.pdf") },
  armour: { priceTier: "premium", design: ["uni", "textura"], sectors: ["intrari", "birouri", "cladiri-noi", "public", "retail"],
    docs: d("2025/07/burmatex-armour-technical-spec-2025-11.pdf", "2026/01/armour-brochure-250x250mm-ENG-Nov-2025-optimised.pdf", "2025/07/armour-shade-card-2025-11.pdf", "2025/07/Armour-EPD-2.pdf") },
  "eco-cordiale": { priceTier: "economic", design: ["uni", "culoare"], sectors: ["scoli", "public", "birouri", "retail"],
    docs: d("2025/07/eco-cordiale-full-technical-spec-march-2025.pdf", "2026/09/eco-cordiale-brochure-250x250mm-English-version-hi-res-September-2026-optimised.pdf", "2025/07/eco-cordiale-inliner-digital-shade-card.pdf", "2025/07/Eco-cordiale-tile-EPD.pdf") },
  academy: { priceTier: "economic", design: ["uni", "linii", "culoare"], sectors: ["scoli", "public", "birouri"],
    docs: d("2025/07/burmatex-academy-technical-spec-2024-10.pdf", "2025/07/academy-carpet-tiles-sheet-brochure-from-Burmatex-march-2025.pdf", "2025/07/academy-digital-shade-card-2024-02.pdf", "2025/07/Academy-Tile-24-4-24.pdf") },
  "velour-excel": { priceTier: "standard", design: ["uni", "culoare"], sectors: ["public", "retail", "scoli", "birouri"],
    docs: [...d("2026/09/velour-excel-technical-spec-2026-09.pdf", undefined, "2025/07/5500-velour-excel-carpet-tiles-shade-card-burmatex.pdf", "2025/07/Velour-Excel-EPD.pdf"), { label: "EPD rulou 5500 luxury", href: u("2025/07/5500-EPD.pdf") }] },
  "grimebuster-50": { priceTier: "premium", design: ["linii"], sectors: ["intrari", "scoli", "public", "retail", "birouri"],
    docs: d("2025/07/burmatex-entrance-matting-technical-spec-2026-06.pdf", undefined, "2026/10/entrance-collection-shade-card.pdf", "2025/07/CV50GB50-EPD.pdf") },
  "chevrolay-50": { priceTier: "premium", design: ["geometric"], sectors: ["intrari", "scoli", "public", "retail", "birouri"],
    docs: d("2025/07/burmatex-entrance-matting-technical-spec-2024-08.pdf", undefined, "2026/10/entrance-collection-shade-card.pdf", "2025/07/CV50GB50-EPD.pdf") },
};

// Technical data from the Burmatex CEE trade price list, June 2026 (prices intentionally not copied).
// Pile weight in g/m²; boxM2 = m² per carton (tiles 50 × 50 cm are 0,25 m² each).
export const priceListTech: Record<string, { pileGm2: number; boxM2: number; fire: string }> = {
  "go-to": { pileGm2: 500, boxM2: 5, fire: "Bfl-s1" },
  infinity: { pileGm2: 550, boxM2: 5, fire: "Bfl-s1" },
  tivoli: { pileGm2: 600, boxM2: 5, fire: "Bfl-s1" },
  "tivoli-mist": { pileGm2: 600, boxM2: 5, fire: "Bfl-s1" },
  balance: { pileGm2: 628, boxM2: 5, fire: "Bfl-s1" },
  alaska: { pileGm2: 800, boxM2: 5, fire: "Bfl-s1" },
  arctic: { pileGm2: 624, boxM2: 5, fire: "Bfl-s1" },
  osaka: { pileGm2: 678, boxM2: 5, fire: "Bfl-s1" },
  rocklines: { pileGm2: 635, boxM2: 5, fire: "Bfl-s1" },
  snowfall: { pileGm2: 670, boxM2: 5, fire: "Bfl-s1" },
  "standing-stones": { pileGm2: 606, boxM2: 5, fire: "Bfl-s1" },
  "surface-trace": { pileGm2: 825, boxM2: 5, fire: "Bfl-s1" },
  threads: { pileGm2: 622, boxM2: 5, fire: "Bfl-s1" },
  origin: { pileGm2: 1300, boxM2: 3.5, fire: "Bfl-s1" },
  "eco-cordiale": { pileGm2: 950, boxM2: 5, fire: "Bfl-s1" },
  academy: { pileGm2: 940, boxM2: 5, fire: "Bfl-s1" },
  "velour-excel": { pileGm2: 1200, boxM2: 3, fire: "Bfl-s1" },
  "grimebuster-50": { pileGm2: 1490, boxM2: 5, fire: "Bfl-s1 (dale) / Efl-s1 (rulou)" },
  "chevrolay-50": { pileGm2: 1490, boxM2: 5, fire: "Bfl-s1 (dale) / Efl-s1 (rulou)" },
  armour: { pileGm2: 920, boxM2: 4, fire: "Bfl-s1" },
};
