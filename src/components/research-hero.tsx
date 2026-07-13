"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Network, Sparkles } from "lucide-react";
import { aiEvolution } from "@/data/portfolio";

const graphNodes = [
  { id: "Foundation Models", x: 50, y: 16, color: "text-blue-600", tone: "bg-blue-50 border-blue-200" },
  { id: "Agents", x: 24, y: 48, color: "text-emerald-600", tone: "bg-emerald-50 border-emerald-200" },
  { id: "RAG", x: 50, y: 48, color: "text-sky-600", tone: "bg-sky-50 border-sky-200" },
  { id: "Knowledge Graph", x: 76, y: 48, color: "text-violet-600", tone: "bg-violet-50 border-violet-200" },
  { id: "Scientific AI", x: 50, y: 82, color: "text-amber-600", tone: "bg-amber-50 border-amber-200" },
] as const;

const graphEdges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [2, 3],
  [1, 4],
  [2, 4],
  [3, 4],
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
            className="inline-flex h-10 items-center gap-2 rounded-full border border-blue-200/70 bg-white/72 px-4 text-sm font-medium text-blue-700 shadow-material-sm backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            AI Research Laboratory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="mt-7 max-w-5xl text-5xl font-semibold tracking-normal text-balance text-slate-950 md:text-7xl"
          >
            Building Intelligent Systems from <span className="gradient-text">Foundation Models</span> to Autonomous AI Agents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-600"
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
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border/60 bg-white/64 px-6 text-sm font-medium text-slate-800 shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
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
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">AI Evolution</div>
                <div className="mt-1 text-sm text-muted-foreground">From algorithms to autonomous scientific intelligence</div>
              </div>
              <div className="hidden rounded-full border border-blue-200/70 bg-blue-50/70 px-3 py-1 text-xs font-medium text-blue-700 sm:block">
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
          <ResearchNetwork />
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
            className="group min-h-20 rounded-2xl border border-border/55 bg-white/52 p-3 shadow-material-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white/78"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              {index + 1}
            </div>
            <div className="mt-3 text-sm font-semibold leading-5 text-slate-900">{step}</div>
          </motion.div>
          {index < aiEvolution.length - 1 ? (
            <div className="flex justify-center py-1 text-blue-400 md:absolute md:-right-3 md:top-9 md:z-10 md:py-0">
              <ArrowDown className="h-4 w-4 md:-rotate-90" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function ResearchNetwork() {
  return (
    <div className="material-card video-fused-panel knowledge-panel overflow-hidden p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 ring-1 ring-blue-100">
            <Network className="h-3.5 w-3.5" />
            Interactive System Map
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-normal text-slate-950">Connected research directions</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Foundation models become useful research systems when connected with agents, retrieval, graphs, and scientific feedback loops.
          </p>
        </div>
      </div>

      <div className="graph-stage relative mt-6 h-[430px] overflow-hidden rounded-[28px] border">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="presentation">
          <defs>
            <linearGradient id="portfolioEdgeGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.48" />
            </linearGradient>
          </defs>
          {graphEdges.map(([from, to], index) => {
            const start = graphNodes[from];
            const end = graphNodes[to];

            return (
              <motion.line
                key={`${start.id}-${end.id}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#portfolioEdgeGradient)"
                strokeWidth="0.62"
                strokeLinecap="round"
                strokeDasharray="6 7"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: 0.46 + index * 0.06, duration: 0.7, ease: "easeOut" }}
                className="animate-edge-flow"
              />
            );
          })}
        </svg>

        {graphNodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.32 + index * 0.08, duration: 0.42, ease: "easeOut" }}
            className="absolute"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div
              className={[
                "luminous-node grid min-h-20 w-28 place-items-center rounded-3xl border px-3 text-center shadow-material-md transition hover:-translate-y-1 hover:scale-[1.03]",
                node.tone,
                node.color,
                index === 0 ? "animate-node-pulse" : "",
              ].join(" ")}
            >
              <div className="text-xs font-semibold leading-4">{node.id}</div>
            </div>
          </motion.div>
        ))}

      </div>

      <div className="graph-report-panel mt-4 rounded-3xl p-4">
        <div className="text-sm font-semibold text-slate-950">Research system principle</div>
        <div className="mt-2 text-xs leading-5 text-slate-600">
          Intelligent systems should understand knowledge, reason over evidence, act with tools, and continuously improve through feedback.
        </div>
      </div>
    </div>
  );
}
