"use client";

import { useEffect, useState } from "react";
import { links, site } from "@/lib/config";
import { GitHubIcon, InstagramIcon } from "@/components/icons";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Progetti", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white sm:text-base"
        >
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
