"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skills";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Competenze"
        title="Tech stack"
        description="Le tecnologie e gli strumenti con cui lavoro."
      />

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:border-accent/40 hover:text-white"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
