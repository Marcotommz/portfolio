import { links, site } from "@/lib/config";
import { GitHubIcon, InstagramIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
        </p>

        <div className="flex items-center gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={links.email}
            aria-label="Email"
            className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
