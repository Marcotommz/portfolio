"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/experience";
import { ExternalIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow="Carriera"
        title="Esperienza"
        description="Le aziende e i team con cui ho collaborato."
      />

      <div className="relative space-y-8 before:absolute before:left-2 before:top-2 before:h-full before:w-px before:bg-white/10 sm:before:left-[7px]">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${i}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            className="relative pl-10"
          >
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-slate-950" />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-white/[0.07]">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-soft"
                    >
                      {exp.company}
                      <ExternalIcon className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <span className="text-sm text-white/50">{exp.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent-soft">
                {exp.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
