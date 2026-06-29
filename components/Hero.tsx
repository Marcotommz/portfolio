import { site, stats } from "@/lib/config";
import Reveal, { DrawLine } from "@/components/Reveal";
import RichText from "@/components/RichText";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative box-border flex min-h-screen flex-col justify-center px-[7vw]"
    >
      {/* Left accent rail */}
      <DrawLine
        className="absolute bottom-0 left-[7vw] top-0 w-0.5 bg-accent"
        style={{ boxShadow: "0 0 14px var(--glow)" }}
      />

      <div className="box-border flex w-full flex-wrap items-end justify-between gap-12 pl-12">
        <div className="max-w-[640px]">
          <Reveal>
            <div
              className="font-light tracking-wide text-[#f4f4f4]"
              style={{ fontSize: "clamp(22px,3vw,34px)" }}
            >
              {site.greeting}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="my-1.5 mb-6 font-display leading-none tracking-wide text-accent"
              style={{
                fontSize: "clamp(52px,9vw,118px)",
                textShadow: "0 0 26px var(--glow)",
              }}
            >
              {site.firstName.toUpperCase()}
              <span
                className="ml-1.5 inline-block w-1.5 animate-blink bg-accent align-[-6%]"
                style={{ height: "0.78em", boxShadow: "0 0 12px var(--glow)" }}
              />
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="max-w-[560px] leading-[1.75] text-[#c4c4c4]"
              style={{ fontSize: "clamp(15px,1.5vw,18px)" }}
            >
              <RichText text={site.intro} />
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="#contact"
              className="mt-7 inline-block rounded-[3px] bg-accent px-8 py-3.5 text-sm font-bold tracking-[2px] text-[#001018] outline-1 outline-accent transition-all duration-200 hover:bg-transparent hover:text-accent hover:outline"
              style={{ boxShadow: "0 0 18px var(--glow)" }}
            >
              CONTATTAMI
            </a>
          </Reveal>
        </div>

        <Reveal
          dir="right"
          delay={0.25}
          className="flex flex-col gap-8 pb-10 text-right"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-grotesk font-bold leading-none text-accent"
                style={{
                  fontSize: "clamp(34px,4vw,58px)",
                  textShadow: "0 0 18px var(--glow)",
                }}
              >
                {s.value}
              </div>
              <div className="mt-1 text-sm text-[#9a9a9a]">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2">
        <div className="animate-arrow text-[22px] text-accent">↓</div>
        <div className="text-[11px] tracking-[4px] text-[#7d7d7d]">SCORRI</div>
      </div>
    </section>
  );
}
