// Burmatex® projects delivered and installed in Romania (own teams and partner network).
// Source: InsightFLOOR Burmatex reference catalogue (burmatex-references.ts), plus the projects
// confirmed by Burmatex România: Ursus Breweries (tivoli®, 1.500 m²) and Holcim (tivoli®, 2.200 m², replaces the catalogue go to® entry for the same project).
// Areas from the catalogue are minimums ("peste"); "exact" areas are stated as given.
import { collections, plainName } from "./collections";

export type ReferenceKind = "birouri" | "banca" | "hotel" | "aeroport" | "retail" | "industrie";

export type Reference = {
  name: string;
  location?: string;
  area: number;
  exact?: boolean;
  collections: string[];
  kind: ReferenceKind;
  photos?: { src: string; alt: string; w: number; h: number }[];
  architect?: string;
  note?: string;
};

export const TOTAL_M2 = 2_500_000;

export const kindLabels: Record<ReferenceKind, string> = {
  birouri: "Birouri",
  banca: "Bănci",
  hotel: "Hoteluri",
  aeroport: "Aeroporturi",
  retail: "Retail",
  industrie: "Industrie și producție",
};

const photos = (slug: string, sizes: [number, number][], label: string) =>
  sizes.map(([w, h], i) => ({ src: `/img/proiecte/mocheta-dale-burmatex-${slug}-${i + 1}.webp`, alt: `${label} — mochetă dale Burmatex, fotografia ${i + 1}`, w, h }));

export const references: Reference[] = [
  { name: "Nokia", location: "Timișoara", area: 10000, collections: ["go to®"], kind: "birouri" },
  { name: "Continental", location: "Iași", area: 10000, collections: ["tivoli®"], kind: "birouri" },
  { name: "ING", area: 10000, collections: ["tivoli®"], kind: "banca" },
  { name: "Delea Veche Offices", location: "București", area: 10000, collections: ["go to®"], kind: "birouri" },
  { name: "Raiffeisen Bank", area: 5000, collections: ["tivoli®"], kind: "banca" },
  { name: "UniCredit", area: 5000, collections: ["go to®"], kind: "banca" },
  { name: "CEC Bank", area: 5000, collections: ["go to®"], kind: "banca" },
  { name: "Bancpost", area: 5000, collections: ["go to®"], kind: "banca" },
  { name: "WPP", location: "București", area: 4500, collections: ["osaka®"], kind: "birouri", architect: "Cumulus",
    photos: photos("wpp", [[1400, 968], [1400, 933], [1400, 788]], "WPP, București") },
  { name: "Hotel Danubius", area: 4500, collections: ["arctic®"], kind: "hotel" },
  { name: "Alten & Kepler", area: 3500, collections: ["go to®"], kind: "birouri" },
  { name: "Vista Bank, filiale", area: 3000, collections: ["tivoli®"], kind: "banca" },
  { name: "Holcim", area: 2200, exact: true, collections: ["tivoli®"], kind: "industrie" },
  { name: "Dorobanți 33", location: "București", area: 2000, collections: ["alaska®"], kind: "birouri" },
  { name: "Aeroportul Otopeni", location: "Otopeni", area: 2000, collections: ["go to®"], kind: "aeroport" },
  { name: "Europa House", location: "București", area: 2000, collections: ["alaska®", "osaka®"], kind: "birouri" },
  { name: "Ursus Breweries", area: 1500, exact: true, collections: ["tivoli®"], kind: "industrie" },
  { name: "Metropolis Center", location: "București", area: 1500, collections: ["tivoli®"], kind: "birouri" },
  { name: "BERD", area: 1000, collections: ["tivoli®"], kind: "banca" },
  { name: "Hotel Ursulețul", area: 1000, collections: ["balance®"], kind: "hotel" },
  { name: "Ceetrus", location: "București", area: 1000, collections: ["osaka®"], kind: "birouri", architect: "Wolfhouse Production",
    photos: photos("ceetrus", [[667, 1000], [650, 433], [1000, 697]], "Ceetrus, București") },
  { name: "GLO Marine", area: 1000, collections: ["tivoli®"], kind: "birouri" },
  { name: "Ascendia", area: 1000, collections: ["snowfall®"], kind: "birouri" },
  { name: "Frigotehnica", area: 1000, collections: ["standing stones®"], kind: "industrie" },
  { name: "Cornerstone Technologies", area: 1000, collections: ["threads®"], kind: "birouri" },
  { name: "CNCAN", area: 1000, collections: ["osaka®"], kind: "birouri" },
  { name: "Orange", area: 1000, collections: ["surface story®"], kind: "birouri" },
  { name: "Risco Servicii Financiare", area: 1000, collections: ["alaska®"], kind: "birouri" },
  { name: "One United", area: 1000, collections: ["arctic®"], kind: "birouri" },
  { name: "Arnia Software", area: 1000, collections: ["rocklines®"], kind: "birouri" },
  { name: "Tayra Yamamoto", area: 1000, collections: ["alaska®"], kind: "birouri" },
  { name: "Librăriile Cărturești", area: 1000, collections: ["go to®"], kind: "retail" },
  { name: "Compas", area: 1000, collections: ["tivoli®"], kind: "birouri" },
  { name: "Caimmo", location: "București", area: 1000, collections: ["alaska®"], kind: "birouri", architect: "Georgia Cristea",
    photos: photos("caimmo", [[1050, 1400], [1050, 1400], [1050, 1400]], "Caimmo, București") },
  { name: "Nexus", area: 1000, collections: ["osaka®"], kind: "birouri" },
];

const nf = new Intl.NumberFormat("ro-RO");
export const formatArea = (r: Reference) => `${r.exact ? "" : "peste "}${nf.format(r.area)} m²`;
export const formatTotal = () => `peste ${nf.format(TOTAL_M2 / 1_000_000).replace(".", ",")} milioane m²`;

const slugByName = Object.fromEntries(collections.map(c => [plainName(c.name).toLowerCase(), c.slug]));
export const collectionSlugOf = (label: string) => slugByName[label.replace(/®$/, "").replace(/ collection$/, "").toLowerCase()];
export const referencesFor = (slug: string) => references.filter(r => r.collections.some(c => collectionSlugOf(c) === slug));
export const referencedArea = references.reduce((n, r) => n + r.area, 0);
export const referenceKey = (r: Reference) => `${r.name}-${r.collections.join("-")}`;
