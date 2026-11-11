import { Link } from "wouter";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { DealerCTA, Label, featured, usePageMeta } from "../components";
import { collections, families, totalColours, collectionPath, plainName, type FamilyKey } from "../data/collections";
import { sectors } from "../data/site";

const familyImage: Record<FamilyKey, string> = {
  multilevel: "/img/surface-memory.webp",
  loop: "/img/infinity.webp",
  cut: "/img/tile-origin.webp",
  barrier: "/img/armour.webp",
  fibre: "/img/academy.webp",
  entrance: "/img/chevrolay-50.webp",
};

const featuredFacts: Record<string, { status: string; claim: string; text: string }> = {
  "go-to": { status: "Din stoc în România", claim: "Prima dală pe care o vindeți.", text: "Buclă uniformă, clasa 33, 20 de nuanțe. Testată de peste un deceniu în birouri din România. Livrabilă rapid pentru lucrările mici și înlocuirile punctuale." },
  "surface-memory": { status: "Noutate 2026", claim: "Ce cer arhitecții acum.", text: "Cea mai nouă colecție Burmatex: buclă pe mai multe niveluri, desen estompat, fir Thrive® matter și suport BioBase®. Un argument pentru proiectele de birouri premium." },
  "eco-cordiale": { status: "44 de nuanțe", claim: "Volum pentru școli și spații publice.", text: "Fibră presată în dale și rulou, cu margini care nu se destramă. Un produs rezistent, ușor de întreținut, cu un raport foarte bun cost / durabilitate." },
};

export default function Home() {
  usePageMeta("/");
  const familyKeys = Object.keys(families) as FamilyKey[];
  return <div className="editorial-home">
    <section className="ed-hero" aria-labelledby="hero-title">
      <img className="ed-hero-photo" src="/img/go-to.webp" alt="Mochetă în dale Burmatex go to® într-un birou" fetchPriority="high" width="1200" height="1200" />
      <div className="ed-hero-shade" />
      <div className="ed-shell ed-hero-body">
        <Label light>Burmatex® / Mochetă britanică din 1967</Label>
        <h1 id="hero-title">Mocheta în dale britanică.<br /><strong>Acum prin dealerul din orașul dumneavoastră.</strong></h1>
        <p>Construim rețeaua națională Burmatex. Căutăm magazine de pardoseli,<br />firme de montaj și amenajări din toată țara.</p>
        <div className="ed-hero-actions"><Link href="/devino-dealer" className="ed-button">Devino dealer Burmatex <ArrowUpRight /></Link><Link href="/colectii" className="ed-hero-link">Vedeți colecțiile <ArrowRight /></Link></div>
      </div>
      <div className="ed-shell ed-hero-caption"><a href="#produse"><ArrowDown /> Descoperiți Burmatex</a><Link href={collectionPath("go-to")}>go to® / din stoc <ArrowUpRight /></Link></div>
    </section>

    <nav className="ed-product-dock ed-shell" aria-label="Produse reprezentative" id="produse">
      {featured.map((c, i) => <Link href={collectionPath(c.slug)} key={c.slug}>
        <span className="ed-dock-index">0{i + 1}</span><div><small>{families[c.family].label}</small><strong>{c.name}</strong><span>{featuredFacts[c.slug].status}</span></div><ArrowUpRight />
      </Link>)}
    </nav>

    <section className="ed-introduction ed-shell">
      <div><Label>Un brand cu istorie. O rețea în construcție.</Label><h2>Calitatea britanică<br /><span>nu trebuie să rămână în București.</span></h2></div>
      <div>
        <p className="ed-lead">Burmatex produce mochetă în Ossett, West Yorkshire, din 1967. Acum construim o rețea de parteneri locali care să o aducă aproape de fiecare client.</p>
        <p>Firmele mici și mijlocii câștigă cele mai multe lucrări din țară: birouri, școli, cabinete, spații comerciale, case. Au nevoie de un produs de încredere, disponibil, documentat și ușor de vândut. Exact asta oferim: un brand recunoscut de arhitecți, stoc în România și un partener care răspunde la telefon.</p>
        <Link href="/devino-dealer" className="ed-text-link">Cum funcționează programul de dealeri <ArrowRight /></Link>
      </div>
    </section>

    <section className="ed-evidence ed-shell" aria-label="Burmatex în cifre">
      <div><strong>1912</strong><p>începutul în reciclarea textilă, la Ossett, Marea Britanie</p></div>
      <div><strong>{collections.length}<span>+</span></strong><p>colecții: dale, lamele, rulouri, covoare de intrare</p></div>
      <div><strong>{totalColours}<span>+</span></strong><p>nuanțe în portofoliul disponibil dealerilor</p></div>
      <div><strong>Clasa 33</strong><p>trafic comercial intens, pentru colecțiile documentate</p></div>
    </section>

    <section className="ed-directions ed-shell">
      <Link href="/devino-dealer" className="ed-direction ed-direction-primary">
        <img src="/img/infinity.webp" alt="Birou open-space cu mochetă în dale Burmatex infinity®" loading="lazy" width="1200" height="1200" />
        <div><span className="ed-number">01 / Pentru dealeri</span><h2>Vindeți<br />Burmatex</h2><p>Magazine de pardoseli, showroom-uri de finisaje, distribuitori regionali. Portofoliu complet, mostre și condiții de partener.</p><span className="ed-text-link">Programul de dealeri <ArrowUpRight /></span></div>
      </Link>
      <Link href="/devino-dealer#profil" className="ed-direction ed-direction-secondary">
        <img src="/img/eco-cordiale.webp" alt="Spațiu școlar cu mochetă Burmatex eco-cordiale®" loading="lazy" width="1200" height="1200" />
        <div><span className="ed-number">02 / Pentru montatori și constructori</span><h2>Montați<br />Burmatex</h2><p>Firme de montaj, amenajări interioare, antreprenori. Produs de proiect, livrat la timp, cu suport tehnic.</p><span className="ed-text-link">Parteneriat de montaj <ArrowUpRight /></span></div>
      </Link>
    </section>

    <section className="ed-signatures" aria-labelledby="signature-title"><div className="ed-shell">
      <div className="ed-section-heading"><div><Label>Trei produse. Trei tipuri de client.</Label><h2 id="signature-title">Începeți cu ele.<br /><span>Restul vine din cerere.</span></h2></div><p>Nu trebuie să țineți tot catalogul pe raft. Recomandăm un set de pornire care acoperă birourile, proiectele premium și spațiile publice.</p></div>
      <div className="ed-signature-grid">{featured.map((c, i) => <article key={c.slug}>
        <Link href={collectionPath(c.slug)} className="ed-signature-image"><img src={c.image} alt={`Burmatex ${c.name}`} loading="lazy" width="700" height="800" /><span>{featuredFacts[c.slug].status}</span></Link>
        <div className="ed-signature-body"><span className="ed-number">0{i + 1} / {families[c.family].label}</span><h3>{c.name}</h3><small>Burmatex · {c.colours} nuanțe</small><h4>{featuredFacts[c.slug].claim}</h4><p>{featuredFacts[c.slug].text}</p><div className="ed-signature-facts">{c.formats.join(" · ")}</div><div className="ed-signature-links"><Link href={collectionPath(c.slug)}>Vedeți colecția <ArrowUpRight /></Link><Link href={`/contact?tip=mostre&produs=${encodeURIComponent(plainName(c.name))}`}>Solicitați mostre <ArrowRight /></Link></div></div>
      </article>)}</div>
    </div></section>

    <section className="ed-families ed-shell">
      <div className="ed-section-heading"><div><Label>Portofoliul complet</Label><h2>Șase familii.<br /><span>Un singur furnizor.</span></h2></div><Link href="/colectii" className="ed-text-link">Toate colecțiile <ArrowUpRight /></Link></div>
      <div className="family-grid">{familyKeys.map((key, i) => {
        const count = collections.filter(c => c.family === key).length;
        return <Link key={key} href={`/colectii?familie=${key}`} className="family-card">
          <div className="family-photo"><img src={familyImage[key]} alt="" loading="lazy" width="600" height="600" /></div>
          <div><span className="ed-number">{String(i + 1).padStart(2, "0")} / {families[key].short}</span><h3>{families[key].label}</h3><p>{families[key].text}</p><span className="ed-text-link">{count} {count === 1 ? "colecție" : "colecții"} <ArrowRight /></span></div>
        </Link>;
      })}</div>
    </section>

    <section className="ed-method"><div className="ed-shell">
      <div className="ed-section-heading"><div><Label>Cum devii dealer</Label><h2>Patru pași.<br />De la aplicare la prima vânzare.</h2></div><Link href="/devino-dealer" className="ed-text-link">Detaliile programului <ArrowUpRight /></Link></div>
      <div className="ed-method-grid">{[
        ["01", "Aplicați.", "Completați formularul: firma, zona, tipul de clienți. Durează două minute."],
        ["02", "Discutăm.", "Vă sunăm, stabilim zona, produsele potrivite pieței locale și condițiile de partener."],
        ["03", "Primiți kitul.", "Mostre, paletare, fișe tehnice în română și imagini pentru comunicarea dumneavoastră."],
        ["04", "Vindeți cu suport.", "Ofertare rapidă, stoc în România, suport tehnic la specificare și montaj."],
      ].map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="ed-sectors ed-shell">
      <div className="ed-section-heading"><div><Label>Unde se vinde Burmatex</Label><h2>Clienții există deja.<br /><span>În orașul dumneavoastră.</span></h2></div><p>Fiecare oraș are birouri, școli, cabinete medicale, hoteluri și magazine care renovează periodic. Mocheta în dale se înlocuiește modular, fără să oprească activitatea.</p></div>
      <div className="sector-grid">{sectors.map(([name, text], i) => <article key={name}><span>{String(i + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="ed-sustain">
      <img src="/img/sustainability.webp" alt="" loading="lazy" width="1920" height="1008" />
      <div className="ed-sustain-shade" />
      <div className="ed-shell ed-sustain-body">
        <Label light>Sustenabilitate documentată</Label>
        <h2>Reciclarea nu este o tendință.<br /><strong>Este punctul de plecare.</strong></h2>
        <p>Burmatex a început în 1912 ca reciclator de textile. Astăzi: fire reciclate, suport BioBase®, declarații de mediu (EPD) verificate de terți, program Zero Landfill și serviciu de preluare a dalelor uzate. Argumente pe care clienții publici și corporate le cer în caietele de sarcini.</p>
        <Link href="/de-ce-burmatex#sustenabilitate" className="ed-hero-link">Ce înseamnă concret <ArrowRight /></Link>
      </div>
    </section>

    <section className="ed-meeting ed-shell"><div><Label>Kit de mostre pentru parteneri</Label><h2>Materialul se vede.<br /><span>Diferența se simte.</span></h2><p>Dealerii noi primesc mostre și paletare pentru showroom, ca să poată prezenta colecțiile direct clientului. Pentru proiecte punctuale trimitem mostre la cerere.</p></div><Link href="/contact?tip=mostre" className="ed-button">Solicitați mostre <ArrowUpRight /></Link></section>

    <DealerCTA />
  </div>;
}
