# Portfolio

Portfolio personale costruito con **Next.js 14**, **TypeScript**, **Tailwind CSS** e **Framer Motion**. Design glassmorphism, single-page con scroll fluido.

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Personalizzazione

| Cosa | Dove |
| --- | --- |
| Nome, ruolo, bio, email | `lib/config.ts` |
| Link social (GitHub, Instagram) | `lib/config.ts` → `links` |
| Progetti | `lib/projects.ts` |
| Skill / tech stack | `lib/skills.ts` |

> **Da fare:** aggiorna il link Instagram in `lib/config.ts` con il tuo username reale.

## Deploy su Vercel

1. Pusha su GitHub (`main`).
2. Vai su [vercel.com](https://vercel.com), **Add New → Project**, importa il repo.
3. Vercel rileva Next.js automaticamente — nessuna configurazione necessaria. Premi **Deploy**.

Ogni push su `main` farà un deploy automatico.

## Struttura

```
app/         layout, pagina principale, stili globali
components/  Navbar, Hero, Projects, Skills, Footer, icone
lib/         dati e configurazione (config, projects, skills)
```
