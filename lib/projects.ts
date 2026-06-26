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
    title: "Memorandum",
    description:
      "Piattaforma web e mobile per gestione appunti e studio. Backend in PHP con PostgreSQL e microservizi AI in FastAPI per lettura, sintesi e recupero.",
    tags: ["PHP", "PostgreSQL", "Python", "FastAPI"],
    github: "https://github.com/Marcotommz/MEMORANDUM",
  },
  {
    title: "PL_3D",
    description:
      "Uno strumento Python per trasformare i file SVG dei plantari in modelli 3D pronti per stampa o lavorazione CAD.",
    tags: ["Python", "CADQuery"],
    github: "https://github.com/Marcotommz/PL_3D",
  },
  {
    title: "Portfolio",
    description:
      "Questo stesso sito. Portfolio personale costruito con Next.js, TypeScript e Tailwind.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Marcotommz/portfolio",
  },
];
