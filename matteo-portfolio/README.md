# Matteo Mazzari Portfolio

Portfolio personale in Angular, costruito come una mini-esperienza narrativa: una strada accompagna lo scroll e collega studi, lavoro, competenze, progetti e contatti.

## Stack

- Angular 21
- TypeScript
- SCSS
- Componenti standalone
- Dati centralizzati in `src/app/data/portfolio-data.ts`
- Workflow GitHub Actions per GitHub Pages

## Sviluppo locale

```bash
npm install
npm start
```

Apri `http://localhost:4200/`.

## Build

```bash
npm run build
```

Build con base path per GitHub Pages:

```bash
npm run build:gh-pages
```

L’output viene generato in `dist/matteo-portfolio`.

## Pubblicazione su GitHub Pages

1. Crea il repository GitHub, ad esempio `matteo-portfolio`.
2. Aggiorna il remote e fai push su `main`.
3. In GitHub vai su `Settings > Pages`.
4. Imposta `Source` su `GitHub Actions`.
5. Il workflow `.github/workflows/pages.yml` costruisce e pubblica automaticamente il sito.

Se il repository ha un nome diverso da `matteo-portfolio`, cambia il base href nello script `build:gh-pages` dentro `package.json`.

## Dove modificare i contenuti

Tutti i contenuti placeholder principali sono in:

```text
src/app/data/portfolio-data.ts
```

Da lì puoi aggiornare:

- profilo personale
- sintesi About
- studi
- esperienze lavorative
- competenze
- progetti
- contatti

L’immagine hero originale usata dal bundle è in:

```text
src/assets/hero-background.webp
```

Puoi sostituirla mantenendo lo stesso nome file, oppure aggiornare il riferimento in `src/app/components/hero-section/hero-section.scss`.
