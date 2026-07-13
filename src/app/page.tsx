import Link from "next/link";
import { ArrowUpRight, Github, Microscope, Network, Sparkles } from "lucide-react";
import { ResearchHero } from "@/components/research-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { researchCategories, technicalSkills } from "@/data/portfolio";

const labPrinciples = [
  {
    icon: Sparkles,
    title: "Foundation model engineering",
    body: "Adapt, evaluate, and align large models so they become reliable components in larger intelligent systems.",
  },
  {
    icon: Network,
    title: "Agentic system design",
    body: "Build agents that can plan, retrieve, call tools, coordinate with other agents, and improve through feedback.",
  },
  {
    icon: Microscope,
    title: "AI for scientific reasoning",
    body: "Connect knowledge graphs, RAG, and scientific workflows to make research answers traceable and useful.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <ResearchHero />

      <section className="border-b border-border/45 bg-surface/18 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-3 lg:px-8">
          {labPrinciples.map((item, index) => (
            <ScrollReveal as="article" key={item.title} className="material-card interactive-lift p-6" delay={index * 0.08}>
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent ring-1 ring-border/60">
                <item.icon className="h-5 w-5" strokeWidth={1.9} />
              </div>
              <h2 className="text-lg font-semibold tracking-normal text-foreground">{item.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{item.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="research-projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research Projects"
            title="Projects organized by research direction, not chronology."
            description="The portfolio maps a path from classical machine learning foundations to foundation models, autonomous agents, knowledge intelligence, multimodal systems, and AI for science."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5">
          {researchCategories.map((category, categoryIndex) => (
            <ScrollReveal
              as="section"
              key={category.title}
              className="material-card p-5 md:p-6"
              delay={categoryIndex * 0.035}
              amount={0.05}
            >
              <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr]">
                <div>
                  <div className="inline-flex rounded-full border border-border/35 bg-accent-soft/58 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-normal text-foreground">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {category.projects.map((project) => (
                    <article key={project.name} className="project-card rounded-3xl p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold tracking-normal text-foreground">{project.name}</h4>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                        </div>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface/42 text-muted-foreground shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                          aria-label={`${project.name} GitHub link`}
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.keywords.map((keyword) => (
                          <span key={keyword} className="rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                            {keyword}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl border border-border/40 bg-accent-soft/38 p-3">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                          Research impact
                        </div>
                        <p className="mt-2 text-xs leading-5 text-muted-foreground">{project.impact}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/45 bg-surface/20 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.72fr_0.28fr] lg:items-center lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-border/35 bg-accent-soft/58 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Research Philosophy
              </div>
              <blockquote className="mt-6 text-3xl font-semibold leading-tight tracking-normal text-balance text-foreground md:text-5xl">
                From algorithms to intelligent systems: building AI that can understand, reason, act, and continuously improve.
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                The research direction is system-first: foundation models are treated as building blocks for agents, knowledge engines, scientific QA systems, and autonomous research workflows.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="material-card p-5" delay={0.08} variant="scale">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Technical Skills</div>
            <div className="mt-5 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-border/65 bg-surface/42 px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal className="material-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10" variant="scale">
          <div>
            <div className="inline-flex rounded-full border border-border/35 bg-accent-soft/58 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Contact
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-foreground md:text-4xl">Research projects, publications, and collaboration notes.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              The portfolio is organized around open research systems. GitHub is the primary place to inspect repositories, project evolution, and implementation artifacts.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="https://github.com/SuleynanAuir"
              target="_blank"
              rel="noreferrer"
              className="material-button focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="/papers"
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border/65 bg-surface/42 px-5 text-sm font-medium text-foreground shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Publications
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
