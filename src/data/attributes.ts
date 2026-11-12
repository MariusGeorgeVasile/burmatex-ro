// Selector attributes and official documents per collection.
// priceTier follows the Burmatex CEE trade price list (June 2026): economic up to ~€26/m², standard ~€29–37/m²,
// premium above ~€39/m² (trade prices themselves are not published on the site). priceFrom (EUR/m², excl. VAT) stays empty until the price list exists.

export type PriceTier = "economic" | "standard" | "premium";
export type DesignKey = "uni" | "textura" | "organic" | "geometric" | "linii" | "culoare";
export type SectorKey = "birouri" | "cladiri-noi" | "scoli" | "public" | "hotel" | "retail" | "intrari" | "industrie" | "evenimente" | "rezidential";
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
  industrie: { label: "Industrie (fabrici, uzine, producție)", short: "Industrie" },
  evenimente: { label: "Saloane de evenimente și nunți", short: "Evenimente" },
  rezidential: { label: "Rezidențial", short: "Rezidențial" },
};

type Attr = { boxM2?: number; priceTier: PriceTier; priceFrom?: number; design: DesignKey[]; sectors: SectorKey[]; impactDb?: number; thicknessMm?: number; pileGm2?: number };


export const attributes: Record<string, Attr> = {
  "go-to": { priceTier: "economic", design: ["uni", "linii"], sectors: ["birouri", "cladiri-noi", "public", "retail", "rezidential"] },
  "surface-memory": { priceTier: "premium", design: ["textura", "organic"], sectors: ["birouri", "cladiri-noi", "hotel"] },
  "surface-story": { priceTier: "premium", design: ["geometric", "textura"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 24, thicknessMm: 7.5, pileGm2: 825 },
  "surface-trace": { priceTier: "premium", design: ["textura"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 24, thicknessMm: 7.5, pileGm2: 825 },
  arctic: { priceTier: "standard", design: ["textura", "organic"], sectors: ["birouri", "cladiri-noi", "hotel", "rezidential"], impactDb: 26, thicknessMm: 7, pileGm2: 624 },
  rocklines: { priceTier: "premium", design: ["organic"], sectors: ["birouri", "cladiri-noi", "hotel"] },
  threads: { priceTier: "standard", design: ["linii", "culoare", "uni"], sectors: ["birouri", "cladiri-noi", "scoli", "hotel"] },
  snowfall: { priceTier: "standard", design: ["organic", "culoare"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 25, thicknessMm: 7, pileGm2: 670 },
  alaska: { priceTier: "premium", design: ["textura"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 22, thicknessMm: 7.5, pileGm2: 800 },
  osaka: { priceTier: "premium", design: ["geometric", "organic"], sectors: ["birouri", "cladiri-noi", "hotel"], impactDb: 28, thicknessMm: 7.5, pileGm2: 695 },
  "standing-stones": { priceTier: "standard", design: ["organic", "culoare"], sectors: ["birouri", "cladiri-noi", "public", "hotel"] },
  balance: { priceTier: "standard", design: ["geometric", "linii", "culoare"], sectors: ["birouri", "cladiri-noi", "scoli", "public"] },
  tivoli: { priceTier: "economic", design: ["uni", "culoare", "linii"], sectors: ["birouri", "cladiri-noi", "scoli", "public", "retail"], impactDb: 23, thicknessMm: 6.5, pileGm2: 600 },
  "tivoli-mist": { priceTier: "economic", design: ["textura", "culoare"], sectors: ["birouri", "cladiri-noi", "scoli", "public"], impactDb: 23, thicknessMm: 6.5, pileGm2: 600 },
  infinity: { priceTier: "economic", design: ["uni", "textura"], sectors: ["birouri", "cladiri-noi", "public", "scoli", "rezidential"], pileGm2: 550 },
  origin: { priceTier: "premium", design: ["uni"], sectors: ["birouri", "hotel", "rezidential"] },
  armour: { priceTier: "premium", design: ["uni", "textura"], sectors: ["intrari", "industrie", "birouri", "cladiri-noi", "public", "retail"] },
  "eco-cordiale": { priceTier: "economic", design: ["uni", "culoare"], sectors: ["scoli", "industrie", "public", "birouri", "retail"] },
  academy: { priceTier: "economic", design: ["uni", "linii", "culoare"], sectors: ["scoli", "industrie", "public", "birouri"] },
  "velour-excel": { priceTier: "standard", design: ["uni", "culoare"], sectors: ["industrie", "public", "retail", "scoli", "birouri"] },
  "grimebuster-50": { priceTier: "premium", design: ["linii"], sectors: ["intrari", "industrie", "scoli", "public", "retail", "birouri"] },
  "chevrolay-50": { priceTier: "premium", design: ["geometric"], sectors: ["intrari", "industrie", "scoli", "public", "retail", "birouri"] },
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

// From the InsightFLOOR Burmatex catalogue (October 2026): comfort class (EN 1307), VOC emissions,
// renewable energy in production and Cradle to Cradle yarn certificate.
export const catalogTech: Record<string, { lc?: string; voc?: string; energy?: boolean; c2c?: string }> = {
  "surface-memory": { lc: "LC1", voc: "M1", energy: true, c2c: "Silver" },
  "surface-story": { lc: "LC1", voc: "A+ / M1", c2c: "Silver" },
  "surface-trace": { lc: "LC1", voc: "A+ / M1", c2c: "Silver" },
  arctic: { lc: "LC1", voc: "A+ / M1", c2c: "Gold" },
  rocklines: { lc: "LC1", voc: "A+ / M1", c2c: "Silver" },
  threads: { lc: "LC1", voc: "A+ / M1", energy: true },
  "standing-stones": { lc: "LC1", voc: "A+ / M1", c2c: "Silver" },
  snowfall: { lc: "LC2", voc: "A+ / M1", c2c: "Silver" },
  balance: { lc: "LC2", voc: "A+ / M1", c2c: "Silver" },
  alaska: { lc: "LC2", voc: "A+ / M1", energy: true },
  osaka: { lc: "LC2", voc: "A+ / M1", c2c: "Silver" },
  tivoli: { lc: "LC2", voc: "A+ / M1", energy: true },
  "tivoli-mist": { lc: "LC2", voc: "A+ / M1", energy: true },
  "go-to": { lc: "LC1", voc: "A+ / M1", energy: true },
  armour: { lc: "LC3", voc: "A+ / M1", energy: true },
  "grimebuster-50": { energy: true },
  "chevrolay-50": { energy: true },
};
