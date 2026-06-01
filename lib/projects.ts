export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
};

// TODO: aggiungi/modifica i tuoi progetti qui
export const projects: Project[] = [
  {
    title: "Portfolio",
    description:
      "Questo stesso sito: portfolio personale costruito con Next.js, Tailwind e Framer Motion, con estetica glassmorphism.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Marcotommz/portfolio",
    live: "#",
  },
  {
    title: "Progetto 2",
    description:
      "Breve descrizione del progetto. Spiega cosa fa e quale problema risolve.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/Marcotommz",
  },
  {
    title: "Progetto 3",
    description:
      "Breve descrizione del progetto. Spiega cosa fa e quale problema risolve.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Marcotommz",
  },
];
