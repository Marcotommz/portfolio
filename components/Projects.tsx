import { projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const PREVIEWS = [
  "linear-gradient(135deg,#cfe0ff,#a9c6f3)",
  "linear-gradient(135deg,#bfe9e3,#84c3c9)",
  "linear-gradient(135deg,#d8cdf5,#a99bdd)",
  "linear-gradient(135deg,#ffe0c2,#f2b98c)",
];

export default function Projects() {
  return (
    <section id="work" className="relative box-border px-[7vw] py-[120px]">
      <Reveal className="mb-12">
        <SectionHeading>PROGETTI</SectionHeading>
      </Reveal>

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            className="relative max-w-[920px] overflow-hidden rounded-xl"
            style={{
              border: "1px solid var(--soft)",
              boxShadow: "0 0 34px var(--faint)",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                height: "clamp(280px,38vw,400px)",
                background: PREVIEWS[i % PREVIEWS.length],
              }}
            >
              <div className="text-center text-[#3a4f7a] opacity-60">
                <div className="font-grotesk text-[46px] font-bold tracking-wide">
                  {project.title}
                </div>
                <div className="mt-1.5 text-[13px] tracking-[3px]">
                  ANTEPRIMA
                </div>
              </div>
            </div>

            <div
              className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 px-[30px] py-[26px]"
              style={{
                background: "linear-gradient(transparent, rgba(0,0,0,.92))",
              }}
            >
              <div className="min-w-[240px] flex-1">
                <h3 className="mb-2 font-grotesk text-[26px] font-bold text-white">
                  {project.title}
                </h3>
                <p className="m-0 max-w-[520px] text-sm leading-[1.6] text-[#cfcfcf]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded px-2 py-[3px] text-[11px] text-accent"
                      style={{ border: "1px solid var(--faint)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {project.live && (
                  <ProjectLink href={project.live}>Sito</ProjectLink>
                )}
                {project.github && (
                  <ProjectLink href={project.github}>Codice</ProjectLink>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md px-[18px] py-2.5 text-[13px] font-semibold tracking-wide text-accent transition-colors duration-200 hover:bg-accent hover:text-[#001018]"
      style={{ border: "1px solid var(--accent)" }}
    >
      {children}
    </a>
  );
}
