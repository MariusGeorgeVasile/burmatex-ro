import { useMemo, useState } from "react";
import { useSearch } from "wouter";
import { Link } from "../link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, FileText, Search } from "lucide-react";
import { CarbonTag, CollectionCard, DealerCTA, Label, PageIntro, TilePlaceholder, usePageMeta } from "../components";
import { collectionBySlug, collectionPath, collections, families, plainName, type FamilyKey } from "../data/collections";
import NotFound from "./NotFound";

const formatFilters = [
  ["toate", "Toate formatele"],
  ["Dală", "Dale 50 × 50"],
  ["Lamelă", "Lamele 25 × 100"],
  ["Rulou", "Rulouri 2 m"],
] as const;

export function CollectionsPage() {
  usePageMeta("/colectii");
  const params = new URLSearchParams(useSearch());
  const initialFamily = params.get("familie") as FamilyKey | null;
  const [family, setFamily] = useState<FamilyKey | "toate">(initialFamily && initialFamily in families ? initialFamily : "toate");
  const [format, setFormat] = useState<string>("toate");
  const [carbon, setCarbon] = useState(false);
  const [query, setQuery] = useState("");
  const normalize = (t: string) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const visible = useMemo(() => collections.filter(c =>
    (family === "toate" || c.family === family)
    && (format === "toate" || c.formats.some(f => f.startsWith(format)))
    && (!carbon || c.carbon === "neutral")
    && normalize(`${c.name} ${c.headline} ${c.summary} ${families[c.family].label}`).includes(normalize(query.trim()))
  ), [family, format, carbon, query]);
  const familyKeys = Object.keys(families) as FamilyKey[];

  return <>
    <PageIntro label={`Portofoliul Burmatex · ${collections.length} colecții`} title="Un catalog complet." accent="Pentru fiecare tip de proiect." text="De la dala de lucru din stoc la colecțiile de design pentru birouri premium și fibra presată pentru școli. Filtrați după familie, format sau impact de mediu." />
    <section className="ed-shell catalog">
      <div className="catalog-tools">
        <label className="catalog-search"><Search /><input type="search" aria-label="Căutați o colecție" placeholder="Căutați o colecție" value={query} onChange={e => setQuery(e.target.value)} /></label>
        <label className="catalog-toggle"><input type="checkbox" checked={carbon} onChange={e => setCarbon(e.target.checked)} /> Doar colecții declarate neutre carbon</label>
      </div>
      <div className="filters" role="group" aria-label="Familii de produse">
        <button aria-pressed={family === "toate"} className={family === "toate" ? "active" : ""} onClick={() => setFamily("toate")}>Toate familiile</button>
        {familyKeys.map(key => <button key={key} aria-pressed={family === key} className={family === key ? "active" : ""} onClick={() => setFamily(key)}>{families[key].label}</button>)}
      </div>
      <div className="filters secondary" role="group" aria-label="Format">
        {formatFilters.map(([key, label]) => <button key={key} aria-pressed={format === key} className={format === key ? "active" : ""} onClick={() => setFormat(key)}>{label}</button>)}
      </div>
      {family !== "toate" && <p className="family-note"><strong>{families[family].label}.</strong> {families[family].text}</p>}
      <p className="catalog-count" aria-live="polite">{visible.length} din {collections.length} colecții</p>
      <div className="cc-collection-grid">{visible.map((c, i) => <CollectionCard key={c.slug} c={c} index={i} />)}</div>
      {visible.length === 0 && <div className="no-results"><h2>Nicio colecție pentru filtrele alese.</h2><button className="ed-button" onClick={() => { setFamily("toate"); setFormat("toate"); setCarbon(false); setQuery(""); }}>Resetați filtrele</button></div>}
      <p className="cc-note">Imaginile și datele tehnice provin de la producător. Disponibilitatea din stoc, prețurile de dealer și termenele se confirmă la ofertare. Selecția finală se face pe mostre fizice.</p>
    </section>
    <DealerCTA title="Vreți colecțiile" accent="în showroom-ul dumneavoastră?" />
  </>;
}

export function CollectionPage({ slug }: { slug: string }) {
  const c = collectionBySlug[slug];
  usePageMeta(collectionPath(slug), c ? { title: `${c.name} — ${families[c.family].label} | Burmatex România`, description: `${c.summary} Disponibilă prin rețeaua de dealeri Burmatex din România.` } : undefined);
  if (!c) return <NotFound />;
  const index = collections.indexOf(c);
  const next = collections[(index + 1) % collections.length];
  const related = collections.filter(o => o.family === c.family && o.slug !== c.slug).slice(0, 3);
  const hero = c.image ?? c.tile;
  return <div className="collection-page">
    <nav className="breadcrumb ed-shell" aria-label="Breadcrumb"><Link href="/">Acasă</Link><span>/</span><Link href="/colectii">Colecții</Link><span>/</span><Link href={`/colectii?familie=${c.family}`}>{families[c.family].label}</Link><span>/</span><b>{c.name}</b></nav>
    <section className="product-hero ed-shell">
      <div className="product-hero-copy">
        <Label>Burmatex · {families[c.family].label}</Label>
        <h1>{plainName(c.name)}<sup>®</sup></h1>
        <p className="product-headline">{c.headline}</p>
        <p>{c.summary}</p>
        <div className="product-tags">{c.inStock && <span className="cc-badge static">Din stoc în România</span>}{c.isNew && <span className="cc-badge new static">Nou</span>}<CarbonTag c={c} /></div>
        <div className="product-actions"><Link href={`/contact?tip=mostre&produs=${encodeURIComponent(plainName(c.name))}`} className="ed-button">Solicitați mostre <ArrowUpRight /></Link><Link href={`/contact?tip=oferta&produs=${encodeURIComponent(plainName(c.name))}`} className="ed-text-link">Cereți preț de dealer <ArrowRight /></Link></div>
      </div>
      <div className="product-hero-visual">{hero ? <img src={hero} alt={`Mochetă Burmatex ${c.name}`} width="900" height="900" /> : <TilePlaceholder collection={c} />}</div>
    </section>

    <section className="product-facts ed-shell" aria-label="Date principale">
      <div><strong>{c.colours}</strong><p>{c.coloursNote ?? "nuanțe"}</p></div>
      <div><strong>{c.formats.length > 1 ? `${c.formats.length} formate` : c.formats[0].replace("Dală ", "")}</strong><p>{c.formats.join(" · ")}</p></div>
      {c.recycled && <div><strong>{c.recycled}</strong><p>conținut reciclat total, conform producătorului</p></div>}
      {c.gwp && <div><strong>{c.gwp}</strong><p>kg CO₂e — GWP declarat în EPD-ul produsului</p></div>}
    </section>

    <section className="product-detail ed-shell">
      <div>
        <Label>Pentru ce o recomandăm</Label>
        <h2>{c.use}</h2>
        {c.colourNames && <><h3 className="sub">Nuanțe {c.colourNames.length < c.colours ? "(selecție)" : ""}</h3><ul className="colour-list">{c.colourNames.map(name => <li key={name}>{name}</li>)}</ul></>}
        {c.image && c.tile && <figure className="product-tile"><img src={c.tile} alt={`Dală Burmatex ${c.name}`} loading="lazy" width="600" height="600" /><figcaption>Dală individuală · imagine producător</figcaption></figure>}
      </div>
      <div>
        <h3 className="sub">Specificații</h3>
        <dl className="spec-table">{c.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <h3 className="sub">Documente oficiale</h3>
        <div className="doc-list">
          {c.docs?.map(d => <a key={d.href} href={d.href} target="_blank" rel="noreferrer"><FileText /><span>{d.label}</span><small>PDF · Burmatex</small><ExternalLink /></a>)}
          <a href={c.source} target="_blank" rel="noreferrer"><FileText /><span>Pagina colecției, EPD și BIM</span><small>burmatex.co.uk</small><ExternalLink /></a>
        </div>
        <p className="cc-note">Fișele tehnice traduse în română sunt incluse în kitul de dealer. Valorile se verifică pentru configurația ofertată.</p>
      </div>
    </section>

    {related.length > 0 && <section className="ed-shell related"><div className="ed-section-heading"><div><Label>Din aceeași familie</Label><h2>{families[c.family].label}</h2></div><Link href={`/colectii?familie=${c.family}`} className="ed-text-link">Toată familia <ArrowUpRight /></Link></div><div className="cc-collection-grid">{related.map(r => <CollectionCard key={r.slug} c={r} />)}</div></section>}

    <nav className="ed-shell product-pager" aria-label="Navigare colecții"><Link href="/colectii"><ArrowLeft /> Toate colecțiile</Link><Link href={collectionPath(next.slug)}>Următoarea: {next.name} <ArrowRight /></Link></nav>
    <DealerCTA title={`Vindeți ${plainName(c.name)}`} accent="clienților din zona dumneavoastră." />
  </div>;
}
