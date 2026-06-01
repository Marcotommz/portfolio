export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  url?: string;
};

// TODO: inserisci qui le aziende per cui hai lavorato
export const experiences: Experience[] = [
  {
    company: "Nome Azienda",
    role: "Il tuo ruolo (es. Frontend Developer)",
    period: "2024 — Presente",
    description:
      "Cosa hai fatto in questa azienda: progetti, responsabilità, risultati ottenuti.",
    url: "https://",
  },
  {
    company: "Altra Azienda",
    role: "Il tuo ruolo",
    period: "2023 — 2024",
    description:
      "Breve descrizione delle tue mansioni e dei progetti su cui hai lavorato.",
  },
];
