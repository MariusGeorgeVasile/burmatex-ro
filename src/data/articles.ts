// Articles ("Articole"): one Markdown file per article in content/articole/.
// Files starting with "_" are ignored (instructions, drafts). See content/articole/_CUM-SE-SCRIE-UN-ARTICOL.md.
import { marked } from "marked";

export const articleCategories = {
  "mocheta-dale": { label: "Mochetă în dale", text: "Alegere, construcție, culori, întreținere." },
  pardoseli: { label: "Pardoseli", text: "Mochetă, LVT, covoare de intrare și cum se combină." },
  "cladiri-birouri": { label: "Clădiri de birouri", text: "Fit-out, certificări, acustică și spații de lucru." },
  "montaj-intretinere": { label: "Montaj și întreținere", text: "Suport, adezivi, montaj și îngrijire pe termen lung." },
  dealeri: { label: "Pentru dealeri", text: "Vânzare, ofertare și lucrul cu clienții de proiect." },
} as const;
export type ArticleCategory = keyof typeof articleCategories;

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  date: string;
  updated?: string;
  image: string;
  imageAlt: string;
  collections: string[];
  html: string;
  headings: { id: string; text: string }[];
  minutes: number;
  text: string;
};

const files = import.meta.glob("/content/articole/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function parse(path: string, raw: string): Article | null {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  if (slug.startsWith("_")) return null;
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`Articolul ${slug} nu are antet (---).`);
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1");
  }
  if (meta.ciorna === "da") return null;
  const body = m[2].trim();
  const headings: Article["headings"] = [];
  const renderer = new marked.Renderer();
  renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map(t => ("text" in t ? t.text : t.raw)).join("");
    const id = slugify(text);
    if (depth === 2) headings.push({ id, text });
    return `<h${depth} id="${id}">${marked.parseInline(text)}</h${depth}>\n`;
  };
  renderer.table = function (token) {
    return `<div class="table-wrap">${marked.Renderer.prototype.table.call(this, token)}</div>`;
  };
  const html = marked.parse(body, { renderer, async: false }) as string;
  const text = body.replace(/[#>*_`|[\]()-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const category = (meta.categorie in articleCategories ? meta.categorie : "mocheta-dale") as ArticleCategory;
  return {
    slug,
    title: meta.titlu ?? slug,
    description: meta.descriere ?? "",
    category,
    date: meta.data ?? "2026-01-01",
    updated: meta.actualizat,
    image: meta.imagine ?? "/img/c/go-to/mocheta-dale-go-to-ambient-2.webp",
    imageAlt: meta.imagine_alt ?? meta.titlu ?? "",
    collections: (meta.colectii ?? "").split(",").map(s => s.trim()).filter(Boolean),
    html,
    headings,
    minutes: Math.max(2, Math.round(words / 200)),
    text: body,
  };
}

export const articles: Article[] = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .filter((a): a is Article => a !== null)
  .sort((a, b) => b.date.localeCompare(a.date));

export const articleBySlug = Object.fromEntries(articles.map(a => [a.slug, a])) as Record<string, Article>;
export const articlePath = (slug: string) => `/articole/${slug}`;
export const formatDate = (iso: string) => {
  const months = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};
