import { projects } from "@/lib/projects";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-page px-6 py-16 sm:px-8">
      <SectionHeading
        title="Selected work"
        meta={`${String(projects.length).padStart(2, "0")} / projects`}
      />

      <div className="flex flex-col gap-2">
        {projects.map((project, i) => {
          const href = project.github ?? project.live;
          return (
            <Reveal key={project.title} delay={i * 0.06}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <div className="mb-2.5 flex items-start justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-ink-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-medium tracking-[-0.01em] text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-ink-500 transition-colors group-hover:text-ink">
                    ↗
                  </span>
                </div>

                <p className="mb-3.5 max-w-[600px] text-sm leading-[1.55] text-ink-400 [text-wrap:pretty]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-accent/[0.08] px-2 py-[3px] font-mono text-[11px] text-accent-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
