import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Cpu,
  Database,
  FlaskConical,
  Github,
  Layers3,
  Network,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { ResearchHero, ResearchMapSection } from "@/components/research-hero";
import { ResearchProjectModules } from "@/components/research-project-modules";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { technicalSkills } from "@/data/portfolio";

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

const researchAreas = [
  {
    title: "Foundation Models",
    body: "Fine-tuning, alignment, domain adaptation, compact assistants, and model evaluation.",
    icon: Layers3,
  },
  {
    title: "LLM Agents",
    body: "Planning, tool use, memory, reflection, deep search, and autonomous task execution.",
    icon: Bot,
  },
  {
    title: "Multi-Agent Intelligence",
    body: "Collaborative reasoning, simulation, role specialization, and coordination protocols.",
    icon: UsersRound,
  },
  {
    title: "Knowledge Intelligence",
    body: "RAG, GraphRAG, knowledge graphs, evidence tracing, and graph-grounded QA.",
    icon: Network,
  },
  {
    title: "AI for Science",
    body: "Scientific QA, material intelligence, forecasting, uncertainty, and discovery workflows.",
    icon: FlaskConical,
  },
  {
    title: "ML Foundations",
    body: "Optimization, probabilistic reasoning, Bayesian fusion, and interpretable analytics.",
    icon: Cpu,
  },
  {
    title: "Multimodal Intelligence",
    body: "OCR, vision-language understanding, restoration, multimodal safety, and perception.",
    icon: Database,
  },
] as const;

const labMetrics = [
  { label: "Projects", value: "15+" },
  { label: "Research Topics", value: "8" },
  { label: "Open-source Systems", value: "10+" },
] as const;

const currentExploration = ["Agent self-improvement", "GraphRAG reasoning", "Scientific AI"];

const focusTimeline = [
  { time: "2025", title: "Foundation Models", body: "Fine-tuning, alignment, compact domain assistants" },
  { time: "2026", title: "Agent Systems", body: "Deep search, tool use, multi-agent orchestration" },
  { time: "Future", title: "Scientific Intelligence", body: "Evidence-grounded discovery and material knowledge systems" },
] as const;

export default function HomePage() {
  return (
    <>
      <ResearchHero />
      <ResearchVisionSection />
      <ResearchAreasSection />
      <ResearchMapSection />

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

      <LabNotebookSection />

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
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/45 bg-surface/38 text-accent shadow-material-sm backdrop-blur-xl">
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

function ResearchAreasSection() {
  return (
    <section className="border-y border-border/45 bg-surface/16 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research Areas"
            title="A connected research program for autonomous intelligence."
            description="The areas are organized as a technical stack: foundations and perception feed models; models become agents; agents use knowledge systems; scientific AI converts evidence into discovery."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <ScrollReveal
                key={area.title}
                as="article"
                className="project-card min-h-[190px] rounded-[28px] p-5"
                delay={index * 0.035}
                variant="scale"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/45 bg-surface/42 text-accent shadow-material-sm backdrop-blur-xl">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-normal text-foreground">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.body}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LabNotebookSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.43fr_0.57fr]">
        <ScrollReveal className="material-card video-fused-panel p-6 md:p-8" variant="scale">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-border/40 bg-surface/36 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <BookOpen className="h-4 w-4" />
            Current Exploration
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
            A living AI laboratory notebook.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            The portfolio is designed as a continuously evolving research surface, where systems, notes, and experiments converge into a long-term AI research program.
          </p>
          <div className="mt-7 grid gap-3">
            {currentExploration.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-border/45 bg-surface/34 px-4 py-3 text-sm font-medium text-foreground shadow-material-sm backdrop-blur-xl"
              >
                <span>{item}</span>
                <ArrowRight className="h-4 w-4 text-accent" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-4">
          <ScrollReveal className="grid gap-3 sm:grid-cols-3" delay={0.05}>
            {labMetrics.map((metric) => (
              <div key={metric.label} className="material-card p-5 text-center">
                <div className="text-3xl font-semibold tracking-normal text-foreground">{metric.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {metric.label}
                </div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="material-card p-5 md:p-6" delay={0.1} variant="scale">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Current Focus Timeline</div>
            <div className="mt-5 grid gap-3">
              {focusTimeline.map((item) => (
                <div
                  key={item.time}
                  className="grid gap-3 rounded-2xl border border-border/45 bg-surface/34 p-4 shadow-material-sm backdrop-blur-xl sm:grid-cols-[88px_1fr]"
                >
                  <div className="text-sm font-semibold text-accent">{item.time}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
