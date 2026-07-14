import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Sparkles,
} from "lucide-react";
import { ResearchHero } from "@/components/research-hero";
import { ResearchProjectModules } from "@/components/research-project-modules";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";

const researchVision = [
  {
    title: "What I build",
    body: "Autonomous AI systems that connect foundation model adaptation, agent planning, retrieval, graph memory, evaluation, and scientific evidence synthesis.",
  },
  {
    title: "Research trajectory",
    body: "The work follows a progression from learning algorithms to LLM agents, multi-agent collaboration, knowledge intelligence, and AI systems for scientific discovery.",
  },
  {
    title: "System principle",
    body: "Models are treated as reasoning components inside larger research workflows that can search, verify, remember, act, and improve from feedback.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <ResearchHero />
      <ResearchVisionSection />

      <section id="research-projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research Portfolio"
            title="Featured systems as research contributions."
            description="Each system is presented through its research question, technical approach, key contribution, and implementation evidence rather than as a simple repository list."
          />
        </ScrollReveal>

        <ResearchProjectModules />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal className="material-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10" variant="scale">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-accent-soft/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
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
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-surface/25 px-5 text-sm font-medium text-foreground shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-accent"
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

function ResearchVisionSection() {
  return (
    <section id="research-vision" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research Vision"
            title="From algorithms to intelligent systems."
            description="The laboratory direction is to build AI systems that understand context, reason over evidence, act through tools, maintain memory, and continuously improve."
          />
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {researchVision.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className="material-card video-fused-panel min-h-[220px] p-5"
              delay={index * 0.06}
              variant="scale"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-surface/25 text-accent shadow-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-normal text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
