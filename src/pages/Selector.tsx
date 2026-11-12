import { useMemo, useState } from "react";
import { Link } from "../link";
import { ArrowRight, ArrowUpRight, Check, RotateCcw, X } from "lucide-react";
import { CarbonTag, Label, PriceTag, usePageMeta } from "../components";
import { collections, collectionPath, families, plainName, type ColourFamily, type Collection } from "../data/collections";
import { referencesFor } from "../data/references";
import { designs, priceTiers, sectorsMeta, type DesignKey, type PriceTier, type SectorKey } from "../data/attributes";

const colourFamilies: Record<ColourFamily, { label: string; hex: string }> = {
  "gri-deschis": { label: "Gri deschis / alb", hex: "#d4d2cc" },
  gri: { label: "Gri", hex: "#8a8a88" },
  negru: { label: "Negru / antracit", hex: "#2f2f30" },
  "bej-maro": { label: "Bej / maro", hex: "#a08a6c" },
  albastru: { label: "Albastru", hex: "#3f6493" },
  verde: { label: "Verde", hex: "#5d7d4c" },
  "rosu-roz-mov": { label: "Roșu / roz / mov", hex: "#9b3b54" },
  "galben-portocaliu": { label: "Galben / portocaliu", hex: "#d49a2a" },
};

type Sort = "potrivire" | "pret" | "acustica" | "co2" | "nuante";
type State = {
  sector: SectorKey | null; tiers: PriceTier[]; designs: DesignKey[]; colours: ColourFamily[]; format: string | null;
  class33: boolean; minDb: number; stock: boolean; neutral: boolean; minRecycled: number; maxGwp: number; sort: Sort;
};
const empty: State = { sector: null, tiers: [], designs: [], colours: [], format: null, class33: false, minDb: 0, stock: false, neutral: false, minRecycled: 0, maxGwp: 0, sort: "potrivire" };

const presets: { label: string; text: string; state: Partial<State> }[] = [
  { label: "Birou open-space, buget atent", text: "Clasa 33, buclă uniformă, cost redus", state: { sector: "birouri", tiers: ["economic"], class33: true } },
  { label: "Clădire nouă, certificare verde", text: "Neutră carbon declarat, GWP mic", state: { sector: "cladiri-noi", neutral: true, sort: "co2" } },
  { label: "Săli de ședință liniștite", text: "Acustică ≥ 25 dB, design premium", state: { sector: "birouri", minDb: 25, sort: "acustica" } },
  { label: "Școală, buget redus", text: "Fibră presată, culori vii", state: { sector: "scoli", tiers: ["economic"] } },
  { label: "Intrare în clădire", text: "Covoare de intrare și dale barieră", state: { sector: "intrari" } },
  { label: "Fabrică, uzină, producție", text: "Fibră presată în dale și rulou, covoare de intrare, dale barieră", state: { sector: "industrie" } },
  { label: "Salon de evenimente, nunți", text: "Toate colecțiile Premium: design, fir tăiat, intrări", state: { sector: "evenimente" } },
  { label: "Hotel sau recepție premium", text: "Design, fir tăiat, clasă premium", state: { sector: "hotel", tiers: ["premium"] } },
  { label: "Livrare rapidă", text: "Doar ce este în stoc în România", state: { stock: true } },
];

const num = (v?: string) => (v ? parseFloat(v.replace(",", ".")) : NaN);
const tierRank: Record<PriceTier, number> = { economic: 1, standard: 2, premium: 3 };
const isClass33 = (c: Collection) => c.specs.some(([l, v]) => l === "Clasă de utilizare" && v.startsWith("33"));

function reasons(c: Collection, s: State) {
  const r: string[] = [];
  if (s.sector) r.push(sectorsMeta[s.sector].short);
  if (s.tiers.length) r.push(`${priceTiers[c.priceTier].label}`);
  s.designs.filter(d => c.design.includes(d)).forEach(d => r.push(designs[d].label));
  if (isClass33(c)) r.push("Clasa 33");
  if (c.impactDb) r.push(`${c.impactDb} dB`);
  if (c.carbon === "neutral") r.push("Neutră carbon (declarat)");
  if (c.recycled && s.minRecycled) r.push(`${c.recycled} reciclat`);
  if (c.formats.some(f => f.startsWith("Rulou")) && (s.sector === "industrie" || s.sector === "scoli" || s.format === "Rulou")) r.push("Și în rulou de 2 m");
  if (c.inStock) r.push("Din stoc");
  const n = referencesFor(c.slug).length;
  if (n) r.push(`${n} ${n === 1 ? "proiect" : "proiecte"} în România`);
  return [...new Set(r)];
}

export default function SelectorPage() {
  usePageMeta("/selector-mocheta");
  const [s, set] = useState<State>(empty);
  const [compare, setCompare] = useState<string[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const toggle = <K extends "tiers" | "designs" | "colours">(key: K, value: State[K][number]) =>
    set(prev => ({ ...prev, [key]: (prev[key] as string[]).includes(value as string) ? (prev[key] as string[]).filter(v => v !== value) : [...(prev[key] as string[]), value] }));
  const active = JSON.stringify(s) !== JSON.stringify(empty);

  const results = useMemo(() => {
    const list = collections.filter(c =>
      (!s.sector || c.sectors.includes(s.sector))
      && (!s.tiers.length || s.tiers.includes(c.priceTier))
      && (!s.designs.length || s.designs.some(d => c.design.includes(d)))
      && (!s.colours.length || c.swatches.some(sw => s.colours.includes(sw.family)))
      && (!s.format || c.formats.some(f => f.startsWith(s.format!)))
      && (!s.class33 || isClass33(c))
      && (!s.minDb || (c.impactDb ?? 0) >= s.minDb)
      && (!s.stock || c.inStock)
      && (!s.neutral || c.carbon === "neutral")
      && (!s.minRecycled || num(c.recycled) >= s.minRecycled)
      && (!s.maxGwp || num(c.gwp) <= s.maxGwp));
    const industryRank: Record<string, number> = { fibre: 3, entrance: 2, barrier: 1 };
    const eventRank: Record<string, number> = { cut: 3, multilevel: 2, barrier: 0.5, entrance: 0 };
    const matchScore = (c: Collection) => (s.sector === "industrie" ? (industryRank[c.family] ?? 0) * 3 : 0) + (s.sector === "evenimente" ? (eventRank[c.family] ?? 0) * 3 : 0) + s.designs.filter(d => c.design.includes(d)).length * 2 + (s.colours.length ? c.swatches.filter(sw => s.colours.includes(sw.family)).length / 4 : 0) + (c.inStock ? 0.5 : 0) + (c.isNew ? 0.3 : 0);
    const by: Record<Sort, (a: Collection, b: Collection) => number> = {
      potrivire: (a, b) => matchScore(b) - matchScore(a),
      pret: (a, b) => tierRank[a.priceTier] - tierRank[b.priceTier] || (a.priceFrom ?? 0) - (b.priceFrom ?? 0),
      acustica: (a, b) => (b.impactDb ?? 0) - (a.impactDb ?? 0),
      co2: (a, b) => (num(a.gwp) || 99) - (num(b.gwp) || 99),
      nuante: (a, b) => b.colours - a.colours,
    };
    return [...list].sort(by[s.sort]);
  }, [s]);

  const compared = compare.map(slug => collections.find(c => c.slug === slug)!).filter(Boolean);
  const chip = (on: boolean, label: string, onClick: () => void, swatch?: string) => <button key={label} type="button" aria-pressed={on} className={`chip${on ? " on" : ""}`} onClick={onClick}>{swatch && <i style={{ background: swatch }} />}{label}{on && <Check />}</button>;

  return <div className="selector-page">
    <section className="page-intro ed-shell selector-intro">
      <Label>Selector mochetă Burmatex</Label>
      <h1>Brain-ul mochetei.<br /><strong>Alegeți după ce contează pentru proiect.</strong></h1>
      <p>Spațiu, buget, design, culoare, acustică, impact de mediu. Combinați criteriile și vedeți imediat ce colecții răspund, de ce, și cum se compară între ele. {collections.length} colecții, {collections.reduce((n, c) => n + c.swatches.length, 0)} de nuanțe.</p>
      <div className="presets" role="group" aria-label="Profiluri rapide">{presets.map(p => <button key={p.label} type="button" onClick={() => set({ ...empty, ...p.state })}><strong>{p.label}</strong><small>{p.text}</small></button>)}</div>
    </section>

    <div className="ed-shell selector-layout">
      <aside className={`selector-panel${panelOpen ? " open" : ""}`} aria-label="Criterii">
        <button type="button" className="panel-toggle" aria-expanded={panelOpen} onClick={() => setPanelOpen(!panelOpen)}><span>Criterii{active ? " · active" : ""}</span><span>{panelOpen ? "Ascundeți" : "Afișați"} · {results.length} rezultate</span></button>
        <div className="panel-head"><h2 className="sub">Criterii</h2>{active && <button type="button" className="reset" onClick={() => set(empty)}><RotateCcw /> Resetați</button>}</div>
        <fieldset><legend>Spațiul</legend><div className="chips">{chip(!s.sector, "Oricare", () => set({ ...s, sector: null }))}{(Object.keys(sectorsMeta) as SectorKey[]).map(k => chip(s.sector === k, sectorsMeta[k].label, () => set({ ...s, sector: s.sector === k ? null : k })))}</div></fieldset>
        <fieldset><legend>Buget</legend><div className="chips">{(Object.keys(priceTiers) as PriceTier[]).map(k => chip(s.tiers.includes(k), `${priceTiers[k].marks} ${priceTiers[k].label}`, () => toggle("tiers", k)))}</div></fieldset>
        <fieldset><legend>Design</legend><div className="chips">{(Object.keys(designs) as DesignKey[]).map(k => chip(s.designs.includes(k), designs[k].label, () => toggle("designs", k)))}</div></fieldset>
        <fieldset><legend>Culoare</legend><div className="chips">{(Object.keys(colourFamilies) as ColourFamily[]).map(k => chip(s.colours.includes(k), colourFamilies[k].label, () => toggle("colours", k), colourFamilies[k].hex))}</div></fieldset>
        <fieldset><legend>Format</legend><div className="chips">{chip(!s.format, "Oricare", () => set({ ...s, format: null }))}{[["Dală", "Dală 50 × 50"], ["Lamelă", "Lamelă 25 × 100"], ["Rulou", "Rulou 2 m"]].map(([k, l]) => chip(s.format === k, l, () => set({ ...s, format: s.format === k ? null : k })))}</div></fieldset>
        <fieldset><legend>Tehnic</legend>
          <label className="switch"><input id="sel-class33" type="checkbox" checked={s.class33} onChange={e => set({ ...s, class33: e.target.checked })} /> Clasa 33 documentată</label>
          <label className="switch"><input id="sel-stock" type="checkbox" checked={s.stock} onChange={e => set({ ...s, stock: e.target.checked })} /> Din stoc în România</label>
          <label className="select">Acustică (zgomot de impact)<select id="sel-db" value={s.minDb} onChange={e => set({ ...s, minDb: +e.target.value })}><option value={0}>Oricare</option><option value={22}>cel puțin 22 dB</option><option value={25}>cel puțin 25 dB</option><option value={26}>cel puțin 26 dB</option></select></label>
        </fieldset>
        <fieldset><legend>Mediu</legend>
          <label className="switch"><input id="sel-neutral" type="checkbox" checked={s.neutral} onChange={e => set({ ...s, neutral: e.target.checked })} /> Neutră carbon (declarat)</label>
          <label className="select">Conținut reciclat<select id="sel-rec" value={s.minRecycled} onChange={e => set({ ...s, minRecycled: +e.target.value })}><option value={0}>Oricare</option><option value={60}>cel puțin 60%</option><option value={70}>cel puțin 70%</option><option value={73}>cel puțin 73%</option></select></label>
          <label className="select">Amprentă CO₂ (GWP)<select id="sel-gwp" value={s.maxGwp} onChange={e => set({ ...s, maxGwp: +e.target.value })}><option value={0}>Oricare</option><option value={3.5}>sub 3,5 kg CO₂e</option><option value={4}>sub 4,0 kg CO₂e</option><option value={4.5}>sub 4,5 kg CO₂e</option></select></label>
        </fieldset>
        <button type="button" className="ed-button panel-apply" onClick={() => setPanelOpen(false)}>Vedeți {results.length} rezultate</button>
        <p className="panel-note">Valorile de acustică și GWP există doar pentru colecțiile cu date publicate; filtrul le exclude pe celelalte. Clasele de preț sunt orientative.</p>
      </aside>

      <section className="selector-results" aria-live="polite">
        <div className="results-head"><p><strong>{results.length}</strong> {results.length === 1 ? "colecție potrivită" : "colecții potrivite"}</p>
          <label className="select inline">Ordonați după<select id="sel-sort" value={s.sort} onChange={e => set({ ...s, sort: e.target.value as Sort })}><option value="potrivire">Potrivire</option><option value="pret">Preț (economic întâi)</option><option value="acustica">Acustică</option><option value="co2">Amprentă CO₂ mică</option><option value="nuante">Număr de nuanțe</option></select></label></div>
        {results.length === 0 && <div className="no-results"><h2>Nicio colecție nu îndeplinește toate criteriile.</h2><p>Renunțați la un criteriu (de obicei acustica sau GWP, publicate doar pentru unele colecții) sau resetați.</p><button className="ed-button" onClick={() => set(empty)}>Resetați criteriile</button></div>}
        <ol className="result-list">{results.map(c => {
          const matching = s.colours.length ? c.swatches.filter(sw => s.colours.includes(sw.family)) : c.swatches;
          const inCompare = compare.includes(c.slug);
          return <li key={c.slug} className="result">
            <Link href={collectionPath(c.slug)} className="result-photo"><img src={c.image ?? c.tile} alt={`Mochetă dale Burmatex ${c.name}`} loading="lazy" width="400" height="300" /></Link>
            <div className="result-body">
              <div className="cc-card-meta"><span>{families[c.family].label}</span><span>{c.colours} nuanțe</span></div>
              <h3><Link href={collectionPath(c.slug)}>{plainName(c.name)}<sup>®</sup></Link></h3>
              <p>{c.headline}</p>
              <ul className="reasons">{reasons(c, s).map(r => <li key={r}><Check />{r}</li>)}</ul>
              <ul className="result-swatches" aria-label="Nuanțe">{matching.slice(0, 8).map(sw => <li key={sw.img}><Link href={`${collectionPath(c.slug)}#nuante`} title={sw.name}><img src={sw.img} alt={`${c.name} ${sw.name}`} loading="lazy" width="56" height="56" /></Link></li>)}{matching.length > 8 && <li className="more">+{matching.length - 8}</li>}</ul>
              <div className="result-foot"><span className="cc-tags"><PriceTag c={c} /><CarbonTag c={c} /></span>
                <label className="switch small"><input type="checkbox" checked={inCompare} disabled={!inCompare && compare.length >= 3} onChange={() => setCompare(inCompare ? compare.filter(x => x !== c.slug) : [...compare, c.slug])} /> Comparați</label></div>
            </div>
          </li>;
        })}</ol>
      </section>
    </div>

    {compared.length > 0 && <section className="ed-shell compare" id="comparatie">
      <div className="ed-section-heading"><div><Label>Comparație</Label><h2>{compared.map(c => plainName(c.name)).join(" · ")}</h2></div><button type="button" className="ed-text-link" onClick={() => setCompare([])}>Goliți comparația <X /></button></div>
      <div className="table-wrap"><table>
        <thead><tr><th scope="col">Criteriu</th>{compared.map(c => <th key={c.slug} scope="col"><Link href={collectionPath(c.slug)}>{c.name}</Link></th>)}</tr></thead>
        <tbody>{([
          ["Familie", c => families[c.family].label],
          ["Formate", c => c.formats.join(", ")],
          ["Nuanțe", c => String(c.colours)],
          ["Clasă de preț", c => `${priceTiers[c.priceTier].marks} ${priceTiers[c.priceTier].label}`],
          ["Clasă de utilizare", c => c.specs.find(([l]) => l === "Clasă de utilizare")?.[1] ?? "—"],
          ["Grosime totală", c => (c.thicknessMm ? `${String(c.thicknessMm).replace(".", ",")} mm` : "—")],
          ["Masă fir", c => (c.pileGm2 ? `${c.pileGm2} g/m²` : "—")],
          ["Zgomot de impact", c => (c.impactDb ? `${c.impactDb} dB` : "—")],
          ["GWP (EPD)", c => (c.gwp ? `${c.gwp} kg CO₂e` : "—")],
          ["Conținut reciclat", c => c.recycled ?? "—"],
          ["Carbon", c => (c.carbon === "neutral" ? "Neutră (declarat)" : c.carbon === "low" ? "Redus" : "—")],
          ["Din stoc în România", c => (c.inStock ? "Da" : "La comandă")],
        ] as [string, (c: Collection) => string][]).map(([label, f]) => <tr key={label}><th scope="row">{label}</th>{compared.map(c => <td key={c.slug}>{f(c)}</td>)}</tr>)}</tbody>
      </table></div>
      <div className="intro-actions"><Link href={`/contact?tip=mostre&produs=${encodeURIComponent(compared.map(c => plainName(c.name)).join(", "))}`} className="ed-button">Cereți mostre pentru acestea <ArrowUpRight /></Link><Link href="/mocheta-dale" className="ed-text-link">Ghid: cum alegeți mocheta în dale <ArrowRight /></Link></div>
    </section>}
  </div>;
}
