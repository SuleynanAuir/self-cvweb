"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Network } from "lucide-react";

const focus = ["LLM", "Agent", "RAG", "Multimodal AI", "Computer Vision"];

const nodes = [
  { label: "AI", x: 50, y: 42, size: "lg" },
  { label: "LLM", x: 28, y: 24, size: "md" },
  { label: "Agent", x: 70, y: 22, size: "md" },
  { label: "RAG", x: 76, y: 58, size: "sm" },
  { label: "CV", x: 30, y: 64, size: "sm" },
  { label: "RL", x: 52, y: 76, size: "sm" },
];

const edges = [
  ["AI", "LLM"],
  ["AI", "Agent"],
  ["AI", "RAG"],
  ["AI", "CV"],
  ["AI", "RL"],
  ["LLM", "Agent"],
  ["Agent", "RAG"],
  ["CV", "RAG"],
];

export function ResearchHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="research-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.7fr)] lg:items-center lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-surface/80 px-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground backdrop-blur"
          >
            <Network className="h-4 w-4 text-accent" />
            AI Research Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-8 max-w-4xl text-5xl font-semibold tracking-normal text-balance md:text-7xl"
          >
            AI Research <span className="gradient-text">Laboratory</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            Exploring intelligence from deep learning to autonomous agents through open source systems, paper reading, and reusable AI engineering knowledge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {focus.map((item) => (
              <span key={item} className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/projects"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90"
            >
              View research projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/SuleynanAuir"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface/80 px-6 text-sm font-medium text-foreground backdrop-blur transition hover:border-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
          className="relative z-10 min-h-[420px] rounded-lg border border-border bg-surface/70 p-4 shadow-soft backdrop-blur"
          aria-label="AI knowledge graph visualization"
        >
          <KnowledgeGraph />
        </motion.div>
      </div>
    </section>
  );
}

function KnowledgeGraph() {
  const nodeByLabel = new Map(nodes.map((node) => [node.label, node]));

  return (
    <div className="relative h-full min-h-[390px] overflow-hidden rounded-md bg-background">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="presentation">
        <defs>
          <linearGradient id="edgeGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.42" />
            <stop offset="100%" stopColor="hsl(var(--violet))" stopOpacity="0.38" />
          </linearGradient>
        </defs>
        {edges.map(([from, to]) => {
          const start = nodeByLabel.get(from);
          const end = nodeByLabel.get(to);

          if (!start || !end) {
            return null;
          }

          return (
            <line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="url(#edgeGradient)"
              strokeWidth="0.45"
              strokeDasharray="5 7"
              className="animate-edge-flow"
            />
          );
        })}
      </svg>
      {nodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 + index * 0.06, duration: 0.45 }}
            className={[
              "flex items-center justify-center rounded-full border border-border bg-surface text-center font-semibold shadow-soft",
              node.size === "lg" ? "h-24 w-24 text-lg" : node.size === "md" ? "h-20 w-20 text-base" : "h-14 w-14 text-sm",
            ].join(" ")}
          >
            {node.label}
          </motion.div>
        </div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 grid gap-2 rounded-md border border-border bg-surface/90 p-4 backdrop-blur">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Research Graph Seed</div>
        <div className="text-sm leading-6 text-muted-foreground">
          Projects, papers, concepts, and implementation notes will become clickable graph nodes in Phase 2.
        </div>
      </div>
    </div>
  );
}
