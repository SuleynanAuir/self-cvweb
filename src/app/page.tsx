import Link from "next/link";
import { ArrowRight, BrainCircuit, FileSearch, Layers3 } from "lucide-react";
import { FeaturedProjects } from "@/components/featured-projects";
import { ResearchHero } from "@/components/research-hero";
import { ResearchTimeline } from "@/components/research-timeline";
import { SectionHeading } from "@/components/section-heading";
import { focusAreas } from "@/data/research";
import { getAllProjects } from "@/lib/content/projects";

export default function HomePage() {
  const projects = getAllProjects();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <ResearchHero />

      <section className="bg-surface/14 backdrop-blur-[2px]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-3 lg:px-8">
          {[
            {
              icon: BrainCircuit,
              title: "Reasoning Agent",
              body: "Plans multi-step material analysis, checks evidence conflict, and keeps hypotheses traceable.",
            },
            {
              icon: FileSearch,
              title: "GraphRAG Retrieval",
              body: "Searches literature chunks, graph entities, figures, and project notes with source-aware ranking.",
            },
            {
              icon: Layers3,
              title: "Report Workspace",
              body: "Turns retrieved evidence into structured summaries, project pages, and reusable research artifacts.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="material-card interactive-lift animate-fade-up p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                <item.icon className="h-5 w-5" strokeWidth={1.9} />
              </div>
              <h2 className="text-lg font-semibold tracking-normal">{item.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Research Focus"
          title="Materials science intelligence, organized as usable agent modules."
          description="The platform frames literature, properties, experiments, visual evidence, and project notes as connected objects for scientific question answering."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              className="material-card interactive-lift min-h-48 animate-fade-up p-6"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <div className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{area.code}</div>
              <h3 className="mt-5 text-xl font-semibold tracking-normal">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ResearchTimeline />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Project System"
            title="Research projects as reusable knowledge artifacts."
            description="Each project is stored as Markdown metadata and opens into a concise project page with summary, focus, stack, and source links."
          />
          <Link
            href="/projects"
            className="material-button focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground"
          >
            Explore projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FeaturedProjects projects={featuredProjects} />
      </section>
    </>
  );
}
