import { techGroups, techIcon } from "@/lib/skills";
import Reveal, { DrawLine } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="stack" className="relative box-border px-[7vw] py-[120px]">
      <Reveal className="mb-16">
        <SectionHeading>TECNOLOGIE E COMPETENZE</SectionHeading>
      </Reveal>

      <div className="relative">
        <DrawLine
          duration={1.6}
          className="absolute bottom-0 left-[34px] top-0 w-0.5 bg-accent"
          style={{ boxShadow: "0 0 14px var(--glow)" }}
        />

        {techGroups.map((group, gi) => (
          <div
            key={group.label}
            className="my-12 flex flex-wrap items-center gap-0"
          >
            <DrawLine
              axis="x"
              duration={0.8}
              className="ml-[34px] h-0.5 w-16 bg-accent"
              style={{ boxShadow: "0 0 12px var(--glow)" }}
            />
            <div
              className="mx-[34px] whitespace-nowrap font-grotesk font-bold tracking-[3px] text-[#dcdcdc]"
              style={{ fontSize: "clamp(20px,2.4vw,30px)" }}
            >
              {group.label}
            </div>

            <Reveal
              delay={0.1 + gi * 0.05}
              className="flex flex-wrap gap-3.5 rounded-[10px] p-4 px-5"
              style={{
                border: "1px solid var(--soft)",
                boxShadow: "0 0 22px var(--faint)",
              }}
            >
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="flex h-[58px] w-[58px] items-center justify-center rounded-[9px] bg-[#0c0c0c]"
                  style={{ border: "1px solid var(--faint)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={techIcon(tech.icon)}
                    alt={tech.name}
                    loading="lazy"
                    className="h-[34px] w-[34px] object-contain"
                    style={
                      tech.invert
                        ? { filter: "invert(1) brightness(1.4)" }
                        : undefined
                    }
                  />
                </div>
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
