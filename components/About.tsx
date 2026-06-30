import Image from "next/image";
import { about, site } from "@/lib/config";
import Reveal, { DrawLine } from "@/components/Reveal";
import RichText from "@/components/RichText";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section className="relative box-border px-[7vw] py-[120px]">
      <DrawLine
        className="absolute bottom-0 left-[7vw] top-0 w-0.5 bg-accent"
        style={{ boxShadow: "0 0 14px var(--glow)" }}
      />

      <div className="box-border flex flex-wrap items-center justify-center gap-[clamp(40px,7vw,120px)] pl-12">
        {/* Photo with offset frame */}
        <Reveal dir="left" className="relative flex-none">
          <div
            className="absolute -bottom-5 -right-5 h-full w-full rounded-[18px]"
            style={{
              border: "1px solid var(--soft)",
              boxShadow: "0 0 22px var(--faint)",
            }}
          />
          <div
            className="relative overflow-hidden rounded-[18px]"
            style={{
              width: "clamp(260px,28vw,380px)",
              height: "clamp(300px,32vw,430px)",
              border: "1px solid var(--soft)",
              background: "linear-gradient(160deg,#11161f,#0a0d12)",
            }}
          >
            <Image
              src={site.avatar}
              alt={site.name}
              fill
              sizes="(max-width: 768px) 80vw, 380px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal dir="right" delay={0.12} className="max-w-[560px]">
          <div className="mb-7">
            <SectionHeading size="clamp(28px,4vw,52px)">CHI SONO</SectionHeading>
          </div>
          {about.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 text-[16px] leading-[1.8] text-ink last:mb-0"
            >
              <RichText text={paragraph} />
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
