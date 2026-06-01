"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { links, site } from "@/lib/config";
import {
  ArrowDownIcon,
  GitHubIcon,
  InstagramIcon,
} from "@/components/icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-xl shadow-violet-900/30 ring-2 ring-accent/30 sm:h-36 sm:w-36">
            <Image
              src={site.avatar}
              alt={site.name}
              fill
              priority
              unoptimized
              sizes="144px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Disponibile per nuovi progetti
        </motion.p>

        <motion.h1
          variants={item}
          className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
        >
          Ciao, sono {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-lg font-medium text-accent-soft sm:text-xl"
        >
          {site.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {site.bio}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            Vedi i progetti
            <ArrowDownIcon className="h-4 w-4" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
