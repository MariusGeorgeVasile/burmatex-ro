import { useLocation, useSearch } from "wouter";
import { Link } from "../link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { CollectionCard, DealerCTA, Label, PageIntro, usePageMeta } from "../components";
import { articleBySlug, articleCategories, articlePath, articles, formatDate, type Article, type ArticleCategory } from "../data/articles";
import { collectionBySlug } from "../data/collections";
import NotFound from "./NotFound";

function ArticleCard({ a }: { a: Article }) {
  return <Link href={articlePath(a.slug)} className="article-card">
    <img src={a.image} alt={a.imageAlt} loading="lazy" width="600" height="400" />
    <div>
      <span className="article-meta">{articleCategories[a.category].label} · {a.minutes} min</span>
      <h3>{a.title}</h3>
      <p>{a.description}</p>
      <span className="ed-text-link">Citiți articolul <ArrowRight /></span>
    </div>
  </Link>;
}

export function ArticlesPage() {
  usePageMeta("/articole");
  const params = new URLSearchParams(useSearch());
  const cat = params.get("categorie") as ArticleCategory | null;
  const active = cat && cat in articleCategories ? cat : null;
  const list = active ? articles.filter(a => a.category === active) : articles;
  const keys = Object.keys(articleCategories) as ArticleCategory[];
  return <div className="articles-page">
    <PageIntro label={`Articole · ${articles.length}`} title="Despre mochetă," accent="pardoseli și birouri." text="Articole scrise de echipa InsightFLOOR, dealer oficial Burmatex® în România: cum alegeți mocheta în dale, ce pardoseală merge în fiecare spațiu, ce cer clădirile de birouri noi și cum se montează și se întreține corect." />
    <nav className="ed-shell article-filters" aria-label="Categorii">
      <Link href="/articole" className={!active ? "active" : ""}>Toate</Link>
      {keys.map(k => { const n = articles.filter(a => a.category === k).length; return n ? <Link key={k} href={`/articole?categorie=${k}`} className={active === k ? "active" : ""}>{articleCategories[k].label} <small>{n}</small></Link> : null; })}
    </nav>
    <section className="ed-shell article-grid">{list.map(a => <ArticleCard key={a.slug} a={a} />)}</section>
    <DealerCTA title="Aveți un proiect" accent="în lucru?" text="Spuneți-ne suprafața, tipul spațiului și termenul. Vă recomandăm colecțiile potrivite și vă trimitem mostre." to="/contact?tip=proiect" button="Discutăm proiectul" label="Proiecte" />
  </div>;
}

export function ArticlePage({ slug }: { slug: string }) {
  const a = articleBySlug[slug];
  const [, navigate] = useLocation();
  usePageMeta(articlePath(slug));
  if (!a) return <NotFound />;
  const related = articles.filter(o => o.slug !== a.slug && o.category === a.category).concat(articles.filter(o => o.slug !== a.slug && o.category !== a.category)).slice(0, 3);
  const cols = a.collections.map(s => collectionBySlug[s]).filter(Boolean);
  return <article className="article-page">
    <nav className="breadcrumb ed-shell" aria-label="Breadcrumb"><Link href="/">Acasă</Link><span>/</span><Link href="/articole">Articole</Link><span>/</span><Link href={`/articole?categorie=${a.category}`}>{articleCategories[a.category].label}</Link></nav>
    <header className="ed-shell article-head">
      <Label>{articleCategories[a.category].label}</Label>
      <h1>{a.title}</h1>
      <p className="article-lead">{a.description}</p>
      <p className="article-meta"><Clock /> {a.minutes} min de citit · {formatDate(a.date)}{a.updated ? ` · actualizat ${formatDate(a.updated)}` : ""} · InsightFLOOR</p>
    </header>
    <figure className="ed-shell article-hero"><img src={a.image} alt={a.imageAlt} width="1600" height="900" fetchPriority="high" /></figure>
    <div className="ed-shell article-layout">
      {a.headings.length > 2 && <nav className="tg-toc" aria-label="Cuprins"><p>Cuprins</p><ol>{a.headings.map((h, i) => <li key={h.id}><a href={`#${h.id}`} onClick={e => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" }); }}><span>{String(i + 1).padStart(2, "0")}</span>{h.text.replace(/^\d+\.\s*/, "")}</a></li>)}</ol></nav>}
      <div className="article-body" dangerouslySetInnerHTML={{ __html: a.html }} onClick={e => {
        // Internal links inside the article text navigate within the app (keeps hash routing working in the preview).
        const link = (e.target as Element).closest("a");
        const href = link?.getAttribute("href");
        if (!href || !href.startsWith("/") || e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        const [p, hash] = href.split("#");
        navigate(p);
        if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView(), 150);
      }} />
    </div>
    {cols.length > 0 && <section className="ed-shell related"><div className="ed-section-heading"><div><Label>Colecții din articol</Label><h2>Mocheta potrivită.</h2></div><Link href="/colectii" className="ed-text-link">Toate colecțiile <ArrowUpRight /></Link></div><div className="cc-collection-grid">{cols.map(c => <CollectionCard key={c.slug} c={c} />)}</div></section>}
    {related.length > 0 && <section className="ed-shell related"><div className="ed-section-heading"><div><Label>Mai citiți</Label><h2>Articole apropiate.</h2></div><Link href="/articole" className="ed-text-link">Toate articolele <ArrowUpRight /></Link></div><div className="article-grid">{related.map(o => <ArticleCard key={o.slug} a={o} />)}</div></section>}
    <nav className="ed-shell product-pager" aria-label="Navigare articole"><Link href="/articole"><ArrowLeft /> Toate articolele</Link></nav>
    <DealerCTA title="Întrebări despre" accent="proiectul dumneavoastră?" text="Echipa InsightFLOOR vă recomandă colecția potrivită, vă trimite mostre și vă face oferta, cu sau fără montaj." to="/contact?tip=proiect" button="Contactați-ne" label="InsightFLOOR" />
  </article>;
}
