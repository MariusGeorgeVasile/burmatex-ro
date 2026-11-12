// Technical guide: installation, storage, adhesives and maintenance of Burmatex carpet tiles.
// Adhesives: Mapei only (Ultrabond Eco Fix for tiles and planks, Ultrabond Eco 170 for sheet), per Burmatex România.
// Sources: Burmatex Installation Guide (Fitting Your Carpet), Subfloor Preparation Guide,
// Recommended Adhesives (March 2023), Carpet Tile Maintenance Guide (March 2023), Adhesive Free (IOBAC).
// Items marked "InsightFLOOR" are field practice from installations in Romania.

export const techSources = [
  { label: "Ghid de pregătire a suportului (Burmatex, engleză)", href: "https://www.burmatex.co.uk/wp-content/uploads/2025/07/SubfloorPreparationGuide.pdf" },
  { label: "Ghid de întreținere Burmatex (engleză)", href: "https://www.burmatex.co.uk/wp-content/uploads/2025/07/burmatex-carpet-tile-maintenance-guide-2023-03.pdf" },
  { label: "Instrucțiuni de montaj Burmatex (engleză)", href: "https://www.burmatex.co.uk/fitting-your-carpet/" },
];

export const toc = [
  ["ce-este", "Ce este mocheta în dale"],
  ["suport", "Pe ce se montează"],
  ["depozitare", "Depozitare și aclimatizare"],
  ["adezivi", "Adezivi și fixare"],
  ["montaj", "Montaj, pas cu pas"],
  ["directii", "Direcții de montaj"],
  ["trucuri", "Trucuri de instalare"],
  ["intretinere", "Întreținere"],
  ["pete", "Îndepărtarea petelor"],
] as const;

export const subfloorOk: [string, string][] = [
  ["Beton și șapă de ciment", "Curățate de laptele de ciment (stratul superficial friabil), praf, ulei, vopsea și resturi de tencuială. Suprafețele poroase sau care fac praf se amorsează."],
  ["Șapă autonivelantă", "Varianta recomandată când suportul nu e suficient de plan. Se aplică după amorsare, conform fișei producătorului de șapă."],
  ["Pardoseală tehnică supraînălțată", "Suportul standard în clădirile de birouri. Dalele se pot ridica individual pentru acces la doze și cabluri. Pe plăcile metalice se pot folosi și fixări magnetice fără adeziv."],
  ["Pardoseli din lemn", "Scândurile denivelate sau uzate se înlocuiesc sau se nivelează, apoi se acoperă cu placaj sau PAL dur (fața aspră în sus), cu rosturile decalate, prins în cuie la 100–150 mm, amorsat."],
];
export const subfloorNo: string[] = [
  "Peste mochetă, vinil sau alte pardoseli moi: se îndepărtează și suportul se pregătește.",
  "Peste parchet din lemn masiv cu elemente desprinse sau umede: se repară sau se îndepărtează. Nu se capsează și nu se bate în cuie în parchet, fisurează elementele.",
  "Pe beton tratat cu produse pe bază de ulei sau contaminat cu grăsimi și chimicale.",
  "Peste încălzire în pardoseală cu temperatura suprafeței peste 27 °C.",
];
export const subfloorNumbers: [string, string, string][] = [
  ["≤ 75%", "umiditate relativă a suportului", "măsurată cu higrometru; peste această valoare se aplică o barieră de umiditate (DPM)"],
  ["≥ 1,5 N/mm²", "rezistență la smulgere a suportului pregătit", "înainte de șapă autonivelantă sau adeziv"],
  ["≥ 18 °C", "temperatura în încăpere", "cu 72 de ore înainte de montaj și în timpul montajului"],
  ["≥ 10 °C", "temperatura pardoselii", "în timpul montajului"],
];

export const storage: [string, string][] = [
  ["Clădirea", "Închisă, etanșă la intemperii și încălzită la cel puțin 18 °C cu 72 de ore înainte de montaj. Încăperea bine ventilată când se lucrează cu adezivi."],
  ["Aclimatizarea dalelor", "Dalele se despachetează și se lasă cel puțin 48 de ore în încăperea în care se montează, ca să ajungă la temperatura și umiditatea spațiului."],
  ["Depozitarea pe șantier", "Cutiile se țin culcate, pe o suprafață plană, uscată, ferită de soare direct și de umezeală; nu se depozitează în containere neîncălzite iarna. (practică InsightFLOOR)"],
  ["Loturile", "Verificați numărul de lot (batch / dye) pe fiecare cutie. Nu montați loturi diferite pe aceeași suprafață continuă."],
];

export const adhesives = {
  tiles: { title: "Dale și lamele: Mapei Ultrabond Eco Fix (adeziv de fixare, tip tackifier)", text: "Toate dalele și lamelele Burmatex (buclă multinivel, buclă joasă, fibră presată, fir tăiat, dale barieră) se montează cu adeziv de tip tackifier: ține dalele pe loc, dar permite ridicarea și înlocuirea lor ulterioară. Ultrabond Eco Fix este un adeziv pe bază de apă, fără solvenți, care rămâne lipicios permanent: dalele stau ferm, dar se pot ridica și reutiliza.", products: ["Mapei Ultrabond Eco Fix", "consum 0,10–0,20 kg/m²", "aplicare cu rola sau cu mistria fin dințată"] },
  sheet: { title: "Rulouri (5500 luxury, 7700 grimebuster, 7800 chevrolay): Mapei Ultrabond Eco 170", text: "Mocheta în rulou se lipește permanent, pe toată suprafața, cu un adeziv pentru pardoseli textile, pe bază de apă, cu emisii foarte reduse de COV.", products: ["Mapei Ultrabond Eco 170", "consum 0,25–0,45 kg/m²", "mistrie cu dinți nr. 2", "timp deschis 20–30 min"] },
  steps: [
    ["Aplicarea", "Ultrabond Eco Fix se aplică uniform pe toată suprafața, cu rola cu păr scurt sau cu mistria fin dințată, 0,10–0,20 kg/m². Suportul trebuie să fie curat, uscat și amorsat dacă e absorbant."],
    ["Timpul de așteptare", "Dalele se montează după ce adezivul trece din alb în transparent și devine lipicios la atingere. Timpul depinde de temperatură, umiditate și suport; respectați fișa tehnică Mapei. Dalele nu se montează pe adeziv umed."],
    ["Zone solicitate", "Lângă copiatoare, automate de cafea, dulapuri de arhivă și sub scaune pe rotile, Burmatex cere o fixare mai puternică. Consultați InsightFLOOR pentru soluția Mapei potrivită zonei."],
    ["Încălzire în pardoseală", "Se oprește cu cel puțin 48 de ore înainte și după aplicarea adezivului. Temperatura suprafeței nu depășește 27 °C."],
  ] as [string, string][],
  free: [
    ["IOBAC Tab-It", "Pătrate autocolante pe ambele fețe, puse la colțurile dalelor. Pentru majoritatea suporturilor pregătite. Fără adeziv lichid, fără timp de uscare, dale reutilizabile."],
    ["IOBAC MagTabs", "Magnetice pe o față, autocolante pe cealaltă. Pentru suporturi metalice, de exemplu plăcile de pardoseală tehnică."],
  ] as [string, string][],
};

export const steps: [string, string][] = [
  ["Verificați loturile", "Același număr de lot pe toată suprafața continuă. Notați lotul pentru comenzile de completare."],
  ["Trasați crucea de pornire", "Trasați cu sfoara cu cretă o linie pe mijlocul încăperii (sau de la ușă), apoi una perpendiculară prin centru."],
  ["Verificați marginile", "Mutați liniile dacă e nevoie, astfel încât la fiecare perete să rămână cel puțin o jumătate de dală. Fâșiile înguste se dezlipesc și se văd."],
  ["Montați de la centru spre margini", "Așezați câte un rând pe fiecare braț al crucii, apoi completați în trepte. Apăsați ferm fiecare dală, fără să le comprimați una în alta."],
  ["Respectați săgețile", "Săgețile de pe spatele dalelor arată direcția firului. Le orientați după direcția de montaj aleasă."],
  ["Tăiați dalele de margine", "Puneți dala de tăiat exact peste ultima dală întreagă, suprapuneți o a doua dală lipită de perete, trasați și tăiați cu cuterul pe spate."],
  ["Finisați trecerile", "La uși și la schimbarea pardoselii, folosiți profile de trecere potrivite înălțimii dalei."],
];

export const directions = [
  { key: "monolitic", label: "Monolitic", text: "Toate săgețile în aceeași direcție. Aspect continuu, ca mocheta la rulou.", grid: ["↑", "↑", "↑", "↑"] },
  { key: "sfert", label: "Sfert de rotire", text: "Fiecare dală rotită la 90° față de vecina ei. Efect de tablă de șah discret.", grid: ["↑", "→", "→", "↑"] },
  { key: "caramida", label: "Decalat (cărămidă)", text: "Rândurile decalate cu o jumătate de dală. Recomandat pentru dungi și lamele.", grid: ["↑", "↑", "↑", "↑"], offset: true },
  { key: "aleator", label: "Aleatoriu (random)", text: "Orientare la întâmplare. Indicat la desenele multinivel, de exemplu surface trace®, pentru un aspect natural.", grid: ["↑", "←", "↓", "→"] },
];

export const tips: [string, string][] = [
  ["Amestecați cutiile din același lot", "Luați dale din mai multe cutii ale aceluiași lot pe măsură ce montați. Micile variații de nuanță dintre cutii se distribuie uniform. (practică InsightFLOOR)"],
  ["Păstrați o rezervă", "Comandați cu 3–4% în plus pentru tăieri și păstrați câteva cutii din același lot pentru înlocuiri ulterioare. O dală nouă va arăta ușor diferit lângă dalele folosite."],
  ["Pe pardoseala tehnică, decalați rosturile", "Rosturile dalelor de mochetă (50 cm) nu coincid cu ale plăcilor tehnice (60 cm). Nu lipiți dalele peste rosturile plăcilor care trebuie ridicate. (practică InsightFLOOR)"],
  ["Nu forțați dalele", "Dalele comprimate una în alta se ridică la colțuri. Așezați-le cap la cap, cu presiune ușoară."],
  ["La înlocuire, aceeași direcție a săgeților", "După acces la instalații, puneți dalele înapoi cu săgețile în aceeași direcție, altfel ies în evidență."],
  ["Bariera de intrare face parte din montaj", "Prevedeți covor de intrare pe cel puțin 3 metri de la ușile spre exterior. Este cea mai ieftină protecție a mochetei."],
  ["Zonele cu pete frecvente", "În bucătării, zone de automate și camere de printare, Burmatex recomandă o pardoseală dură sau covorașe de protecție peste mochetă."],
];

export const care: [string, string][] = [
  ["Bariera de intrare", "80% din murdărie intră din exterior. Covorul de intrare pe minimum 3 metri (armour®, grimebuster 50®, 7700 grimebuster) reține o mare parte din ea. Se curăță sau se înlocuiește regulat."],
  ["Aspirare zilnică", "Zilnic, cu un aspirator vertical cu perie rotativă care atinge firul (ideal cu motoare separate pentru aspirare și perie). Aspiratoarele cu cilindru sau tip rucsac nu sunt recomandate pentru mocheta comercială. Holurile și intrările, mai des."],
  ["Întreținere planificată", "Doar 20–30% din suprafață e circulată intens: aceste zone se curăță periodic, înainte să se încarce cu murdărie. Curățarea de întreținere costă mai puțin decât o curățare de recuperare."],
  ["Curățare profundă", "Cu un plan de întreținere, curățarea pe toată suprafața, prin extracție cu apă caldă, e necesară de regulă o dată pe an, făcută de o firmă specializată. Extracția e potrivită doar dacă dalele au fost montate cu adezivul corect."],
  ["Pete", "Acționați imediat: îndepărtați cât se poate cu o lamă boantă, tamponați lichidul cu o lavetă absorbantă (nu frecați), apoi tratați cu soluția potrivită din tabel."],
  ["Dale deteriorate", "Avantajul dalelor: o dală distrusă se înlocuiește în câteva minute, din rezerva păstrată din același lot."],
];

export const stains: [string, string][] = [
  ["Asfalt, gudron", "White spirit sau solvent pentru pete, apoi șampon spumă uscată pentru mochetă sau extracție cu apă caldă."],
  ["Băuturi alcoolice", "Soluție călduță de detergent slab."],
  ["Pix", "Apă, apoi solvent pentru pete."],
  ["Sânge", "Întâi apă rece. Dacă rămâne, o linguriță de detergent de rufe biologic (cu enzime) la 0,3 l apă rece."],
  ["Unt", "Răzuiți, solvent pentru pete, apoi șampon spumă uscată."],
  ["Ceară de lumânare", "Răzuiți, solvent pentru pete, apoi șampon spumă uscată."],
  ["Gumă de mestecat", "Spray de înghețare pentru gumă, răzuiți resturile, apoi șampon pentru mochetă."],
  ["Ciocolată", "Apă rece, apoi șampon spumă uscată."],
  ["Cola", "Apă sau soluție de detergent slab."],
  ["Cafea, cacao", "Imediat, soluție rece sau caldă de detergent slab, apoi solvent pentru pete pentru grăsimea rămasă."],
  ["Arsură de țigară", "Răzuiți atent cu un cuțit cu lamă scurtă, apoi detergent slab călduț. La arsuri grave, decupați cu un dorn de 38 mm și înlocuiți cu un cerc tăiat dintr-o dală de rezervă."],
  ["Ou", "Apă rece, apoi detergent biologic sau detergent slab."],
  ["Excremente", "Soluție de detergent slab."],
  ["Marker", "Imediat, apă; dacă e nevoie, solvent pentru pete."],
  ["Grăsimi, ulei", "Solvent pentru pete, apoi soluție de detergent slab."],
  ["Mâncare grasă", "Soluție călduță de detergent biologic (o linguriță la 0,3 l). Dacă rămâne după uscare, solvent pentru pete."],
  ["Cerneală", "Apă, apoi solvent pentru pete."],
  ["Gem", "Apă călduță, soluție de detergent slab."],
  ["Ruj", "Solvent pentru pete, apoi soluție de detergent slab."],
  ["Lapte", "Solvent pentru pete, apoi șampon spumă uscată."],
  ["Lac de unghii", "Acetonă (nu soluție de demachiere pentru lac)."],
  ["Vopsea pe bază de ulei", "Imediat, white spirit. Petele vechi se îndepărtează foarte greu."],
  ["Plastilină", "Răzuiți, spray de înghețare, răzuiți din nou, apoi solvent pentru pete."],
  ["Rugină", "Firmă de curățenie specializată."],
  ["Vin roșu", "Întâi apă rece, apoi o linguriță de detergent biologic la 0,3 l apă rece."],
  ["Cremă de pantofi", "Solvent pentru pete sau white spirit."],
  ["Funingine", "Aspirați, apoi șampon spumă uscată."],
  ["Ceai", "Soluție călduță de detergent slab."],
  ["Urină", "Soluție diluată de oțet alb, apoi detergent slab. Petele vechi, firmă specializată."],
  ["Vomă", "Detergent slab, apoi solvent pentru pete proteice, diluat."],
  ["Vin alb", "Apă, apoi detergent slab dacă e nevoie."],
];

export const technicalFaqs = [
  { q: "Cât timp se aclimatizează mocheta în dale înainte de montaj?", a: "Cel puțin 48 de ore, despachetată, în încăperea în care se montează. Clădirea trebuie să fie închisă și încălzită la minimum 18 °C cu 72 de ore înainte de montaj." },
  { q: "Ce adeziv se folosește pentru mocheta în dale Burmatex?", a: "Mapei Ultrabond Eco Fix: un adeziv de fixare de tip tackifier, pe bază de apă, care rămâne lipicios permanent. Dalele stau pe loc, dar pot fi ridicate și înlocuite. Consum 0,10–0,20 kg/m². Mocheta în rulou se lipește permanent cu Mapei Ultrabond Eco 170." },
  { q: "Se poate monta mocheta în dale fără adeziv?", a: "Da, cu sistemele IOBAC aprobate de Burmatex: pătrate autocolante Tab-It pe majoritatea suporturilor sau MagTabs magnetice pe pardoseala tehnică metalică." },
  { q: "Ce umiditate maximă poate avea șapa?", a: "Maximum 75% umiditate relativă, măsurată cu higrometrul. Peste această valoare se aplică o barieră de umiditate (DPM) înainte de șapa autonivelantă și adeziv." },
  { q: "Se poate monta mocheta în dale peste linoleum sau mochetă veche?", a: "Nu. Pardoselile moi vechi (mochetă, vinil) se îndepărtează, iar suportul se curăță, se repară și se amorsează." },
  { q: "Cum se curăță mocheta în dale?", a: "Aspirare zilnică cu aspirator vertical cu perie rotativă, curățarea periodică a zonelor circulate și, de regulă o dată pe an, curățare profesională prin extracție cu apă caldă. Petele se tratează imediat, prin tamponare." },
];
