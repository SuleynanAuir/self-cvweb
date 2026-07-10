"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Search } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

type ProjectExplorerProps = {
  projects: Project[];
};

const categories: Array<ProjectCategory | "All"> = [
  "All",
  "Agent Systems",
  "LLM Engineering",
  "Computer Vision",
  "Machine Learning",
  "Research Notes",
];

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchable = [
        project.title,
        project.summary,
        project.focus,
        project.category,
        ...project.tags,
        ...project.stack,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, projects, query]);

  return (
    <section className="mt-14">
      <div className="material-card flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "focus-ring h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition",
                activeCategory === category
                  ? "border-accent bg-accent text-accent-foreground shadow-material-sm"
                  : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="flex h-11 min-w-0 items-center gap-3 rounded-full border border-border bg-muted/60 px-4 lg:w-80">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search research, stack, tags"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      <div className="mt-8 grid gap-4">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.035, duration: 0.32, ease: "easeOut" }}
            className="material-card interactive-lift grid gap-6 p-6 lg:grid-cols-[0.28fr_1fr_0.26fr_auto] lg:items-start"
          >
            <div>
              <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {project.category}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal text-balance">{project.title}</h2>
              <div className="mt-3 text-sm text-muted-foreground">{project.year}</div>
            </div>

            <div>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">{project.summary}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <ProjectAttribute label="Focus" value={project.focus} />
                <ProjectAttribute label="Difficulty" value={project.difficulty} />
                <ProjectAttribute label="Status" value={project.status} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-muted px-2.5 py-1.5 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
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
                className="material-button focus-ring inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground"
                aria-label={`View ${project.title} project page`}
              >
                <ArrowUpRight className="h-4 w-4" />
                View project
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="material-card mt-8 p-8 text-sm text-muted-foreground">
          No projects match the current filters.
        </div>
      ) : null}
    </section>
  );
}

function ProjectAttribute({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-muted/65 p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm text-foreground">{value}</div>
    </div>
  );
}
