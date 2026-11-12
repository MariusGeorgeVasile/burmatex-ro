// Search landing pages. Each targets one search intent; copy is factual and written to be quotable
// by search engines and AI assistants (short definitions, explicit numbers, sources where relevant).
import type { Collection } from "./collections";

export type Faq = { q: string; a: string };
export type Section = { h2: string; p?: string[]; bullets?: [string, string][]; table?: { head: string[]; rows: string[][] } };
export type Landing = {
  path: string;
  title: string;
  description: string;
  label: string;
  h1: string;
  accent: string;
  lead: string;
  summary: [string, string][];
  image: string;
  imageAlt: string;
  sections: Section[];
  pick: (c: Collection) => boolean;
  pickTitle: string;
  faqs: Faq[];
};

export const generalFaqs: Faq[] = [
  { q: "Ce este mocheta în dale?", a: "Mocheta în dale (numită și mochetă în plăci sau mochetă modulară) este mochetă livrată în pătrate de 50 × 50 cm, cu un suport stabil dimensional. Dalele se montează una lângă alta direct pe șapă sau pe pardoseala tehnică supraînălțată și pot fi ridicate și înlocuite individual." },
  { q: "Câte dale de mochetă intră într-un metru pătrat?", a: "Patru. O dală Burmatex standard are 50 × 50 cm, adică 0,25 m². Lamelele de 25 × 100 cm au tot 0,25 m² fiecare. La comandă se adaugă de obicei o rezervă pentru tăieri și înlocuiri ulterioare, din același lot de producție." },
  { q: "Ce înseamnă clasa 33 la mochetă?", a: "Clasa de utilizare 33, conform standardului EN 1307, indică mocheta potrivită pentru trafic comercial intens: birouri, coridoare, spații publice. Este cea mai înaltă clasă comercială din sistemul de clasificare pentru mochete textile." },
  { q: "Mochetă în dale sau mochetă la rulou?", a: "Dalele se înlocuiesc punctual, permit acces la instalațiile din pardoseala tehnică, se transportă și se montează mai ușor și generează mai puțin deșeu la tăiere. Rulourile au de obicei un cost mai mic pe metru pătrat pentru suprafețe mari și continue. Burmatex produce ambele variante pentru gamele din fibră presată." },
  { q: "Cât durează mocheta în dale Burmatex?", a: "Fișele tehnice ale colecțiilor documentate declară o garanție de 15 ani, în condițiile producătorului. Durata reală depinde de trafic, de protecția la intrare și de întreținere: aspirare regulată și curățare periodică prin extracție." },
];

export const landings: Landing[] = [
  {
    path: "/mocheta-dale",
    title: "Mochetă dale 50×50 (mochetă în plăci) | Burmatex România",
    description: "Mochetă dale 50×50 cm Burmatex: peste 400 de nuanțe, clasa 33, colecții neutre carbon. Ghid de alegere, prețuri, montaj și dealeri în toată România.",
    label: "Mochetă dale · ghid complet",
    h1: "Mochetă dale 50 × 50 cm.",
    accent: "Tot ce trebuie să știți înainte să alegeți.",
    lead: "Mocheta în dale (mochetă în plăci) este standardul pentru birouri, școli și spații publice: se montează rapid, se înlocuiește pe bucăți și ascunde instalațiile din pardoseala tehnică. Burmatex o produce în Marea Britanie din 1967.",
    summary: [["Format", "Dală 50 × 50 cm (4 dale/m²) și lamele 25 × 100 cm"], ["Trafic", "Clasa 33 — comercial intens, pentru colecțiile documentate"], ["Nuanțe", "Peste 400, în peste 20 de colecții"], ["Garanție", "15 ani declarați, în condițiile producătorului"], ["Reacție la foc", "Bfl-s1 pentru colecțiile documentate"], ["Mediu", "EPD pe produs, fire reciclate, suport BioBase®"]],
    image: "/img/c/infinity/mocheta-dale-infinity-ambient-1.webp",
    imageAlt: "Birou open-space cu mochetă dale Burmatex infinity®",
    sections: [
      { h2: "Ce este mocheta în dale", p: ["Mocheta în dale este mochetă textilă tăiată în module pătrate de 50 × 50 cm, cu un suport rigid care o ține plană fără lipire completă. Se mai numește mochetă în plăci, mochetă modulară sau mochetă tip dale.", "Diferența față de mocheta la rulou este modul de lucru: dalele se pot ridica și înlocui individual, se combină în modele de culoare și se montează pe pardoseala tehnică supraînălțată fără să blocheze accesul la doze și cabluri."] },
      { h2: "Tipuri de mochetă în dale", bullets: [["Buclă pe mai multe niveluri (multilevel loop)", "Relief și desen, aspect premium. Colecții: surface memory®, surface story®, arctic®, rocklines®, osaka®."], ["Buclă uniformă (loop pile)", "Suprafață densă, rezistentă, palete largi de culori. Colecții: go to®, tivoli®, infinity®."], ["Fir tăiat (cut pile)", "Suprafață catifelată, confort la pas. Colecție: origin®."], ["Fibră presată (fibre bonded)", "Cost redus, rezistență foarte mare, potrivită pentru școli și spații publice. Colecții: eco-cordiale®, academy®, velour excel®."], ["Dale barieră și covoare de intrare", "Rețin murdăria și umezeala la acces. Colecții: armour®, grimebuster 50®, chevrolay 50®."]] },
      { h2: "Cum alegeți mocheta în dale potrivită", bullets: [["1. Traficul", "Pentru birouri și coridoare alegeți clasa 33. Pentru intrări folosiți o dală barieră sau un covor de intrare în fața mochetei."], ["2. Suportul", "Șapă sau pardoseală tehnică supraînălțată. Suportul trebuie să fie plan, uscat și curat."], ["3. Acustica", "Colecțiile cu buclă pe mai multe niveluri declară o reducere a zgomotului de impact între 22 și 28 dB."], ["4. Designul", "Uni pentru suprafețe calme, textură sau desen organic pentru a ascunde urmele de trafic, culori vii pentru zonare."], ["5. Bugetul", "Bucla uniformă (go to®, tivoli®, infinity®) și fibra presată sunt cele mai economice; colecțiile cu desen sunt în clasa medie, iar cele de design, firul tăiat și covoarele de intrare grele sunt premium."], ["6. Documentele", "Pentru licitații și certificări verzi cereți fișa tehnică, declarația de performanță și EPD-ul colecției."]] },
      { h2: "Montaj: direcții și adeziv", p: ["Dalele se montează cu adeziv de fixare (tackifier), care le ține pe loc dar permite ridicarea lor ulterioară. Înainte de montaj, dalele se aclimatizează în spațiu.", "Direcția de montaj schimbă aspectul: monolitic (toate în aceeași direcție), sfert de rotire (fiecare dală rotită la 90°), aleatoriu sau în cărămidă. Fișa tehnică a fiecărei colecții indică direcțiile recomandate."] },
      { h2: "Mochetă dale vs. alte pardoseli pentru birouri", table: { head: ["Criteriu", "Mochetă dale", "LVT / vinil", "Mochetă la rulou"], rows: [["Acustică", "Foarte bună", "Redusă fără strat acustic", "Foarte bună"], ["Acces la pardoseala tehnică", "Da, dală cu dală", "Limitat", "Nu"], ["Înlocuire punctuală", "Da", "Parțial", "Nu"], ["Confort la pas", "Ridicat", "Mediu", "Ridicat"], ["Deșeu la montaj", "Redus", "Mediu", "Ridicat la tăieri"]] } },
    ],
    pick: () => true,
    pickTitle: "Toate colecțiile de mochetă în dale",
    faqs: generalFaqs,
  },
  {
    path: "/mocheta-birouri",
    title: "Mochetă pentru birouri — dale clasa 33 | Burmatex România",
    description: "Mochetă dale pentru birouri: clasa 33, reducere a zgomotului de impact până la 28 dB, montaj pe pardoseală tehnică. Colecții pentru open-space și săli de ședință.",
    label: "Mochetă pentru birouri",
    h1: "Mochetă pentru birouri.",
    accent: "Liniște, rezistență și un spațiu care arată bine și peste zece ani.",
    lead: "Într-un birou, pardoseala lucrează non-stop: scaune pe rotile, trafic pe coridoare, zgomot în open-space. Mocheta în dale rezolvă acustica, se montează peste pardoseala tehnică și se repară dală cu dală.",
    summary: [["Trafic", "Clasa 33 — comercial intens"], ["Acustică", "22–28 dB reducere a zgomotului de impact (colecții documentate)"], ["Format", "Dală 50 × 50 cm, lamelă 25 × 100 cm"], ["Montaj", "Pe șapă sau pardoseală tehnică, cu adeziv tackifier"], ["Certificări verzi", "EPD pe produs pentru LEED / BREEAM / WELL"]],
    image: "/img/c/go-to/mocheta-dale-go-to-ambient-2.webp",
    imageAlt: "Birou cu mochetă dale go to® Burmatex",
    sections: [
      { h2: "De ce mochetă în dale în birouri", bullets: [["Acustică", "Mocheta absoarbe zgomotul de pași și reduce reverberația în open-space, unde suprafețele dure amplifică sunetul."], ["Acces la instalații", "Pe pardoseala tehnică, dalele se ridică individual pentru acces la doze, cabluri și prize."], ["Reamenajare ușoară", "La schimbarea layout-ului sau la deteriorări punctuale se înlocuiesc doar dalele afectate."], ["Zonare cu culoare", "Coridoare, zone de focus și zone sociale se pot marca prin culoare fără pereți."]] },
      { h2: "Ce colecție pentru ce zonă", table: { head: ["Zona", "Recomandare", "De ce"], rows: [["Open-space", "go to®, infinity®, tivoli®", "Buclă uniformă, ușor de întreținut, palete largi"], ["Săli de ședință", "surface story®, arctic®, alaska®", "Textură și acustică, aspect premium"], ["Recepție, management", "origin®, surface memory®", "Fir tăiat sau design de reprezentare"], ["Coridoare", "balance®, tivoli® lamele", "Desene direcționale și rezistență la trafic"], ["Intrare în birou", "armour®", "Dală barieră care reține umezeala și murdăria"]] } },
      { h2: "Întreținere în birouri", p: ["Aspirare zilnică în zonele de trafic, săptămânal în rest. Petele se tratează imediat, din exterior spre centru. Curățare periodică prin extracție, în funcție de trafic.", "Culorile medii și desenele cu textură ascund mai bine urmele de utilizare decât nuanțele foarte deschise sau foarte închise, complet uni."] },
    ],
    pick: c => c.sectors.includes("birouri") && c.family !== "entrance",
    pickTitle: "Colecții recomandate pentru birouri",
    faqs: [
      { q: "Ce mochetă este cea mai bună pentru birouri?", a: "Pentru majoritatea birourilor, o mochetă în dale 50 × 50 cm, clasa 33, cu buclă uniformă (de exemplu go to® sau infinity®) oferă cel mai bun raport între cost, rezistență și întreținere. Pentru săli de ședință și recepții se aleg colecții cu buclă pe mai multe niveluri sau fir tăiat." },
      { q: "Se poate monta mocheta în dale pe pardoseală tehnică?", a: "Da. Mocheta în dale este soluția standard pentru pardoselile tehnice supraînălțate din clădirile de birouri, pentru că dalele se pot ridica individual pentru acces la instalații." },
      { q: "Mocheta reduce zgomotul în open-space?", a: "Da. Colecțiile Burmatex documentate declară o reducere a zgomotului de impact între 22 și 28 dB. Mocheta absoarbe și o parte din zgomotul aerian, spre deosebire de pardoselile dure." },
      { q: "Cât de des se curăță mocheta de birou?", a: "Aspirare zilnică în zonele de trafic și cel puțin săptămânal în restul spațiului, cu intervenție imediată la pete și curățare profesională prin extracție periodic, în funcție de trafic." },
    ],
  },
  {
    path: "/mocheta-cladiri-birouri-noi",
    title: "Mochetă dale pentru clădiri de birouri noi | Burmatex",
    description: "Mochetă în dale pentru clădiri de birouri noi: pardoseală tehnică, livrări pe etaje, același lot de producție, EPD pentru BREEAM, LEED și WELL.",
    label: "Pentru dezvoltatori și firme de fit-out",
    h1: "Mochetă dale pentru clădiri de birouri noi.",
    accent: "Zeci de mii de metri pătrați. Un singur standard.",
    lead: "La o clădire de birouri nouă, mocheta se alege o dată pentru toate etajele și pentru zeci de chiriași. Contează livrarea etapizată, uniformitatea lotului, documentația pentru certificarea verde și un partener care răspunde la termen.",
    summary: [["Pardoseală tehnică", "Dalele 50 × 50 cm se ridică individual pentru acces la doze"], ["Certificări", "EPD verificat de terți, pe produs — pentru BREEAM, LEED, WELL"], ["Uniformitate", "Comandă pe lot de producție, cu rezervă pentru întreținere"], ["Acustică", "22–28 dB reducere a zgomotului de impact (colecții documentate)"], ["Mediu", "Colecții declarate neutre carbon, fire reciclate, suport BioBase®"]],
    image: "/img/c/surface-story/mocheta-dale-surface-story-ambient-1.webp",
    imageAlt: "Spațiu de birouri cu mochetă dale Burmatex surface story®",
    sections: [
      { h2: "Cat A sau Cat B: cine alege mocheta", p: ["În multe clădiri de birouri noi, dezvoltatorul livrează spațiul în standard Cat A (pardoseală tehnică, tavan, instalații de bază), iar mocheta în dale intră în amenajarea chiriașului, Cat B. Uneori dezvoltatorul include mocheta în livrarea Cat A, ca standard al clădirii.", "În ambele cazuri, o colecție de bază aleasă devreme simplifică ofertarea pentru chiriași și menține un aspect unitar pe toate etajele."] },
      { h2: "Ce contează la un proiect mare", bullets: [["Lotul de producție", "Dalele din loturi diferite pot avea mici diferențe de nuanță. Pentru suprafețe mari se planifică producția și se păstrează o rezervă din același lot."], ["Livrare etapizată", "Livrări sincronizate cu graficul de execuție pe etaje, pentru a evita depozitarea pe șantier."], ["Pardoseala tehnică", "Rosturile dalelor se decalează față de rosturile plăcilor de pardoseală tehnică, iar dalele se fixează cu adeziv tackifier."], ["Documentație", "Fișe tehnice, declarații de performanță, EPD și instrucțiuni de întreținere pentru cartea tehnică a construcției."], ["Certificare verde", "EPD-urile specifice produsului și conținutul reciclat sunt folosite în documentația BREEAM, LEED și WELL."]] },
      { h2: "Colecții potrivite ca standard de clădire", p: ["Pentru un standard de clădire se aleg de obicei colecții neutre, cu palete largi și disponibilitate constantă: go to® (din stoc în România), infinity®, tivoli®. Pentru zonele comune și recepții se adaugă o colecție de design, de exemplu surface story® sau arctic®."] },
    ],
    pick: c => c.sectors.includes("cladiri-noi"),
    pickTitle: "Colecții potrivite pentru clădiri de birouri noi",
    faqs: [
      { q: "Ce mochetă se folosește în clădirile de birouri noi?", a: "Mocheta în dale 50 × 50 cm, clasa 33, montată pe pardoseala tehnică supraînălțată cu adeziv tackifier. Se aleg colecții cu EPD pe produs, utile pentru certificările BREEAM, LEED și WELL." },
      { q: "Mocheta este inclusă în Cat A sau în Cat B?", a: "De regulă face parte din amenajarea chiriașului (Cat B). Unele clădiri o includ în standardul Cat A livrat de dezvoltator. Decizia aparține dezvoltatorului și se stabilește prin specificația clădirii." },
      { q: "Mocheta Burmatex ajută la certificarea BREEAM sau LEED?", a: "Burmatex publică declarații de mediu (EPD) specifice produselor, verificate de terți, și date despre conținutul reciclat. Acestea sunt documentele cerute în secțiunile de materiale ale BREEAM și LEED. Punctajul final depinde de evaluatorul proiectului." },
      { q: "Cum se evită diferențele de nuanță între etaje?", a: "Prin comanda pe același lot de producție pentru zone continue, prin planificarea livrărilor și prin păstrarea unei rezerve din același lot pentru înlocuiri ulterioare." },
    ],
  },
  {
    path: "/mocheta-scoli",
    title: "Mochetă pentru școli și clădiri publice | Burmatex România",
    description: "Mochetă din fibră presată pentru școli și clădiri publice: academy® și eco-cordiale®, dale 50×50 sau rulou 2 m, margini care nu se destramă, culori vii.",
    label: "Educație și clădiri publice",
    h1: "Mochetă pentru școli și clădiri publice.",
    accent: "Construită pentru trafic, bugete publice și curățenie zilnică.",
    lead: "Sălile de clasă și coridoarele au nevoie de o pardoseală care rezistă la mii de pași pe zi, se curăță ușor și reduce zgomotul. Fibra presată Burmatex a fost dezvoltată exact pentru acest tip de spații.",
    summary: [["Construcție", "Fibră presată (fibre bonded), nervurată"], ["Format", "Dale 50 × 50 cm sau rulou 2 m lățime"], ["Culori", "academy® 24, eco-cordiale® 44, velour excel® 18"], ["Margini", "Nu se destramă la tăiere"], ["Mediu", "eco-cordiale® declarată neutră carbon; academy® carbon redus"]],
    image: "/img/c/academy/mocheta-dale-academy-ambient-1.webp",
    imageAlt: "Spațiu educațional cu mochetă Burmatex academy®",
    sections: [
      { h2: "De ce fibră presată în școli", bullets: [["Rezistență", "Fibrele sunt compactate mecanic într-un strat dens, fără bucle care să se agațe sau să se tragă."], ["Cost", "Printre cele mai mici costuri pe metru pătrat din gama Burmatex, potrivit pentru bugete publice și suprafețe mari."], ["Întreținere", "Suprafața nervurată se aspiră ușor; dalele deteriorate se înlocuiesc punctual."], ["Zonare", "Culorile vii delimitează zone de lectură, joacă sau circulație."]] },
      { h2: "Dale sau rulou în școli", p: ["Rulourile de 2 m lățime acoperă sălile de clasă cu puține îmbinări și la un cost redus. Dalele 50 × 50 cm sunt preferate pe coridoare și în spațiile unde se schimbă des mobilierul sau unde pot apărea deteriorări locale."] },
      { h2: "Protecția la intrare", p: ["O mare parte din murdăria dintr-o școală intră pe ușă. Un covor de intrare grimebuster 50® sau chevrolay 50® în vestibul reduce semnificativ uzura și costul de curățenie al mochetei din interior."] },
    ],
    pick: c => c.sectors.includes("scoli"),
    pickTitle: "Colecții recomandate pentru școli și spații publice",
    faqs: [
      { q: "Ce mochetă se pune în sălile de clasă?", a: "De regulă mochetă din fibră presată (fibre bonded), în rulou de 2 m sau în dale 50 × 50 cm, de exemplu academy® sau eco-cordiale®: rezistentă la trafic intens, ușor de curățat și cu margini care nu se destramă." },
      { q: "Este mocheta igienică într-o școală?", a: "Cu aspirare zilnică și curățare periodică prin extracție, mocheta reține praful la suprafață până la aspirare, în loc să îl lase să circule în aer. Planul de întreținere este esențial." },
      { q: "Ce diferență este între academy® și eco-cordiale®?", a: "academy® are nervură lată, 24 de culori și fibre vopsite în masă. eco-cordiale® are nervură fină, 44 de culori, un amestec de fibre reciclate și este declarată de producător neutră din punctul de vedere al carbonului." },
    ],
  },
  {
    path: "/covoare-intrare",
    title: "Covoare de intrare și dale barieră | Burmatex România",
    description: "Covoare de intrare și dale barieră Burmatex: grimebuster 50®, chevrolay 50® și armour®. Opresc murdăria și umezeala la ușă și protejează pardoseala.",
    label: "Covoare de intrare",
    h1: "Covoare de intrare.",
    accent: "Cea mai ieftină protecție pentru toată pardoseala clădirii.",
    lead: "Murdăria și umezeala aduse pe încălțăminte sunt principala cauză de uzură a mochetei și a pardoselilor dure. Un covor de intrare corect dimensionat le oprește în primii pași.",
    summary: [["Colecții", "grimebuster 50®, chevrolay 50®, armour®"], ["Format", "Dale 50 × 50 cm; rulou 2 m pentru 7700 grimebuster și 7800 chevrolay"], ["armour®", "Sistem de fir în trei trepte: absorbție, raclor, denier mare"], ["Culori", "6 nuanțe grimebuster 50®, 6 chevrolay 50®, 12 armour®"]],
    image: "/img/c/chevrolay-50/mocheta-dale-chevrolay-50-ambient-1.webp",
    imageAlt: "Intrare în clădire cu covor de intrare Burmatex chevrolay 50®",
    sections: [
      { h2: "Cum funcționează o zonă de intrare", bullets: [["Raclare", "Nervurile adânci desprind murdăria grosieră de pe tălpi."], ["Absorbție", "Fibrele rețin umezeala și praful fin."], ["Tranziție", "Ultimii pași pe o suprafață curată înainte de mocheta sau pardoseala din interior."]] },
      { h2: "Ce alegeți", table: { head: ["Produs", "Construcție", "Potrivit pentru"], rows: [["grimebuster 50®", "Fibră presată, nervură diagonală adâncă", "Vestibuluri, școli, clădiri publice"], ["chevrolay 50®", "Fibră presată, desen chevron", "Intrări unde aspectul contează: birouri, retail"], ["armour®", "Dală barieră cu fir în trei trepte, ECONYL®", "Holuri de acces și recepții, în continuarea zonei de intrare"]] } },
      { h2: "Dimensionare", p: ["Zona de intrare trebuie să acopere toată lățimea ușii și o lungime suficientă pentru mai mulți pași de mers normal. Cu cât zona este mai lungă, cu atât mai puțină murdărie ajunge în interior."] },
    ],
    pick: c => c.sectors.includes("intrari"),
    pickTitle: "Produse pentru zone de intrare",
    faqs: [
      { q: "Ce este un covor de intrare?", a: "Un covor de intrare (entrance matting) este o pardoseală textilă rezistentă, montată la intrarea în clădire, care reține murdăria și umezeala de pe încălțăminte înainte ca acestea să ajungă pe pardoseala din interior." },
      { q: "Ce diferență este între grimebuster 50® și armour®?", a: "grimebuster 50® este un covor de intrare din fibră presată cu nervură diagonală adâncă, pentru zona primară de la ușă. armour® este o dală barieră cu sistem de fir în trei trepte, pentru holuri și zonele de după intrare." },
    ],
  },
  {
    path: "/pret-mocheta-dale",
    title: "Preț mochetă dale: de ce depinde | Burmatex România",
    description: "Cât costă mocheta în dale? Factorii de preț: construcție, fir, design, volum, montaj. Clase de preț Burmatex și ofertă de la dealerul din zona dumneavoastră.",
    label: "Preț mochetă dale",
    h1: "Cât costă mocheta în dale?",
    accent: "Ce face prețul și cum îl comparați corect.",
    lead: "Prețul mochetei în dale variază după construcție, greutatea firului, design și volumul comandat. Mai jos sunt factorii care contează și clasele de preț ale colecțiilor Burmatex. Prețul final îl primiți în ofertă, de la dealerul din zona dumneavoastră.",
    summary: [["Economic", "Buclă uniformă și fibră presată (go to®, tivoli®, tivoli mist®, infinity®, academy®, eco-cordiale®)"], ["Standard", "Desen și textură (threads®, balance®, arctic®, snowfall®, standing stones®)"], ["Premium", "Design multilevel, fir tăiat și covoare de intrare grele (alaska®, osaka®, surface®, origin®, armour®)"], ["Ce mai intră în buget", "Pregătirea suportului, adeziv, montaj, transport"]],
    image: "/img/c/tivoli/mocheta-dale-tivoli-ambient-1.webp",
    imageAlt: "Mochetă dale Burmatex tivoli® în culori combinate",
    sections: [
      { h2: "De ce depinde prețul mochetei în dale", bullets: [["Construcția", "Bucla uniformă și fibra presată costă cel mai puțin; bucla pe mai multe niveluri, firul tăiat și covoarele de intrare grele costă cel mai mult."], ["Greutatea și tipul firului", "Mai mult fir pe metru pătrat (g/m²) și fire regenerate premium (ECONYL®, Thrive®) cresc prețul și durabilitatea."], ["Designul", "Desenele complexe și colecțiile noi sunt mai scumpe decât culorile uni."], ["Volumul și disponibilitatea", "Produsele din stoc și comenzile mari au alt preț decât cantitățile mici aduse din fabrică."], ["Montajul", "Pregătirea șapei, adezivul și manopera se adaugă la prețul materialului."]] },
      { h2: "Cum comparați două oferte", p: ["Comparați aceeași clasă de utilizare (33 pentru trafic comercial intens), aceeași construcție și greutate a firului, aceeași garanție. Verificați dacă oferta include adezivul, pregătirea suportului, transportul și rezerva pentru tăieri.", "Cel mai mic preț pe metru pătrat nu înseamnă cel mai mic cost total: o mochetă care rezistă de două ori mai mult costă mai puțin pe an de utilizare."] },
    ],
    pick: () => true,
    pickTitle: "Colecții pe clase de preț",
    faqs: [
      { q: "Cât costă mocheta în dale pe metru pătrat?", a: "Depinde de construcție, greutatea firului, design și volum. Dalele cu buclă uniformă și fibra presată sunt clasa economică, colecțiile cu desen și textură sunt clasa standard, iar colecțiile de design, firul tăiat și covoarele de intrare grele sunt clasa premium. Prețul exact se stabilește prin ofertă, în funcție de cantitate și de montaj." },
      { q: "Prețul include montajul?", a: "Prețul materialului nu include de obicei montajul, adezivul, pregătirea suportului și transportul. Cereți o ofertă care le menționează separat, ca să le puteți compara." },
      { q: "De unde cumpăr mochetă Burmatex în România?", a: "Prin rețeaua de dealeri Burmatex România. Trimiteți o cerere de ofertă de pe site și vă punem în legătură cu dealerul din zona dumneavoastră." },
    ],
  },
];

export const landingByPath = Object.fromEntries(landings.map(l => [l.path, l])) as Record<string, Landing>;
