import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/content/projects";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-surface">
      {projects.map((project) => (
        <article key={project.slug} className="grid gap-6 p-6 transition hover:bg-muted/50 md:grid-cols-[0.32fr_1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{project.category}</div>
            <h3 className="mt-3 text-xl font-semibold tracking-normal">{project.title}</h3>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{project.summary}</p>
          <div className="flex items-center gap-2">
            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:border-accent hover:text-foreground"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="h-4 w-4" />
              </Link>
            ) : null}
            <Link
              href="/projects"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:border-accent hover:text-foreground"
              aria-label="Open project explorer"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
