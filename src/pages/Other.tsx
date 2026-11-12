import { useEffect, useState } from "react";
import { useSearch } from "wouter";
import { Link } from "../link";
import { ArrowRight, ArrowUpRight, FileText, Mail, Phone } from "lucide-react";
import { DealerCTA, Label, PageIntro, usePageMeta } from "../components";
import { collections, plainName } from "../data/collections";
import { counties, site } from "../data/site";
import { docsFor } from "../data/documents";
import { InsightFloorLogo } from "../InsightFloorLogo";

export function AboutPage() {
  usePageMeta("/de-ce-burmatex");
  return <div className="about-page">
    <PageIntro label="De ce Burmatex" title="Nu vindem doar mochetă." accent="Contează cine o produce." text="Britanică prin origine. Concepută pentru trafic real. Cu o istorie în reciclare care începe cu mult înainte ca sustenabilitatea să devină un argument de vânzare. În România, Burmatex este distribuit prin InsightFLOOR, dealer oficial." />
    <figure className="wide-figure"><img src="/img/c/armour/mocheta-dale-armour-ambient-1.webp" alt="Coridor cu mochetă Burmatex armour®" width="1200" height="1200" /><figcaption className="ed-shell">armour® · imagine Burmatex</figcaption></figure>

    <section className="chapter ed-shell"><div><Label>01 / Tradiție britanică</Label><h2>O fabrică.<br /><span>Nu doar o etichetă.</span></h2></div><div><p>Povestea începe în 1912 la Ossett, în West Yorkshire, ca J&amp;F Burrows: recuperarea și prelucrarea deșeurilor textile — lână, bumbac, apoi nailon și polipropilenă. Marca Burmatex apare în 1967, odată cu prima mochetă produsă pe amplasament.</p><p><strong>Pentru un dealer, „britanic” este un argument concret:</strong> continuitate de producție, control al calității certificat ISO 9001 și ISO 14001 și un producător care există de peste un secol.</p></div></section>

    <section className="ed-evidence ed-shell" aria-label="Repere">
      <div><strong>1912</strong><p>începutul activității de reciclare textilă</p></div>
      <div><strong>1967</strong><p>nașterea mărcii Burmatex</p></div>
      <div><strong>ISO</strong><p>9001:2015 și 14001:2015</p></div>
      <div><strong>{collections.length}<span>+</span></strong><p>colecții în portofoliul actual</p></div>
    </section>

    <section className="chapter ed-shell"><div><Label>02 / Construită pentru trafic</Label><h2>Mocheta trebuie să reziste<br /><span>după ce se deschid ușile.</span></h2></div><div><p>Colecțiile documentate au <strong>clasa 33 pentru utilizare comercială intensă</strong>, iar fișele tehnice declară <strong>15 ani de garanție</strong>, în condițiile producătorului. Fibra presată și covoarele de intrare sunt gândite pentru școli, holuri și clădiri publice.</p><p>Rezistența la trafic și întreținerea merg împreună: alegem desenul, nuanța, protecția la intrare și metoda de curățare ca părți ale aceluiași sistem. Nicio clasă de utilizare nu înlocuiește întreținerea corectă.</p></div></section>

    <section className="ed-sustain" id="sustenabilitate">
      <img src="/img/sustainability.webp" alt="" loading="lazy" width="1920" height="1008" />
      <div className="ed-sustain-shade" />
      <div className="ed-shell ed-sustain-body"><Label light>03 / eco₂ matters®</Label><h2>Mai puțin impact.<br /><strong>Mai multă transparență.</strong></h2><p>Burmatex s-a angajat pe un parcurs către Net Zero și diferențiază clar colecțiile cu impact redus de cele declarate neutre din punctul de vedere al carbonului.</p></div>
    </section>

    <section className="ed-shell sustain-cards">{[
      ["Fire reciclate", "Firul este cea mai mare sursă de carbon dintr-o dală. Din 2021, toate produsele noi Burmatex folosesc fire cu amprentă redusă: Thrive® matter, ECONYL® și fire reciclate „bio-genic”."],
      ["Suport BioBase®", "Suport cu amprentă redusă, din materiale organice reciclate de proveniență locală. Producătorul declară minimum 77% conținut reciclat în suport — valoare pentru suport, nu pentru întreaga dală."],
      ["EPD verificate", "Declarații de mediu specifice fiecărui produs, verificate de terți. Valorile GWP sunt publicate pe paginile colecțiilor și sunt utile în licitații și certificări LEED / BREEAM."],
      ["Zero Landfill", "Program la nivel de companie, început în 2021, pentru eliminarea deșeurilor trimise la groapa de gunoi."],
      ["Serviciu de preluare", "Burmatex are un serviciu de preluare a dalelor la sfârșitul utilizării; aplicabilitatea pentru proiectele din România se verifică de la caz la caz."],
      ["Neutralitate, explicată corect", "Pentru anumite colecții, neutralitatea declarată înseamnă reducere de impact plus compensare la sursă. Nu înseamnă emisii fizice zero."],
    ].map(([t, d], i) => <article key={t}><span>{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></article>)}</section>
    <DealerCTA />
  </div>;
}

const guides = [
  ["Pregătirea suportului", "Suportul trebuie să fie plan, uscat, curat și fără fisuri. Umiditatea șapei se măsoară înainte de montaj. Majoritatea reclamațiilor pornesc de la un suport nepregătit."],
  ["Montajul dalelor", "Dalele se aclimatizează în spațiu înainte de montaj. Se folosește adeziv de tip tackifier sau soluții fără adeziv, conform recomandărilor producătorului. Orientarea dalelor (paralelă, în tablă de șah sau aleatorie) este indicată pentru fiecare colecție."],
  ["Covoare de intrare", "Zonele de intrare trebuie să acopere cel puțin câțiva pași de mers. Un covor de intrare bine dimensionat reduce semnificativ murdăria transportată în restul clădirii."],
  ["Întreținere zilnică", "Aspirare regulată, cu frecvență mai mare în zonele de trafic. Intervenția rapidă la pete și curățarea periodică prin extracție mențin aspectul și prelungesc durata de viață."],
  ["Îndepărtarea petelor", "Se acționează imediat, din exterior spre centru, fără frecare agresivă. Pentru fiecare tip de pată există o metodă recomandată în ghidul producătorului."],
  ["Înlocuirea punctuală", "Avantajul dalelor: o zonă deteriorată se înlocuiește fără a schimba toată pardoseala. Recomandați clientului să păstreze o rezervă din același lot."],
] as const;

export function ResourcesPage() {
  usePageMeta("/resurse");
  return <div className="resources-page">
    <PageIntro label="Resurse tehnice" title="Documentele corecte." accent="Înainte de ofertă." text="Fișele tehnice ale tuturor colecțiilor, în limba română, cataloagele InsightFLOOR în PDF și recomandările de bază pentru montaj și întreținere. Declarațiile de mediu (EPD) și certificatele se trimit la cerere." />
    <section className="ed-shell">
      <div className="ed-section-heading"><div><Label>Documente pe colecție · {collections.length}</Label><h2>Fișe tehnice,<br /><span>cataloage, mostre.</span></h2></div><Link href="/cataloage" className="ed-text-link">Toate cataloagele <ArrowRight /></Link></div>
      <div className="doc-table">{collections.map(c => <div key={c.slug} className="doc-row"><Link href={`/colectii/${c.slug}`} className="doc-name">{c.name}</Link><div>{docsFor(c).map(d => d.pdf ? <a key={d.href} href={d.href} download><FileText />{d.label}</a> : <Link key={d.href} href={d.href}><FileText />{d.label}</Link>)}</div></div>)}</div>
      <p className="cc-note">Toate documentele sunt în limba română. Paletarele fizice, mostrele, declarațiile de mediu (EPD) și certificatele se trimit gratuit, la cerere.</p>
    </section>
    <section className="ed-method"><div className="ed-shell">
      <div className="ed-section-heading"><div><Label>Ghid tehnic pe scurt</Label><h2>Montaj și întreținere.<br />Ce trebuie să știe clientul.</h2></div><Link href="/ghid-tehnic" className="ed-text-link">Ghidul tehnic complet <ArrowRight /></Link></div>
      <div className="guide-grid">{guides.map(([t, d], i) => <article key={t}><span>{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>
    <DealerCTA title="Aveți nevoie de EPD" accent="sau certificate?" text="Pentru caiete de sarcini, certificări LEED, BREEAM sau WELL și dosare de licitație trimitem declarațiile de mediu, certificatele de reacție la foc și fișele tehnice pentru colecțiile din proiect." to="/contact?tip=documente" button="Cereți documentele" label="Documente" />
  </div>;
}

const requestTypes = { oferta: "Cerere de ofertă / preț", mostre: "Solicitare mostre", proiect: "Proiect / specificare", documente: "Documente tehnice (EPD, certificate)", dealer: "Parteneriat de dealer", alta: "Altă întrebare" } as const;
type RequestType = keyof typeof requestTypes;

export function ContactPage() {
  usePageMeta("/contact");
  const search = useSearch();
  const [type, setType] = useState<RequestType>("oferta");
  const [product, setProduct] = useState("");
  const [shade, setShade] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(search);
    const t = params.get("tip") as RequestType | null;
    if (t && t in requestTypes) setType(t);
    setProduct(params.get("produs") ?? "");
    setShade(params.get("nuanta") ?? "");
  }, [search]);
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const d = new FormData(event.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const body = [`${requestTypes[type]}`, "", `Nume: ${get("nume")}`, `Firma: ${get("firma") || "—"}`, `Telefon: ${get("telefon")}`, `E-mail: ${get("email")}`, `Județ: ${get("judet") || "—"}`, `Colecție: ${get("produs") || "—"}`, `Nuanță: ${get("nuanta") || "—"}`, `Suprafață estimată: ${get("suprafata") || "—"}`, "", get("mesaj")].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${requestTypes[type]} — ${get("firma") || get("nume")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return <div className="contact-page">
    <PageIntro label="Contact" title="Mostre, oferte," accent="parteneriat." text="Spuneți-ne ce aveți nevoie. Răspundem direct, cu pașii următori — fără formulare care dispar în neant. Burmatex România este operat de InsightFLOOR, dealer oficial Burmatex® în România." />
    <section className="ed-shell form-section">
      <div className="form-intro">
        <div className="contact-lines"><a href={`mailto:${site.email}`}><Mail /> {site.email}</a>{site.phone && <a href={`tel:${site.phone}`}><Phone /> {site.phoneDisplay || site.phone}</a>}{site.address && <p>{site.address}</p>}<p>{site.showroomNote}</p><a className="contact-dealer" href={site.dealer.url} target="_blank" rel="noreferrer"><small>Dealer oficial Burmatex® în România</small><InsightFloorLogo className="dealer-logo" /></a></div>
        <div className="type-switch" role="group" aria-label="Tipul solicitării">{(Object.keys(requestTypes) as RequestType[]).map(k => <button key={k} type="button" aria-pressed={type === k} className={type === k ? "active" : ""} onClick={() => setType(k)}>{requestTypes[k]}</button>)}</div>
        {type === "dealer" && <p>Pentru aplicația completă de dealer folosiți <Link href="/devino-dealer#aplica" className="ed-text-link">formularul dedicat <ArrowRight /></Link></p>}
      </div>
      <form className="lead-form" onSubmit={submit}>
        <label>Nume *<input required name="nume" autoComplete="name" /></label>
        <label>Firma<input name="firma" autoComplete="organization" /></label>
        <label>Telefon *<input required name="telefon" type="tel" autoComplete="tel" /></label>
        <label>E-mail *<input required name="email" type="email" autoComplete="email" /></label>
        <label>Județ<select name="judet" defaultValue=""><option value="">—</option>{counties.map(c => <option key={c}>{c}</option>)}</select></label>
        <label>Colecție<select id="contact-produs" name="produs" value={product} onChange={e => setProduct(e.target.value)}><option value="">—</option>{product && !collections.some(c => plainName(c.name) === product) && <option value={product}>{product}</option>}{collections.map(c => <option key={c.slug} value={plainName(c.name)}>{c.name}</option>)}</select></label>
        <label>Nuanță<input id="contact-nuanta" name="nuanta" value={shade} onChange={e => setShade(e.target.value)} placeholder="opțional" /></label>
        {(type === "oferta" || type === "proiect") && <label className="full">Suprafață estimată (m²)<input name="suprafata" inputMode="numeric" /></label>}
        <label className="full">Mesaj *<textarea required name="mesaj" rows={5} placeholder={type === "mostre" ? "Ce colecții și nuanțe vă interesează, adresa de livrare a mostrelor." : "Detalii despre solicitare."} /></label>
        <label className="check full"><input type="checkbox" required /> Sunt de acord ca datele să fie folosite pentru a răspunde solicitării. *</label>
        <button className="ed-button full" type="submit">Trimiteți <ArrowUpRight /></button>
        {sent && <p className="form-sent full" role="status">Mesajul este pregătit în aplicația de e-mail. Dacă nu s-a deschis, scrieți-ne la <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
      </form>
    </section>
  </div>;
}
