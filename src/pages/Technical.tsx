import { Link } from "../link";
import { ArrowRight, Download, FileText } from "lucide-react";
import { DealerCTA, Label, usePageMeta } from "../components";
import { adhesives, care, directions, stains, steps, storage, subfloorNo, subfloorNumbers, subfloorOk, technicalFaqs, tips, toc } from "../data/technical";

function Head({ id, n, title, accent }: { id: string; n: string; title: string; accent?: string }) {
  return <div className="tg-head" id={id}><span>{n}</span><h2>{title}{accent && <><br /><span>{accent}</span></>}</h2></div>;
}

export default function TechnicalGuide() {
  usePageMeta("/ghid-tehnic");
  return <div className="tech-guide">
    <section className="page-intro ed-shell">
      <Label>Ghid tehnic · mochetă în dale Burmatex®</Label>
      <h1>Montaj, adezivi, întreținere.<br /><strong>Tot ce trebuie știut pe șantier.</strong></h1>
      <p>Ghidul pentru montatori, dealeri și beneficiari: pe ce se montează mocheta în dale, cum se depozitează și se aclimatizează, ce adezivi se folosesc, cum se montează corect și cum se întreține. Pe baza ghidurilor oficiale Burmatex și a experienței InsightFLOOR din proiectele din România.</p>
    </section>

    <div className="ed-shell tg-layout">
      <nav className="tg-toc" aria-label="Cuprins"><p>Cuprins</p><ol>{toc.map(([id, label], i) => <li key={id}><a href={`#${id}`} onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}><span>{String(i + 1).padStart(2, "0")}</span>{label}</a></li>)}</ol></nav>

      <div className="tg-body">
        <section>
          <Head id="ce-este" n="01" title="Ce este mocheta în dale" />
          <p>Mocheta în dale (mochetă în plăci) este mochetă livrată în pătrate de 50 × 50 cm sau în lamele de 25 × 100 cm, cu un suport rigid care o ține plană. Dalele se montează cap la cap, cu un adeziv de fixare care permite ridicarea lor ulterioară. Patru dale fac un metru pătrat. Burmatex le livrează în cutii de 5 m² (20 de dale), cu excepția câtorva colecții.</p>
          <p>Avantajele față de mocheta la rulou: înlocuire punctuală, acces la instalațiile din pardoseala tehnică, montaj rapid, deșeu redus la tăiere (3–4% la o instalare obișnuită) și combinații de culori. <Link href="/mocheta-dale" className="ed-text-link">Ghidul complet al mochetei în dale <ArrowRight /></Link></p>
        </section>

        <section>
          <Head id="suport" n="02" title="Pe ce se montează" accent="Suportul face jumătate din rezultat." />
          <p>Suportul trebuie să fie curat, uscat, plan, rezistent și fără contaminanți. Defectele suportului se văd prin mochetă și sunt cea mai frecventă cauză a problemelor după montaj.</p>
          <div className="tg-numbers">{subfloorNumbers.map(([n, t, d]) => <div key={t}><strong>{n}</strong><p><b>{t}</b><br />{d}</p></div>)}</div>
          <h3 className="sub">Suporturi potrivite</h3>
          <dl className="landing-bullets">{subfloorOk.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <h3 className="sub">Nu se montează</h3>
          <ul className="tg-no">{subfloorNo.map(t => <li key={t}>{t}</li>)}</ul>
        </section>

        <section>
          <Head id="depozitare" n="03" title="Depozitare și aclimatizare" accent="48 de ore în încăpere." />
          <dl className="landing-bullets">{storage.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        </section>

        <section>
          <Head id="adezivi" n="04" title="Adezivi și fixare" accent="Fixare, nu lipire definitivă." />
          {[adhesives.tiles, adhesives.sheet].map(a => <div key={a.title} className="tg-adhesive"><h3>{a.title}</h3><p>{a.text}</p><p className="tg-products"><span>Adeziv:</span> {a.products.join(" · ")}</p></div>)}
          <dl className="landing-bullets">{adhesives.steps.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <h3 className="sub">Montaj fără adeziv</h3>
          <dl className="landing-bullets">{adhesives.free.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <p className="cc-note">Folosim exclusiv adezivi Mapei, disponibili în toată România. Fișa tehnică Mapei a produsului are prioritate; consumul și timpii depind de suport, temperatură și umiditate.</p>
        </section>

        <section>
          <Head id="montaj" n="05" title="Montaj, pas cu pas" />
          <ol className="tg-steps">{steps.map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol>
        </section>

        <section>
          <Head id="directii" n="06" title="Direcții de montaj" accent="Aceeași dală, alt aspect." />
          <p>Săgeata de pe spatele dalei arată direcția firului. Direcția recomandată pentru fiecare colecție este în fișa ei tehnică.</p>
          <div className="tg-dirs">{directions.map(d => <article key={d.key}><div className={`tg-grid${d.offset ? " offset" : ""}`} aria-hidden="true">{d.grid.map((a, i) => <span key={i}>{a}</span>)}</div><h3>{d.label}</h3><p>{d.text}</p></article>)}</div>
        </section>

        <section>
          <Head id="trucuri" n="07" title="Trucuri de instalare" accent="Din experiența de pe șantier." />
          <div className="tg-tips">{tips.map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
        </section>

        <section>
          <Head id="intretinere" n="08" title="Întreținere" accent="Planificată, nu de urgență." />
          <dl className="landing-bullets">{care.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        </section>

        <section>
          <Head id="pete" n="09" title="Îndepărtarea petelor" />
          <p>Regula de bază: acționați imediat, tamponați, nu frecați. Testați întâi soluția pe o dală de rezervă. „Solvent pentru pete” înseamnă un produs comercial pentru pete pe mochetă; respectați instrucțiunile de pe etichetă.</p>
          <div className="table-wrap"><table><thead><tr><th scope="col">Pata</th><th scope="col">Tratament</th></tr></thead><tbody>{stains.map(([s, t]) => <tr key={s}><th scope="row">{s}</th><td>{t}</td></tr>)}</tbody></table></div>
        </section>

        <section className="faq tg-faq">
          <div><Label>Întrebări frecvente</Label><h2>Pe scurt.</h2></div>
          <div>{technicalFaqs.map(f => <details key={f.q}><summary>{f.q}<span>+</span></summary><p>{f.a}</p></details>)}</div>
        </section>

        <section className="tg-sources">
          <h3 className="sub">Documente</h3>
          <div className="doc-list">{[["Ghid de pregătire a suportului", "/documente/ghid-pregatire-suport-burmatex.pdf"], ["Ghid de întreținere a mochetei în dale", "/documente/ghid-intretinere-burmatex.pdf"]].map(([l, h]) => <a key={h} href={h} download><FileText /><span>{l}</span><small>PDF · original Burmatex, engleză</small><Download /></a>)}<Link href="/contact?tip=documente"><FileText /><span>Ghidurile în limba română</span><small>la cerere</small><ArrowRight /></Link></div>
          <p className="cc-note">Fișa tehnică în limba română a fiecărei colecții este pe pagina colecției și în <Link href="/resurse">Resurse tehnice</Link>. Fișele tehnice Mapei și declarațiile de mediu le trimitem la cerere. Pentru condiții neobișnuite de șantier, consultați InsightFLOOR înainte de montaj.</p>
        </section>
      </div>
    </div>
    <DealerCTA title="Montaj cu echipe" accent="care cunosc produsul." text="InsightFLOOR montează mocheta Burmatex cu echipe proprii sau prin partenerii autorizați din toată țara, de la pregătirea suportului la predare." to="/contact?tip=proiect" button="Cereți ofertă cu montaj" label="Montaj" />
  </div>;
}
