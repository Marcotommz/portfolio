import { site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-6 text-xs text-ink-600 sm:px-8">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="font-mono">v2.0</span>
      </div>
    </footer>
  );
}
