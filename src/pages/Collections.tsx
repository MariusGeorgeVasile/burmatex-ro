import { useEffect, useMemo, useState } from "react";
import { useSearch } from "wouter";
import { Link } from "../link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, FileText, Search, X } from "lucide-react";
import { CarbonTag, CollectionCard, DealerCTA, Label, PageIntro, PriceTag, usePageMeta } from "../components";
import { collectionBySlug, collectionPath, collections, families, plainName, type FamilyKey, type Swatch } from "../data/collections";
import { priceTiers, sectorsMeta } from "../data/attributes";
import { landings } from "../data/landings";
import { collectionFaqs } from "../seo";
import { referencesFor } from "../data/references";
import { ReferenceList } from "./Projects";
import NotFound from "./NotFound";

const formatFilters = [["toate", "Toate formatele"], ["Dală", "Dale 50 × 50"], ["Lamelă", "Lamele 25 × 100"], ["Rulou", "Rulouri 2 m"]] as const;
const normalize = (t: string) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function CollectionsPage() {
  usePageMeta("/colectii");
  const search = useSearch();
  const [family, setFamily] = useState<FamilyKey | "toate">("toate");
  const [format, setFormat] = useState<string>("toate");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const f = new URLSearchParams(search).get("familie") as FamilyKey | null;
    if (f && f in families) setFamily(f);
  }, [search]);
  const visible = useMemo(() => collections.filter(c =>
    (family === "toate" || c.family === family)
    && (format === "toate" || c.formats.some(f => f.startsWith(format)))
    && normalize(`${c.name} ${c.headline} ${c.summary} ${families[c.family].label} ${c.swatches.map(s => s.name).join(" ")}`).includes(normalize(query.trim()))
  ), [family, format, query]);
  const familyKeys = Object.keys(families) as FamilyKey[];
  const swatchTotal = collections.reduce((n, c) => n + c.swatches.length, 0);

  return <>
    <PageIntro label={`Colecții Burmatex · ${collections.length} colecții · ${swatchTotal} nuanțe`} title="Mochetă dale Burmatex." accent="Toate colecțiile, toate nuanțele." text="De la dala de lucru din stoc la colecțiile de design pentru birouri premium, fibra presată pentru școli și covoarele de intrare. Căutați după nume de colecție sau de nuanță.">
      <div className="intro-actions"><Link href="/selector-mocheta" className="ed-button">Deschideți selectorul de mochetă <ArrowUpRight /></Link><Link href="/mocheta-dale" className="ed-text-link">Ghid: cum alegeți mocheta în dale <ArrowRight /></Link></div>
    </PageIntro>
    <section className="ed-shell catalog">
      <div className="catalog-tools">
        <label className="catalog-search"><Search /><input id="cauta-colectie" type="search" aria-label="Căutați o colecție sau o nuanță" placeholder="Colecție sau nuanță, de ex. „grey”, „tivoli”" value={query} onChange={e => setQuery(e.target.value)} /></label>
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
      {visible.length === 0 && <div className="no-results"><h2>Nicio colecție pentru filtrele alese.</h2><button className="ed-button" onClick={() => { setFamily("toate"); setFormat("toate"); setQuery(""); }}>Resetați filtrele</button></div>}
      <p className="cc-note">Imaginile și datele tehnice provin de la producător. Culorile de pe ecran sunt orientative; nuanța finală se alege pe mostră fizică. Disponibilitatea, prețul și termenul se confirmă la ofertare.</p>
    </section>
    <DealerCTA title="Vreți colecțiile" accent="în showroom-ul dumneavoastră?" />
  </>;
}

function SwatchViewer({ swatches, index, onClose, onMove, collection }: { swatches: Swatch[]; index: number; onClose: () => void; onMove: (i: number) => void; collection: string }) {
  const s = swatches[index];
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove((index + 1) % swatches.length);
      if (e.key === "ArrowLeft") onMove((index - 1 + swatches.length) % swatches.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [index, swatches.length, onClose, onMove]);
  return <div className="viewer" role="dialog" aria-modal="true" aria-label={`${collection} ${s.name}`} onClick={onClose}>
    <div className="viewer-body" onClick={e => e.stopPropagation()}>
      <button className="viewer-close" onClick={onClose} aria-label="Închide"><X /></button>
      <img src={s.img} alt={`Mochetă dale Burmatex ${collection}, nuanța ${s.name}`} width="600" height="600" />
      <div className="viewer-caption">
        <div><strong>{s.name}</strong><span>{collection}{s.group ? ` · ${s.group}` : ""}{s.code ? ` · cod ${s.code}` : ""}</span></div>
        <div className="viewer-nav"><button onClick={() => onMove((index - 1 + swatches.length) % swatches.length)} aria-label="Nuanța anterioară"><ChevronLeft /></button><span>{index + 1} / {swatches.length}</span><button onClick={() => onMove((index + 1) % swatches.length)} aria-label="Nuanța următoare"><ChevronRight /></button></div>
        <Link href={`/contact?tip=mostre&produs=${encodeURIComponent(collection)}&nuanta=${encodeURIComponent(s.name)}`} className="ed-button">Cereți mostra <ArrowUpRight /></Link>
      </div>
    </div>
  </div>;
}

export function CollectionPage({ slug }: { slug: string }) {
  const c = collectionBySlug[slug];
  usePageMeta(collectionPath(slug));
  const [open, setOpen] = useState<number | null>(null);
  const [room, setRoom] = useState(0);
  if (!c) return <NotFound />;
  const index = collections.indexOf(c);
  const next = collections[(index + 1) % collections.length];
  const related = collections.filter(o => o.family === c.family && o.slug !== c.slug).slice(0, 3);
  const groups = [...new Set(c.swatches.map(s => s.group ?? ""))];
  const name = plainName(c.name);
  const faqs = collectionFaqs(c);
  const guides = landings.filter(l => l.path !== "/pret-mocheta-dale" && l.pick(c)).slice(0, 3);
  const hero = c.rooms[room] ?? null;

  return <div className="collection-page">
    <nav className="breadcrumb ed-shell" aria-label="Breadcrumb"><Link href="/">Acasă</Link><span>/</span><Link href="/colectii">Colecții</Link><span>/</span><Link href={`/colectii?familie=${c.family}`}>{families[c.family].label}</Link><span>/</span><b>{c.name}</b></nav>
    <section className="product-hero ed-shell">
      <div className="product-hero-copy">
        <Label>Mochetă dale Burmatex · {families[c.family].label}</Label>
        <h1>{name}<sup>®</sup></h1>
        <p className="product-headline">{c.headline}</p>
        <p>{c.summary}</p>
        <div className="product-tags">{c.inStock && <span className="cc-badge static">Din stoc în România</span>}{c.isNew && <span className="cc-badge new static">Nou</span>}<PriceTag c={c} /><CarbonTag c={c} /></div>
        <div className="product-actions"><Link href={`/contact?tip=mostre&produs=${encodeURIComponent(name)}`} className="ed-button">Solicitați mostre <ArrowUpRight /></Link><Link href={`/contact?tip=oferta&produs=${encodeURIComponent(name)}`} className="ed-text-link">Cereți ofertă de preț <ArrowRight /></Link></div>
      </div>
      <div className="product-gallery">
        <div className="product-hero-visual">{hero ? <img src={hero.img} alt={hero.alt ?? `Mochetă dale Burmatex ${c.name} montată într-un spațiu`} width={hero.w} height={hero.h} fetchPriority="high" /> : <img src={c.swatches[0]?.img} alt={`Dală Burmatex ${c.name}`} width="600" height="600" />}</div>
        {c.rooms.length > 1 && <div className="gallery-thumbs" role="group" aria-label="Imagini de ambient">{c.rooms.map((r, i) => <button key={r.img} aria-pressed={room === i} className={room === i ? "active" : ""} onClick={() => setRoom(i)} aria-label={`Imaginea ${i + 1}`}><img src={r.img} alt="" loading="lazy" width="120" height="80" /></button>)}</div>}
      </div>
    </section>

    <section className="product-facts ed-shell" aria-label="Date principale">
      <div><strong>{c.swatches.length || c.colours}</strong><p>{c.coloursNote ?? "nuanțe"}</p></div>
      <div><strong>{c.formats.length > 1 ? `${c.formats.length} formate` : c.formats[0].replace("Dală ", "")}</strong><p>{c.formats.join(" · ")}</p></div>
      {c.impactDb ? <div><strong>{c.impactDb} dB</strong><p>reducerea zgomotului de impact</p></div> : c.recycled ? <div><strong>{c.recycled}</strong><p>conținut reciclat total</p></div> : null}
      {c.gwp ? <div><strong>{c.gwp}</strong><p>kg CO₂e — GWP declarat în EPD</p></div> : <div><strong>{priceTiers[c.priceTier].marks}</strong><p>clasă de preț {priceTiers[c.priceTier].label.toLowerCase()}</p></div>}
    </section>

    <section className="ed-shell swatches" id="nuante">
      <div className="ed-section-heading"><div><Label>Toate nuanțele · {c.swatches.length}</Label><h2>Nuanțele {name}<sup>®</sup></h2></div><p>Atingeți o nuanță pentru imaginea mărită și codul de produs. Culorile de pe ecran sunt orientative; alegeți pe mostră fizică.</p></div>
      {groups.map(g => <div key={g || "all"} className="swatch-group">
        {g && <h3 className="sub">{g}</h3>}
        <ul className="swatch-grid">{c.swatches.map((s, i) => (s.group ?? "") === g && <li key={s.img}><button onClick={() => setOpen(i)}><img src={s.img} alt={`Mochetă dale Burmatex ${c.name}, nuanța ${s.name}`} loading="lazy" width="300" height="300" /><span>{s.name}</span>{s.code && <small>{s.code}</small>}</button></li>)}</ul>
      </div>)}
    </section>
    {open !== null && <SwatchViewer swatches={c.swatches} index={open} onClose={() => setOpen(null)} onMove={setOpen} collection={c.name} />}

    <section className="product-detail ed-shell">
      <div>
        <Label>Pentru ce o recomandăm</Label>
        <h2>{c.use}</h2>
        <h3 className="sub">Spații potrivite</h3>
        <ul className="colour-list">{c.sectors.map(s => <li key={s}>{sectorsMeta[s].label}</li>)}</ul>
        {guides.length > 0 && <><h3 className="sub">Ghiduri utile</h3><div className="guide-links">{guides.map(l => <Link key={l.path} href={l.path} className="ed-text-link">{l.h1.replace(/\.$/, "")} <ArrowRight /></Link>)}</div></>}
      </div>
      <div>
        <h3 className="sub">Specificații tehnice</h3>
        <dl className="spec-table">{c.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          {c.recycled && <div><dt>Conținut reciclat total</dt><dd>{c.recycled}</dd></div>}
          {c.gwp && <div><dt>GWP (EPD)</dt><dd>{c.gwp} kg CO₂e</dd></div>}
          <div><dt>Clasă de preț</dt><dd>{priceTiers[c.priceTier].label} ({priceTiers[c.priceTier].marks}){c.priceFrom ? ` · de la ${c.priceFrom} €/m² + TVA` : ""}</dd></div>
        </dl>
        <h3 className="sub">Documente oficiale</h3>
        <div className="doc-list">
          {c.docs.map(d => <a key={d.href} href={d.href} target="_blank" rel="noreferrer"><FileText /><span>{d.label}</span><small>PDF · Burmatex</small><ExternalLink /></a>)}
          <a href={c.source} target="_blank" rel="noreferrer"><FileText /><span>Pagina colecției la producător</span><small>burmatex.co.uk</small><ExternalLink /></a>
        </div>
      </div>
    </section>

    {referencesFor(c.slug).length > 0 && <section className="ed-shell collection-refs">
      <div className="ed-section-heading"><div><Label>Proiecte în România · {referencesFor(c.slug).length}</Label><h2>{name}<sup>®</sup> deja montată<br /><span>în România.</span></h2></div><Link href="/proiecte" className="ed-text-link">Toate proiectele Burmatex <ArrowUpRight /></Link></div>
      {referencesFor(c.slug).filter(r => r.photos?.length).map(r => <div key={r.name} className="ref-photos">{r.photos!.slice(0, 3).map(p => <img key={p.src} src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" />)}</div>)}
      <ReferenceList items={referencesFor(c.slug)} compact />
    </section>}

    <section className="ed-shell faq">
      <div><Label>Întrebări despre {name}</Label><h2>Pe scurt,<br /><span>{name}<sup>®</sup>.</span></h2></div>
      <div>{faqs.map(f => <details key={f.q}><summary>{f.q}<span>+</span></summary><p>{f.a}</p></details>)}</div>
    </section>

    {related.length > 0 && <section className="ed-shell related"><div className="ed-section-heading"><div><Label>Din aceeași familie</Label><h2>{families[c.family].label}</h2></div><Link href={`/colectii?familie=${c.family}`} className="ed-text-link">Toată familia <ArrowUpRight /></Link></div><div className="cc-collection-grid">{related.map(r => <CollectionCard key={r.slug} c={r} />)}</div></section>}

    <nav className="ed-shell product-pager" aria-label="Navigare colecții"><Link href="/colectii"><ArrowLeft /> Toate colecțiile</Link><Link href={collectionPath(next.slug)}>Următoarea: {next.name} <ArrowRight /></Link></nav>
    <DealerCTA title={`${name}® pentru proiectul`} accent="dumneavoastră." text="Spuneți-ne suprafața, orașul și termenul. Vă trimitem mostrele și oferta prin dealerul Burmatex din zona dumneavoastră." to={`/contact?tip=oferta&produs=${encodeURIComponent(name)}`} button="Cereți ofertă" label="Ofertă și mostre" />
  </div>;
}
