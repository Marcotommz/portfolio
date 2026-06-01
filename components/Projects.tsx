"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ExternalIcon, GitHubIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="I miei progetti"
        description="Una selezione delle cose che ho costruito. Ogni progetto è un'occasione per imparare qualcosa di nuovo."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-white/[0.07]"
          >
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-accent-soft"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Codice
                </a>
              ) : null}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <ExternalIcon className="h-4 w-4" />
                  Demo
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
