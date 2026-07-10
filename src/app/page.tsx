import Link from "next/link";
import { ArrowRight, BrainCircuit, GitBranch, Layers3 } from "lucide-react";
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

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 py-0 md:grid-cols-3 lg:px-8">
          {[
            {
              icon: BrainCircuit,
              title: "Research Direction",
              body: "LLM agents, RAG systems, multimodal learning, computer vision, and AI engineering foundations.",
            },
            {
              icon: GitBranch,
              title: "Open Source Systems",
              body: "Agent simulators, deep search workflows, fine-tuning pipelines, CV projects, and ML implementations.",
            },
            {
              icon: Layers3,
              title: "Educational Platform",
              body: "A living map of concepts, papers, code paths, and learning outcomes for AI research growth.",
            },
          ].map((item) => (
            <div key={item.title} className="border-border py-8 md:border-l md:px-8 first:md:border-l-0">
              <item.icon className="mb-5 h-6 w-6 text-accent" strokeWidth={1.8} />
              <h2 className="text-lg font-semibold tracking-normal">{item.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Research Focus"
          title="A personal map from models to autonomous systems."
          description="The site organizes learning, research projects, implementation notes, and paper reading around the concepts that matter for practical AI research."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="min-h-48 rounded-lg border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{area.code}</div>
              <h3 className="mt-5 text-xl font-semibold tracking-normal">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
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
            className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90"
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
