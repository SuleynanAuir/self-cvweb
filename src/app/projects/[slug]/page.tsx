import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getAllProjects, getProjectBySlug } from "@/lib/content/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = parseProjectSections(project.body);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <Link
        href="/projects"
        className="focus-ring inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-medium text-muted-foreground shadow-material-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Projects
      </Link>

      <section className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] lg:items-start">
        <ScrollReveal className="material-card p-7" variant="scale">
          <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {project.category}
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-balance md:text-5xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="material-button focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            ) : null}
            <Link
              href="/research-map"
              className="focus-ring inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-medium text-foreground shadow-material-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
              Research Map
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal as="aside" className="material-card p-5" delay={0.1} variant="scale">
          <div className="grid gap-5">
            <ProjectFact label="Year" value={String(project.year)} />
            <ProjectFact label="Status" value={project.status} />
            <ProjectFact label="Focus" value={project.focus} />
            <ProjectFact label="Difficulty" value={project.difficulty} />
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(280px,0.32fr)] lg:items-start">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <ScrollReveal as="section" key={section.title} className="material-card p-7" delay={index * 0.06}>
              <h2 className="text-xl font-semibold tracking-normal">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="material-card space-y-7 p-6" delay={0.12}>
          <ProjectList title="Tags" items={project.tags} />
          <ProjectList title="Stack" items={project.stack} />
          <ProjectList title="Related Papers" items={project.papers} />
        </ScrollReveal>
      </section>
    </div>
  );
}

function ProjectFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-muted/70 p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-border bg-surface px-2.5 py-1.5 text-xs text-muted-foreground shadow-sm">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function parseProjectSections(body: string) {
  const sections: Array<{ title: string; paragraphs: string[] }> = [];
  let currentSection: { title: string; paragraphs: string[] } | undefined;

  for (const block of body.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean)) {
    if (block.startsWith("## ")) {
      currentSection = { title: block.replace(/^##\s+/, ""), paragraphs: [] };
      sections.push(currentSection);
      continue;
    }

    if (!currentSection) {
      currentSection = { title: "Summary", paragraphs: [] };
      sections.push(currentSection);
    }

    currentSection.paragraphs.push(block);
  }

  return sections;
}
