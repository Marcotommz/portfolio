type Props = {
  title: string;
  meta: string;
};

/** Minimal section header: muted label on the left, mono counter on the right. */
export default function SectionHeading({ title, meta }: Props) {
  return (
    <div className="mb-8 flex items-baseline justify-between">
      <h2 className="text-[13px] font-medium tracking-[0.02em] text-ink-400">
        {title}
      </h2>
      <span className="font-mono text-[11px] text-ink-600">{meta}</span>
    </div>
  );
}
