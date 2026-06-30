export type Tech = {
  name: string;
  /** Path under the devicon icons folder, e.g. "python/python-original.svg". */
  icon: string;
  /** Invert the icon for dark logos that would vanish on the dark chip. */
  invert?: boolean;
  /** Official site — opened in a new tab when the icon is clicked. */
  url?: string;
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
      { name: "Python", icon: "python/python-original.svg", url: "https://www.python.org" },
      { name: "C++", icon: "cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
      { name: "Java", icon: "java/java-original.svg", url: "https://www.java.com" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "typescript/typescript-original.svg", url: "https://www.typescriptlang.org" },
      { name: "PHP", icon: "php/php-original.svg", url: "https://www.php.net" },
    ],
  },
  {
    label: "FRAMEWORK",
    items: [
      { name: "Next.js", icon: "nextjs/nextjs-original.svg", invert: true, url: "https://nextjs.org" },
      { name: "Node.js", icon: "nodejs/nodejs-original.svg", url: "https://nodejs.org" },
      { name: "FastAPI", icon: "fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
      { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    ],
  },
  {
    label: "STRUMENTI",
    items: [
      { name: "Git", icon: "git/git-original.svg", url: "https://git-scm.com" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg", url: "https://www.postgresql.org" },
    ],
  },
];
