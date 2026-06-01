export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  url?: string;
};

export const experiences: Experience[] = [
  {
    company: "Sprintit SRL",
    role: "Sviluppatore Web e Designer CAD",
    period: "2024 — Presente",
    description:
      "Sviluppo di pagine web con wordpress,  gestione del design di modelli 3D per stampa e CAD.",
    url: "https://sprintit.net",
  },
];
