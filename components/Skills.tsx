import { skills } from "@/lib/skills";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-page px-6 py-16 sm:px-8">
      <SectionHeading
        title="Stack"
        meta={`${String(skills.length).padStart(2, "0")} / skills`}
      />

      <Reveal>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 text-[13px] text-ink-200 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
