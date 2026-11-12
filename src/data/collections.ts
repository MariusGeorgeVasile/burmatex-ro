// Burmatex collections for the Romanian dealer network.
// Sources: official burmatex.co.uk product pages and technical sheets (checked 2025–2026).
// Values not listed by the manufacturer are deliberately omitted rather than estimated.

export type FamilyKey = "multilevel" | "loop" | "cut" | "barrier" | "fibre" | "entrance";
export type Carbon = "neutral" | "low";

import media from "./media.json";
import { attributes, priceListTech, type DesignKey, type Doc, type PriceTier, type SectorKey } from "./attributes";

export type Swatch = { name: string; code?: string; group?: string; img: string; hex: string; family: ColourFamily };
export type Room = { img: string; alt?: string; w: number; h: number };
export type ColourFamily = "gri-deschis" | "gri" | "negru" | "bej-maro" | "albastru" | "verde" | "rosu-roz-mov" | "galben-portocaliu";

type BaseCollection = {
  slug: string;
  name: string;
  family: FamilyKey;
  formats: string[];
  colours: number;
  coloursNote?: string;
  carbon?: Carbon;
  isNew?: boolean;
  inStock?: boolean;
  headline: string;
  summary: string;
  use: string;
  specs: [string, string][];
  gwp?: string;
  recycled?: string;
  image?: string;
  tile?: string;
  colourNames?: string[];
  docs?: { label: string; href: string }[];
  source: string;
};

export type Collection = BaseCollection & {
  swatches: Swatch[];
  rooms: Room[];
  priceTier: PriceTier;
  priceFrom?: number;
  design: DesignKey[];
  sectors: SectorKey[];
  impactDb?: number;
  thicknessMm?: number;
  pileGm2?: number;
  docs: Doc[];
};

export const families: Record<FamilyKey, { label: string; short: string; text: string }> = {
  multilevel: { label: "Buclă pe mai multe niveluri", short: "Multilevel loop", text: "Desen și relief pentru birouri și spații cu personalitate. Cele mai noi colecții Burmatex." },
  loop: { label: "Buclă uniformă", short: "Loop pile", text: "Dale clasice, de lucru, cu palete largi de culori. Baza oricărui portofoliu de dealer." },
  cut: { label: "Fir tăiat", short: "Cut pile", text: "Suprafață catifelată și confort la pas, pentru zone de reprezentare." },
  barrier: { label: "Barieră de performanță", short: "Performance barrier", text: "Dale care rețin umezeala și murdăria în zonele de acces." },
  fibre: { label: "Fibră presată", short: "Fibre bonded", text: "Dale și rulouri extrem de rezistente, cu un raport foarte bun cost / durabilitate. Ideale pentru școli și spații publice." },
  entrance: { label: "Covoare de intrare", short: "Entrance matting", text: "Primul strat de protecție al clădirii: opresc murdăria înainte de a intra în spațiu." },
};

const u = (path: string) => `https://www.burmatex.co.uk/wp-content/uploads/${path}`;
const p = (slug: string) => `https://www.burmatex.co.uk/product/${slug}/`;

const warranty: [string, string] = ["Garanție declarată", "15 ani, în condițiile producătorului"];
const class33: [string, string] = ["Clasă de utilizare", "33 — trafic comercial intens"];
const tile50: [string, string] = ["Format", "Dală 50 × 50 cm"];
const fire: [string, string] = ["Reacție la foc", "Bfl-s1"];
const biobase: [string, string] = ["Suport", "BioBase® reciclat"];

const base: BaseCollection[] = [
  {
    slug: "go-to", name: "go to®", family: "loop", formats: ["Dală 50 × 50 cm"], colours: 20, coloursNote: "16 nuanțe uni + 4 cu dungi", inStock: true, carbon: "low",
    headline: "Dala de lucru. Din stoc, în România.",
    summary: "Mocheta în dale cu buclă uniformă pe care o folosim de peste un deceniu în birouri din România. Paletă de 20 de nuanțe, de la griuri neutre la accente de culoare pentru delimitarea zonelor.",
    use: "Produsul de pornire pentru orice dealer: renovări de birouri, înlocuiri punctuale, proiecte cu termen scurt.",
    specs: [class33, tile50, ["Fir", "EqoCycle 75, nailon reciclat vopsit în masă"], biobase, ["Desene", "Uni și cu dungi"]],
    gwp: "4,26", recycled: "70,0%",
    source: p("go-to-carpet-tiles"),
  },
  {
    slug: "surface-memory", name: "surface memory®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 12, carbon: "neutral", isNew: true,
    headline: "Noutatea Burmatex. Textură cu memorie.",
    summary: "Cea mai nouă colecție Burmatex: buclă pe mai multe niveluri, desen estompat, 12 nuanțe. Fir Thrive® matter (Universal Fibers) și suport BioBase®, prezentată de producător ca neutră din punctul de vedere al carbonului.",
    use: "Pentru birouri contemporane și proiecte în care clientul cere ultima colecție a producătorului.",
    specs: [tile50, ["Fir", "Thrive® matter, Universal Fibers"], biobase, ["Certificare fir", "Cradle to Cradle® Material Health Silver"]],
    gwp: "3,71", recycled: "72,7%",
    source: p("surface-memory-carpet-tiles"),
  },
  {
    slug: "surface-story", name: "surface story®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 12, carbon: "neutral",
    headline: "Geometrie clară. Textură organică.",
    summary: "Linii geometrice și contururi estompate se întâlnesc într-o mochetă în dale cu buclă pe mai multe niveluri. Cele 12 nuanțe permit compoziții discrete sau accente bine definite.",
    use: "Pentru proiecte în care pardoseala trebuie să aducă desen și profunzime, fără să aglomereze spațiul.",
    specs: [class33, tile50, ["Grosime totală", "7,5 mm"], ["Masă fir de suprafață", "825 g/m²"], fire, ["Reducerea zgomotului de impact", "24 dB"], ["Fir", "Thrive® matter, fir reciclat"], biobase, warranty],
    docs: [
      { label: "Fișă tehnică", href: u("2026/07/surface-story-technical-spec-2026-07-1.pdf") },
      { label: "Broșură", href: u("2026/07/surface-story%C2%AE-brochure-optimised.pdf") },
      { label: "Paletar", href: u("2026/07/Burmatex-surface-story-shade-card-1.pdf") },
    ],
    source: p("surface-story-carpet-tiles"),
  },
  {
    slug: "surface-trace", name: "surface trace®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 12, carbon: "neutral",
    headline: "Textura țesăturii. Libertatea compoziției.",
    summary: "Inspirată de meșteșugul țesutului, surface trace® combină o textură pronunțată cu 12 nuanțe coordonate. Montajul cu orientare aleatorie este indicat în fișa tehnică.",
    use: "Pentru birouri și zone de întâlnire în care textura trebuie să fie prezentă, iar desenul să rămână firesc.",
    specs: [class33, tile50, ["Grosime totală", "7,5 mm"], ["Masă fir de suprafață", "825 g/m²"], fire, ["Reducerea zgomotului de impact", "24 dB"], ["Fir", "Thrive® matter, fir reciclat"], biobase, ["Montaj", "Orientare aleatorie"], warranty],
    docs: [
      { label: "Fișă tehnică", href: u("2025/10/surface-trace-technical-spec-2025-09.pdf") },
      { label: "Broșură", href: u("2025/10/surface-trace-brochure-250x250mm-ENG-Nov-2025-optimised.pdf") },
      { label: "Paletar", href: u("2025/10/Burmatex-surface-trace-shade-card.pdf") },
    ],
    source: p("surface-trace-carpet-tiles"),
  },
  {
    slug: "arctic", name: "arctic®", family: "multilevel", formats: ["Dală 50 × 50 cm", "Lamelă 25 × 100 cm"], colours: 12, carbon: "neutral",
    headline: "Peisaj nordic. Caracter discret.",
    summary: "Texturi inspirate de peisajele arctice, cu variații de ton și relief. 12 nuanțe, de la tonuri luminoase la accente profunde, disponibile în dale și lamele.",
    use: "Pentru interioare cu o paletă reținută, în care materialele și lumina definesc atmosfera.",
    specs: [class33, ["Format", "Dală 50 × 50 cm / lamelă 25 × 100 cm"], ["Grosime totală", "7,0 mm"], ["Masă fir de suprafață", "624 g/m²"], fire, ["Reducerea zgomotului de impact", "26 dB"], ["Fir", "Thrive® matter, nailon PA6 reciclat"], biobase, ["Certificare", "Cradle to Cradle® Gold (v4.0) pentru peste 50% din componente"], warranty],
    gwp: "3,22", recycled: "72,0%",
    docs: [
      { label: "Fișă tehnică", href: u("2025/07/burmatex-arctic-technical-spec-2026-04.pdf") },
      { label: "Broșură", href: u("2025/07/arctic-refresh-brochure-2026-04-250x250mm-English-version-Optimised.pdf") },
      { label: "Paletar", href: u("2025/07/arctic-refresh-square-digital-shadecard-16.04.26.pdf") },
    ],
    source: p("arctic-carpet-tiles"),
  },
  {
    slug: "rocklines", name: "rocklines®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 16, carbon: "neutral",
    headline: "Linii de rocă. Desen natural.",
    summary: "Desen inspirat de straturile și fisurile pietrei, în 16 nuanțe. Fir Thrive® și suport BioBase®, colecție prezentată de producător ca neutră din punctul de vedere al carbonului.",
    use: "Pentru spații în care pardoseala imită texturi minerale fără răceala pietrei.",
    specs: [tile50, ["Fir", "Thrive® matter"], biobase, ["Certificare", "Cradle to Cradle® Silver"]],
    gwp: "3,38", recycled: "72,1%",
    source: p("rocklines-carpet-tiles"),
  },
  {
    slug: "threads", name: "threads®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 27, coloursNote: "12 nuanțe cu desen + 15 nuanțe uni combinabile",
    carbon: "low",
    headline: "Fire cusute. Combinații libere.",
    summary: "Un desen inspirat de cusături, cu 12 nuanțe principale și 15 nuanțe uni care se combină liber. Fir 100% reciclat „bio-genic” și suport BioBase®.",
    use: "Pentru amenajări care folosesc culoarea pentru zonare, cu tranziții controlate între desen și uni.",
    specs: [tile50, ["Fir", "100% reciclat „bio-genic”"], biobase],
    gwp: "3,90", recycled: "73,6%",
    source: p("threads-carpet-tiles"),
  },
  {
    slug: "snowfall", name: "snowfall®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 16, carbon: "neutral",
    headline: "Desen fluid. Spațiu bine definit.",
    summary: "Desen inspirat de formele zăpezii, cu bucle pe mai multe niveluri și variații vizuale fine. 16 nuanțe pentru continuitate sau delimitare de zone.",
    use: "Pentru compoziții fluide, în care pardoseala leagă zonele de lucru și introduce accente de culoare.",
    specs: [class33, tile50, ["Grosime totală", "7,0 mm"], ["Masă fir de suprafață", "670 g/m²"], fire, ["Reducerea zgomotului de impact", "25 dB"], ["Fir", "Thrive® matter, fir reciclat"], biobase, warranty],
    docs: [
      { label: "Fișă tehnică", href: u("2025/05/snowfall-technical-spec-2024-07.pdf") },
      { label: "Broșură", href: u("2025/05/snowfall-ebrochure-october-2025.pdf") },
      { label: "Paletar", href: u("2025/05/snowfall-digital-shade-card-2024-07.pdf") },
    ],
    source: p("snowfall-carpet-tiles"),
  },
  {
    slug: "alaska", name: "alaska®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 16, carbon: "low",
    headline: "Textură densă. Prezență calmă.",
    summary: "16 nuanțe și o construcție cu buclă pe mai multe niveluri. Fir ECONYL® din nailon regenerat, vopsit în masă, combinat cu suportul reciclat BioBase®.",
    use: "Pentru spații de lucru și zone de primire cu textură expresivă, fără un desen dominant.",
    specs: [class33, tile50, ["Grosime totală", "7,5 mm"], ["Masă fir de suprafață", "800 g/m²"], fire, ["Reducerea zgomotului de impact", "22 dB"], ["Fir", "100% nailon regenerat ECONYL®, vopsit în masă"], biobase, warranty],
    docs: [
      { label: "Fișă tehnică", href: u("2025/05/burmatex-alaska-technical-spec-2024-10.pdf") },
      { label: "Broșură", href: u("2025/10/alaska-brochure-250x250mm-ENG-Sep-2025-optimised.pdf") },
      { label: "Paletar", href: u("2025/05/alaska-2024-carpet-tiles-shade-card.pdf") },
    ],
    source: p("alaska-carpet-tiles"),
  },
  {
    slug: "osaka", name: "osaka®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 12, carbon: "neutral",
    headline: "Ritm geometric. Nuanțe naturale.",
    summary: "Inspirată de Japonia, osaka® combină geometria cu un desen organic în 12 nuanțe. Buclă pe mai multe niveluri, pentru trafic comercial intens.",
    use: "Pentru interioare în care un desen ordonat trebuie să rămână viu, nu rigid.",
    specs: [class33, tile50, ["Grosime totală", "7,5 mm"], ["Masă fir de suprafață", "695 g/m²"], fire, ["Reducerea zgomotului de impact", "28 dB"], ["Fir", "Thrive® matter, fir reciclat"], biobase, warranty],
    docs: [
      { label: "Fișă tehnică", href: u("2025/05/burmatex-osaka-technical-spec-2024-05.pdf") },
      { label: "Broșură", href: u("2025/05/osaka-brochure-250x250mm-ENG-Oct-2025-optimised.pdf") },
      { label: "Paletar", href: u("2025/05/osaka-carpet-tiles-shade-card.pdf") },
    ],
    source: p("osaka-carpet-tiles"),
  },
  {
    slug: "standing-stones", name: "standing stones®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 16, carbon: "neutral",
    headline: "Pietre ridicate. Structură calmă.",
    summary: "Colecție cu buclă pe mai multe niveluri, în 16 nuanțe, cu un desen inspirat de textura pietrei naturale.",
    use: "Pentru proiecte care cer o textură minerală, liniștită, pe suprafețe mari.",
    specs: [tile50, ["Fir", "Thrive® matter"], biobase, ["Certificare", "Cradle to Cradle® Silver"]],
    gwp: "3,32", recycled: "72,2%",
    source: p("standing-stones-carpet-tiles"),
  },
  {
    slug: "balance", name: "balance®", family: "multilevel", formats: ["Dală 50 × 50 cm"], colours: 48, coloursNote: "3 desene — grid, ratio, scale — câte 16 nuanțe", carbon: "neutral",
    headline: "Trei desene. Un singur sistem.",
    summary: "Familia balance® reunește trei desene coordonate — grid, ratio și scale — fiecare în 16 nuanțe. Se combină între ele pentru a trece de la un desen la altul în aceeași amenajare.",
    use: "Pentru birouri mari, cu zone diferite care trebuie să rămână parte din același concept.",
    specs: [tile50, ["Desene", "balance grid, balance ratio, balance scale"], ["Fir", "Thrive® matter"], biobase, ["Certificare fir", "Cradle to Cradle® Material Health Silver"]],
    gwp: "3,19", recycled: "73,6%",
    source: p("balance-grid-carpet-tiles"),
  },
  {
    slug: "tivoli", name: "tivoli®", family: "loop", formats: ["Dală 50 × 50 cm", "Lamelă 25 × 100 cm"], colours: 40, coloursNote: "40 de nuanțe în dale, 21 în lamele",
    carbon: "low",
    headline: "Culoare cu rol. Nu doar decor.",
    summary: "40 de variante cromatice coordonate, inclusiv desenele tivoli® multiline. Dală cu fir buclat, potrivită pentru compoziții modulare și delimitarea zonelor; disponibilă și în lamele.",
    use: "Pentru proiecte în care culoarea organizează circulațiile, echipele sau funcțiunile spațiului.",
    specs: [class33, ["Format", "Dală 50 × 50 cm / lamelă 25 × 100 cm"], ["Grosime totală", "6,5 mm"], ["Masă fir de suprafață", "600 g/m²"], fire, ["Reducerea zgomotului de impact", "23 dB"], ["Fir", "100% nailon reciclat „bio-genic”, vopsit în masă"], biobase, warranty],
    gwp: "3,10", recycled: "74,0%",
    docs: [
      { label: "Fișă tehnică", href: u("2025/09/tivoli-carpet-tiles-planks-technical-spec-2025-09.pdf") },
      { label: "Broșură", href: u("2025/09/tivoli-brochure-2025-01.pdf") },
      { label: "Paletar", href: u("2025/07/tivoli-carpet-tiles-planks-shade-card-burmatex-2024-02.pdf") },
    ],
    source: p("tivoli-carpet-tiles"),
  },
  {
    slug: "tivoli-mist", name: "tivoli mist®", family: "loop", formats: ["Dală 50 × 50 cm", "Lamelă 25 × 100 cm"], colours: 10, carbon: "low",
    headline: "Tranziții fine. Compoziții coerente.",
    summary: "Completează familia tivoli® cu 10 nuanțe și un desen cu variații subtile de culoare. Creează suprafețe calme sau legături vizuale între zonele unei amenajări.",
    use: "Pentru compoziții discrete și treceri vizuale între culorile aceleiași amenajări.",
    specs: [class33, ["Format", "Dală 50 × 50 cm / lamelă 25 × 100 cm"], ["Grosime totală", "6,5 mm"], ["Masă fir de suprafață", "600 g/m²"], fire, ["Reducerea zgomotului de impact", "23 dB"], ["Fir", "100% nailon reciclat „bio-genic”, vopsit în masă"], biobase, warranty],
    docs: [
      { label: "Fișă tehnică", href: u("2025/09/tivoli-mist-carpet-tiles-planks-technical-spec-2025-09.pdf") },
      { label: "Broșură", href: u("2025/07/tivoli-mist-brochure-2026-01.pdf") },
      { label: "Paletar", href: u("2025/07/tivoli-mist-carpet-tiles-planks-shade-card-burmatex-2024-02.pdf") },
    ],
    source: p("tivoli-mist-carpet-tiles"),
  },
  {
    slug: "infinity", name: "infinity®", family: "loop", formats: ["Dală 50 × 50 cm"], colours: 16, carbon: "low",
    headline: "Buclă uniformă. Performanță fără compromis.",
    summary: "Dală cu buclă uniformă de 550 g, în 16 nuanțe. Fir 100% ECONYL® din nailon regenerat și suport BioBase®.",
    use: "Pentru birouri și spații publice care cer o dală sobră, ușor de coordonat și de completat ulterior.",
    specs: [tile50, ["Construcție", "Buclă uniformă, 550 g"], ["Fir", "100% nailon regenerat ECONYL®"], biobase],
    gwp: "3,16", recycled: "73,7%",
    source: p("infinity-carpet-tiles"),
  },
  {
    slug: "origin", name: "origin®", family: "cut", formats: ["Dală 50 × 50 cm"], colours: 10, carbon: "low",
    headline: "Fir tăiat. Confort la fiecare pas.",
    summary: "Dală cu fir tăiat în 10 nuanțe, cu suprafață catifelată. Fir 100% ECONYL® și suport BioBase®. Producătorul indică ratinguri A și A+ în BRE Green Guide.",
    use: "Pentru recepții, birouri de conducere și zone în care confortul tactil contează.",
    specs: [tile50, ["Construcție", "Fir tăiat (cut pile)"], ["Fir", "100% nailon regenerat ECONYL®"], biobase, ["BRE Green Guide", "A / A+"]],
    gwp: "4,66", recycled: "77,4%",
    source: p("origin-carpet-tiles"),
  },
  {
    slug: "armour", name: "armour®", family: "barrier", formats: ["Dală 50 × 50 cm"], colours: 12, carbon: "low",
    headline: "Trei fire. O barieră la intrare.",
    summary: "Dală barieră cu sistem de fire în trei trepte: fibre care absorb umezeala, fir raclor și fir cu denier mare. 12 nuanțe, fir ECONYL® și suport BioBase®.",
    use: "Pentru holuri de acces, recepții și coridoare unde murdăria și umezeala intră din exterior.",
    specs: [tile50, ["Sistem de fir", "Absorbție umezeală + raclor + fir cu denier mare"], ["Fir", "100% nailon regenerat ECONYL®"], biobase],
    gwp: "4,01", recycled: "75,4%",
    source: p("armour-carpet-tiles"),
  },
  {
    slug: "eco-cordiale", name: "eco-cordiale®", family: "fibre", formats: ["Dală 50 × 50 cm", "Rulou 2 m lățime"], colours: 44, carbon: "neutral",
    headline: "Fibră presată. 44 de culori. Neutră declarat.",
    summary: "Mochetă din fibră presată cu nervură fină, din amestec de fibre reciclate, regenerate și virgine. Margini care nu se destramă, 44 de nuanțe, în dale și rulou.",
    use: "Pentru școli, clădiri publice și birouri cu buget atent, unde durabilitatea primează.",
    specs: [["Format", "Dală 50 × 50 cm / rulou 2 m"], ["Construcție", "Fibră presată, nervură fină"], ["Fibră", "Amestec reciclat, regenerat și virgin"], ["Margini", "Nu se destramă"]],
    gwp: "3,78", recycled: "63,0%",
    source: p("eco-cordiale-carpet-tiles"),
  },
  {
    slug: "academy", name: "academy®", family: "fibre", formats: ["Dală 50 × 50 cm", "Rulou 2 m lățime"], colours: 24, carbon: "low",
    headline: "Construită pentru școli. Testată de elevi.",
    summary: "Fibră presată cu nervură lată, din fibre vopsite în masă, inclusiv 5% poliester reciclat. 24 de nuanțe, suport BioBase®, margini care nu se destramă; în dale și rulou.",
    use: "Pentru săli de clasă, coridoare și spații publice cu trafic intens și întreținere frecventă.",
    specs: [["Format", "Dală 50 × 50 cm / rulou 2 m"], ["Construcție", "Fibră presată, nervură lată"], ["Fibră", "Vopsită în masă, inclusiv 5% poliester reciclat"], biobase],
    gwp: "4,45", recycled: "60,2%",
    source: p("academy-carpet-tiles"),
  },
  {
    slug: "velour-excel", name: "velour excel®", family: "fibre", formats: ["Dală 50 × 50 cm", "Rulou 2 m lățime"], colours: 18, carbon: "low",
    headline: "Aspect de velur. Rezistența fibrei presate.",
    summary: "Fibră presată cu suprafață de tip velur, în 18 nuanțe, disponibilă în dale și rulou.",
    use: "Pentru spații comerciale și publice care vor o suprafață mai fină decât nervura clasică.",
    specs: [["Format", "Dală 50 × 50 cm / rulou 2 m"], ["Construcție", "Fibră presată, suprafață velur"], ["Fibră", "Vopsită în masă"]],
    gwp: "5,04", recycled: "52,2%",
    source: p("velour-excel-carpet-tile"),
  },
  {
    slug: "grimebuster-50", name: "grimebuster 50®", family: "entrance", formats: ["Dală 50 × 50 cm", "Rulou 2 m (7700 grimebuster)"], colours: 6, carbon: "low",
    headline: "Nervură diagonală adâncă. Murdăria rămâne la ușă.",
    summary: "Covor de intrare cu nervură diagonală adâncă, în 6 nuanțe. Disponibil în dale (grimebuster 50) și în rulou (7700 grimebuster).",
    use: "Pentru vestibuluri, intrări în școli, birouri și magazine.",
    specs: [["Format", "Dală 50 × 50 cm / rulou 2 m"], ["Construcție", "Nervură diagonală adâncă"]],
    gwp: "4,98", recycled: "50,8%",
    source: p("grimebuster-50-carpet-tiles"),
  },
  {
    slug: "chevrolay-50", name: "chevrolay 50®", family: "entrance", formats: ["Dală 50 × 50 cm", "Rulou 2 m (7800 chevrolay)"], colours: 6, carbon: "low",
    headline: "Desen chevron. Protecție la intrare.",
    summary: "Covor de intrare cu desen chevron, în 6 nuanțe. Disponibil în dale (chevrolay 50) și în rulou (7800 chevrolay).",
    use: "Pentru zone de acces cu trafic intens, unde aspectul contează la fel de mult ca funcția.",
    specs: [["Format", "Dală 50 × 50 cm / rulou 2 m"], ["Construcție", "Fibră presată, desen chevron"], biobase],
    gwp: "4,98", recycled: "50,8%",
    source: p("chevrolay-50-carpet-tile"),
  },
];

const mediaBySlug = media as unknown as Record<string, { colours: Swatch[]; rooms: Room[] }>;

export const collections: Collection[] = base.map(c => {
  const m = mediaBySlug[c.slug] ?? { colours: [], rooms: [] };
  const a = attributes[c.slug];
  const docs = [...(c.docs ?? [])];
  for (const doc of a.docs ?? []) if (!docs.some(x => x.label === doc.label)) docs.push(doc);
  const wide = (r: Room) => (r.w / r.h > 1.8 ? 1 : 0);
  const rooms = [...m.rooms].sort((x, y) => wide(x) - wide(y)).map(r => ({ ...r, alt: r.alt ?? `Mochetă dale Burmatex ${c.name} într-un spațiu amenajat` }));
  const t = priceListTech[c.slug];
  const specs = [...c.specs];
  const has = (label: string) => specs.some(([l]) => l === label);
  if (t) {
    if (!has("Masă fir de suprafață")) specs.push(["Masă fir de suprafață", `${t.pileGm2} g/m²`]);
    if (!has("Reacție la foc")) specs.push(["Reacție la foc", t.fire]);
    specs.push(["Ambalare", `${String(t.boxM2).replace(".", ",")} m² / cutie${c.family === "fibre" || c.family === "entrance" ? " (dale)" : ""}`]);
  }
  if (!has("Garanție declarată")) specs.push(["Garanție declarată", "15 ani, în condițiile producătorului (Heavy Contract)"]);
  return { ...c, ...a, specs, pileGm2: a.pileGm2 ?? t?.pileGm2, docs, swatches: m.colours, rooms, image: rooms[0]?.img ?? c.image, tile: m.colours[0]?.img ?? c.tile };
});

export const collectionBySlug = Object.fromEntries(collections.map(c => [c.slug, c])) as Record<string, Collection>;
export const totalColours = collections.reduce((sum, c) => sum + c.colours, 0);
export const collectionPath = (slug: string) => `/colectii/${slug}`;
export const plainName = (name: string) => name.replace(/®$/, "");
