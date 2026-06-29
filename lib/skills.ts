export type Tech = {
  name: string;
  /** Path under the devicon icons folder, e.g. "python/python-original.svg". */
  icon: string;
  /** Invert the icon for dark logos that would vanish on the dark chip. */
  invert?: boolean;
};

export type TechGroup = {
  label: string;
  items: Tech[];
};

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
export const techIcon = (path: string) => CDN + path;

export const techGroups: TechGroup[] = [
  {
    label: "LINGUAGGI",
    items: [
      { name: "Python", icon: "python/python-original.svg" },
      { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "java/java-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "typescript/typescript-original.svg" },
      { name: "PHP", icon: "php/php-original.svg" },
    ],
  },
  {
    label: "FRAMEWORK",
    items: [
      { name: "Next.js", icon: "nextjs/nextjs-original.svg", invert: true },
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "FastAPI", icon: "fastapi/fastapi-original.svg" },
      { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    label: "STRUMENTI",
    items: [
      { name: "Git", icon: "git/git-original.svg" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
    ],
  },
];
