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

type Combo = { photo: string; text: string; items: [string, string, string?][] };
const omCombos: Combo[] = [
  { photo: "om-lookout-soft-neutral", text: "Transformați spațiul: snowfall® în zona de lucru, balance ratio® în zona de relaxare, în aceeași familie de culoare.", items: [["snowfall", "light lookout"], ["balance", "soft neutral", "balance ratio®"]] },
  { photo: "om-alee-iron-age-chrome", text: "Creați alei de circulație: un desen diferit marchează traseul, culoarea comună păstrează spațiul unitar.", items: [["standing-stones", "iron age"], ["balance", "chrome effect", "balance scale®"]] },
  { photo: "om-dusky-smoky-concrete", text: "Trei desene în tonuri calde de lemn, pentru zone cu funcțiuni diferite în același open-space.", items: [["snowfall", "dusky weather"], ["balance", "smoky wood", "balance scale®"], ["balance", "concrete wood", "balance grid®"]] },
  { photo: "om-soft-neutral-light-lookout", text: "Tranziție fină între zona de birouri și zona de întâlnire, în nuanțe neutre deschise.", items: [["balance", "soft neutral", "balance ratio®"], ["snowfall", "light lookout"]] },
  { photo: "om-crisp-silver-fresh", text: "Gri luminos, trei desene: un spațiu de lucru mare care rămâne calm, dar nu monoton.", items: [["balance", "crisp air", "balance grid®"], ["snowfall", "silver drizzle"], ["balance", "fresh air", "balance scale®"]] },
];
const clCombos: Combo[] = [
  { photo: "cl-piersica-covor", text: "Familia piersică, folosită pentru o inserție de covor într-o zonă de relaxare.", items: [["snowfall", "peach frost"], ["rocklines", "uplift"]] },
  { photo: "cl-liliachiu", text: "Familia liliachiu delimitează o zonă de întâlnire pe un fond neutru.", items: [["snowfall", "mauve rise"], ["rocklines", "amethyst"], ["rocklines", "marble"]] },
  { photo: "cl-verde", text: "Familia verde: o insulă de lucru legată de restul spațiului prin culoare.", items: [["snowfall", "mellow wisp"], ["rocklines", "habitat"]] },
  { photo: "cl-albastru", text: "Familia albastră, pentru o sală de ședințe deschisă.", items: [["standing-stones", "henge sky"], ["rocklines", "oceanic"], ["rocklines", "marble"]] },
  { photo: "cl-galben", text: "Familia galbenă aduce lumină într-o zonă de lucru.", items: [["standing-stones", "yellow traces"], ["balance", "sunny glow", "balance scale®"], ["rocklines", "sunlit"]] },
  { photo: "cl-threads-craft", text: "threads® și threads® plain în aceeași nuanță: desenul și culoarea uni se completează.", items: [["threads", "craft mix"], ["threads", "craft", "threads® plain"]] },
  { photo: "cl-threads-pigment", text: "Accent albastru cu threads® pigment pe un fond threads® plain.", items: [["threads", "pigment", "threads® plain"], ["threads", "pigment tide"]] },
];

function ComboBlock({ c }: { c: Combo }) {
  return <div className="cat-combo">
    <p className="cat-combo-text">{c.text}</p>
    <div className="cat-tiles">{c.items.map(([slug, name, group], j) => <Tile key={name + j} slug={slug} name={name} group={group} n={j + 1} />)}</div>
    <figure className="cat-combo-photo"><img src={img(c.photo)} alt={`Mochetă Burmatex: ${c.items.map(([s, n, g]) => `${g ?? plainName(collectionBySlug[s].name)} ${n}`).join(", ")}`} loading="lazy" width="1400" height="997" /><figcaption>{c.items.map(([s, n, g]) => `${(g ?? plainName(collectionBySlug[s].name) + "®")} ${n}`).join(" · ")}</figcaption></figure>
  </div>;
}

export function OrganicMergePage() {
  usePageMeta("/cataloage/organic-merge-colour-link");
  return <div className="cat">
    <section className="cat-hero"><img src={img("om-dune")} alt="Dune de nisip cu iarbă, inspirația Organic Merge™" width="1245" height="815" fetchPriority="high" />
      <div className="cat-shell"><Kicker>Concepte de design Burmatex® · mai 2025</Kicker><h1>Organic Merge™<br />și Colour Link™</h1><p>Spații legate prin desen, inspirate de natură. Spații legate prin culoare.</p></div></section>

    <section className="cat-shell cat-section">
      <CatHead n="01" label="Organic Merge™" />
      <Kicker>Organic Merge™</Kicker>
      <h2>Desene îmbinate,<br />inspirate de natură.</h2>
      <div className="cat-cols">
        <div><p className="cat-lead">Tranziții subtile, inspirate de felul în care peisajele diferite se întâlnesc în natură, fără o linie clară între ele: pădurea care trece în luminiș, duna care coboară spre iarbă.</p>
          <p><strong>Organic Merge™</strong> îmbină desene diferite în aceeași familie de culoare. Alegeți desenul după funcțiunea zonei (lucru, întâlnire, circulație, relaxare) și păstrați culoarea: trecerea de la o zonă la alta pare naturală, iar spațiul rămâne unitar.</p>
          <ul className="cat-bullets"><li><strong>balance grid®</strong>: rețeaua străzilor care se intersectează;</li><li><strong>balance ratio®</strong>: curgerea organică a elementelor naturale;</li><li><strong>balance scale®</strong>: urmele materialelor create de om și din natură;</li><li><strong>standing stones®</strong> și <strong>snowfall®</strong>: texturi minerale și fluide.</li></ul></div>
      </div>
      {omCombos.map(c => <ComboBlock key={c.photo} c={c} />)}
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="02" label="biblioteca de culori Organic Merge™" />
      <Kicker>Biblioteca de culori Organic Merge™</Kicker>
      <h2>Pe aceeași coloană,<br />aceeași familie.</h2>
      <p className="cat-lead">17 familii de culoare, în cinci desene. Alegeți o coloană și combinați liber desenele din ea.</p>
      <div className="cat-bank-wrap"><table className="cat-bank om"><tbody>{organicMerge.rows.map((row, r) => <tr key={row.label}><th scope="row">{row.label}</th>{organicMerge.columns.map((col, i) => <td key={i}>{col[r] ? <Tile slug={row.slug} name={col[r]!} group={row.group} /> : <div className="cat-tile empty" aria-hidden="true" />}</td>)}</tr>)}</tbody></table></div>
      <p className="cat-small">Derulați tabelul orizontal. Toate nuanțele au link spre colecție, cu codurile de produs.</p>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="03" label="Colour Link™" />
      <Kicker>Colour Link™</Kicker>
      <h2>Palete și desene<br />legate prin culoare.</h2>
      <div className="cat-cols">
        <div><p className="cat-lead"><strong>Colour Link™</strong> combină tonuri și desene înrudite ca să evidențieze zone în spațiile de lucru: un „covor” de culoare într-o zonă de relaxare, o insulă de lucru, o sală de ședințe deschisă.</p><p>Fiecare familie de culoare (piersică, liliachiu, verde, albastru, galben) există în mai multe colecții. Le combinați fără ca accentele să pară întâmplătoare.</p></div>
      </div>
      {clCombos.map(c => <ComboBlock key={c.photo} c={c} />)}
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="04" label="biblioteca de culori Colour Link™" />
      <Kicker>Biblioteca de culori Colour Link™</Kicker>
      <h2>Cinci familii,<br />cinci colecții.</h2>
      <div className="cat-link-families">{colourLink.map(f => <div key={f.family}><h3>{f.family}</h3><div className="cat-tiles small">{f.items.map(([slug, name, group]) => <Tile key={slug + name + (group ?? "")} slug={slug} name={name} group={group} />)}</div></div>)}</div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="05" label="sustenabilitate" />
      <Kicker>eco₂matters®</Kicker>
      <h2>Aceleași principii,<br />în ambele concepte.</h2>
      <div className="cat-points">
        <article><h3>Organic Merge™</h3><p>balance grid®, balance ratio®, balance scale®, snowfall®, standing stones®, rocklines®: amprentă neutră de carbon, verificată independent, compensată la sursă prin firul reciclat cu amprentă negativă de carbon; suport reciclat BioBase®.</p></article>
        <article><h3>Colour Link™ cu threads®</h3><p>threads® și threads® plain: amprentă redusă de carbon, verificată; fir bio-genic 100% reciclat; suport reciclat BioBase®.</p></article>
        <article><h3>EPD pe fiecare produs</h3><p>Declarații de mediu specifice produsului, pe tot ciclul de viață (A1–D), verificate de terți.</p></article>
        <article><h3>Serviciul de preluare</h3><p>Dalele uzate primesc o nouă viață, de exemplu la organizații comunitare care au nevoie de pardoseală ieftină, astfel încât nicio dală să nu ajungă la groapa de gunoi.</p></article>
      </div>
      <div className="cat-actions">{["balance", "standing-stones", "snowfall", "rocklines", "threads"].map(s => <Link key={s} href={collectionPath(s)} className="cat-link">{collectionBySlug[s].name} <ArrowRight /></Link>)}</div>
      <p className="cat-small">Sursa: Burmatex® Organic Merge™ & Colour Link™, mai 2025. Adaptare în limba română: InsightFLOOR, dealer oficial Burmatex® în România.</p>
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
        <div><p>Astăzi Burmatex® produce o gamă mult mai largă, inclusiv dale de nailon cu buclă multinivel și buclă joasă. Principiile reciclării și reutilizării au rămas însă baza activității și a principiilor de sustenabilitate.</p></div></div>
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
      <div className="cat-actions"><Link href="/selector-mocheta" className="cat-link">Alegeți colecții cu amprentă neutră în selector <ArrowRight /></Link><Link href="/de-ce-burmatex" className="cat-link">De ce Burmatex <ArrowUpRight /></Link></div>
      <p className="cat-small">Sursa: Burmatex® Sustainability Principles (septembrie 2024). Adaptare în limba română: InsightFLOOR, dealer oficial Burmatex® în România.</p>
    </section>
    <DealerCTA title="Aveți nevoie de EPD-uri" accent="pentru BREEAM, LEED sau WELL?" text="Vă trimitem declarațiile de mediu și datele de carbon pentru colecțiile din proiect." to="/contact?tip=proiect" button="Cereți documentația" label="Certificare verde" />
  </div>;
}

const bioProducts = [
  { slug: "threads", text: "Inspirată de fire care leagă culori, tonuri și desene într-un model de ansamblu potrivit pentru interioare foarte diferite. 12 culori threads® și 15 culori threads® plain combinabile.", gwp: "3,90", rec: "73,6%", photos: [["fir-biogenic-threads-coridor", "threads® shadow blend și harmony stitch"], ["fir-biogenic-threads-hol", "threads® base blend, base yellow și rust mix"]] },
  { slug: "tivoli", text: "Prima colecție cu fir bio-genic 100% reciclat. tivoli® și tivoli® multiline, 40 de culori coordonate, clasa 33, în dale și lamele, pentru o mare varietate de interioare comerciale.", gwp: "3,10", rec: "74,0%", photos: [["fir-biogenic-tivoli-lamele", "lamele tivoli® dominica dawn, antigua steel, tiki yellow"], ["fir-biogenic-tivoli-multiline", "dale tivoli® și tivoli® multiline melanesia grey"]] },
  { slug: "tivoli-mist", text: "Tranziții fine între culori sau un desen uniform care se estompează de la o nuanță la alta. 10 culori, în dale și lamele.", gwp: "3,10", rec: "74,0%", photos: [["fir-biogenic-tivoli-mist-hol", "lamele tivoli mist® polar drift și south beach"], ["fir-biogenic-tivoli-mist-sala", "dale tivoli mist® și tivoli® într-o sală de curs"]] },
] as const;

export function BiogenicPage() {
  usePageMeta("/cataloage/fir-biogenic");
  return <div className="cat">
    <section className="cat-hero"><img src={img("fir-biogenic-coperta")} alt="Bobină de fir bio-genic reciclat Burmatex" width="1244" height="1244" fetchPriority="high" />
      <div className="cat-shell"><Kicker>Colecția cu fir bio-genic · threads® · tivoli® · tivoli mist®</Kicker><h1>Prea bun<br />ca să fie risipit.</h1><p>Deșeuri transformate în pardoseli de înaltă performanță.</p></div></section>

    <section className="cat-shell cat-section">
      <CatHead n="01" label="fir bio-genic" />
      <Kicker>De la deșeu la birou</Kicker>
      <h2>Primul fir 100% reciclat<br />din deșeuri organice.</h2>
      <div className="cat-cols"><div><p className="cat-lead">Burmatex® este primul producător care folosește fir bio-genic 100% reciclat, obținut din deșeuri organice bio-genice din surse regenerabile.</p><p>Materiile prime provin din deșeuri organice bio-circulare certificate sau din resurse naturale de a doua generație: ulei de gătit uzat, deșeuri din bucătării și tall oil (un produs secundar al industriei celulozei). threads®, tivoli® și tivoli mist® folosesc toate fir bio-genic, combinat cu suportul reciclat BioBase®, deci toate trei au amprentă redusă de carbon.</p></div>
        <figure className="cat-inline-photo"><img src={img("fir-biogenic-deseuri-alimentare")} alt="Deșeuri alimentare din bucătării comerciale, materie primă pentru firul bio-genic" loading="lazy" width="1400" height="1179" /></figure></div>
      <ol className="cat-process">{[["Deșeuri alimentare comerciale", "ulei de gătit uzat, resturi din bucătării"], ["Procesare bio-genică", "materie primă bio-circulară certificată"], ["Fir bio-genic", "nailon 100% reciclat"], ["Dale și lamele", "threads®, tivoli®, tivoli mist®"]].map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, "0")}</span><strong>{t}</strong><small>{d}</small></li>)}</ol>
      <div className="cat-stats four">{[["100%", "reciclat"], ["100%", "reciclabil"], ["100%", "regenerabil"], ["redusă", "amprentă de carbon încorporată"]].map(([n, t]) => <div key={t}><strong>{n}</strong><p>{t}</p></div>)}</div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="02" label="următoarea viață" />
      <Kicker>Gândit pentru a doua viață</Kicker>
      <h2>Circularitatea începe<br />de la montaj.</h2>
      <p className="cat-lead">Sustenabilitatea nu se oprește la materiale. Circularitatea reală ține cont și de felul în care pardoseala se montează, cum se demontează și ce se întâmplă cu ea la sfârșitul primei vieți.</p>
      <div className="cat-points">
        <article><h3>Proiectat mai bine</h3><p>Fir bio-genic și suport reciclat BioBase®: mai puțin carbon încorporat, fără compromis la performanță sau design.</p></article>
        <article><h3>Montat mai bine</h3><p>Produsele Burmatex® sunt compatibile cu sistemele IOBAC MagTabs și Tab-It, alternative la adezivii lichizi tradiționali.</p></article>
        <article><h3>Folosit mai bine</h3><p>Durabile prin construcție, făcute pentru spații comerciale cu trafic intens. Dalele rămân ferm pe loc în timpul utilizării.</p></article>
        <article><h3>Refolosit sau reciclat mai bine</h3><p>Dalele se ridică ușor, fără să se deterioreze dala sau suportul, gata pentru reutilizare sau reciclare.</p></article>
      </div>
      <h3 className="cat-h3 cat-mt">Cum funcționează montajul IOBAC</h3>
      <ol className="cat-process">{[["Pregătire", "suport curat, uscat, pregătit"], ["Plasarea pastilelor", "MagTabs sau Tab-It pe suport"], ["Montarea dalelor", "dalele se apasă pe pastile"], ["Utilizare", "dalele stau ferm pe loc"], ["Ridicare curată", "fără deteriorare, gata de reutilizare"]].map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, "0")}</span><strong>{t}</strong><small>{d}</small></li>)}</ol>
      <p className="cat-small">Detalii despre montajul fără adeziv în <Link href="/ghid-tehnic">ghidul tehnic</Link>.</p>
    </section>

    {bioProducts.map((p, i) => { const c = collectionBySlug[p.slug]; return <section key={p.slug} className="cat-shell cat-section">
      <CatHead n={String(i + 3).padStart(2, "0")} label={plainName(c.name)} />
      <Kicker>Buclă joasă · fabricat în Marea Britanie</Kicker>
      <h2>{plainName(c.name)}<sup>®</sup></h2>
      <div className="cat-cols"><div><p className="cat-lead">{p.text}</p><p>Fir 100% reciclat bio-genic și suport BioBase®: amprentă redusă de carbon.</p>
        <div className="cat-mini-stats"><div><strong>{p.gwp}</strong><span>kg CO₂ echiv. (GWP)</span></div><div><strong>{p.rec}</strong><span>conținut reciclat total</span></div><div><strong>{c.colours}</strong><span>culori</span></div></div>
        <Link href={collectionPath(p.slug)} className="cat-link">Toate nuanțele {c.name} <ArrowRight /></Link></div>
        <div className="cat-photos two">{p.photos.map(([f, cap]) => <figure key={f}><img src={img(f)} alt={`${cap}, mochetă Burmatex cu fir bio-genic`} loading="lazy" width="734" height="1245" /><figcaption>{cap}</figcaption></figure>)}</div></div>
    </section>; })}

    <section className="cat-shell cat-section cat-net">
      <p className="cat-small">Sursa: Burmatex® Bio-genic yarn flooring collection, octombrie 2026. Adaptare în limba română: InsightFLOOR, dealer oficial Burmatex® în România.</p>
      <div className="cat-actions"><Link href="/cataloage/principii-sustenabilitate" className="cat-link">Principiile de sustenabilitate <ArrowRight /></Link></div>
    </section>
    <DealerCTA title="Mostre threads®, tivoli®" accent="și tivoli mist®." text="Vă trimitem mostrele colecțiilor cu fir bio-genic și datele EPD pentru proiect." to="/contact?tip=mostre&produs=tivoli" button="Cereți mostre" label="Fir bio-genic" />
  </div>;
}

const wellFeatures: [string, string, string][] = [
  ["#04", "Reducerea VOC", "Toate gamele Burmatex® sunt testate complet pentru emisii de compuși organici volatili, cu rezultate practic neglijabile."],
  ["#08", "Intrare sănătoasă", "Gama completă de covoare de intrare și dale barieră reduce murdăria adusă în clădire și îmbunătățește calitatea aerului."],
  ["#11", "Siguranța fundamentală a materialelor", "Produse fără azbest, fără formaldehidă, cu plumb sub 100 ppm."],
  ["#25", "Reducerea materialelor toxice", "Burmatex® nu a produs niciodată pardoseli cu componente toxice, confirmat de un audit de mediu BREEAM complet și de EPD-uri validate de Environdec."],
  ["#26", "Siguranța extinsă a materialelor", "Toate produsele sunt verificate ca fiind libere de multe dintre substanțele suspecte pe care clădirile WELL® le evită."],
  ["#28", "Mediu ușor de curățat", "Dalele se scot și se înlocuiesc ușor. Pentru acest credit nu se poate folosi mochetă la rulou de la perete la perete."],
  ["#87", "Frumusețe și design", "Calitatea și varietatea opțiunilor de design: estetică flexibilă și durabilitate."],
  ["#88", "Biofilie I, calitativ", "Designul mochetei influențează pozitiv starea de spirit, creând un mediu calm și un spațiu de lucru plăcut."],
  ["#97", "Transparența materialelor", "EPD-uri actualizate, verificate de terți, pentru clienții care vor să știe din ce sunt făcute produsele de construcție."],
];

export function WellPage() {
  usePageMeta("/cataloage/well");
  return <div className="cat">
    <section className="cat-hero"><img src={img("well-cladire")} alt="Clădire de birouri modernă, standardul WELL Building" width="1400" height="830" fetchPriority="high" />
      <div className="cat-shell"><Kicker>Contribuția Burmatex® la WELL Building Standard®</Kicker><h1>Pardoseli pentru<br />clădiri sănătoase.</h1><p>Aer · Apă · Hrană · Lumină · Mișcare · Confort · Minte</p></div></section>

    <section className="cat-shell cat-section">
      <CatHead n="01" label="WELL Building Standard®" />
      <Kicker>Ce este WELL</Kicker>
      <h2>Clădirea, măsurată<br />după oamenii din ea.</h2>
      <div className="cat-cols"><p className="cat-lead">WELL Building Standard® este un sistem bazat pe dovezi pentru măsurarea, certificarea și monitorizarea elementelor unei clădiri care influențează sănătatea și starea de bine a celor care o folosesc. Este administrat de International WELL Building Institute® și are șapte concepte: aer, apă, hrană, lumină, mișcare, confort și minte.</p>
        <p>Pardoseala nu este o componentă distinctă în WELL, dar abordarea sustenabilă Burmatex® completează mai multe cerințe din cele șapte concepte. Pentru că standardul pornește de la experiența ocupanților, pardoseala contribuie prin design, componente sigure și curățenie. Produsele Burmatex® ajută managerul de proiect sau designerul să optimizeze experiența spațiului.</p></div>
      <div className="cat-badges">{["Fabricat cu electricitate regenerabilă", "ISO 9001:2015 (certificat FM01440)", "Emisii VOC clasa A+ (Franța)", "Clasa M1 de emisii scăzute (Finlanda)", "EPD verificat de terți, ISO 14025:2006"].map(b => <span key={b}>{b}</span>)}</div>
    </section>

    <section className="cat-shell cat-section">
      <CatHead n="02" label="contribuția Burmatex®" />
      <Kicker>Cerințele WELL la care contribuie</Kicker>
      <h2>Nouă cerințe,<br />un singur furnizor.</h2>
      <div className="cat-well">{wellFeatures.map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      <p className="cat-small">Punctajul WELL al unui proiect se stabilește de evaluatorul acreditat. Documentele necesare (EPD, certificate de emisii) le primiți de la InsightFLOOR pentru colecțiile din proiect. Sursa: Burmatex® contribution to WELL Building Standard®. Adaptare în limba română: InsightFLOOR.</p>
      <div className="cat-actions"><Link href="/mocheta-cladiri-birouri-noi" className="cat-link">Mochetă pentru clădiri de birouri noi <ArrowRight /></Link><Link href="/covoare-intrare" className="cat-link">Covoare de intrare <ArrowRight /></Link></div>
    </section>
    <DealerCTA title="Proiect WELL, BREEAM" accent="sau LEED?" text="Vă trimitem EPD-urile, certificatele de emisii și datele de carbon pentru colecțiile alese." to="/contact?tip=proiect" button="Cereți documentația" label="Certificare" />
  </div>;
}
