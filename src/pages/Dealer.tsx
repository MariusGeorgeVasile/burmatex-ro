import { useState } from "react";
import { Link } from "../link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Label, PageIntro, usePageMeta } from "../components";
import { counties, regions, site } from "../data/site";
import { dealerFaqs } from "../data/faqs";

const benefits = [
  ["Un brand pe care arhitecții îl cunosc", "Burmatex este specificat de ani de zile în proiecte de birouri din România. Clientul final recunoaște marca; dumneavoastră nu mai trebuie să o explicați de la zero."],
  ["Stoc în România", "go to® este disponibil din stoc. Pentru lucrările mici și înlocuirile punctuale nu așteptați producția din Marea Britanie."],
  ["Portofoliu complet, fără stoc propriu obligatoriu", "Peste 20 de colecții, de la dala de lucru la fibra presată pentru școli și covoarele de intrare. Comandați pe proiect, nu pentru raft."],
  ["Kit de mostre și paletare", "Mostre, paletare și cutii de prezentare pentru showroom, ca să vindeți din fața clientului, nu din catalog."],
  ["Documentație în limba română", "Fișe tehnice, recomandări de montaj și întreținere, declarații de mediu. Tot ce cere un caiet de sarcini sau o licitație."],
  ["Suport la ofertare și specificare", "Calcul de cantități, alegerea colecției potrivite, verificarea suportului. Pentru proiectele mari, vă însoțim la client."],
  ["Imagini și texte pentru marketing", "Fotografii de produs, texte de prezentare și listări pregătite pentru site-ul, magazinul și rețelele dumneavoastră sociale."],
  ["Zonă și clienți protejați", "Proiectele aduse de dealer rămân ale dealerului. Lead-urile din zona dumneavoastră primite pe burmatex.ro vă sunt direcționate."],
] as const;

const profiles = [
  ["Magazine de pardoseli și finisaje", "Adăugați mochetă comercială de calitate la parchet, LVT și gresie. Un produs cu marjă bună și clienți B2B recurenți."],
  ["Firme de montaj", "Vindeți materialul împreună cu manopera. Dalele Burmatex se montează rapid, fără deșeuri mari, cu adeziv tackifier sau sisteme fără adeziv."],
  ["Firme de amenajări și constructori", "Un furnizor sigur pentru fit-out-uri de birouri, școli și spații publice, cu documente pentru recepție."],
  ["Arhitecți și designeri de interior", "Specificați Burmatex și lucrați cu un partener local care livrează și montează conform specificației."],
] as const;


export default function DealerPage() {
  usePageMeta("/devino-dealer");
  return <div className="dealer-page">
    <PageIntro label="Program de dealeri Burmatex · România" title="Un brand britanic." accent="Partenerul local este dumneavoastră." text="Căutăm magazine de pardoseli, firme de montaj și de amenajări din toată țara care vor să adauge în portofoliu o mochetă comercială de calitate, cu stoc în România și suport real. Programul este coordonat de InsightFLOOR, dealer oficial Burmatex® în România.">
      <div className="intro-actions"><Link href="#aplica" className="ed-button">Aplicați acum <ArrowUpRight /></Link><Link href="#beneficii" className="ed-text-link">Ce primiți ca partener <ArrowRight /></Link></div>
    </PageIntro>

    <figure className="wide-figure"><img src="/img/c/tivoli/mocheta-dale-tivoli-ambient-2.webp" alt="Sală de lucru cu mochetă în dale Burmatex tivoli mist®" width="1200" height="1200" /><figcaption className="ed-shell">tivoli® · imagine Burmatex</figcaption></figure>

    <section className="ed-shell dealer-proof">
      <p><strong>Peste 2,5 milioane m²</strong> de mochetă Burmatex sunt deja montați în România: Nokia, Continental, ING, Raiffeisen Bank, Aeroportul Otopeni, Holcim, Ursus Breweries. Clienții dumneavoastră vor recunoaște referințele.</p>
      <Link href="/proiecte" className="ed-text-link">Vedeți proiectele <ArrowRight /></Link>
    </section>

    <section className="ed-shell benefits" id="beneficii">
      <div className="ed-section-heading"><div><Label>Ce primiți</Label><h2>Tot ce vă trebuie<br /><span>ca să vindeți din prima lună.</span></h2></div><p>Programul este gândit pentru firme mici și mijlocii. Fără angajamente de volum nerealiste, fără stoc blocat pe raft.</p></div>
      <div className="benefit-grid">{benefits.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="ed-method" id="profil"><div className="ed-shell">
      <div className="ed-section-heading"><div><Label>Pentru cine este programul</Label><h2>Patru tipuri de parteneri.<br />Același standard.</h2></div></div>
      <div className="ed-method-grid">{profiles.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="ed-shell regions">
      <div className="ed-section-heading"><div><Label>Acoperire națională</Label><h2>Căutăm parteneri<br /><span>în toate regiunile.</span></h2></div><p>Prioritate au orașele reședință de județ și centrele universitare. Dacă lucrați într-un oraș mai mic, aplicați la fel: zona se stabilește împreună.</p></div>
      <div className="region-grid">{regions.map(r => <article key={r.name}><h3>{r.name}</h3><p>{r.counties.join(" · ")}</p><span className="region-status">Căutăm dealeri</span></article>)}</div>
    </section>

    <section className="ed-shell steps">
      <div className="ed-section-heading"><div><Label>Pașii</Label><h2>De la formular<br /><span>la prima vânzare.</span></h2></div></div>
      <ol className="step-list">{[
        ["Aplicați online", "Formularul de mai jos. Două minute."],
        ["Discuția de cunoaștere", "Vă sunăm în câteva zile lucrătoare. Vorbim despre piața locală, clienți, produse."],
        ["Condiții și zonă", "Primiți condițiile de partener, lista de prețuri și propunerea de kit de mostre."],
        ["Kit de start", "Mostre, paletare, documentație în română, imagini și texte pentru comunicare."],
        ["Prima ofertă împreună", "Vă sprijinim la prima ofertă și, dacă e nevoie, la prima întâlnire cu clientul."],
      ].map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}</ol>
    </section>

    <section className="ed-shell faq">
      <div><Label>Întrebări frecvente</Label><h2>Răspunsuri directe<br /><span>înainte de aplicare.</span></h2></div>
      <div>{dealerFaqs.map(({ q, a }) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
    </section>

    <DealerForm />
  </div>;
}

function DealerForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const d = new FormData(event.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const interests = d.getAll("interes").join(", ") || "—";
    const body = [
      "Aplicație program de dealeri Burmatex România", "",
      `Firma: ${get("firma")}`, `CUI: ${get("cui") || "—"}`, `Persoană de contact: ${get("nume")}`, `Telefon: ${get("telefon")}`, `E-mail: ${get("email")}`,
      `Județ: ${get("judet")}`, `Oraș: ${get("oras")}`, `Tip activitate: ${get("tip")}`, `Showroom propriu: ${get("showroom")}`,
      `Interes pentru: ${interests}`, `Volum estimat anual: ${get("volum") || "—"}`, `Site / rețele sociale: ${get("site") || "—"}`, "",
      `Mesaj: ${get("mesaj") || "—"}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Aplicație dealer — ${get("firma")} (${get("judet")})`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return <section className="ed-shell form-section" id="aplica">
    <div className="form-intro"><Label>Formular de aplicare</Label><h2>Deveniți dealer<br /><span>Burmatex.</span></h2><p>Completați datele firmei. Mesajul se deschide în aplicația dumneavoastră de e-mail, gata de trimis către <a href={`mailto:${site.email}`}>{site.email}</a>.</p><ul className="check-list"><li><Check /> Fără obligații la aplicare</li><li><Check /> Răspuns în câteva zile lucrătoare</li><li><Check /> Datele sunt folosite doar pentru evaluarea parteneriatului</li></ul></div>
    <form className="lead-form" onSubmit={submit}>
      <label>Denumirea firmei *<input required name="firma" autoComplete="organization" /></label>
      <label>CUI<input name="cui" inputMode="numeric" /></label>
      <label>Persoană de contact *<input required name="nume" autoComplete="name" /></label>
      <label>Telefon *<input required name="telefon" type="tel" autoComplete="tel" /></label>
      <label className="full">E-mail *<input required name="email" type="email" autoComplete="email" /></label>
      <label>Județ *<select required name="judet" defaultValue=""><option value="" disabled>Alegeți județul</option>{counties.map(c => <option key={c}>{c}</option>)}</select></label>
      <label>Oraș *<input required name="oras" autoComplete="address-level2" /></label>
      <label>Tip activitate *<select required name="tip" defaultValue=""><option value="" disabled>Alegeți</option><option>Magazin de pardoseli / finisaje</option><option>Firmă de montaj pardoseli</option><option>Firmă de amenajări / construcții</option><option>Arhitect / designer de interior</option><option>Distribuitor regional</option><option>Altele</option></select></label>
      <label>Aveți showroom?<select name="showroom" defaultValue="Da"><option>Da</option><option>Nu</option><option>În curs de deschidere</option></select></label>
      <fieldset className="full"><legend>Ce vă interesează</legend>{["Dale pentru birouri", "Fibră presată (școli, spații publice)", "Covoare de intrare", "Lamele", "Colecții de design"].map(v => <label key={v} className="check"><input type="checkbox" name="interes" value={v} /> {v}</label>)}</fieldset>
      <label>Volum estimat anual<select name="volum" defaultValue=""><option value="">Nu știu încă</option><option>Sub 500 m²</option><option>500 – 2.000 m²</option><option>2.000 – 5.000 m²</option><option>Peste 5.000 m²</option></select></label>
      <label>Site / rețele sociale<input name="site" type="text" /></label>
      <label className="full">Mesaj<textarea name="mesaj" rows={4} placeholder="Ce clienți aveți, ce produse vindeți acum, ce așteptați de la parteneriat." /></label>
      <label className="check full"><input type="checkbox" required /> Sunt de acord ca datele să fie folosite pentru a fi contactat în legătură cu parteneriatul. *</label>
      <button className="ed-button full" type="submit">Trimiteți aplicația <ArrowUpRight /></button>
      {sent && <p className="form-sent full" role="status">Mesajul este pregătit în aplicația de e-mail. Dacă nu s-a deschis, scrieți-ne direct la <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
    </form>
    <p className="cc-note">Preferați o discuție directă? <Link href="/contact?tip=dealer">Scrieți-ne din pagina de contact</Link>.</p>
  </section>;
}
