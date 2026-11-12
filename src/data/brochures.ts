// Romanian catalogues and brochures: InsightFLOOR editions (PDF) and web adaptations of the Burmatex brochures.
import { collectionBySlug, plainName } from "./collections";

export type Brochure = {
  slug: string;
  title: string;
  kicker: string;
  text: string;
  cover: string;
  online?: string;
  pdf?: { href: string; label: string; size: string; pages?: number };
  pending?: boolean;
};

export const brochures: Brochure[] = [
  { slug: "catalog", title: "Catalog de produse Burmatex®", kicker: "Ediția 2026 · 40 de pagini", text: "Toate gamele de mochetă Burmatex® recomandate pentru România: date tehnice, culori cu coduri, proiecte și Design Connection™.", cover: "/img/cataloage/coperta-catalog.webp", online: "/colectii", pdf: { href: "/cataloage/catalog-mocheta-burmatex-2026.pdf", label: "Descărcați catalogul (PDF)", size: "5,5 MB", pages: 40 } },
  { slug: "design-connection", title: "Design Connection™", kicker: "Ghid de combinații · 24 de pagini", text: "Cum combinați surface trace®, surface story® și surface memory® în același spațiu: culori conectate, culori în contrast și banca de culori.", cover: "/img/cataloage/coperta-dc.webp", online: "/cataloage/design-connection", pdf: { href: "/cataloage/design-connection-ghid-burmatex-2026.pdf", label: "Descărcați ghidul (PDF)", size: "3,4 MB", pages: 24 } },
  { slug: "go-to", title: "go to®", kicker: "Catalog de produs · 12 pagini", text: "Mocheta în dale din stocul InsightFLOOR: 16 culori uni și 4 cu dungi, performanță, sustenabilitate și specificație tehnică.", cover: "/img/cataloage/coperta-goto.webp", online: "/colectii/go-to", pdf: { href: "/cataloage/go-to-catalog-burmatex-2026.pdf", label: "Descărcați catalogul (PDF)", size: "1 MB", pages: 12 } },
  { slug: "organic-merge-colour-link", title: "Organic Merge™ și Colour Link™", kicker: "Concepte de design · mai 2025", text: "Tranziții fine între desene diferite în aceeași culoare și familii de culori care leagă colecțiile: 12 exemple de combinații și bibliotecile de culori.", cover: "/img/cataloage/om-dune.webp", online: "/cataloage/organic-merge-colour-link", pdf: { href: "https://www.burmatex.co.uk/wp-content/uploads/2025/07/Organic-Merge-Colour-Link-brochure-May-2025-optimised-for-web.pdf", label: "Originalul Burmatex (PDF, engleză)", size: "5,5 MB", pages: 15 } },
  { slug: "principii-sustenabilitate", title: "Principiile de sustenabilitate Burmatex®", kicker: "eco₂matters® · adaptare în limba română", text: "Drumul spre Net Zero, firul cu amprentă negativă de carbon, suportul BioBase®, energie 100% regenerabilă, Zero Landfill și preluarea dalelor uzate.", cover: "/img/cataloage/eco2matters.webp", online: "/cataloage/principii-sustenabilitate", pdf: { href: "/cataloage/burmatex-sustainability-principles-en.pdf", label: "Originalul Burmatex (PDF, engleză)", size: "2,5 MB", pages: 8 } },
  { slug: "educatie", title: "Mochetă pentru educație", kicker: "Școli, universități, cămine", text: "Dale, plăci și rulouri pentru săli de clasă, coridoare și spații comune, cu amprentă neutră sau redusă de carbon.", cover: "/img/c/academy/mocheta-dale-academy-ambient-1.webp", online: "/mocheta-scoli" },
  { slug: "mll", title: "Colecția cu buclă multinivel (MLL)", kicker: "Multilevel loop · dale și plăci", text: "Cele 11 colecții Burmatex cu buclă pe mai multe niveluri, de la surface memory® la osaka®.", cover: "/img/c/surface-memory/mocheta-dale-surface-memory-ambient-1.webp", online: "/colectii?familie=multilevel" },
  { slug: "fir-biogenic", title: "Fir bio-genic", kicker: "threads® · tivoli® · tivoli mist® · octombrie 2026", text: "Primul fir 100% reciclat din deșeuri organice: de la uleiul de gătit uzat la dale de birou. Cum funcționează și montajul circular IOBAC.", cover: "/img/cataloage/fir-biogenic-coperta.webp", online: "/cataloage/fir-biogenic", pdf: { href: "https://www.burmatex.co.uk/wp-content/uploads/2026/10/Bio-genic-yarn-brochure.pdf", label: "Originalul Burmatex (PDF, engleză)", size: "3,7 MB", pages: 7 } },
  { slug: "well", title: "Burmatex® și standardul WELL", kicker: "WELL Building Standard®", text: "Cele nouă cerințe WELL la care contribuie mocheta Burmatex®: VOC, intrare sănătoasă, materiale sigure, mediu ușor de curățat, biofilie.", cover: "/img/cataloage/well-cladire.webp", online: "/cataloage/well", pdf: { href: "https://www.burmatex.co.uk/wp-content/uploads/2025/07/burmatex-wellbeing-statement.pdf", label: "Originalul Burmatex (PDF, engleză)", size: "0,5 MB", pages: 2 } },
];


// Design Connection™ — data from the InsightFLOOR guide (October 2026).
export const dc = {
  icons: { trace: "◈", story: "◇", memory: "♡" },
  family: [
    { slug: "surface-trace", text: "pornește de la tradiția Burmatex® în țesut și aduce pe pardoseală textura tactilă a unei țesături." },
    { slug: "surface-story", text: "pune față în față contrariile: linii geometrice precise și un desen organic." },
    { slug: "surface-memory", text: "are un aer nostalgic și jucăuș, dar rămâne modern și potrivit spațiilor comerciale." },
  ],
  connected: [
    { text: "Un spațiu unitar: aceeași nuanță în toate cele trei desene.", items: [["surface-trace", "mill"], ["surface-story", "chapter"], ["surface-memory", "wonder"]], photo: "design-connection-trace-story-memory-detaliu" },
    { text: "Zonați discret spațiile cu utilizări diferite: aceeași culoare în toate cele trei desene păstrează interiorul unitar.", items: [["surface-trace", "echo"], ["surface-story", "flux"], ["surface-memory", "snapshot"]], photo: "design-connection-echo-flux-snapshot" },
    { text: "Creați efecte de covor în spațiile comerciale, combinând cele trei desene.", items: [["surface-trace", "entwine"], ["surface-memory", "tawny"], ["surface-story", "umber"]], photo: "design-connection-entwine-tawny-umber" },
    { text: "surface story®, mai dinamic, pune în valoare zona de așezare; surface memory®, mai calm, leagă spațiile de circulație.", items: [["surface-story", "sketch"], ["surface-memory", "tactile"]], photo: "design-connection-sketch-tactile" },
  ],
  contrast: [
    { text: "Un spațiu unitar, cu zone clar delimitate de contrastul dintre nuanțe.", items: [["surface-trace", "weave"], ["surface-story", "fable"], ["surface-story", "outline"], ["surface-memory", "focus"]], photo: "design-connection-weave-fable-outline-focus" },
    { text: "Folosiți toate cele trei desene în proporții egale. Rezultatul e unic: nu există două montaje identice.", items: [["surface-story", "chapter"], ["surface-trace", "mesh"], ["surface-memory", "whisper"]], photo: "design-connection-chapter-mesh-whisper" },
    { text: "Porniți de la celelalte finisaje ale proiectului: lumina caldă, contrastul mobilierului, panourile acustice texturate. Duceți aceeași idee pe pardoseală.", items: [["surface-story", "sketch"], ["surface-trace", "frame"], ["surface-story", "outline"]], photo: "design-connection-sketch-outline-frame" },
    { text: "Delimitați suprafețe mari prin combinații neașteptate și contraste curajoase.", items: [["surface-memory", "tinted"], ["surface-memory", "flashback"], ["surface-trace", "mesh"]], photo: "design-connection-tinted-flashback-mesh" },
  ],
  common: [["echo", "flux", "snapshot"], ["unfold", "fable", "focus"], ["mill", "chapter", "wonder"], ["loom", "form", "pathway"], ["mesh", "oracle", "clouded"], ["weave", "outline", "nostalgia"], ["entwine", "umber", "tawny"]],
  twoRanges: [
    { pair: ["surface-story", "surface-memory"], items: [["sketch", "tactile"], ["novella", "whisper"], ["timeless", "flashback"]] },
    { pair: ["surface-trace", "surface-story"], items: [["aspect", "script"]] },
  ],
  unique: [["surface-trace", "pin"], ["surface-trace", "frame"], ["surface-trace", "knotted"], ["surface-trace", "tweed"], ["surface-story", "medley"], ["surface-memory", "halcyon"], ["surface-memory", "tinted"]],
};

// Organic Merge™: on one column, the same colour family across five designs (Burmatex colour chart).
export const organicMerge: { rows: { slug: string; group?: string; label: string }[]; columns: (string | null)[][] } = {
  rows: [
    { slug: "balance", group: "balance grid®", label: "balance grid®" },
    { slug: "balance", group: "balance ratio®", label: "balance ratio®" },
    { slug: "balance", group: "balance scale®", label: "balance scale®" },
    { slug: "standing-stones", label: "standing stones®" },
    { slug: "snowfall", label: "snowfall®" },
  ],
  columns: [
    ["dark shadow", "night shadow", "central shadow", "charcoal symbol", "dark blizzard"],
    ["steel effect", "stone effect", "chrome effect", "iron age", "misty grey"],
    ["crisp air", "clean air", "fresh air", "pebble structure", "silver drizzle"],
    ["aqua skyline", "aqua vapour", "aqua space", "aqua dawn", "aqua flurry"],
    ["light neutral", "soft neutral", "calm neutral", "neutral ground", "light lookout"],
    ["dusk glow", "dawn glow", "sunny glow", "yellow traces", "winter yellow"],
    ["apricot beam", "apricot mural", "apricot shine", "orange equinox", null],
    ["district red", "vibrant red", "spark red", "pillar red", null],
    ["block blue", "reflection blue", "river blue", "monument blue", null],
    ["tower metal", "city metal", "twilight metal", "slate construct", null],
    ["lilac view", "lilac rush", "lilac zone", null, "mauve rise"],
    ["concrete wood", "shaded wood", "smoky wood", null, "dusky weather"],
    ["glazed tone", "golden tone", "wicker tone", null, "ground cover"],
    ["brown leaf", "fallen leaf", "autumn leaf", null, null],
    ["highline moss", "greenery moss", "alfresco moss", null, null],
    ["morning harbour", "dewy harbour", "tranquil harbour", null, null],
    [null, null, null, "stable base", "ice storm"],
  ],
};

// Colour Link™: colour families shared across collections (Burmatex colour chart).
export const colourLink: { family: string; items: [string, string, string?][] }[] = [
  { family: "Galben", items: [["rocklines", "sunlit"], ["standing-stones", "yellow traces"], ["balance", "sunny glow", "balance scale®"], ["threads", "yellow", "threads® plain"], ["threads", "base yellow"]] },
  { family: "Verde", items: [["rocklines", "habitat"], ["snowfall", "mellow wisp"], ["threads", "pastel", "threads® plain"], ["threads", "base pastel"]] },
  { family: "Albastru", items: [["rocklines", "oceanic"], ["standing-stones", "henge sky"], ["threads", "pigment", "threads® plain"], ["threads", "base pigment"]] },
  { family: "Piersică", items: [["rocklines", "uplift"], ["snowfall", "peach frost"], ["threads", "craft", "threads® plain"], ["threads", "craft mix"]] },
  { family: "Liliachiu", items: [["rocklines", "amethyst"], ["snowfall", "mauve rise"], ["balance", "lilac zone", "balance scale®"]] },
];

export function findSwatch(slug: string, name: string, group?: string) {
  const c = collectionBySlug[slug];
  const n = name.toLowerCase();
  const s = c.swatches.find(x => x.name.toLowerCase() === n && (group ? x.group === group : !x.group?.includes("plain")));
  return s ? { ...s, collection: group ?? plainName(c.name) + "®" } : null;
}
