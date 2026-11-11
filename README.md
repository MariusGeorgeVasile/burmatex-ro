# burmatex.ro

Site Burmatex România: catalog complet de mochetă în dale, selector de mochetă, ghiduri SEO și program de dealeri.
Format editorial preluat de la InsightFLOOR (tokenuri, fonturi Jost/Manrope, ritm de secțiuni).

## Comenzi

```bash
npm install
npm run dev            # dezvoltare
npm run build          # tsc + build client + randare statică a tuturor paginilor → dist/
npm run preview        # verificare build (servește dist/)
npm run build:preview  # previzualizare cu rutare pe hash → dist-preview/ (pentru link privat)
```

`dist/` este complet static. Fiecare pagină e generată ca HTML complet (conținut, titlu, descriere, canonical,
Open Graph, JSON-LD), deci Google, Bing, ChatGPT, Gemini și Perplexity citesc tot conținutul fără JavaScript.
Rutele se scriu ca `ruta.html` (ex. `colectii/tivoli.html`), servite la `/colectii/tivoli` de Cloudflare Pages,
Netlify și majoritatea gazdelor statice.

Generate la build: `sitemap.xml` (cu imagini), `robots.txt` (deschis motoarelor de căutare și asistenților AI),
`llms.txt`, `llms-full.txt`, `404.html`.

## Unde se modifică

| Ce | Fișier |
|---|---|
| E-mail, telefon, adresă | `src/data/site.ts` |
| Colecții, texte, specificații | `src/data/collections.ts` |
| Clasă de preț, preț „de la” €/m², design, sectoare, documente | `src/data/attributes.ts` |
| Nuanțe și imagini (generat) | `src/data/media.json` + `public/img/c/<colecție>/` |
| Ghiduri SEO (mochetă dale, birouri, clădiri noi, școli, intrări, preț) | `src/data/landings.ts` |
| Titluri/descrieri pagini statice, date structurate | `src/seo.ts` |
| Întrebări frecvente dealeri | `src/data/faqs.ts` |
| Culoarea de accent | `--accent` în `src/styles.css` |

### Prețuri
Clasele de preț (`economic` / `standard` / `premium`) sunt o propunere după construcție și trebuie confirmate.
Pentru a afișa „de la X €/m² + TVA”, completați `priceFrom` la colecția respectivă în `src/data/attributes.ts`;
apare automat pe card, pe pagina colecției, în selector și în datele structurate (`AggregateOffer`).

## Surse
Date tehnice, imagini de ambient și nuanțe: Burmatex (pagini de produs, fișe tehnice, arhive oficiale de nuanțe)
și selecția verificată InsightFLOOR. Valorile nepublicate de producător sunt omise, nu estimate.
