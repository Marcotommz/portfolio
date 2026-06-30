# Portfolio

Portfolio personale di **Marco Tommasi**, single-page con scroll fluido e animazioni reveal allo scroll. Costruito con **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS** e **Framer Motion**. Tema scuro con accento blu e linee glow che si disegnano entrando in vista.

## Sviluppo locale

```bash
npm install
npm run dev      # http://localhost:3000
```

Altri comandi:

```bash
npm run build    # build di produzione
npm run start    # serve la build
npm run lint     # ESLint (next lint)
```

## Personalizzazione dei contenuti

Tutti i dati del sito stanno in `lib/`, separati dalla UI:

| Cosa | Dove |
| --- | --- |
| Nome, ruolo, intro, bio, email, avatar | `lib/config.ts` → `site` |
| Statistiche dell'hero | `lib/config.ts` → `stats` |
| Paragrafi "Chi sono" | `lib/config.ts` → `about` |
| Link social (GitHub, LinkedIn, Instagram, email) | `lib/config.ts` → `links` |
| Progetti | `lib/projects.ts` |
| Skill / tech stack (raggruppate) | `lib/skills.ts` |
| Esperienze (timeline) | `lib/experience.ts` |

Nei testi di `config.ts`, racchiudere una parola tra asterischi (`*parola*`) la evidenzia con il colore accento — il markup è interpretato dal componente `RichText`.

Le icone delle skill sono caricate dal CDN [devicon](https://devicon.dev/): in `lib/skills.ts` ogni voce indica il path dell'icona (es. `python/python-original.svg`); usare `invert: true` per i loghi scuri che sparirebbero sullo sfondo nero.

## Struttura

```
app/
  layout.tsx     font (Poppins/Monoton/Space Grotesk) + metadata SEO
  page.tsx       compone le sezioni in ordine
  globals.css    variabili tema (--accent/--glow/--soft/--faint), scrollbar, reduced-motion
components/       una sezione per file: Hero, About, Skills, Projects, Experience, Contact
  Reveal.tsx     primitive d'animazione: <Reveal> (entrata) e <DrawLine> (linea che si disegna)
  RichText.tsx   rende il markup *parola* come testo evidenziato
  SectionHeading, icons
lib/              dati e configurazione (config, projects, skills, experience)
```

Le sezioni vengono renderizzate in quest'ordine da `app/page.tsx`: Hero → About → Skills → Projects → Experience → Contact.

## Animazioni

`Reveal` e `DrawLine` (in `components/Reveal.tsx`) usano `whileInView` con `once: false`, quindi le animazioni si ripetono ogni volta che un elemento rientra in vista scorrendo. Rispettano `prefers-reduced-motion` (vedi `globals.css`).

## Deploy su Vercel

1. Pusha su GitHub (`main`).
2. Su [vercel.com](https://vercel.com): **Add New → Project**, importa il repo.
3. Vercel rileva Next.js automaticamente — nessuna configurazione. Premi **Deploy**.

Ogni push su `main` fa un deploy automatico.
