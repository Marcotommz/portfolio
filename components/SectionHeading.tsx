import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Clamp size override for the heading text. */
  size?: string;
};

/** Bordered, glowing Monoton heading used to title each section. */
export default function SectionHeading({
  children,
  size = "clamp(24px,4vw,50px)",
}: Props) {
  return (
    <div
      className="inline-block px-6 py-2.5"
      style={{
        border: "1px solid var(--soft)",
        boxShadow: "0 0 18px var(--faint), inset 0 0 18px var(--faint)",
      }}
    >
      <h2
        className="m-0 font-display leading-none tracking-wider text-accent"
        style={{ fontSize: size, textShadow: "0 0 18px var(--glow)" }}
      >
        {children}
      </h2>
    </div>
  );
}
