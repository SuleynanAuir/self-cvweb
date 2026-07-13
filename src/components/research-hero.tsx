"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
import { aiEvolution } from "@/data/portfolio";

const researchNavItems = [
  {
    number: "01",
    title: "Research Projects",
    body: "AI systems and experimental projects",
    href: "#research-projects",
    icon: Layers3,
    external: false,
  },
  {
    number: "02",
    title: "Agent Systems",
    body: "LLM Agents, Multi-Agent Collaboration, Deep Search",
    href: "/agent-hub",
    icon: Bot,
    external: false,
  },
  {
    number: "03",
    title: "Knowledge Intelligence",
    body: "RAG, GraphRAG, Knowledge Graph",
    href: "/research-map",
    icon: Network,
    external: false,
  },
  {
    number: "04",
    title: "AI for Science",
    body: "Scientific Discovery and Material Intelligence",
    href: "#research-projects",
    icon: FlaskConical,
    external: false,
  },
  {
    number: "05",
    title: "Publications",
    body: "Research notes and technical explorations",
    href: "/papers",
    icon: BookOpen,
    external: false,
  },
  {
    number: "06",
    title: "GitHub",
    body: "Open-source implementations",
    href: "https://github.com/SuleynanAuir",
    icon: Github,
    external: true,
  },
] as const;

const timelineIcons = [Cpu, Database, Layers3, Bot, UsersRound, FlaskConical] as const;

const researchMapNodes = [
  { id: "ai", label: "Artificial Intelligence", x: 50, y: 50, size: "large", tone: "border-accent/45 bg-surface/58 text-foreground" },
  { id: "foundation", label: "Foundation Models", x: 50, y: 18, size: "medium", tone: "border-amber/45 bg-amber/10 text-foreground" },
  { id: "agents", label: "Agents", x: 24, y: 50, size: "medium", tone: "border-green/45 bg-green/10 text-foreground" },
  { id: "rag", label: "RAG", x: 50, y: 68, size: "small", tone: "border-cyan/40 bg-cyan/10 text-foreground" },
  { id: "kg", label: "Knowledge Graph", x: 76, y: 50, size: "medium", tone: "border-violet/40 bg-violet/10 text-foreground" },
  { id: "science", label: "Scientific AI", x: 50, y: 88, size: "medium", tone: "border-amber/45 bg-accent-soft/55 text-foreground" },
] as const;

const researchMapEdges = [
  ["foundation", "ai"],
  ["ai", "agents"],
  ["ai", "kg"],
  ["agents", "rag"],
  ["rag", "kg"],
  ["rag", "science"],
] as const;

const particles = [
  { left: "13%", top: "28%", delay: 0 },
  { left: "30%", top: "76%", delay: 0.6 },
  { left: "68%", top: "23%", delay: 1.1 },
  { left: "84%", top: "66%", delay: 1.7 },
  { left: "47%", top: "34%", delay: 2.1 },
] as const;

export function ResearchHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/45 bg-background/12">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(380px,0.45fr)] lg:px-8 lg:pb-20 lg:pt-20">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-border/45 bg-surface/34 px-4 text-sm font-medium text-accent shadow-material-sm backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            Personal AI Research Institute
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="mt-8 max-w-5xl text-[clamp(2.55rem,4.65vw,4.85rem)] font-semibold leading-[1.12] tracking-normal text-foreground"
          >
            <span className="block">Building Intelligent Systems</span>
            <span className="block text-[0.9em]">
              from <span className="gradient-text">Foundation Models</span>
            </span>
            <span className="block text-[0.94em] text-foreground">
              to <span className="text-accent">Autonomous AI Agents</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            Exploring Machine Learning, Large Language Models, Agentic AI, Knowledge Intelligence, and AI for Science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.22, ease: "easeOut" }}
            className="mt-5 inline-flex max-w-full rounded-2xl border border-border/45 bg-surface/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-material-sm backdrop-blur-xl"
          >
            AI Systems Research | Foundation Models | Autonomous Agents
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.28, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#research-projects"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-accent/30 bg-[linear-gradient(135deg,hsl(var(--green)),hsl(var(--amber)))] px-6 text-sm font-medium text-white shadow-material-sm transition hover:-translate-y-0.5 hover:shadow-material-md"
            >
              Explore Research
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/SuleynanAuir"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border/55 bg-surface/34 px-6 text-sm font-medium text-foreground shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/55 hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
          className="relative z-10"
        >
          <ResearchNavigation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.66, delay: 0.36, ease: "easeOut" }}
          className="relative z-10 lg:col-span-2"
        >
          <EvolutionTimeline />
        </motion.div>
      </div>
    </section>
  );
}

function ResearchNavigation() {
  return (
    <div className="material-card video-fused-panel overflow-hidden rounded-[32px] p-5 md:p-6">
      <div className="flex items-start justify-between gap-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Research Navigation</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground">Research Laboratory</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Explore projects, methods, and research directions.
          </p>
        </div>
        <div className="hidden rounded-2xl border border-border/45 bg-surface/38 p-3 text-accent shadow-material-sm backdrop-blur-xl sm:block">
          <Network className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {researchNavItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.34 + index * 0.05, duration: 0.38, ease: "easeOut" }}
          >
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="focus-ring group/item flex min-h-[126px] flex-col justify-between rounded-[24px] border border-border/40 bg-surface/30 p-4 shadow-material-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-surface/50"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  <item.icon className="h-4 w-4" />
                  {item.number}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent/70 transition group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-accent" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-5 text-foreground">{item.title}</span>
                <span className="mt-2 block text-xs leading-5 text-muted-foreground">{item.body}</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EvolutionTimeline() {
  return (
    <div className="material-card video-fused-panel rounded-[32px] p-5 md:p-7">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Evolution of Intelligence</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-normal text-foreground md:text-3xl">Evolution of Intelligence</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">From algorithms to autonomous scientific agents</p>
        </div>
        <div className="inline-flex w-fit rounded-2xl border border-border/45 bg-surface/34 px-3 py-1.5 text-xs font-medium text-accent shadow-material-sm backdrop-blur-xl">
          Current focus: Agents + Scientific AI
        </div>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-[7%] right-[7%] top-[32px] hidden h-px overflow-hidden rounded-full bg-border/55 md:block">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--green)),hsl(var(--amber)),hsl(var(--green)))]"
          />
          <div className="analysis-line absolute inset-0" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {aiEvolution.map((stage, index) => {
            const Icon = timelineIcons[index] ?? Sparkles;
            const active = stage === "LLM Agents" || stage === "Scientific AI";

            return (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 + index * 0.07, duration: 0.42, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className={[
                    "group flex min-h-[104px] flex-col items-center justify-center rounded-[24px] border bg-surface/34 px-3 py-4 text-center shadow-material-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1",
                    active
                      ? "border-accent/55 bg-accent-soft/48 text-accent shadow-material-md"
                      : "border-border/45 text-muted-foreground hover:border-accent/35 hover:bg-surface/50",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "grid h-12 w-12 place-items-center rounded-2xl border bg-surface/54 shadow-material-sm",
                      active ? "border-accent/40 text-accent animate-node-pulse" : "border-border/45 text-muted-foreground",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 whitespace-nowrap text-[0.72rem] font-semibold leading-none tracking-normal text-foreground xl:text-xs">
                    {stage}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ResearchMapSection() {
  return (
    <section className="border-b border-border/45 bg-surface/14 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.36fr_0.64fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex rounded-2xl border border-border/35 bg-accent-soft/58 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-xl">
            Research Map
          </div>
          <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-5xl">
            A connected map of intelligent systems research.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            The portfolio is organized around a single research trajectory: models become agents, agents use retrieval and graphs, and scientific AI turns evidence into reusable knowledge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
          className="material-card video-fused-panel relative min-h-[500px] overflow-hidden rounded-[36px] p-4 md:p-6"
        >
          <div className="graph-stage relative h-[450px] overflow-hidden rounded-[30px] border">
            {particles.map((particle) => (
              <motion.span
                key={`${particle.left}-${particle.top}`}
                className="absolute z-10 h-1.5 w-1.5 rounded-full bg-accent/55 shadow-[0_0_18px_hsl(var(--lume-gold)/0.55)]"
                style={{ left: particle.left, top: particle.top }}
                animate={{ opacity: [0.25, 0.85, 0.25], y: [0, -10, 0], scale: [1, 1.35, 1] }}
                transition={{ duration: 4.8, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="presentation">
              <defs>
                <linearGradient id="researchMapGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--green))" stopOpacity="0.36" />
                  <stop offset="52%" stopColor="hsl(var(--amber))" stopOpacity="0.48" />
                  <stop offset="100%" stopColor="hsl(var(--green))" stopOpacity="0.34" />
                </linearGradient>
              </defs>
              {researchMapEdges.map(([from, to], index) => {
                const start = researchMapNodes.find((node) => node.id === from);
                const end = researchMapNodes.find((node) => node.id === to);

                if (!start || !end) {
                  return null;
                }

                return (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke="url(#researchMapGradient)"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    strokeDasharray="5 7"
                    initial={{ opacity: 0, pathLength: 0 }}
                    whileInView={{ opacity: 1, pathLength: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.22 + index * 0.08, duration: 0.72, ease: "easeOut" }}
                    className="animate-edge-flow"
                  />
                );
              })}
            </svg>

            {researchMapNodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                animate={{ y: node.id === "ai" ? [0, -5, 0] : [0, -3, 0] }}
                transition={{
                  opacity: { delay: 0.18 + index * 0.08, duration: 0.36 },
                  scale: { delay: 0.18 + index * 0.08, duration: 0.36 },
                  y: { duration: node.id === "ai" ? 5.4 : 6.4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute z-20"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div
                  className={[
                    "luminous-node grid place-items-center rounded-[28px] border px-4 text-center shadow-material-md backdrop-blur-xl",
                    node.size === "large" ? "min-h-24 w-44" : node.size === "medium" ? "min-h-20 w-36" : "min-h-16 w-28",
                    node.tone,
                  ].join(" ")}
                >
                  <div className="text-xs font-semibold leading-4">{node.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
