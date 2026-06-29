import { experiences } from "@/lib/experience";
import Reveal, { DrawLine } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="cv" className="relative box-border px-[7vw] py-[120px]">
      <div className="mb-8 text-center">
        <Reveal className="inline-block">
          <SectionHeading size="clamp(28px,4.4vw,56px)">ESPERIENZE</SectionHeading>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-[1000px]">
        <DrawLine
          duration={1.8}
          className="absolute bottom-0 left-[calc(50%-1px)] top-0 w-0.5 bg-accent"
          style={{ boxShadow: "0 0 14px var(--glow)" }}
        />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          const mono = exp.company.trim().charAt(0).toUpperCase();
          const card = (
            <Reveal
              className="max-w-[380px] rounded-[5px] px-[22px] py-4 text-left"
              style={{
                border: "1px solid var(--soft)",
                boxShadow: "0 0 20px var(--faint)",
              }}
            >
              <div className="mb-2 font-grotesk font-bold tracking-[2px] text-[#7fb4e0]">
                {exp.company}
              </div>
              <div className="mb-1.5 text-[15px] font-medium text-[#dcdcdc]">
                {exp.role}
              </div>
              <div className="text-[15px] leading-[1.55] text-[#cdcdcd]">
                {exp.description}
              </div>
            </Reveal>
          );
          const period = (
            <Reveal className="font-grotesk text-[15px] font-semibold tracking-wide text-accent opacity-90">
              {exp.period}
            </Reveal>
          );

          return (
            <div
              key={`${exp.company}-${i}`}
              className="relative my-10 grid grid-cols-[1fr_120px_1fr] items-center gap-6"
            >
              <div className="flex justify-end">{isLeft ? card : period}</div>

              <div className="flex justify-center">
                <Reveal
                  dir="scale"
                  duration={0.6}
                  className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#0a0a0a] text-center font-grotesk text-sm font-bold leading-tight text-white"
                  style={{
                    border: "2px solid var(--accent)",
                    boxShadow: "0 0 22px var(--glow)",
                  }}
                >
                  {mono}
                </Reveal>
              </div>

              <div className="flex justify-start">{isLeft ? period : card}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
