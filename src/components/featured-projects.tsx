import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/content/projects";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="mt-10 grid gap-4">
      {projects.map((project, index) => (
        <article
          key={project.slug}
          className="material-card interactive-lift grid animate-fade-up gap-6 p-6 md:grid-cols-[0.32fr_1fr_auto] md:items-center"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div>
            <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {project.category}
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-normal">{project.title}</h3>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{project.summary}</p>
          <div className="flex items-center gap-2">
            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-material-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="h-4 w-4" />
              </Link>
            ) : null}
            <Link
              href={`/projects/${project.slug}`}
              className="material-button focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground"
              aria-label={`View ${project.title} project page`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
