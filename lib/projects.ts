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
      "Questo stesso sito: portfolio personale costruito con Next.js, Tailwind e Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Marcotommz/portfolio",
    live: "#",
  },
  {
    title: "PL_3d",
    description:
      "PL_3D uno strumento Python per trasformare i file SVG dei plantari in modelli 3D pronti per stampa o CAD",
    tags: ["Python", "CADQuery"],
    github: "https://github.com/Marcotommz/PL_3D",
  },
  {
    title: "MEMORANDUM",
    description:
      "MEMORANDUM è una piattaforma web/mobile per gestione appunti e studio, con backend PHP e PostgreSQL, microservizi AI in FastAPI",
    tags: ["PHP", "PostgreSQL", "Python", "FastAPI"],
    github: "https://github.com/Marcotommz/MEMORANDUM",
  },
];
