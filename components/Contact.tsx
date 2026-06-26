import { links, site } from "@/lib/config";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-page px-6 py-16 pb-24 sm:px-8">
      <Reveal>
        <div className="rounded-xl border border-white/[0.06] bg-gradient-to-b from-accent/[0.04] to-accent/[0.01] p-8">
          <h2 className="mb-3 text-[13px] font-medium tracking-[0.02em] text-ink-400">
            Contact
          </h2>
          <p className="mb-5 max-w-[520px] text-lg leading-[1.5] tracking-[-0.01em] text-ink [text-wrap:pretty]">
            Stai cercando uno sviluppatore? Scrivimi — rispondo entro 24 ore.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={links.email}
              className="rounded-lg bg-ink px-4 py-2.5 text-[13px] font-medium text-base transition-colors hover:bg-white"
            >
              {site.email}
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white/[0.07]"
            >
              GitHub
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white/[0.07]"
            >
              Instagram
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
