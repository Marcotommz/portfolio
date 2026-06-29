import { Fragment } from "react";

/**
 * Renders text where `*word*` segments are highlighted in the accent colour.
 * Example: "Sono *Marco*" → "Sono " + accented "Marco".
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className="font-semibold text-accent">
            {part.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
