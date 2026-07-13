import Link from "next/link";
import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-surface/26 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="font-semibold text-foreground">AI Research Laboratory Portfolio</div>
          <div className="mt-1">Foundation models, autonomous agents, knowledge intelligence, and AI for science.</div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/projects" className="transition hover:text-accent">
            Research Projects
          </Link>
          <Link href="/papers" className="transition hover:text-accent">
            Publications
          </Link>
          <Link href="/#contact" className="transition hover:text-accent">
            Contact
          </Link>
          <Link
            href="https://github.com/SuleynanAuir"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/45 bg-surface/36 shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
