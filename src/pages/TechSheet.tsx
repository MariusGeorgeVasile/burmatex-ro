import { Link } from "../link";
import { ArrowLeft, Printer } from "lucide-react";
import { usePageMeta } from "../components";
import { collectionBySlug, collectionPath, families, plainName } from "../data/collections";
import { techSheetPath, techSheets } from "../data/documents";
import { site } from "../data/site";
import NotFound from "./NotFound";

// Romanian technical sheet, one per collection. Laid out to print on A4 ("Salvați ca PDF").
export default function TechSheetPage({ slug }: { slug: string }) {
  const c = collectionBySlug[slug];
  usePageMeta(techSheetPath(slug));
  if (!c) return <NotFound />;
  const sheet = techSheets[slug];
  const name = plainName(c.name);
  const sheetRoll = c.formats.some(f => f.startsWith("Rulou"));
  const sections = sheet?.sections?.length ? sheet.sections : [{ title: "Date tehnice", rows: c.specs }];
  return <div className="tsheet-page">
    <div className="ed-shell tsheet-tools no-print">
      <Link href={collectionPath(c.slug)} className="ed-text-link"><ArrowLeft /> Înapoi la {name}®</Link>
      <button type="button" className="ed-button" onClick={() => window.print()}><Printer /> Tipăriți / salvați ca PDF</button>
    </div>
    <article className="tsheet ed-shell">
      <header className="tsheet-head">
        <div><p className="tsheet-brand">BURMATEX<sup>®</sup></p><p className="tsheet-kind">Fișă tehnică{sheet?.edition ? ` · ediția ${sheet.edition}` : ""}</p></div>
        <div className="tsheet-dealer"><strong>{site.dealer.name}</strong> · dealer oficial Burmatex® în România<br />{site.phoneDisplay} · {site.email} · burmatex.ro</div>
      </header>
      <div className="tsheet-title">
        {c.tile && <img src={c.tile} alt={`Mochetă dale Burmatex ${c.name}`} width="160" height="160" />}
        <div>
          <h1>{name}<sup>®</sup></h1>
          <p className="tsheet-sub">{families[c.family].label} · {c.formats.join(" / ")} · {c.colours} nuanțe</p>
          <p>{c.summary}</p>
        </div>
      </div>
      {sections.map(s => <section key={s.title} className="tsheet-section">
        <h2>{s.title}</h2>
        <table><tbody>{s.rows.map(([k, v], i) => <tr key={`${k}-${i}`}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table>
      </section>)}
      <section className="tsheet-section">
        <h2>Montaj recomandat</h2>
        <table><tbody>
          <tr><th scope="row">{sheetRoll ? "Dale și lamele" : "Adeziv"}</th><td>Mapei Ultrabond Eco Fix, adeziv de fixare (tackifier), 0,10–0,20 kg/m²</td></tr>
          {sheetRoll && <tr><th scope="row">Rulouri</th><td>Mapei Ultrabond Eco 380, lipire permanentă pe toată suprafața</td></tr>}
          <tr><th scope="row">Aclimatizare</th><td>Cel puțin 48 de ore în încăperea de montaj, despachetate; încăperea la minimum 18 °C</td></tr>
          <tr><th scope="row">Ghid complet</th><td>burmatex.ro/ghid-tehnic</td></tr>
        </tbody></table>
      </section>
      {sheet?.certifications?.length ? <section className="tsheet-section"><h2>Conformitate și certificări</h2><ul className="tsheet-certs">{sheet.certifications.map(x => <li key={x}>{x}</li>)}</ul></section> : null}
      <footer className="tsheet-foot">
        <p>Traducere în limba română a fișei tehnice Burmatex®{sheet?.edition ? ` (ediția ${sheet.edition})` : ""}. Valorile sunt cele declarate de producător; în caz de neconcordanță prevalează documentul original al producătorului, disponibil la cerere împreună cu declarația de mediu (EPD) și certificatele.</p>
        <p>Burmatex® este produs de Burmatex Ltd., Ossett, Marea Britanie. Mocheta Burmatex® este distribuită în România prin InsightFLOOR, dealer oficial Burmatex®.</p>
      </footer>
    </article>
  </div>;
}
