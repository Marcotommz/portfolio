import Image from "next/image";
import { Fragment } from "react";
import { links, site } from "@/lib/config";
import { ArrowUpRightIcon } from "@/components/icons";

const HIGHLIGHTS = ["Next.js", "Node.js", "C++", "Python"];

/** Renders the bio, emphasising the key tech terms in bright ink. */
function highlightBio(text: string) {
  const escaped = HIGHLIGHTS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return parts.map((part, i) =>
    HIGHLIGHTS.includes(part) ? (
      <span key={i} className="text-ink">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-page px-6 pb-20 pt-28 sm:px-8 sm:pt-32">
      <div className="mb-10 flex items-center gap-3.5">
        <div className="h-14 w-14 overflow-hidden rounded-full border border-white/[0.08] bg-surface">
          <Image
            src={site.avatar}
            alt={site.name}
            width={56}
            height={56}
            priority
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="text-[15px] font-medium tracking-[-0.01em] text-ink">
            {site.name}
          </div>
          <div className="mt-0.5 flex items-center gap-2 text-[13px] text-ink-500">
            <span className="h-1.5 w-1.5 rounded-full bg-online" />
            {site.availability}
          </div>
        </div>
      </div>

      <h1 className="max-w-[620px] text-[22px] font-normal leading-[1.55] tracking-[-0.01em] text-ink-200 [text-wrap:pretty]">
        {highlightBio(site.bio)}
      </h1>

      <div className="mt-10 flex flex-wrap gap-2">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-[13px] font-medium text-base transition-colors hover:bg-white"
        >
          View projects
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white/[0.07]"
        >
          GitHub
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-ink-500" />
        </a>
        <a
          href={links.email}
          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white/[0.07]"
        >
          Email
        </a>
      </div>
    </section>
  );
}
