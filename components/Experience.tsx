import { experiences } from "@/lib/experience";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="cv" className="mx-auto max-w-page px-6 py-16 sm:px-8">
      <SectionHeading
        title="Experience"
        meta={`${String(experiences.length).padStart(2, "0")} / role`}
      />

      <div className="flex flex-col gap-2">
        {experiences.map((exp, i) => {
          const Wrapper = exp.url ? "a" : "div";
          return (
            <Reveal key={`${exp.company}-${i}`} delay={i * 0.06}>
              <Wrapper
                {...(exp.url
                  ? {
                      href: exp.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="block rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="mb-1 text-base font-medium tracking-[-0.01em] text-ink">
                      {exp.company}
                    </h3>
                    <p className="text-[13px] text-ink-400">{exp.role}</p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[11px] text-ink-500">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-3.5 max-w-[600px] text-sm leading-[1.55] text-ink-400 [text-wrap:pretty]">
                  {exp.description}
                </p>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
