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
  { q: "Cine distribuie mocheta Burmatex în România?", a: "Mocheta Burmatex® este distribuită în România prin InsightFLOOR, dealer oficial Burmatex®. InsightFLOOR livrează și montează direct, cu echipe proprii, sau prin rețeaua de parteneri și dealeri din toată țara. În România au fost livrați și instalați peste 2,5 milioane m² de mochetă Burmatex." },
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
    path: "/mocheta-fonoabsorbanta",
    title: "Mochetă fonoabsorbantă în dale: valori dB | Burmatex România",
    description: "Mochetă fonoabsorbantă pentru birouri și școli: reducerea zgomotului de impact ΔLw 18–28 dB, măsurată după EN ISO 10140-3. Valori pe colecții și cum le citiți.",
    label: "Mochetă fonoabsorbantă",
    h1: "Mochetă fonoabsorbantă.",
    accent: "Ce înseamnă decibelii din fișa tehnică.",
    lead: "Mocheta este cea mai simplă soluție acustică pentru pardoseală: reduce zgomotul de pași transmis în încăperea de dedesubt și o parte din zgomotul din încăpere. Colecțiile Burmatex declară o reducere a zgomotului de impact între 18 și 28 dB, măsurată după EN ISO 10140-3.",
    summary: [["Reducerea zgomotului de impact", "ΔLw 18–28 dB, după colecție"], ["Cele mai bune valori", "osaka® și origin®: 28 dB; arctic®: 26 dB"], ["Standardul de măsurare", "EN ISO 10140-3, evaluat după EN ISO 717-2"], ["Comparație", "O pardoseală dură (gresie, LVT subțire) are o reducere apropiată de 0 dB fără strat suplimentar"]],
    image: "/img/c/osaka/mocheta-dale-osaka-ambient-1.webp",
    imageAlt: "Birou cu mochetă dale osaka® Burmatex, cu reducere a zgomotului de impact de 28 dB",
    sections: [
      { h2: "Două valori diferite: zgomot de impact și absorbție", bullets: [["ΔLw — reducerea zgomotului de impact", "Cât din zgomotul de pași, de tocuri sau de scaune ajunge în încăperea de dedesubt. Se măsoară după EN ISO 10140-3 și se exprimă în dB. Cu cât valoarea e mai mare, cu atât mai bine. Este valoarea care apare în fișele tehnice Burmatex."], ["αw — coeficientul de absorbție acustică", "Cât din sunetul din încăpere este absorbit de suprafață în loc să fie reflectat (reverberația). Se măsoară după EN ISO 354 și se exprimă între 0 și 1. Pentru mochetă valoarea este mică în comparație cu un tavan acustic, dar contează în open-space, unde podeaua este cea mai mare suprafață."], ["Ce nu face mocheta", "Nu înlocuiește un tavan acustic sau panourile de perete. Într-un proiect acustic, mocheta reduce zgomotul de pași și contribuie la confort; reverberația se rezolvă în principal prin tavan și pereți."]] },
      { h2: "Valorile pe colecții", p: ["Valori declarate în fișele tehnice Burmatex (EN ISO 10140-3). Pentru proiecte cu cerințe acustice, trimitem fișa tehnică originală și, la cerere, rapoartele de încercare."], table: { head: ["Colecția", "ΔLw", "La 1000 Hz", "Construcție"], rows: [["osaka®", "28 dB", "47,6 dB", "Buclă pe mai multe niveluri"], ["origin®", "28 dB", "47,0 dB", "Fir tăiat"], ["arctic®", "26 dB", "45,0 dB", "Buclă pe mai multe niveluri"], ["snowfall®", "25 dB", "46,3 dB", "Buclă pe mai multe niveluri"], ["surface story®", "24 dB", "47,0 dB", "Buclă pe mai multe niveluri"], ["surface trace® / surface memory®", "24 dB", "40,0 dB", "Buclă pe mai multe niveluri"], ["rocklines®", "24 dB", "42,5 dB", "Buclă pe mai multe niveluri"], ["balance®", "23 dB", "41,2 dB", "Buclă pe mai multe niveluri"], ["standing stones®", "23 dB", "38,1 dB", "Buclă pe mai multe niveluri"], ["tivoli® / tivoli mist®", "23 dB", "35,6 dB", "Buclă uniformă"], ["infinity®", "23 dB", "35,3 dB", "Buclă uniformă"], ["alaska®", "22 dB", "33,4 dB", "Buclă pe mai multe niveluri"], ["threads®", "21–23 dB", "35,6–38,6 dB", "Buclă uniformă"], ["velour excel®", "21 dB", "32,1 dB", "Fir tăiat"], ["academy®", "19–21 dB", "30,7 dB", "Fibră presată"], ["go to®", "20 dB", "28,5 dB", "Buclă uniformă"], ["eco-cordiale®", "18 dB", "16,1–20,5 dB", "Fibră presată"]] } },
      { h2: "Cum alegeți pentru acustică", bullets: [["Birouri open-space și săli de ședință", "Buclă pe mai multe niveluri sau fir tăiat, 24–28 dB: osaka®, origin®, arctic®, snowfall®, surface®."], ["Clădiri cu mai multe etaje și pardoseală tehnică", "Orice dală clasa 33 reduce zgomotul de pași față de o pardoseală dură; pentru zonele de lucru alegeți minimum 23 dB."], ["Școli și coridoare", "Buclă uniformă sau fibră presată, unde rezistența la trafic contează mai mult decât ultimul decibel: tivoli®, threads®, academy®."]] },
    ],
    pick: c => (c.impactDb ?? 0) >= 24,
    pickTitle: "Colecții cu reducere a zgomotului de impact de minimum 24 dB",
    faqs: [
      { q: "Mocheta în dale este fonoabsorbantă?", a: "Da. Mocheta în dale reduce zgomotul de impact (pași, scaune, obiecte căzute) transmis în încăperea de dedesubt și absoarbe o parte din zgomotul din încăpere. Colecțiile Burmatex declară o reducere a zgomotului de impact ΔLw între 18 și 28 dB, după EN ISO 10140-3." },
      { q: "Ce mochetă reduce cel mai mult zgomotul?", a: "Dintre colecțiile Burmatex, osaka® și origin® au cea mai mare reducere a zgomotului de impact declarată: 28 dB. Urmează arctic® (26 dB) și snowfall® (25 dB). În general, bucla pe mai multe niveluri și firul tăiat au valori mai bune decât bucla joasă și fibra presată." },
      { q: "Ce înseamnă ΔLw la mochetă?", a: "ΔLw este reducerea ponderată a zgomotului de impact, în decibeli, măsurată după EN ISO 10140-3 și evaluată după EN ISO 717-2. Arată cât de mult reduce pardoseala zgomotul de pași transmis prin planșeu. O valoare de 25 dB înseamnă o reducere foarte bună pentru o pardoseală de birou." },
      { q: "Mocheta poate înlocui panourile acustice?", a: "Nu complet. Mocheta reduce zgomotul de pași și contribuie la absorbție, dar reverberația dintr-un open-space se controlează în principal prin tavan acustic și panouri de perete. Cele trei lucrează împreună." },
    ],
  },
  {
    path: "/clase-trafic-mocheta",
    title: "Clase de trafic mochetă: EN 1307, clasa 33, LC | Burmatex",
    description: "Ce înseamnă clasa 31, 32, 33 și LC1–LC5 la mochetă, reacția la foc Bfl-s1, scaunele cu rotile și diferența poliamidă – polipropilenă. Ghid pentru caiete de sarcini.",
    label: "Clase de trafic și materiale",
    h1: "Clase de trafic la mochetă.",
    accent: "Cum citiți o fișă tehnică înainte de ofertă.",
    lead: "Două mochete care arată la fel pot avea durate de viață foarte diferite. Diferența se vede în fișa tehnică: clasa de utilizare, materialul firului, construcția și testele de rezistență. Mai jos este tot ce trebuie verificat pentru un spațiu comercial.",
    summary: [["Clasa de utilizare", "EN 1307: 21–23 locuințe, 31–33 spații comerciale; 33 = trafic comercial intens"], ["Clasa de confort", "LC1–LC5 (EN 1307): cât de plăcută este mocheta la pas"], ["Reacția la foc", "Bfl-s1 după EN 13501-1, cerută de regulă în clădirile publice și de birouri"], ["Dalele Burmatex", "Clasa 33 și Bfl-s1, poliamidă sau fibră presată pentru trafic comercial"]],
    image: "/img/c/eco-cordiale/mocheta-dale-eco-cordiale-ambient-1.webp",
    imageAlt: "Coridor cu trafic intens și mochetă dale Burmatex eco-cordiale®",
    sections: [
      { h2: "Clasele de utilizare după EN 1307", p: ["Standardul european EN 1307 clasifică mocheta după cât trafic suportă păstrându-și aspectul. Clasa se stabilește prin încercări de uzură (hexapod, tambur) și se trece în fișa tehnică și pe marcajul produsului."], table: { head: ["Clasa", "Trafic", "Exemple de spații"], rows: [["21", "Rezidențial ușor", "Dormitoare"], ["22", "Rezidențial mediu", "Living, camere de zi"], ["23", "Rezidențial intens", "Holuri de locuință, scări"], ["31", "Comercial ușor", "Camere de hotel, birouri individuale"], ["32", "Comercial mediu", "Birouri, săli de ședință"], ["33", "Comercial intens", "Open-space, coridoare, școli, spații publice"]] } },
      { h2: "Ce mai trebuie să scrie în fișa tehnică", bullets: [["Clasa de confort LC (EN 1307)", "De la LC1 (de bază) la LC5 (lux). Arată senzația la pas, nu rezistența. Mochetele comerciale au de obicei LC1–LC2."], ["Reacția la foc (EN 13501-1)", "Bfl-s1 este clasa cerută de regulă pentru căile de evacuare și spațiile publice. Toate dalele Burmatex au Bfl-s1; unele rulouri din fibră presată au Efl-s1, de verificat în fișa colecției."], ["Scaune pe rotile (EN 985)", "„Utilizare continuă” înseamnă că mocheta suportă scaune de birou pe rotile fără protecții suplimentare."], ["Electricitate statică (ISO 6356)", "Sub 2 kV tensiune corporală: fără descărcări neplăcute, important lângă echipamente electronice."], ["Stabilitate dimensională (ISO 2551)", "Dalele nu se contractă și nu se dilată; rămân plane și cap la cap."], ["Marcajul CE și EN 14041", "Declarația de performanță obligatorie pentru pardoselile textile vândute în UE."]] },
      { h2: "Materialul firului", table: { head: ["Material", "Avantaje", "Limite", "Unde se folosește"], rows: [["Poliamidă (nailon) vopsită în masă", "Revine după apăsare, rezistă la uzură și la pete, culoarea nu se decolorează", "Preț mai mare decât polipropilena", "Birouri, hoteluri, trafic intens — majoritatea colecțiilor Burmatex"], ["Polipropilenă", "Preț mic, rezistentă la pete", "Se tasează mai repede în zonele de trafic", "Locuințe, spații cu trafic redus — dalele din magazinele de bricolaj"], ["Fibră presată (needlepunch)", "Foarte rezistentă, nu se destramă la tăiere, cost mic pe an de utilizare", "Aspect mai tehnic, mai puțin confort la pas", "Școli, coridoare, industrie: academy®, eco-cordiale®"]] } },
      { h2: "Construcția", bullets: [["Buclă uniformă (loop)", "Cea mai rezistentă la trafic și cea mai ușor de întreținut. go to®, tivoli®, infinity®."], ["Buclă pe mai multe niveluri (multilevel loop)", "Textură și desen în relief, acustică mai bună. surface®, osaka®, arctic®."], ["Fir tăiat (cut pile)", "Suprafață catifelată, confort la pas, pentru zone de reprezentare. origin®, velour excel®."], ["Barieră de intrare", "Fir rigid care reține murdăria și umezeala la intrare. armour®, grimebuster 50®, chevrolay 50®."]] },
    ],
    pick: c => c.family !== "entrance",
    pickTitle: "Colecții clasa 33 pentru trafic comercial intens",
    faqs: [
      { q: "Ce înseamnă clasa 33 la mochetă?", a: "Clasa 33 după EN 1307 înseamnă mochetă pentru trafic comercial intens: open-space, coridoare, școli, spații publice. Este cea mai înaltă clasă de utilizare pentru spații comerciale. Colecțiile de dale Burmatex pentru birouri, școli și spații publice au clasa 33." },
      { q: "Ce clasă de trafic trebuie pentru un birou?", a: "Pentru birouri individuale este suficientă clasa 32, dar pentru open-space, coridoare și zone cu scaune pe rotile se recomandă clasa 33. În practică, caietele de sarcini pentru clădirile de birouri cer aproape întotdeauna clasa 33 și reacție la foc Bfl-s1." },
      { q: "Poliamidă sau polipropilenă la mochetă?", a: "Poliamida (nailonul) revine după apăsare și își păstrează aspectul mult mai mult timp, de aceea este standardul pentru spații comerciale. Polipropilena este mai ieftină, dar se tasează mai repede în zonele de trafic; se folosește mai ales în locuințe." },
      { q: "Ce înseamnă Bfl-s1 la mochetă?", a: "Bfl-s1 este clasa de reacție la foc pentru pardoseli după EN 13501-1: contribuție foarte limitată la foc (B) și producție redusă de fum (s1). Este clasa cerută de regulă pentru pardoselile din clădirile publice și de birouri." },
    ],
  },
  {
    path: "/mocheta-dale-rulou-lvt",
    title: "Mochetă dale, rulou sau LVT? Comparație | Burmatex România",
    description: "Mochetă în dale, mochetă la rulou sau LVT pentru birouri și spații publice: comparație de acustică, montaj, întreținere, înlocuire și cost total. Ce alegeți și când.",
    label: "Dale, rulou sau LVT",
    h1: "Dale, rulou sau LVT?",
    accent: "Comparația corectă pentru un spațiu comercial.",
    lead: "Pentru birouri, școli și spații publice, alegerea se face de obicei între mocheta în dale, mocheta la rulou și LVT (dale vinilice de lux). Fiecare are locul ei. Tabelul de mai jos compară criteriile care contează după montaj, nu doar prețul pe metru pătrat.",
    summary: [["Mochetă în dale", "Acustică, înlocuire punctuală, acces la pardoseala tehnică"], ["Mochetă la rulou", "Suprafețe mari fără îmbinări, intrări, săli de evenimente"], ["LVT", "Zone umede, cafenele, recepții cu trafic de murdărie"], ["Soluția frecventă", "Mochetă în dale în birouri + LVT în zonele de cafea și grupuri sanitare"]],
    image: "/img/c/velour-excel/mocheta-dale-velour-excel-ambient-1.webp",
    imageAlt: "Spațiu de reprezentare cu mochetă Burmatex velour excel®",
    sections: [
      { h2: "Comparație pe criterii", table: { head: ["Criteriu", "Mochetă în dale", "Mochetă la rulou", "LVT"], rows: [["Zgomot de pași (ΔLw)", "18–28 dB (Burmatex)", "Similar dalelor", "Mic, fără strat acustic suplimentar"], ["Confort la pas", "Bun", "Bun", "Dur"], ["Înlocuire după o deteriorare", "O singură dală", "Petic vizibil sau toată suprafața", "O singură placă, dacă e montată liber"], ["Acces la pardoseala tehnică", "Da, dalele se ridică", "Nu", "Doar cu montaj liber"], ["Deșeu la tăiere", "Mic (3–4%)", "Mai mare, din cauza lățimii de 4–5 m", "Mic"], ["Montaj", "Rapid, adeziv de fixare", "Lipire permanentă, echipă mai mare", "Lipit sau click, suport foarte plan"], ["Întreținere", "Aspirare, extracție periodică", "Aspirare, extracție periodică", "Spălare umedă"], ["Pete și lichide", "Se înlocuiește dala", "Curățare locală", "Foarte bun"], ["Reciclare la final", "Programe de preluare (Burmatex reco2very)", "Limitată", "Programe ale producătorilor"]] } },
      { h2: "Când alegeți fiecare", bullets: [["Mochetă în dale", "Birouri, open-space, săli de ședință, școli, clădiri cu pardoseală tehnică. Orice spațiu în care acustica și înlocuirea punctuală contează."], ["Mochetă la rulou", "Săli de evenimente și de conferințe, coridoare de hotel, suprafețe mari fără îmbinări vizibile. Burmatex are rulouri din fibră presată și 5500 luxury."], ["LVT", "Cafenele de birou, bucătării, grupuri sanitare, recepții cu trafic direct din stradă."], ["Combinația", "Cele mai multe clădiri de birouri noi folosesc mochetă în dale în zonele de lucru și LVT în zonele umede și de servire, cu tranziții la același nivel."]] },
    ],
    pick: c => c.sectors.includes("birouri") && c.family !== "entrance",
    pickTitle: "Colecții de dale pentru birouri",
    faqs: [
      { q: "Ce este mai bun pentru birou: mochetă sau LVT?", a: "Pentru zonele de lucru, mocheta în dale: reduce zgomotul de pași cu 18–28 dB, este mai confortabilă și se înlocuiește punctual. LVT este mai potrivit în zonele umede și de servire (cafenele, bucătării, grupuri sanitare). Cele mai multe birouri noi le combină." },
      { q: "Mochetă în dale sau la rulou?", a: "Dalele se înlocuiesc punctual, permit acces la pardoseala tehnică, se montează mai repede și generează mai puțin deșeu la tăiere. Rulourile sunt potrivite pentru suprafețe mari fără îmbinări, cum sunt sălile de evenimente sau coridoarele de hotel." },
      { q: "Se pot combina mocheta în dale și LVT?", a: "Da. Este soluția obișnuită în clădirile de birouri: mochetă în zonele de lucru și LVT în zonele de cafea și grupuri sanitare. Grosimile se aleg astfel încât tranziția să fie la același nivel sau cu un profil de trecere." },
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
      { h2: "Costul complet pe metru pătrat", p: ["Pe lângă mochetă, bugetul unui proiect include lucrările și materialele de mai jos. Valorile sunt orientative pentru România și se confirmă în ofertă, după vizita pe șantier."], table: { head: ["Componenta", "Cost orientativ", "Observații"], rows: [["Montaj mochetă în dale", "35–55 lei/m²", "Depinde de suprafață, de forma încăperilor și de modelul de montaj"], ["Adeziv de fixare Mapei Ultrabond Eco Fix", "aprox. 5–12 lei/m²", "Consum 0,10–0,20 kg/m²"], ["Șapă autonivelantă (dacă e nevoie)", "50–80 lei/m²", "Doar dacă suportul nu e plan; se verifică la vizită"], ["Demontarea pardoselii vechi", "la vizită", "Depinde de pardoseală și de adeziv"], ["Transport", "în ofertă", "go to® este în stoc în România; restul colecțiilor vin din fabrică"], ["Rezervă de material", "3–5% din suprafață", "Pentru tăieri și înlocuiri ulterioare"]] } },
      { h2: "Cum comparați două oferte", p: ["Comparați aceeași clasă de utilizare (33 pentru trafic comercial intens), aceeași construcție și greutate a firului, aceeași garanție. Verificați dacă oferta include adezivul, pregătirea suportului, transportul și rezerva pentru tăieri.", "Cel mai mic preț pe metru pătrat nu înseamnă cel mai mic cost total: o mochetă care rezistă de două ori mai mult costă mai puțin pe an de utilizare."] },
    ],
    pick: () => true,
    pickTitle: "Colecții pe clase de preț",
    faqs: [
      { q: "Cât costă mocheta în dale pe metru pătrat?", a: "Depinde de construcție, greutatea firului, design și volum. Dalele cu buclă uniformă și fibra presată sunt clasa economică, colecțiile cu desen și textură sunt clasa standard, iar colecțiile de design, firul tăiat și covoarele de intrare grele sunt clasa premium. Prețul exact se stabilește prin ofertă, în funcție de cantitate și de montaj." },
      { q: "Prețul include montajul?", a: "Prețul materialului nu include de obicei montajul, adezivul, pregătirea suportului și transportul. Orientativ, montajul mochetei în dale costă 35–55 lei/m², adezivul de fixare aproximativ 5–12 lei/m², iar o șapă autonivelantă, dacă e nevoie, 50–80 lei/m². Cereți o ofertă care le menționează separat, ca să le puteți compara." },
      { q: "De unde cumpăr mochetă Burmatex în România?", a: "Prin InsightFLOOR, dealer oficial Burmatex® în România, direct sau prin rețeaua de parteneri. Trimiteți o cerere de ofertă de pe site și vă punem în legătură cu partenerul din zona dumneavoastră." },
    ],
  },
];

export const landingByPath = Object.fromEntries(landings.map(l => [l.path, l])) as Record<string, Landing>;
