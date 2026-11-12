# Cum se adaugă un articol pe burmatex.ro

Fiecare articol este un fișier `.md` în acest folder. Numele fișierului devine adresa:
`mocheta-dale-greseli.md` → `burmatex.ro/articole/mocheta-dale-greseli`.

Folosiți litere mici, fără diacritice și cu cratime în nume. Fișierele care încep cu `_` nu se publică.

## Antetul (obligatoriu)

```
---
titlu: Titlul articolului (maximum 60–65 de caractere, cu cuvântul cheie la început)
descriere: Un rezumat de 120–160 de caractere. Apare în Google și sub titlu.
categorie: mocheta-dale
data: 2026-11-12
actualizat: 2026-12-01
imagine: /img/c/tivoli/mocheta-dale-tivoli-ambient-1.webp
imagine_alt: Ce se vede în imagine, în cuvinte
colectii: tivoli, go-to
ciorna: nu
---
```

- `categorie`: una dintre `mocheta-dale`, `pardoseli`, `cladiri-birouri`, `montaj-intretinere`, `dealeri`.
- `actualizat`, `colectii`, `ciorna` sunt opționale. Cu `ciorna: da`, articolul nu se publică.
- `colectii`: colecțiile Burmatex afișate sub articol (numele din adresa colecției: `tivoli`, `go-to`, `surface-story`...).

## Textul

Scrieți în Markdown, după antet:

- `## Subtitlu` pentru secțiuni (apar în cuprins), `### Subtitlu mic` pentru subsecțiuni.
- `**îngroșat**`, liste cu `-`, liste numerotate cu `1.`.
- Linkuri interne: `[mochetă pentru birouri](/mocheta-birouri)`.
- Tabele:

```
| Criteriu | Dale | Rulou |
|---|---|---|
| Înlocuire | O dală | Petic |
```

## Ce ajută în Google și la ChatGPT / Gemini

1. Primul paragraf răspunde direct la întrebarea din titlu, în 2–3 propoziții.
2. Cifre concrete, cu unitatea de măsură și standardul (de exemplu „clasa 33, EN 1307”).
3. Un subtitlu pe întrebare („Cât costă…?”, „Ce clasă…?”). Răspunsul vine imediat sub el.
4. Linkuri către colecții și ghidurile de pe site.
5. Între 800 și 2.000 de cuvinte. Fără texte copiate de pe alte site-uri.
