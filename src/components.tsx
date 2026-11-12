import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Link } from "./link";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "./data/site";
import { collections, families, type Collection, collectionPath, plainName } from "./data/collections";
import { priceTiers } from "./data/attributes";
import { landings } from "./data/landings";
import { InsightFloorLogo } from "./InsightFloorLogo";
import { getMeta } from "./seo";

export function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`ed-label${light ? " light" : ""}`}><span aria-hidden="true" />{children}</p>;
}

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return <span className={`wordmark${inverse ? " inverse" : ""}`}><b>burmatex</b><i>®</i><em>România</em></span>;
}

const nav = [
  ["Colecții", "/colectii"],
  ["Selector mochetă", "/selector-mocheta"],
  ["Proiecte", "/proiecte"],
  ["Devino dealer", "/devino-dealer"],
  ["Cataloage", "/cataloage"],
  ["Ghid tehnic", "/ghid-tehnic"],
  ["Articole", "/articole"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const active = (href: string) => location === href || location.startsWith(`${href}/`);
  return <header className="site-header">
    <div className="official-bar"><div className="site-nav-inner"><span>{site.dealer.statement.replace("InsightFLOOR, dealer oficial Burmatex®.", "")}<a href={site.dealer.url} target="_blank" rel="noreferrer"><strong>InsightFLOOR</strong></a>, dealer oficial Burmatex®</span></div></div>
    <div className="site-nav">
      <Link href="/" aria-label="Burmatex România — Acasă"><Wordmark /></Link>
      <nav className="desktop-nav" aria-label="Navigație principală">
        {nav.map(([label, href]) => <Link key={href} href={href} className={active(href) ? "active" : ""}>{label}</Link>)}
      </nav>
      <Link href="/devino-dealer#aplica" className="header-cta">Aplicați ca dealer <ArrowRight /></Link>
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Închide meniul" : "Deschide meniul"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Navigație mobilă">
      <Link href="/"><span>00</span>Acasă</Link>
      {nav.map(([label, href], i) => <Link key={href} href={href}><span>{String(i + 1).padStart(2, "0")}</span>{label}</Link>)}
      <Link href="/devino-dealer#aplica" className="ed-button">Aplicați ca dealer <ArrowUpRight /></Link>
    </nav>}
  </header>;
}

export function Footer() {
  const familyKeys = Object.keys(families) as (keyof typeof families)[];
  return <footer className="footer">
    <div className="ed-shell footer-grid">
      <div className="footer-about"><Wordmark /><p>Mochetă în dale, lamele, rulouri și covoare de intrare produse în Marea Britanie. {site.dealer.statement}</p><a className="official-link dealer-logo-link" href={site.dealer.url} target="_blank" rel="noreferrer"><small>Dealer oficial Burmatex® în România</small><InsightFloorLogo className="dealer-logo" /></a></div>
      <div><h4>Colecții</h4>{familyKeys.map(key => <Link key={key} href={`/colectii?familie=${key}`}>{families[key].label}</Link>)}</div>
      <div><h4>Ghiduri</h4>{landings.map(l => <Link key={l.path} href={l.path}>{l.label}</Link>)}<Link href="/selector-mocheta">Selector mochetă</Link></div>
      <div><h4>Parteneri</h4><Link href="/proiecte">Proiecte Burmatex în România</Link><Link href="/devino-dealer">Devino dealer</Link><Link href="/devino-dealer#aplica">Formular de aplicare</Link><Link href="/contact?tip=mostre">Solicitați mostre</Link><Link href="/cataloage">Cataloage și broșuri</Link><Link href="/ghid-tehnic">Ghid tehnic: montaj și întreținere</Link><Link href="/resurse">Resurse tehnice</Link><Link href="/de-ce-burmatex">De ce Burmatex</Link></div>
      <div><h4>Contact</h4>{site.address && <p>{site.address}</p>}<a href={`mailto:${site.email}`}>{site.email}</a>{site.phone && <a href={`tel:${site.phone}`}>{site.phoneDisplay || site.phone}</a>}<p>{site.showroomNote}</p></div>
    </div>
    <div className="ed-shell footer-bottom">
      <span>© {new Date().getFullYear()} Burmatex România · operat de InsightFLOOR, dealer oficial Burmatex® în România.</span>
      <span>Burmatex® și denumirile colecțiilor sunt mărci ale producătorului britanic. Imagini de produs: Burmatex.</span>
    </div>
  </footer>;
}

export function usePageMeta(path: string) {
  useEffect(() => {
    const meta = getMeta(path);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${site.domain}${path}`);
  }, [path]);
}

export function PageIntro({ label, title, accent, text, children }: { label: string; title: string; accent: string; text: string; children?: React.ReactNode }) {
  return <section className="page-intro ed-shell">
    <Label>{label}</Label>
    <h1>{title}<br /><strong>{accent}</strong></h1>
    <p>{text}</p>
    {children}
  </section>;
}

export function TilePlaceholder({ collection }: { collection: Collection }) {
  return <div className="tile-placeholder" aria-hidden="true"><span>{plainName(collection.name)}</span><small>{families[collection.family].short}</small></div>;
}

export function PriceTag({ c }: { c: Collection }) {
  const t = priceTiers[c.priceTier];
  return <span className={`price-tag ${c.priceTier}`} title={t.text}>{t.marks} {t.label}{c.priceFrom ? ` · de la ${c.priceFrom} €/m²` : ""}</span>;
}

export function CarbonTag({ c }: { c: Collection }) {
  if (!c.carbon) return null;
  return <span className={`carbon-tag ${c.carbon}`}>{c.carbon === "neutral" ? "Neutră carbon (declarat)" : "Carbon redus"}</span>;
}

export function CollectionCard({ c, index }: { c: Collection; index?: number }) {
  const img = c.image ?? c.tile;
  return <article className="cc-card">
    <Link href={collectionPath(c.slug)} className="cc-card-photo" aria-label={`Descoperiți ${c.name}`}>
      {img ? <img src={img} alt={`Mochetă dale Burmatex ${c.name}`} loading="lazy" width="600" height="600" /> : <TilePlaceholder collection={c} />}
      {index !== undefined && <span className="cc-index">{String(index + 1).padStart(2, "0")}</span>}
      {c.inStock && <span className="cc-badge">Din stoc</span>}
      {c.isNew && <span className="cc-badge new">Nou</span>}
    </Link>
    <div className="cc-card-body">
      <div className="cc-card-meta"><span>{families[c.family].label}</span><span>{c.colours} nuanțe</span></div>
      <h3><Link href={collectionPath(c.slug)}>{plainName(c.name)}<sup>®</sup></Link></h3>
      <p className="cc-card-headline">{c.headline}</p>
      <p>{c.use}</p>
      {c.swatches.length > 0 && <ul className="cc-strip" aria-label={`${c.swatches.length} nuanțe`}>{c.swatches.slice(0, 8).map(s => <li key={s.img} style={{ background: s.hex }} title={s.name} />)}{c.swatches.length > 8 && <li className="more">+{c.swatches.length - 8}</li>}</ul>}
      <div className="cc-card-foot"><span>{c.formats.join(" · ")}</span><span className="cc-tags"><PriceTag c={c} /><CarbonTag c={c} /></span></div>
    </div>
  </article>;
}

export function DealerCTA({ title = "Aduceți Burmatex", accent = "în orașul dumneavoastră.", text = "Spuneți-ne unde lucrați și ce clienți aveți. Revenim cu condițiile de parteneriat, kitul de mostre și pașii de început.", to = "/devino-dealer#aplica", button = "Aplicați ca dealer", label = "Program de dealeri / România" }: { title?: string; accent?: string; text?: string; to?: string; button?: string; label?: string }) {
  return <section className="ed-final"><div className="ed-shell">
    <Label>{label}</Label>
    <h2>{title}<br /><span>{accent}</span></h2>
    <div><p>{text}</p><Link href={to} className="ed-button">{button} <ArrowUpRight /></Link></div>
  </div></section>;
}

export const featuredSlugs = ["go-to", "surface-memory", "eco-cordiale"];
export const featured = featuredSlugs.map(slug => collections.find(c => c.slug === slug)!);
