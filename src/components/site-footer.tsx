import Link from "next/link";
import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface/20 backdrop-blur-xl">
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
          <Link href="/asrl_agent_ml_dl_cv_nlp#contact" className="transition hover:text-accent">
            Contact
          </Link>
          <Link
            href="https://github.com/SuleynanAuir"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/25 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
