import Link from "next/link";
import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="font-semibold text-foreground">Materials AI Research Assistant</div>
          <div className="mt-1">GraphRAG QA, knowledge maps, project notes, and scientific reasoning workflows.</div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/projects" className="transition hover:text-accent">
            Projects
          </Link>
          <Link href="/research-map" className="transition hover:text-accent">
            Research Map
          </Link>
          <Link
            href="https://github.com/SuleynanAuir"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface shadow-material-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
