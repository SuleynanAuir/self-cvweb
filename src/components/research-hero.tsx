"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
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

const researchNavItems = [
  {
    id: "research",
    number: "01",
    title: "Research",
    body: "Explore research directions",
    href: "#research-vision",
    icon: Sparkles,
    external: false,
    x: 28,
    y: 23,
    size: "wide",
  },
  {
    id: "projects",
    number: "02",
    title: "Projects",
    body: "Open-source AI systems",
    href: "#research-projects",
    icon: Layers3,
    external: false,
    x: 72,
    y: 24,
    size: "medium",
  },
  {
    id: "agents",
    number: "03",
    title: "Agents",
    body: "LLM agents and autonomous systems",
    href: "/agent-hub",
    icon: Bot,
    external: false,
    x: 22,
    y: 57,
    size: "medium",
  },
  {
    id: "knowledge",
    number: "04",
    title: "Knowledge",
    body: "RAG and graph intelligence",
    href: "#research-projects",
    icon: Network,
    external: false,
    x: 84,
    y: 56,
    size: "wide",
  },
  {
    id: "science",
    number: "05",
    title: "Science",
    body: "AI for scientific discovery",
    href: "#research-projects",
    icon: FlaskConical,
    external: false,
    x: 36,
    y: 84,
    size: "medium",
  },
  {
    id: "publications",
    number: "06",
    title: "Publications",
    body: "Research notes and technical explorations",
    href: "/papers",
    icon: BookOpen,
    external: false,
    x: 64,
    y: 84,
    size: "wide",
  },
] as const;

const researchNavCore = { x: 50, y: 52 } as const;

type ResearchNavItemId = (typeof researchNavItems)[number]["id"];

type ResearchNavBody = {
  id: ResearchNavItemId;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  anchorX: number;
  anchorY: number;
  seed: number;
};

const initialResearchNavBodies: ResearchNavBody[] = [
  { id: "research", x: 28, y: 23, vx: 0.026, vy: 0.017, radius: 14.2, anchorX: 28, anchorY: 24, seed: 0.8 },
  { id: "projects", x: 72, y: 24, vx: -0.024, vy: 0.021, radius: 13.3, anchorX: 72, anchorY: 25, seed: 2.2 },
  { id: "agents", x: 19, y: 58, vx: 0.022, vy: -0.024, radius: 13.3, anchorX: 21, anchorY: 58, seed: 3.7 },
  { id: "knowledge", x: 84, y: 56, vx: -0.022, vy: -0.026, radius: 14.2, anchorX: 82, anchorY: 56, seed: 5.1 },
  { id: "science", x: 36, y: 84, vx: 0.025, vy: -0.014, radius: 13.3, anchorX: 36, anchorY: 81, seed: 6.4 },
  { id: "publications", x: 64, y: 84, vx: -0.026, vy: -0.017, radius: 14.2, anchorX: 64, anchorY: 81, seed: 8.0 },
];

const initialResearchNavBodyMap = new Map<ResearchNavItemId, ResearchNavBody>(
  initialResearchNavBodies.map((body) => [body.id, body]),
);

const researchNavRelations = [
  ["research", "projects"],
  ["research", "agents"],
  ["agents", "knowledge"],
  ["knowledge", "science"],
  ["science", "publications"],
  ["projects", "publications"],
] as const;

const timelineIcons = [Cpu, Database, Layers3, Bot, UsersRound, FlaskConical] as const;

const evolutionStages = [
  {
    title: "Machine Learning",
    description: "Statistical learning from data",
    keywords: ["Optimization", "Generalization"],
  },
  {
    title: "Deep Learning",
    description: "Neural representation at scale",
    keywords: ["Architectures", "Perception"],
  },
  {
    title: "Foundation Models",
    description: "Pretrained models with transfer",
    keywords: ["Pretraining", "Alignment"],
  },
  {
    title: "AI Agents",
    description: "Reasoning with tools and memory",
    keywords: ["Planning", "Tool use"],
  },
  {
    title: "Multi-Agent Systems",
    description: "Collaborative autonomous behavior",
    keywords: ["Coordination", "Reflection"],
  },
  {
    title: "Scientific AI",
    description: "Evidence-driven discovery loops",
    keywords: ["Hypothesis", "Discovery"],
  },
] as const;

export function ResearchHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-background/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-16 lg:min-h-[560px] lg:grid-cols-[minmax(0,0.58fr)_minmax(340px,0.42fr)] lg:items-stretch lg:px-8 lg:pb-20 lg:pt-20 xl:grid-cols-[minmax(0,0.6fr)_minmax(360px,0.4fr)]">
        <div className="relative z-10 flex flex-col lg:min-h-[420px] lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex h-10 items-center gap-2 rounded-2xl border border-white/10 bg-surface/25 px-4 text-sm font-medium text-accent shadow-sm backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            AI Systems Research Laboratory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="mt-8 max-w-none text-[1.7rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[2.65rem] md:text-[3.2rem] lg:text-[2.95rem] xl:text-[3.45rem]"
          >
            <span className="block whitespace-nowrap">
              From <span className="gradient-text">Foundation Models</span>
            </span>
            <span className="block whitespace-nowrap">
              to <span className="text-accent">Agentic AI</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            Exploring the evolution of artificial intelligence from learning algorithms to autonomous reasoning systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.22, ease: "easeOut" }}
            className="mt-5 flex max-w-full flex-wrap gap-2"
          >
            {["LLM Agents", "GraphRAG", "AI for Science"].map((tag) => (
              <span
                key={tag}
                className="rounded-2xl border border-white/10 bg-surface/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm backdrop-blur-xl"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.28, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#research-projects"
              className="material-button focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              Explore Research
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/SuleynanAuir"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-surface/25 px-6 text-sm font-medium text-foreground shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-accent"
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
          className="relative z-10 flex lg:min-h-[420px]"
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
  const reduceMotion = useReducedMotion();
  const [navBodies, setNavBodies] = useState<ResearchNavBody[]>(initialResearchNavBodies);
  const [hoveredId, setHoveredId] = useState<ResearchNavItemId | null>(null);
  const [activeId, setActiveId] = useState<ResearchNavItemId | null>(null);
  const navBodiesRef = useRef(navBodies);
  const hoveredIdRef = useRef<ResearchNavItemId | null>(null);

  useEffect(() => {
    navBodiesRef.current = navBodies;
  }, [navBodies]);

  useEffect(() => {
    hoveredIdRef.current = hoveredId;
  }, [hoveredId]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = Math.min((time - lastTime) / 16.67, 2.2);
      lastTime = time;
      const hoveredBodyId = hoveredIdRef.current;

      const next = navBodiesRef.current.map((body, index) => {
        const centerDx = researchNavCore.x - body.x;
        const centerDy = researchNavCore.y - body.y;
        const centerDistance = Math.max(Math.hypot(centerDx, centerDy), 0.001);
        const anchorDx = body.anchorX - body.x;
        const anchorDy = body.anchorY - body.y;
        const swirl = Math.sin(time * 0.00017 + body.seed) * 0.00018;
        const noiseX = Math.sin(time * 0.00071 + body.seed * 1.9) * 0.00024;
        const noiseY = Math.cos(time * 0.00063 + body.seed * 1.5) * 0.00024;

        return {
          ...body,
          vx:
            body.vx +
            (centerDx / centerDistance) * 0.00072 +
            anchorDx * 0.00015 +
            (-centerDy / centerDistance) * swirl +
            noiseX,
          vy:
            body.vy +
            (centerDy / centerDistance) * 0.00072 +
            anchorDy * 0.00015 +
            (centerDx / centerDistance) * swirl +
            noiseY,
        };
      });

      for (let i = 0; i < next.length; i += 1) {
        for (let j = i + 1; j < next.length; j += 1) {
          const first = next[i];
          const second = next[j];
          const dx = second.x - first.x;
          const dy = second.y - first.y;
          const distance = Math.max(Math.hypot(dx, dy), 0.001);
          const minDistance = first.radius + second.radius + 3.8;

          if (distance >= minDistance * 1.16) {
            continue;
          }

          const normalX = dx / distance;
          const normalY = dy / distance;
          const softness = Math.max((minDistance * 1.16 - distance) / minDistance, 0);
          const repulsion = softness * softness * 0.010;

          first.vx -= normalX * repulsion;
          first.vy -= normalY * repulsion;
          second.vx += normalX * repulsion;
          second.vy += normalY * repulsion;

          if (distance < minDistance) {
            const correction = (minDistance - distance) * 0.045;
            first.x -= normalX * correction;
            first.y -= normalY * correction;
            second.x += normalX * correction;
            second.y += normalY * correction;
          }
        }
      }

      const bounded = next.map((body) => {
        const coreDx = body.x - researchNavCore.x;
        const coreDy = body.y - researchNavCore.y;
        const coreDistance = Math.max(Math.hypot(coreDx, coreDy), 0.001);
        const coreMinDistance = body.radius + 16.6;
        let vx = body.vx;
        let vy = body.vy;

        if (coreDistance < coreMinDistance) {
          const pressure = ((coreMinDistance - coreDistance) / coreMinDistance) ** 2 * 0.014;
          vx += (coreDx / coreDistance) * pressure;
          vy += (coreDy / coreDistance) * pressure;
        }

        const edgePadding = body.radius + 1.4;

        if (body.x < edgePadding) {
          vx += (edgePadding - body.x) * 0.0042;
        } else if (body.x > 100 - edgePadding) {
          vx -= (body.x - (100 - edgePadding)) * 0.0042;
        }

        if (body.y < edgePadding) {
          vy += (edgePadding - body.y) * 0.0042;
        } else if (body.y > 100 - edgePadding) {
          vy -= (body.y - (100 - edgePadding)) * 0.0042;
        }

        const damping = hoveredBodyId === body.id ? 0.82 : 0.972;
        vx *= damping;
        vy *= damping;

        const adjustedSpeed = Math.hypot(vx, vy);
        const maxSpeed = hoveredBodyId === body.id ? 0.018 : 0.044;

        if (adjustedSpeed > maxSpeed) {
          vx = (vx / adjustedSpeed) * maxSpeed;
          vy = (vy / adjustedSpeed) * maxSpeed;
        }

        const x = body.x + vx * delta;
        const y = body.y + vy * delta;

        return {
          ...body,
          vx,
          vy,
          x: Math.min(Math.max(x, edgePadding), 100 - edgePadding),
          y: Math.min(Math.max(y, edgePadding), 100 - edgePadding),
        };
      });

      navBodiesRef.current = bounded;
      setNavBodies(bounded);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [reduceMotion]);

  const navBodyMap = useMemo(() => new Map<ResearchNavItemId, ResearchNavBody>(navBodies.map((body) => [body.id, body])), [navBodies]);
  const getNavBody = (id: ResearchNavItemId) => navBodyMap.get(id) ?? initialResearchNavBodyMap.get(id)!;

  return (
    <div className="flex min-h-[420px] w-full flex-col p-4 md:p-5">
      <div className="relative z-20 flex items-start justify-between gap-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Research Laboratory Index</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-foreground md:text-3xl">Research ecosystem</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
            A laboratory navigation map for projects, agents, knowledge systems, science, and publications.
          </p>
        </div>
        <div className="hidden rounded-full bg-surface/20 p-3 text-accent shadow-sm backdrop-blur-xl sm:block">
          <Network className="h-5 w-5" />
        </div>
      </div>

      <div className="relative z-10 mt-4 min-h-[300px] flex-1 overflow-hidden rounded-[26px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--surface)/0.22),transparent_34%),radial-gradient(circle_at_18%_68%,hsl(var(--green)/0.07),transparent_28%),radial-gradient(circle_at_86%_26%,hsl(var(--amber)/0.08),transparent_30%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="presentation">
          <defs>
            <linearGradient id="researchNavLandscapeGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--green))" stopOpacity="0.20" />
              <stop offset="52%" stopColor="hsl(var(--amber))" stopOpacity="0.24" />
              <stop offset="100%" stopColor="hsl(var(--green))" stopOpacity="0.16" />
            </linearGradient>
          </defs>

          {researchNavItems.map((item) => {
            const body = getNavBody(item.id);

            return (
              <line
                key={`core-${item.id}`}
                x1={researchNavCore.x}
                y1={researchNavCore.y}
                x2={body.x}
                y2={body.y}
                stroke="url(#researchNavLandscapeGradient)"
                strokeWidth={hoveredId === item.id ? "0.9" : "0.45"}
                strokeLinecap="round"
                strokeDasharray="3 8"
                opacity={hoveredId ? (hoveredId === item.id ? "0.96" : "0.26") : "0.72"}
                className="animate-edge-flow"
              />
            );
          })}

          {researchNavRelations.map(([from, to]) => {
            const start = getNavBody(from);
            const end = getNavBody(to);

            return (
              <line
                key={`${from}-${to}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#researchNavLandscapeGradient)"
                strokeWidth="0.32"
                strokeLinecap="round"
                strokeDasharray="2 7"
                opacity={hoveredId ? (hoveredId === from || hoveredId === to ? "0.72" : "0.16") : "0.44"}
              />
            );
          })}
        </svg>

        <div
          className="research-core-node absolute z-20"
          style={{ left: `${researchNavCore.x}%`, top: `${researchNavCore.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent/80">Core</div>
          <div className="mt-1 text-sm font-semibold leading-4 text-foreground">AI Systems Lab</div>
          <div className="mt-1 text-[0.62rem] leading-3 text-muted-foreground">Research directions converge here</div>
        </div>

        {researchNavItems.map((item) => {
          const body = getNavBody(item.id);

          return (
            <div
              key={item.title}
              className="absolute z-30"
              style={{
                left: `${body.x}%`,
                top: `${body.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                title={item.body}
                aria-label={`${item.title}: ${item.body}`}
                onPointerEnter={() => setHoveredId(item.id)}
                onPointerLeave={() => setHoveredId((current) => (current === item.id ? null : current))}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId((current) => (current === item.id ? null : current))}
                onClick={() => {
                  setActiveId(item.id);
                  window.setTimeout(() => {
                    setActiveId((current) => (current === item.id ? null : current));
                  }, 420);
                }}
                className={[
                  "research-nav-node focus-ring group/item flex flex-col items-center justify-center rounded-full px-4 py-3 text-center transition duration-300 hover:-translate-y-1",
                  item.size === "wide" ? "h-[104px] w-[104px]" : "h-[96px] w-[96px]",
                  hoveredId === item.id ? "research-nav-node-hovered scale-[1.055]" : "",
                  activeId === item.id ? "research-nav-node-clicked" : "",
                ].join(" ")}
              >
                <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-surface/25 text-accent shadow-sm transition group-hover/item:bg-surface/40">
                  <item.icon className="h-3.5 w-3.5" />
                </span>
                <span className="mt-1.5 block text-[0.82rem] font-semibold leading-4 text-foreground">{item.title}</span>
                <span className="mt-1 block text-[0.66rem] font-medium uppercase tracking-[0.16em] text-accent/70">{item.number}</span>
              </Link>
            </div>
          );
        })}
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
          <p className="mt-2 text-sm leading-6 text-muted-foreground">From algorithms to autonomous scientific systems</p>
        </div>
        <div className="inline-flex w-fit rounded-2xl border border-white/10 bg-surface/25 px-3 py-1.5 text-xs font-medium text-accent shadow-sm backdrop-blur-xl">
          Current focus: AI Agents + Scientific AI
        </div>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-[7%] right-[7%] top-[32px] hidden h-px overflow-hidden rounded-full bg-white/20 md:block">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--green)),hsl(var(--amber)),hsl(var(--green)))]"
          />
          <div className="analysis-line absolute inset-0" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {evolutionStages.map((stage, index) => {
            const Icon = timelineIcons[index] ?? Sparkles;
            const active = stage.title === "AI Agents" || stage.title === "Scientific AI";

            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 + index * 0.07, duration: 0.42, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className={[
                    "group flex h-full min-h-[206px] flex-col rounded-[24px] border bg-surface/25 p-4 text-left shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1",
                    active
                      ? "border-white/20 bg-accent-soft/30 text-accent shadow-material-sm"
                      : "border-white/10 text-muted-foreground hover:bg-surface/40 hover:shadow-material-sm",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={[
                        "grid h-11 w-11 shrink-0 place-items-center rounded-2xl border bg-surface/30 shadow-sm",
                        active ? "border-white/20 text-accent" : "border-white/10 text-muted-foreground",
                      ].join(" ")}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-surface/25 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-4 flex min-h-10 items-end text-sm font-semibold leading-5 tracking-normal text-foreground">
                    {stage.title}
                  </div>
                  <p className="mt-2 min-h-10 text-xs leading-5 text-muted-foreground">
                    {stage.description}
                  </p>
                  <div className="mt-auto grid gap-2 pt-3">
                    {stage.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className={[
                          "inline-flex min-h-7 items-center rounded-full border border-white/10 bg-surface/25 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.10em]",
                          active ? "text-accent" : "text-accent/85",
                        ].join(" ")}
                      >
                        {keyword}
                      </span>
                    ))}
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
