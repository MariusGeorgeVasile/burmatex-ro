import { Link } from "../link";
import { ArrowRight, ArrowUpRight, Download, FileText } from "lucide-react";
import { DealerCTA, usePageMeta } from "../components";
import { brochures, colourLink, dc, findSwatch, organicMerge } from "../data/brochures";
import { collectionBySlug, collectionPath, plainName } from "../data/collections";

const img = (name: string) => `/img/cataloage/${name}.webp`;

function CatHead({ n, label, children }: { n: string; label: string; children?: React.ReactNode }) {
  return <div className="cat-head"><span>{n}</span><span>{label}</span>{children}</div>;
}
function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="cat-kicker"><span aria-hidden="true" />{children}</p>;
}
function Tile({ slug, name, group, n }: { slug: string; name: string; group?: string; n?: number }) {
  const s = findSwatch(slug, name, group);
  if (!s) return <div className="cat-tile empty" aria-hidden="true" />;
  return <figure className="cat-tile">
    <Link href={`${collectionPath(slug)}#nuante`}><img src={s.img} alt={`Mochetă dale Burmatex ${s.collection} ${s.name}`} loading="lazy" width="240" height="240" /></Link>
    <figcaption>{n !== undefined && <b>{String(n).padStart(2, "0")}</b>}<strong>{s.collection.replace(/®$/, "")}<sup>®</sup></strong> {s.name.toLowerCase()}{s.code && <small>{s.code.split(" ")[0]}</small>}</figcaption>
  </figure>;
}

export function CatalogHub() {
  usePageMeta("/cataloage");
  return <div className="cat">
    <section className="cat-shell cat-intro">
      <CatHead n="00" label="cataloage și broșuri" />
      <Kicker>insightFLOOR · dealer oficial Burmatex® în România</Kicker>
      <h1>Cataloage<br />și broșuri.</h1>
      <p className="cat-lead">Cataloagele Burmatex®, traduse și adaptate pentru România de InsightFLOOR. Le citiți online sau le descărcați în PDF, pentru client, arhitect sau caietul de sarcini.</p>
    </section>
    <section className="cat-shell cat-grid">{brochures.map(b => <article key={b.slug} className={`cat-card${b.pending ? " pending" : ""}`}>
      {b.online ? <Link href={b.online} className="cat-cover"><img src={b.cover} alt={`Coperta: ${b.title}`} loading="lazy" width="600" height="600" /></Link> : <div className="cat-cover"><img src={b.cover} alt="" loading="lazy" width="600" height="600" /><span className="cat-badge">În pregătire</span></div>}
      <div className="cat-card-body">
        <small>{b.kicker}</small>
        <h2>{b.title}</h2>
        <p>{b.text}</p>
        <div className="cat-actions">
          {b.online && <Link href={b.online} className="cat-link">Citiți online <ArrowRight /></Link>}
          {b.pdf && <a href={b.pdf.href} className="cat-link" download><Download /> {b.pdf.label} <small>{b.pdf.size}</small></a>}
          {b.pending && <Link href={`/contact?tip=alta&produs=${encodeURIComponent(b.title)}`} className="cat-link">Cereți broșura <ArrowRight /></Link>}
        </div>
      </div>
    </article>)}</section>
    <section className="cat-shell cat-note"><p>Fișele tehnice, paletarele și declarațiile de mediu ale fiecărei colecții sunt pe pagina colecției și în <Link href="/resurse">Resurse tehnice</Link>.</p></section>
    <DealerCTA title="Vreți cataloagele tipărite" accent="sau mostre?" text="Vă trimitem cataloagele și mostrele potrivite proiectului." to="/contact?tip=mostre" button="Cereți mostre și cataloage" label="Mostre și cataloage" />
  </div>;
}

export function DesignConnectionPage() {
  usePageMeta("/cataloage/design-connection");
  return <div className="cat">
    <section className="cat-hero"><img src={img("design-connection-masa-de-lucru")} alt="Dale surface trace®, surface story® și surface memory® cu mostre de finisaje" width="1400" height="1400" fetchPriority="high" />
      <div className="cat-shell"><Kicker>Design Connection™ · amprentă neutră de carbon</Kicker><h1>Design<br />Connection™</h1><p>surface trace® · surface story® · surface memory®</p></div></section>

    <section className="cat-shell cat-section">
      <CatHead n="01" label="Design Connection™" />
      <Kicker>Design Connection™</Kicker>
      <h2>Trei desene.<br />Un singur limbaj.</h2>
      <div className="cat-cols">
        <div><p className="cat-lead"><strong>Design Connection™</strong> reunește cele trei game din familia surface (surface trace®, surface story® și surface memory®) într-un singur limbaj. Le combinați în același interior ca să delimitați sau să zonați spațiile prin textură și desen, fără ruptură vizuală.</p>
          <ul className="cat-bullets"><li><strong>Culori conectate</strong>: desene diferite, aceeași culoare, un spațiu unitar.</li><li><strong>Culori în contrast</strong>: desene diferite, culori în contrast, un spațiu unitar.</li></ul></div>
        <div className="cat-key"><h3>Cheia Design Connection™</h3><p>Pe fiecare imagine, cheia arată ce game au fost folosite. Fiecare gamă are pictograma ei.</p>
          <ul><li><span>{dc.icons.trace}</span> surface trace®</li><li><span>{dc.icons.story}</span> surface story®</li><li><span>{dc.icons.memory}</span> surface memory®</li></ul></div>
      </div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="02" label="familia surface" />
      <Kicker>Familia surface</Kicker>
      <h2>Trei caractere,<br />aceeași construcție.</h2>
      <p className="cat-lead">Aceeași buclă multinivel, aceeași greutate a firului (825 g/m²), clasa 33 și amprentă neutră de carbon. Desenele se completează, așa că se montează împreună, de la o zonă la alta.</p>
      <div className="cat-family">{dc.family.map(f => { const c = collectionBySlug[f.slug]; return <Link key={f.slug} href={collectionPath(f.slug)} className="cat-family-item">
        <img src={c.swatches[0].img} alt={`Dală ${c.name}`} loading="lazy" width="240" height="240" />
        <div><h3>{plainName(c.name)}<sup>®</sup> <span aria-hidden="true">{dc.icons[f.slug.replace("surface-", "") as "trace"]}</span></h3><p><strong>{c.name}</strong> {f.text}</p><span className="cat-link">{c.colours} culori · vedeți colecția <ArrowRight /></span></div>
      </Link>; })}</div>
      <div className="cat-photos two"><figure><img src={img("design-connection-surface-trace-aspect-echo")} alt="surface trace® aspect și echo într-un birou" loading="lazy" width="837" height="837" /><figcaption>{dc.icons.trace} surface trace® aspect și echo</figcaption></figure><figure><img src={img("design-connection-surface-memory-nostalgia")} alt="surface memory® nostalgia într-o zonă lounge" loading="lazy" width="766" height="766" /><figcaption>{dc.icons.memory} surface memory® nostalgia</figcaption></figure></div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="03" label="culori conectate" />
      <Kicker>Culori conectate</Kicker>
      <h2>Desene diferite.<br />Aceeași culoare.</h2>
      {dc.connected.map((combo, i) => <div key={i} className="cat-combo">
        <p className="cat-combo-text">{combo.text}</p>
        <div className="cat-tiles">{combo.items.map(([slug, name], j) => <Tile key={name + j} slug={slug} name={name} n={j + 1} />)}</div>
        <figure className="cat-combo-photo"><img src={img(combo.photo)} alt={`Combinație Design Connection™: ${combo.items.map(([s, n]) => `${plainName(collectionBySlug[s].name)} ${n}`).join(", ")}`} loading="lazy" width="1000" height="1000" /><figcaption>{combo.items.map(([s, n]) => `${plainName(collectionBySlug[s].name)}® ${n}`).join(" · ")} · montaj random</figcaption></figure>
      </div>)}
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="04" label="banca de culori" />
      <Kicker>Banca de culori</Kicker>
      <h2>Culori comune<br />tuturor celor trei game.</h2>
      <p className="cat-lead">Pe aceeași coloană, nuanța e aceeași, desenul diferă.</p>
      <div className="cat-bank-wrap"><table className="cat-bank"><thead><tr><th scope="col">Gama</th>{dc.common.map((_, i) => <th key={i} scope="col">{String(i + 1).padStart(2, "0")}</th>)}</tr></thead>
        <tbody>{["surface-trace", "surface-story", "surface-memory"].map((slug, r) => <tr key={slug}><th scope="row">{plainName(collectionBySlug[slug].name)}®</th>{dc.common.map(col => <td key={col[r]}><Tile slug={slug} name={col[r]} /></td>)}</tr>)}</tbody></table></div>
      <div className="cat-cols">
        <div><h3 className="cat-h3">Comune în două game</h3>{dc.twoRanges.map(g => <div key={g.pair.join()} className="cat-two"><p>{g.pair.map(s => plainName(collectionBySlug[s].name) + "®").join(" + ")}</p><div className="cat-tiles small">{g.items.flatMap(([a, b]) => [<Tile key={a} slug={g.pair[0]} name={a} />, <Tile key={b} slug={g.pair[1]} name={b} />])}</div></div>)}</div>
        <div><h3 className="cat-h3">Culori unice</h3><p className="cat-small">Nuanțe care există doar într-una dintre game.</p><div className="cat-tiles small">{dc.unique.map(([s, n]) => <Tile key={n} slug={s} name={n} />)}</div></div>
      </div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="05" label="culori în contrast" />
      <Kicker>Culori în contrast</Kicker>
      <h2>Desene diferite.<br />Culori în contrast.</h2>
      {dc.contrast.map((combo, i) => <div key={i} className="cat-combo">
        <p className="cat-combo-text">{combo.text}</p>
        <div className="cat-tiles">{combo.items.map(([slug, name], j) => <Tile key={name + j} slug={slug} name={name} n={j + 1} />)}</div>
        <figure className="cat-combo-photo"><img src={img(combo.photo)} alt={`Combinație în contrast: ${combo.items.map(([s, n]) => `${plainName(collectionBySlug[s].name)} ${n}`).join(", ")}`} loading="lazy" width="1000" height="1000" /><figcaption>{combo.items.map(([s, n]) => `${plainName(collectionBySlug[s].name)}® ${n}`).join(" · ")} · montaj random</figcaption></figure>
      </div>)}
    </section>

    <section className="cat-shell cat-download"><FileText /><div><h2>Ghidul complet, în PDF</h2><p>24 de pagini, ediția octombrie 2026. Toate combinațiile, cu fotografiile și codurile culorilor.</p></div><a href="/cataloage/design-connection-ghid-burmatex-2026.pdf" className="ed-button" download>Descărcați ghidul <Download /></a></section>
    <DealerCTA title="Vă trimitem mostre" accent="din toate cele trei game." text="Vă ajutăm cu combinațiile Design Connection™ pentru proiectul dumneavoastră. Trimiteți-ne planul; revenim cu mostre și ofertă." to="/contact?tip=mostre&produs=Design%20Connection" button="Cereți mostre" label="Specificăm. Livrăm. Montăm." />
  </div>;
}

export function OrganicMergePage() {
  usePageMeta("/cataloage/organic-merge-colour-link");
  return <div className="cat">
    <section className="cat-hero"><img src="/img/c/snowfall/mocheta-dale-snowfall-ambient-1.webp" alt="Open-space cu mochetă dale Burmatex snowfall®" width="1400" height="1400" fetchPriority="high" />
      <div className="cat-shell"><Kicker>Concepte de design Burmatex®</Kicker><h1>Organic Merge™<br />și Colour Link™</h1><p>Spații legate prin desen și culoare, inspirate de natură.</p></div></section>

    <section className="cat-shell cat-section">
      <CatHead n="01" label="Organic Merge™" />
      <Kicker>Organic Merge™</Kicker>
      <h2>Tranziții fine<br />între peisaje diferite.</h2>
      <div className="cat-cols">
        <p className="cat-lead"><strong>Organic Merge™</strong> îmbină desene diferite în aceeași familie de culoare, astfel încât trecerea de la o zonă la alta să pară naturală, ca între două peisaje. Fiecare coloană din tabel este o familie de culoare: alegeți desenul după funcțiunea zonei, păstrați culoarea și spațiul rămâne unitar.</p>
        <ul className="cat-bullets"><li><strong>balance grid®</strong>, rețeaua străzilor care se intersectează;</li><li><strong>balance ratio®</strong>, curgerea organică a elementelor naturale;</li><li><strong>balance scale®</strong>, urmele materialelor create de om și din natură;</li><li><strong>standing stones®</strong> și <strong>snowfall®</strong>, texturi minerale și fluide.</li></ul>
      </div>
      <div className="cat-bank-wrap"><table className="cat-bank om"><tbody>{organicMerge.rows.map((row, r) => <tr key={row.label}><th scope="row">{row.label}</th>{organicMerge.columns.map((col, i) => <td key={i}>{col[r] ? <Tile slug={row.slug} name={col[r]!} group={row.group} /> : <div className="cat-tile empty" aria-hidden="true" />}</td>)}</tr>)}</tbody></table></div>
      <p className="cat-small">Derulați tabelul orizontal. Pe aceeași coloană: aceeași familie de culoare, desene diferite. Exemplu de plan propus de Burmatex: snowfall® în zonele de lucru și balance ratio® în zonele de trecere.</p>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="02" label="Colour Link™" />
      <Kicker>Colour Link™</Kicker>
      <h2>Palete legate<br />prin culoare.</h2>
      <div className="cat-cols">
        <p className="cat-lead"><strong>Colour Link™</strong> leagă colecții diferite prin tonuri comune. Folosiți aceeași familie de culoare în desene diferite ca să evidențiați o zonă: un „covor” de culoare într-o recepție, un traseu, o zonă de relaxare.</p>
        <figure className="cat-inline-photo"><img src={img("colour-link-ambient")} alt="Covor de culoare piersică realizat cu dale Burmatex într-o zonă de relaxare" loading="lazy" width="642" height="536" /><figcaption>Familia piersică: rocklines® uplift și snowfall® peach frost, ca inserție de covor.</figcaption></figure>
      </div>
      <div className="cat-link-families">{colourLink.map(f => <div key={f.family}><h3>{f.family}</h3><div className="cat-tiles small">{f.items.map(([slug, name, group]) => <Tile key={slug + name + (group ?? "")} slug={slug} name={name} group={group} />)}</div></div>)}</div>
    </section>

    <section className="cat-shell cat-section cat-related">
      <h2 className="cat-h3">Colecțiile din aceste concepte</h2>
      <div className="cat-chips">{["balance", "standing-stones", "snowfall", "rocklines", "threads"].map(s => <Link key={s} href={collectionPath(s)} className="cat-link">{collectionBySlug[s].name} <ArrowRight /></Link>)}</div>
    </section>
    <DealerCTA title="Vreți o combinație" accent="pentru planul dumneavoastră?" text="Trimiteți-ne planul și zonele. Propunem combinația Organic Merge™ sau Colour Link™ și vă trimitem mostrele." to="/contact?tip=proiect" button="Trimiteți planul" label="Consultanță de design" />
  </div>;
}

const susStats: [string, string][] = [
  ["1912", "anul în care J&F Burrows începe reciclarea deșeurilor textile în West Yorkshire"],
  ["100%", "electricitate din surse regenerabile certificate, din 2010"],
  ["0", "deșeuri la groapa de gunoi din 2022: 97% reciclate, 3% transformate în energie"],
  ["77%", "conținut reciclat minim în suportul BioBase®, fără vinil"],
];

export function SustainabilityPage() {
  usePageMeta("/cataloage/principii-sustenabilitate");
  return <div className="cat">
    <section className="cat-shell cat-intro">
      <CatHead n="00" label="principiile de sustenabilitate" />
      <Kicker>eco₂matters® · Burmatex®</Kicker>
      <h1>Ce facem<br />contează.</h1>
      <p className="cat-lead">Principiile de sustenabilitate Burmatex®, adaptate în limba română. Sunt angajamentul producătorului pentru un viitor sustenabil: drumul spre Net Zero, impact pozitiv asupra mediului și valori sociale.</p>
    </section>
    <section className="cat-shell cat-stats">{susStats.map(([n, t]) => <div key={n}><strong>{n}</strong><p>{t}</p></div>)}</section>

    <section className="cat-shell cat-section">
      <CatHead n="01" label="moștenirea" />
      <Kicker>Moștenirea</Kicker>
      <h2>Sustenabilitatea<br />face parte din istorie.</h2>
      <div className="cat-cols"><div><p>Compania a fost înființată în Marea Britanie în 1912, ca J&amp;F Burrows. Timp de peste 100 de ani a reciclat: întâi deșeuri textile din lână și bumbac, revândute industriei de confecții, apoi, odată cu fibrele sintetice, deșeuri de nailon și polipropilenă.</p><p>Odată cu un nou tip de mochetă, needlefelt (azi fibră presată), materialul reciclat a început să fie folosit pentru produse proprii. Marca Burmatex® a apărut în 1967.</p></div>
        <div><p>Astăzi Burmatex® produce o gamă mult mai largă, inclusiv dale de nailon cu buclă multinivel și buclă joasă. Principiile reciclării și reutilizării au rămas însă baza activității și a principiilor de sustenabilitate.</p><figure className="cat-inline-photo"><img src={img("eco2matters")} alt="Burmatex eco₂matters®" loading="lazy" width="672" height="651" /></figure></div></div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="02" label="drumul spre Net Zero" />
      <Kicker>Drumul spre Net Zero</Kicker>
      <h2>Carbonul eliminat<br />din produs și proces.</h2>
      <div className="cat-points">
        <article><h3>Fir reciclat cu amprentă negativă de carbon</h3><p>Firul este cea mai mare sursă de carbon dintr-o dală de mochetă. De aceea, în 2021, Burmatex® s-a angajat să producă toate produsele noi din fire cu amprentă redusă. Împreună cu Universal Fibers® a dezvoltat Thrive® matter, primul fir reciclat din lume cu amprentă negativă de carbon: elimină carbonul asociat firului și compensează la sursă carbonul rămas în dală.</p></article>
        <article><h3>Suportul reciclat BioBase®</h3><p>Sistem de suport cu amprentă redusă, unic Burmatex®, dezvoltat împreună cu Universitatea din Huddersfield. Folosește deșeuri industriale reciclate, care altfel ar fi ajuns la groapa de gunoi, cu lianți și umpluturi 100% organice, fără vinil: minimum 77% conținut reciclat și mai puțină energie la producție. Toate dalele Burmatex® au suport BioBase®, clasa 33, reacție la foc Bfl-s1 și 15 ani garanție.</p></article>
        <article><h3>Dale cu amprentă neutră de carbon</h3><p>Combinând firul cu amprentă negativă, suportul BioBase® și îmbunătățirile din energie și gestionarea deșeurilor, Burmatex® produce game cu amprentă neutră de carbon: carbonul rămas în dală este compensat la sursă de fir. Obiectivul final: toate produsele verificate independent ca neutre din punctul de vedere al carbonului încorporat.</p></article>
        <article><h3>Declarații de mediu (EPD) verificate independent</h3><p>În loc de EPD-uri generice sau pe categorii de produse, Burmatex® publică EPD-uri specifice fiecărui produs, verificate de o terță parte. Știți exact amprenta de carbon a produsului ales. EPD-urile sunt pe paginile colecțiilor și în baza de date International EPD System.</p></article>
      </div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="03" label="impact pozitiv asupra mediului" />
      <Kicker>Impact pozitiv asupra mediului</Kicker>
      <h2>Facem<br />diferența.</h2>
      <div className="cat-points">
        <article><h3>100% electricitate regenerabilă</h3><p>Din 2010, Burmatex® folosește doar electricitate din surse regenerabile certificate. În 2023 a instalat panouri solare pe amplasamentul de 11 acri din Ossett, care produc energie verde echivalentă consumului anual a peste 6.000 de locuințe din Marea Britanie.</p></article>
        <article><h3>Project Zero Landfill</h3><p>Început în 2021, programul a redus deșeurile și a găsit soluții sustenabile pentru restul. Din 2022, niciun deșeu nu mai ajunge la groapa de gunoi: 97% sunt reciclate, iar 3% produc energie pentru locuințe sociale din zonă.</p></article>
        <article><h3>Serviciul de preluare a dalelor uzate</h3><p>Când pardoseala se schimbă, dalele uzate primesc o nouă viață: sunt redistribuite, de exemplu, organizațiilor comunitare care au nevoie de pardoseală ieftină. Cele care nu mai pot fi refolosite produc energie. Aplicabilitatea pentru proiectele din România se verifică de la caz la caz.</p></article>
      </div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="04" label="valori sociale" />
      <Kicker>Valori sociale și bunăstare</Kicker>
      <h2>Oamenii,<br />înainte de toate.</h2>
      <div className="cat-points">
        <article><h3>Angajator cu șanse egale</h3><p>Aproape 90% dintre angajații fabricii locuiesc la cel mult 10 mile de amplasament; distanța medie până la locul de muncă este de doar 5 mile.</p></article>
        <article><h3>Formare și dezvoltare</h3><p>De la cursuri Open University la programe de ucenicie, formarea profesională susține obiectivele de sustenabilitate ale companiei.</p></article>
        <article><h3>Sănătate, siguranță și bunăstare</h3><p>Un program de asistență pentru angajați sprijină sănătatea fizică, financiară și mintală, inclusiv prin consiliere specializată.</p></article>
      </div>
    </section>

    <section className="cat-shell cat-section cat-net">
      <CatHead n="05" label="dincolo de Net Zero" />
      <h2>Net Zero e un pas.<br />Nu destinația.</h2>
      <p className="cat-lead">Strategia Beyond Net Zero continuă drumul spre produse cu amprentă negativă de carbon. Investițiile în știința materialelor, utilaje și procese noi sunt ghidate de principiile de sustenabilitate.</p>
      <div className="cat-actions"><Link href="/selector-mocheta" className="cat-link">Alegeți colecții cu amprentă neutră în selector <ArrowRight /></Link><a href="/cataloage/burmatex-sustainability-principles-en.pdf" className="cat-link" download><Download /> Originalul Burmatex (PDF, engleză)</a><Link href="/de-ce-burmatex" className="cat-link">De ce Burmatex <ArrowUpRight /></Link></div>
      <p className="cat-small">Sursa: Burmatex® Sustainability Principles (septembrie 2024). Adaptare în limba română: InsightFLOOR, dealer oficial Burmatex® în România.</p>
    </section>
    <DealerCTA title="Aveți nevoie de EPD-uri" accent="pentru BREEAM, LEED sau WELL?" text="Vă trimitem declarațiile de mediu și datele de carbon pentru colecțiile din proiect." to="/contact?tip=proiect" button="Cereți documentația" label="Certificare verde" />
  </div>;
}
