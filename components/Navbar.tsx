import { site } from "@/lib/config";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-base/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-[18px] sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent shadow-dot" />
          <span className="text-sm font-medium tracking-[-0.01em] text-ink">
            {site.name}
          </span>
        </a>

        <nav className="flex items-center gap-7 text-[13px] text-ink-400">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
