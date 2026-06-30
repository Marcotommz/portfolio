import { links, site } from "@/lib/config";
import Reveal, { DrawLine } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

const socials = [
  { href: links.github, label: "GitHub", Icon: GitHubIcon },
  { href: links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: links.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: links.email, label: "Email", Icon: MailIcon },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative box-border px-[7vw] pb-[60px] pt-[120px] text-center"
    >
      <DrawLine
        className="absolute left-[calc(50%-1px)] top-[-120px] h-[240px] w-0.5 bg-accent"
        style={{ boxShadow: "0 0 14px var(--glow)" }}
      />

      <Reveal className="mb-12 inline-block">
        <SectionHeading size="clamp(28px,4.4vw,56px)">CONTATTAMI</SectionHeading>
      </Reveal>

      <Reveal className="flex flex-wrap items-center justify-center gap-7">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex text-[#f0f0f0] transition-all duration-200 hover:-translate-y-1 hover:text-accent"
          >
            <Icon className="h-7 w-7" />
          </a>
        ))}
      </Reveal>

      <DrawLine
        duration={1}
        className="mx-auto mt-8 h-[150px] w-0.5 bg-accent"
        style={{ boxShadow: "0 0 12px var(--glow)" }}
      />

      <Reveal
        className="mx-auto w-[340px] max-w-[82%] px-5 pb-4 pt-[18px]"
        style={{
          borderLeft: "1px solid var(--soft)",
          borderRight: "1px solid var(--soft)",
          borderBottom: "1px solid var(--soft)",
          boxShadow: "0 0 18px var(--faint)",
        }}
      >
        <span className="text-[13px] text-[#9a9a9a]">
          Copyright © 2026{" "}
          <span className="font-display text-[13px] text-accent">
            {site.name}
          </span>
          . Tutti i diritti riservati.
        </span>
      </Reveal>
    </section>
  );
}
