"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Bot, FlaskConical, Github, Layers3, Map, Network, Sparkles } from "lucide-react";
import { aiEvolution } from "@/data/portfolio";

const directoryItems = [
  {
    title: "Research Projects",
    body: "Direction-based project modules",
    href: "#research-projects",
    icon: Layers3,
  },
  {
    title: "Project Index",
    body: "Repository pages and demos",
    href: "/projects",
    icon: BookOpen,
  },
  {
    title: "Research Map",
    body: "Concept graph and method routes",
    href: "/research-map",
    icon: Map,
  },
  {
    title: "Agent Hub",
    body: "LLM agents, RAG, GraphRAG",
    href: "/agent-hub",
    icon: Bot,
  },
  {
    title: "Publications",
    body: "Paper notes and reading traces",
    href: "/papers",
    icon: FlaskConical,
  },
  {
    title: "Contact",
    body: "GitHub and collaboration links",
    href: "#contact",
    icon: Github,
  },
] as const;

export function ResearchHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/55">
      <div className="mx-auto grid min-h-[720px] max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.72fr)] lg:items-center lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border/50 bg-surface/40 px-4 text-sm font-medium text-accent shadow-material-sm backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            AI Research Laboratory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="mt-7 max-w-5xl text-[clamp(2.35rem,4.35vw,4.65rem)] font-semibold leading-[1.04] tracking-normal text-foreground"
          >
            <span className="block">Building Intelligent Systems from</span>
            <span className="block">
              <span className="gradient-text">Foundation Models</span> to Autonomous AI Agents
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            Exploring Machine Learning, Large Language Models, Agentic AI, Knowledge Intelligence, and AI for Science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#research-projects"
              className="material-button focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground"
            >
              Explore research projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/SuleynanAuir"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border/60 bg-surface/40 px-6 text-sm font-medium text-foreground shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.34, ease: "easeOut" }}
            className="material-card video-fused-panel mt-10 p-4 md:p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">AI Evolution</div>
                <div className="mt-1 text-sm text-muted-foreground">Algorithms to scientific agents</div>
              </div>
              <div className="hidden rounded-full border border-border/45 bg-accent-soft/58 px-3 py-1 text-xs font-medium text-accent sm:block">
                Research Path
              </div>
            </div>
            <EvolutionTimeline />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
          className="relative z-10"
        >
          <ContentDirectory />
        </motion.div>
      </div>
    </section>
  );
}

function EvolutionTimeline() {
  return (
    <div className="grid gap-2 md:grid-cols-6 md:gap-3">
      {aiEvolution.map((step, index) => (
        <div key={step} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46 + index * 0.06, duration: 0.38, ease: "easeOut" }}
            className="group flex min-h-14 items-center gap-2 rounded-2xl border border-border/55 bg-surface/38 px-3 py-2 shadow-material-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent hover:bg-surface/58"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent ring-1 ring-border/60">
              {index + 1}
            </div>
            <div className="whitespace-nowrap text-sm font-semibold leading-none text-foreground">{step}</div>
          </motion.div>
          {index < aiEvolution.length - 1 ? (
            <div className="flex justify-center py-1 text-accent/70 md:absolute md:-right-3 md:top-5 md:z-10 md:py-0">
              <ArrowDown className="h-4 w-4 md:-rotate-90" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function ContentDirectory() {
  return (
    <div className="material-card video-fused-panel knowledge-panel overflow-hidden p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent ring-1 ring-border/60">
            <Network className="h-3.5 w-3.5" />
            Content Directory
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-normal text-foreground">Navigate the research lab</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            A compact table of contents for projects, methods, agent systems, publications, and collaboration entry points.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {directoryItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.34 + index * 0.055, duration: 0.38, ease: "easeOut" }}
          >
            <Link
              href={item.href}
              className="focus-ring group/item flex min-h-[104px] items-start gap-3 rounded-3xl border border-border/45 bg-surface/36 p-4 shadow-material-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-surface/52"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent ring-1 ring-border/60">
                <item.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold leading-5 text-foreground">{item.title}</span>
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent opacity-70 transition group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                </span>
                <span className="mt-2 block text-xs leading-5 text-muted-foreground">{item.body}</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="graph-report-panel mt-4 rounded-3xl p-4">
        <div className="text-sm font-semibold text-foreground">Current focus</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {["LLM Agents", "GraphRAG", "AI for Science", "Model Alignment"].map((item) => (
            <span key={item} className="rounded-full border border-border/55 bg-surface/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
