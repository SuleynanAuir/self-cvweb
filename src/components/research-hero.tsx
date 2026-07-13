"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Atom, CheckCircle2, Database, FileText, Github, Search, Sparkles, type LucideIcon } from "lucide-react";

const promptChips = ["Bandgap prediction", "Synthesis route", "Polymer electrolyte", "Microstructure QA"];

const reasoningSteps = [
  { label: "Literature retrieval", detail: "128 papers indexed", progress: 86, color: "bg-accent" },
  { label: "Graph construction", detail: "42 entities linked", progress: 72, color: "bg-cyan" },
  { label: "Scientific reasoning", detail: "6 hypotheses ranked", progress: 64, color: "bg-green" },
  { label: "Report synthesis", detail: "Evidence trace ready", progress: 58, color: "bg-amber" },
];

const graphNodes = [
  { label: "Question", meta: "QA", x: 50, y: 18, size: "lg", color: "border-accent bg-accent-soft text-accent" },
  { label: "Li-ion", meta: "Material", x: 22, y: 36, size: "md", color: "border-cyan/40 bg-cyan/10 text-cyan" },
  { label: "Paper", meta: "Corpus", x: 76, y: 36, size: "md", color: "border-violet/40 bg-violet/10 text-violet" },
  { label: "Bandgap", meta: "Property", x: 36, y: 66, size: "sm", color: "border-green/40 bg-green/10 text-green" },
  { label: "Synthesis", meta: "Route", x: 66, y: 68, size: "sm", color: "border-amber/50 bg-amber/10 text-amber" },
];

const graphEdges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [4, 1],
];

export function ResearchHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="mx-auto grid min-h-[680px] max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,0.75fr)] lg:items-center lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border/50 bg-surface/38 px-4 text-sm font-medium text-muted-foreground shadow-material-sm backdrop-blur-2xl"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            Materials GraphRAG Agent
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.08, ease: "easeOut" }}
            className="mt-7 max-w-4xl text-5xl font-semibold tracking-normal text-balance md:text-7xl"
          >
            Scientific AI assistant for <span className="gradient-text">materials reasoning</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            A light GraphRAG QA workspace for literature retrieval, material knowledge graphs, hypothesis ranking, and evidence-backed research reports.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.24, ease: "easeOut" }}
            className="material-card mt-8 p-4"
          >
            <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-border/45 bg-surface/30 px-4 shadow-inner backdrop-blur-2xl">
              <Search className="h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0 flex-1 text-sm text-foreground">
                Find solid-state electrolyte candidates with high ionic conductivity and stable synthesis routes
              </div>
              <button
                type="button"
                className="material-button focus-ring hidden h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground sm:inline-flex"
              >
                Analyze
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {promptChips.map((chip) => (
                <span key={chip} className="rounded-full border border-border/45 bg-surface/36 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-xl">
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {reasoningSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.36 + index * 0.08, duration: 0.42 }}
                  className="grid gap-2"
                >
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 font-medium text-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent animate-soft-pulse" />
                      {step.label}
                    </div>
                    <span className="text-muted-foreground">{step.detail}</span>
                  </div>
                  <div className="analysis-line h-2 overflow-hidden rounded-full bg-muted">
                    <div className={`h-full rounded-full ${step.color}`} style={{ width: `${step.progress}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.34, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/projects"
              className="material-button focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground"
            >
              Explore research projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/SuleynanAuir"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border/45 bg-surface/34 px-6 text-sm font-medium text-foreground shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <KnowledgeGraph />
        </motion.div>
      </div>
    </section>
  );
}

function KnowledgeGraph() {
  return (
    <div className="material-card overflow-hidden p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Live Knowledge Graph</div>
          <div className="mt-2 text-xl font-semibold tracking-normal">GraphRAG evidence trace</div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-accent animate-soft-pulse" />
          Building
        </div>
      </div>

      <div className="graph-stage relative mt-5 h-[390px] overflow-hidden rounded-3xl border border-border/42">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="presentation">
          <defs>
            <linearGradient id="materialEdgeGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.58" />
              <stop offset="55%" stopColor="hsl(var(--amber))" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(var(--green))" stopOpacity="0.44" />
            </linearGradient>
          </defs>
          {graphEdges.map(([from, to], index) => {
            const start = graphNodes[from];
            const end = graphNodes[to];

            return (
              <motion.line
                key={`${from}-${to}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#materialEdgeGradient)"
                strokeWidth="0.55"
                strokeLinecap="round"
                strokeDasharray="5 6"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: 0.42 + index * 0.08, duration: 0.7, ease: "easeOut" }}
                className="animate-edge-flow"
              />
            );
          })}
        </svg>

        {graphNodes.map((node, index) => (
          <div
            key={node.label}
            className="absolute"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.26 + index * 0.1, duration: 0.42, ease: "easeOut" }}
            >
              <div
                className={[
                  "luminous-node grid place-items-center rounded-full border bg-surface text-center shadow-material-md",
                  node.size === "lg" ? "h-28 w-28" : node.size === "md" ? "h-24 w-24" : "h-20 w-20",
                  node.color,
                  index === 0 ? "animate-node-pulse" : "",
                ].join(" ")}
              >
                <div>
                  <div className="text-sm font-semibold">{node.label}</div>
                  <div className="mt-1 text-[11px] font-medium opacity-75">{node.meta}</div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}

        <div className="absolute bottom-4 left-4 right-4 grid gap-3 rounded-3xl border border-border/45 bg-surface/44 p-4 shadow-material-sm backdrop-blur-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <CheckCircle2 className="h-4 w-4 text-green" />
            Candidate report module
          </div>
          <div className="grid gap-2 text-xs text-muted-foreground">
            <ReportRow icon={Database} text="Evidence clusters resolved from graph neighborhoods" />
            <ReportRow icon={Atom} text="Material-property relationships scored by confidence" />
            <ReportRow icon={FileText} text="Answer draft linked to citations and project notes" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportRow({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 text-accent" />
      <span>{text}</span>
    </div>
  );
}
