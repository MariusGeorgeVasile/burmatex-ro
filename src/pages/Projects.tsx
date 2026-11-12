import { useMemo, useState } from "react";
import { Link } from "../link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { DealerCTA, Label, usePageMeta } from "../components";
import { collectionPath } from "../data/collections";
import { collectionSlugOf, formatArea, formatTotal, kindLabels, referenceKey, references, type Reference, type ReferenceKind } from "../data/references";

export function CollectionLinks({ r }: { r: Reference }) {
  return <>{r.collections.map((label, i) => {
    const slug = collectionSlugOf(label);
    return <span key={label}>{i > 0 && ", "}{slug ? <Link href={collectionPath(slug)}>{label}</Link> : label}</span>;
  })}</>;
}

export function ReferenceList({ items, compact = false }: { items: Reference[]; compact?: boolean }) {
  return <ul className={`ref-list${compact ? " compact" : ""}`}>{items.map(r => <li key={referenceKey(r)}>
    <div><strong>{r.name}</strong>{(r.location || r.note) && <small>{[r.location, r.note].filter(Boolean).join(" · ")}</small>}</div>
    <span className="ref-area">{formatArea(r)}</span>
    <span className="ref-coll"><CollectionLinks r={r} /></span>
  </li>)}</ul>;
}

export default function ProjectsPage() {
  usePageMeta("/proiecte");
  const [kind, setKind] = useState<ReferenceKind | "toate">("toate");
  const [coll, setColl] = useState<string>("toate");
  const usedCollections = useMemo(() => [...new Set(references.flatMap(r => r.collections))].sort((a, b) => references.filter(r => r.collections.includes(b)).length - references.filter(r => r.collections.includes(a)).length), []);
  const kinds = [...new Set(references.map(r => r.kind))];
  const visible = references.filter(r => (kind === "toate" || r.kind === kind) && (coll === "toate" || r.collections.includes(coll)));
  const featured = references.filter(r => r.photos?.length);
  const big = references.filter(r => r.area >= 10000).length;

  return <div className="projects-page">
    <section className="page-intro ed-shell">
      <Label>Proiecte Burmatex în România · {references.length} de referințe</Label>
      <h1>{formatTotal().replace(/^peste /, "Peste ")}.<br /><strong>Mochetă Burmatex în proiecte reale din România.</strong></h1>
      <p>Bănci, sedii de corporații, hoteluri, aeroportul Otopeni, fabrici și librării. Mochetă Burmatex livrată și instalată cu echipe proprii și prin rețeaua de parteneri din toată țara, de la birouri de 1.000 m² la sedii de peste 10.000 m².</p>
    </section>

    <section className="ed-evidence ed-shell" aria-label="Proiecte în cifre">
      <div><strong>2,5 mil.<span> m²</span></strong><p>mochetă Burmatex livrată și instalată în România</p></div>
      <div><strong>{references.length}</strong><p>proiecte de referință publicate</p></div>
      <div><strong>{big} × 10.000<span>+</span></strong><p>proiecte de peste 10.000 m²: Nokia, Continental, ING, Delea Veche</p></div>
      <div><strong>{usedCollections.length}</strong><p>colecții Burmatex folosite în aceste proiecte</p></div>
    </section>

    <section className="ed-shell featured-projects">
      <div className="ed-section-heading"><div><Label>Proiecte fotografiate</Label><h2>Mocheta Burmatex,<br /><span>în spații reale.</span></h2></div></div>
      {featured.map(r => <article key={referenceKey(r)} className="featured-project">
        <div className="featured-copy">
          <span className="ed-number">{kindLabels[r.kind]}{r.location ? ` · ${r.location}` : ""}</span>
          <h3>{r.name}</h3>
          <dl><div><dt>Suprafață</dt><dd>{formatArea(r)}</dd></div><div><dt>Colecție</dt><dd><CollectionLinks r={r} /></dd></div>{r.architect && <div><dt>Arhitectură</dt><dd>{r.architect}</dd></div>}</dl>
          {r.collections.map(label => { const slug = collectionSlugOf(label); return slug && <Link key={label} href={collectionPath(slug)} className="ed-text-link">Vedeți colecția {label} <ArrowRight /></Link>; })}
        </div>
        <div className="featured-photos">{r.photos!.slice(0, 3).map((p, i) => <img key={p.src} src={p.src} alt={p.alt} width={p.w} height={p.h} loading={i === 0 ? "eager" : "lazy"} />)}</div>
      </article>)}
    </section>

    <section className="ed-shell all-projects" id="lista">
      <div className="ed-section-heading"><div><Label>Lista completă</Label><h2>Toate proiectele<br /><span>Burmatex din listă.</span></h2></div><p>Suprafețele cu „peste” sunt valori minime. Fiecare colecție are link spre nuanțe și specificații.</p></div>
      <div className="filters" role="group" aria-label="Tip de proiect">
        <button aria-pressed={kind === "toate"} className={kind === "toate" ? "active" : ""} onClick={() => setKind("toate")}>Toate</button>
        {kinds.map(k => <button key={k} aria-pressed={kind === k} className={kind === k ? "active" : ""} onClick={() => setKind(k)}>{kindLabels[k]}</button>)}
      </div>
      <div className="filters secondary" role="group" aria-label="Colecție">
        <button aria-pressed={coll === "toate"} className={coll === "toate" ? "active" : ""} onClick={() => setColl("toate")}>Toate colecțiile</button>
        {usedCollections.map(c => <button key={c} aria-pressed={coll === c} className={coll === c ? "active" : ""} onClick={() => setColl(c)}>{c} · {references.filter(r => r.collections.includes(c)).length}</button>)}
      </div>
      <p className="catalog-count" aria-live="polite">{visible.length} din {references.length} proiecte</p>
      <ReferenceList items={visible} />
      <p className="cc-note"><MapPin /> Localitatea apare doar unde este publicată. Lista cuprinde proiectele de referință; volumul total livrat include și numeroase lucrări sub 1.000 m².</p>
    </section>

    <DealerCTA title="Următorul proiect Burmatex" accent="poate fi al dumneavoastră." text="Spuneți-ne suprafața, orașul și termenul. Vă recomandăm colecția potrivită și vă trimitem mostre și ofertă prin dealerul din zona dumneavoastră." to="/contact?tip=proiect" button="Discutați proiectul" label="Proiect nou" />
    <section className="ed-shell projects-dealer"><p>Sunteți firmă de pardoseli sau de montaj? <Link href="/devino-dealer" className="ed-text-link">Lucrați cu Burmatex în zona dumneavoastră <ArrowUpRight /></Link></p></section>
  </div>;
}
