import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { ResearchHero, ResearchMapSection } from "@/components/research-hero";
import { ResearchProjectModules } from "@/components/research-project-modules";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { technicalSkills } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <ResearchHero />
      <ResearchMapSection />

      <section id="research-projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research Projects"
            title="Projects organized by research direction, not chronology."
            description="The portfolio maps a path from classical machine learning foundations to foundation models, autonomous agents, knowledge intelligence, multimodal systems, and AI for science."
          />
        </ScrollReveal>

        <ResearchProjectModules />
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
