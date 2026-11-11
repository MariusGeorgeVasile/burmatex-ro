import { Link } from "../link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CollectionCard, DealerCTA, Label, PriceTag, usePageMeta } from "../components";
import { collections, collectionPath, plainName } from "../data/collections";
import { priceTiers, type PriceTier } from "../data/attributes";
import { landingByPath, landings } from "../data/landings";
import NotFound from "./NotFound";

export default function LandingPage({ path }: { path: string }) {
  const l = landingByPath[path];
  usePageMeta(path);
  if (!l) return <NotFound />;
  const picked = collections.filter(l.pick);
  const byTier = path === "/pret-mocheta-dale";
  const others = landings.filter(o => o.path !== path);
  return <article className="landing">
    <nav className="breadcrumb ed-shell" aria-label="Breadcrumb"><Link href="/">Acasă</Link><span>/</span><b>{l.label}</b></nav>
    <header className="landing-hero ed-shell">
      <div>
        <Label>{l.label}</Label>
        <h1>{l.h1}<br /><strong>{l.accent}</strong></h1>
        <p className="landing-lead">{l.lead}</p>
        <div className="intro-actions"><Link href="/selector-mocheta" className="ed-button">Găsiți colecția potrivită <ArrowUpRight /></Link><Link href="/contact?tip=oferta" className="ed-text-link">Cereți ofertă <ArrowRight /></Link></div>
      </div>
      <figure><img src={l.image} alt={l.imageAlt} width="1200" height="900" fetchPriority="high" /></figure>
    </header>

    <section className="ed-shell landing-summary" aria-label="Pe scurt">
      <h2 className="sub">Pe scurt</h2>
      <dl>{l.summary.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
    </section>

    <div className="ed-shell landing-body">
      {l.sections.map(s => <section key={s.h2} className="landing-section">
        <h2>{s.h2}</h2>
        {s.p?.map(p => <p key={p}>{p}</p>)}
        {s.bullets && <dl className="landing-bullets">{s.bullets.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
        {s.table && <div className="table-wrap"><table><thead><tr>{s.table.head.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{s.table.rows.map(r => <tr key={r[0]}>{r.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>}
      </section>)}
    </div>

    <section className="ed-shell landing-picks">
      <div className="ed-section-heading"><div><Label>{picked.length} colecții</Label><h2>{l.pickTitle}</h2></div><Link href="/selector-mocheta" className="ed-text-link">Filtrați în selector <ArrowUpRight /></Link></div>
      {byTier
        ? (Object.keys(priceTiers) as PriceTier[]).map(tier => <div key={tier} className="tier-block">
          <h3><span className={`price-tag ${tier}`}>{priceTiers[tier].marks} {priceTiers[tier].label}</span> {priceTiers[tier].text}</h3>
          <ul className="tier-list">{picked.filter(c => c.priceTier === tier).map(c => <li key={c.slug}><Link href={collectionPath(c.slug)}><img src={c.swatches[0]?.img ?? c.image} alt="" loading="lazy" width="80" height="80" /><span><strong>{plainName(c.name)}®</strong><small>{c.headline}</small></span><PriceTag c={c} /></Link></li>)}</ul>
        </div>)
        : <div className="cc-collection-grid">{picked.map((c, i) => <CollectionCard key={c.slug} c={c} index={i} />)}</div>}
    </section>

    <section className="ed-shell faq">
      <div><Label>Întrebări frecvente</Label><h2>Răspunsuri<br /><span>clare și scurte.</span></h2></div>
      <div>{l.faqs.map(f => <details key={f.q}><summary>{f.q}<span>+</span></summary><p>{f.a}</p></details>)}</div>
    </section>

    <nav className="ed-shell landing-more" aria-label="Alte ghiduri"><h2 className="sub">Alte ghiduri</h2><div>{others.map(o => <Link key={o.path} href={o.path} className="ed-text-link">{o.label} <ArrowRight /></Link>)}</div></nav>

    <DealerCTA title="Spuneți-ne despre spațiu." accent="Vă recomandăm colecția și dealerul." text="Suprafața, orașul, tipul de spațiu și termenul. Primiți mostrele potrivite și o ofertă de la dealerul Burmatex din zona dumneavoastră." to="/contact?tip=oferta" button="Cereți ofertă" label="Ofertă și mostre" />
  </article>;
}
