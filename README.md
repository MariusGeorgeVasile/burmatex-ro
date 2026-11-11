# burmatex.ro

Site de recrutare dealeri pentru Burmatex® în România, construit în formatul editorial InsightFLOOR (aceleași tokenuri, fonturi Jost/Manrope, ritm de secțiuni).

## Rulare

```bash
npm install
npm run dev      # dezvoltare
npm run build    # tsc + vite build + pre-randare rute (dist/)
npm run preview  # verificare build
```

`dist/` este static: se poate publica pe orice hosting (Netlify, Vercel, Cloudflare Pages, cPanel). Fiecare rută are propriul `index.html` cu titlu și descriere, plus `sitemap.xml` și `404.html`.

## Unde se modifică

| Ce | Fișier |
|---|---|
| E-mail, telefon, adresă | `src/data/site.ts` |
| Colecții, specificații, imagini | `src/data/collections.ts` |
| Titluri și descrieri SEO | `src/data/seo.json` |
| Culoarea de accent | `--accent` în `src/styles.css` |
| Beneficii, FAQ, pași dealer | `src/pages/Dealer.tsx` |

Formularele deschid aplicația de e-mail (mailto) cu mesajul completat — la fel ca pe InsightFLOOR. Pentru trimitere directă se poate conecta ulterior un endpoint (ex. Formspree / funcție serverless).

## Surse

Date tehnice și imagini: burmatex.co.uk (pagini de produs, fișe tehnice). Valorile nepublicate de producător au fost omise, nu estimate.
