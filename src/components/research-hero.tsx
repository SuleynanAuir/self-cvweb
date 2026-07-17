"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
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
  Star,
  UsersRound,
} from "lucide-react";
import { OfficialBrandIcon } from "@/components/official-brand-icon";
import { defaultLocale, heroCopy, type Locale } from "@/data/site-copy";
import { heroOfficialBrands } from "@/lib/learning-path-brands";

const githubProfileStats = [
  { label: "Repositories", value: "25", icon: Layers3 },
  { label: "Stars", value: "150", icon: Star },
  { label: "Followers", value: "☝️", icon: UsersRound },
] as const;

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

const researchNavCore = { x: 45, y: 47 } as const;

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
  { id: "research", x: 24, y: 16, vx: 0.013, vy: 0.008, radius: 11.6, anchorX: 24, anchorY: 16, seed: 0.8 },
  { id: "projects", x: 74, y: 21, vx: -0.012, vy: 0.011, radius: 11.2, anchorX: 74, anchorY: 21, seed: 2.2 },
  { id: "agents", x: 14, y: 57, vx: 0.012, vy: -0.012, radius: 11.2, anchorX: 14, anchorY: 57, seed: 3.7 },
  { id: "knowledge", x: 83, y: 55, vx: -0.013, vy: -0.010, radius: 11.6, anchorX: 83, anchorY: 55, seed: 5.1 },
  { id: "science", x: 35, y: 78, vx: 0.010, vy: -0.008, radius: 11.2, anchorX: 35, anchorY: 78, seed: 6.4 },
  { id: "publications", x: 67, y: 72, vx: -0.011, vy: -0.009, radius: 11.6, anchorX: 67, anchorY: 72, seed: 8.0 },
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

const evolutionStageTones = [
  { accent: "38 74% 44%", soft: "39 70% 88%", glow: "42 88% 60%" },
  { accent: "78 34% 38%", soft: "79 44% 87%", glow: "76 46% 56%" },
  { accent: "108 29% 36%", soft: "108 38% 88%", glow: "108 38% 55%" },
  { accent: "160 34% 34%", soft: "160 42% 88%", glow: "166 42% 52%" },
  { accent: "205 33% 40%", soft: "205 46% 90%", glow: "204 44% 57%" },
  { accent: "258 27% 45%", soft: "258 42% 91%", glow: "260 38% 62%" },
] as const;

const evolutionStages = [
  {
    title: "Machine Learning",
    description: "Statistical learning from data",
    keywords: ["Optimization", "Generalization"],
  },
  {
    title: "Deep Learning",
    description: "Neural represent learning",
    keywords: ["Architectures", "Perception"],
  },
  {
    title: "Foundation Models",
    description: "Pretrained models transfer",
    keywords: ["Pretraining", "Alignment"],
  },
  {
    title: "AI Agents",
    description: "Reasoning by tool、memory",
    keywords: ["Planning", "Tool use"],
  },
  {
    title: "Multi-Agent Systems",
    description: "Collaborative autonomous",
    keywords: ["Coordination", "Reflection"],
  },
  {
    title: "Scientific AI",
    description: "Evidence-driven discovery",
    keywords: ["Hypothesis", "Discovery"],
  },
] as const;

export function ResearchHero({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = heroCopy[locale];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-background/10">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 pb-8 pt-8 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,0.58fr)_minmax(340px,0.42fr)] lg:items-stretch lg:px-8 lg:pb-8 lg:pt-8 xl:grid-cols-[minmax(0,0.6fr)_minmax(360px,0.4fr)]">
        <div className="relative z-10 flex flex-col lg:min-h-[340px] lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <Sparkles className="h-4 w-4" />
            {copy.labName}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="mt-6 max-w-none text-[1.7rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[2.65rem] md:text-[3.2rem] lg:text-[2.75rem] xl:text-[3.25rem]"
          >
            <span className="block whitespace-nowrap">
              {copy.h1Line1Prefix} <span className="gradient-text">{copy.h1Line1Highlight}</span>
            </span>
            <span className="block whitespace-nowrap">
              {copy.h1Line2Prefix} <span className="text-accent">{copy.h1Line2Highlight}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-[1.04rem]"
          >
            {copy.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.22, ease: "easeOut" }}
            className="mt-5 flex max-w-full flex-wrap gap-2"
          >
            {copy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-2xl border border-white/10 bg-surface/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm backdrop-blur-xl"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.25, ease: "easeOut" }}
            className="mt-4 flex max-w-2xl flex-col gap-3 rounded-3xl border border-white/10 bg-surface/25 p-3 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center"
          >
            <img
              src="/assets/web_page/head_img.jpeg"
              alt="Suleynan Aiur avatar"
              className="h-14 w-14 shrink-0 rounded-2xl border border-white/20 object-cover shadow-sm"
            />
            <div className="min-w-0">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent">{copy.author}</div>
              <Link
                href="https://github.com/SuleynanAuir"
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-1 inline-flex items-center gap-2 rounded-xl text-base font-semibold tracking-normal text-foreground transition hover:text-accent"
              >
                Suleynan Aiur
                <Github className="h-4 w-4" />
              </Link>
              <div className="mt-0.5 text-xs text-muted-foreground">github.com/SuleynanAuir</div>
            </div>
            <div className="flex flex-wrap gap-2 sm:ml-auto sm:justify-end">
              {githubProfileStats.map((stat, statIndex) => (
                <div
                  key={stat.label}
                  className="inline-flex min-w-[5rem] items-center gap-2 rounded-2xl border border-white/10 bg-surface/25 px-3 py-2 text-xs text-muted-foreground shadow-sm"
                >
                  <stat.icon className="h-3.5 w-3.5 text-accent" />
                  <span>
                    <span className="block font-semibold leading-none text-foreground">{stat.value}</span>
                    <span className="mt-0.5 block leading-none">{copy.profileStats[statIndex] ?? stat.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.28, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#research-projects"
                className="material-button focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                {copy.explore}
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
            </div>

            <div
              className="hero-official-icons grid w-fit grid-flow-col grid-rows-2 gap-2"
              aria-label="Official technology icons"
            >
              {heroOfficialBrands.map((brand) => (
                <OfficialBrandIcon
                  key={brand.name}
                  brand={brand}
                  className="hero-official-brand-icon h-8 w-8"
                  imageClassName="p-1.5"
                  fallbackClassName="text-[0.56rem]"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
          className="relative z-10 flex lg:min-h-[340px]"
        >
          <ResearchNavigation locale={locale} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.66, delay: 0.36, ease: "easeOut" }}
          className="relative z-10 lg:col-span-2"
        >
          <EvolutionTimeline locale={locale} />
        </motion.div>
      </div>
    </section>
  );
}

function ResearchNavigation({ locale }: { locale: Locale }) {
  const copy = heroCopy[locale];
  const reduceMotion = useReducedMotion();
  const [navBodies, setNavBodies] = useState<ResearchNavBody[]>(initialResearchNavBodies);
  const [hoveredId, setHoveredId] = useState<ResearchNavItemId | null>(null);
  const [activeId, setActiveId] = useState<ResearchNavItemId | null>(null);
  const [draggingId, setDraggingId] = useState<ResearchNavItemId | null>(null);
  const navStageRef = useRef<HTMLDivElement | null>(null);
  const navBodiesRef = useRef(navBodies);
  const hoveredIdRef = useRef<ResearchNavItemId | null>(null);
  const draggingIdRef = useRef<ResearchNavItemId | null>(null);
  const dragMovedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    navBodiesRef.current = navBodies;
  }, [navBodies]);

  useEffect(() => {
    hoveredIdRef.current = hoveredId;
  }, [hoveredId]);

  useEffect(() => {
    draggingIdRef.current = draggingId;
  }, [draggingId]);

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
      const draggedBodyId = draggingIdRef.current;

      const next = navBodiesRef.current.map((body, index) => {
        if (draggedBodyId === body.id) {
          return { ...body, vx: 0, vy: 0 };
        }

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
            (centerDx / centerDistance) * 0.00012 +
            anchorDx * 0.00034 +
            (-centerDy / centerDistance) * swirl +
            noiseX,
          vy:
            body.vy +
            (centerDy / centerDistance) * 0.00012 +
            anchorDy * 0.00034 +
            (centerDx / centerDistance) * swirl +
            noiseY,
        };
      });

      for (let i = 0; i < next.length; i += 1) {
        for (let j = i + 1; j < next.length; j += 1) {
          const first = next[i];
          const second = next[j];

          if (draggedBodyId === first.id || draggedBodyId === second.id) {
            continue;
          }

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
        if (draggedBodyId === body.id) {
          const edgePadding = body.radius + 1.4;

          return {
            ...body,
            vx: 0,
            vy: 0,
            x: Math.min(Math.max(body.x, edgePadding), 100 - edgePadding),
            y: Math.min(Math.max(body.y, edgePadding), 100 - edgePadding),
          };
        }

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
  const moveNavBody = (id: ResearchNavItemId, clientX: number, clientY: number) => {
    const stage = navStageRef.current;

    if (!stage) {
      return;
    }

    const rect = stage.getBoundingClientRect();
    const currentBody = navBodiesRef.current.find((body) => body.id === id);

    if (!currentBody) {
      return;
    }

    const edgePadding = currentBody.radius + 1.4;
    const rawX = ((clientX - rect.left) / rect.width) * 100;
    const rawY = ((clientY - rect.top) / rect.height) * 100;
    const x = Math.min(Math.max(rawX, edgePadding), 100 - edgePadding);
    const y = Math.min(Math.max(rawY, edgePadding), 100 - edgePadding);
    const next = navBodiesRef.current.map((body) =>
      body.id === id ? { ...body, x, y, vx: 0, vy: 0, anchorX: x, anchorY: y } : body,
    );

    navBodiesRef.current = next;
    setNavBodies(next);
  };
  const handleNodePointerDown = (id: ResearchNavItemId, event: PointerEvent<HTMLAnchorElement>) => {
    dragMovedRef.current = false;
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    draggingIdRef.current = id;
    setDraggingId(id);
    setHoveredId(id);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const handleNodePointerMove = (id: ResearchNavItemId, event: PointerEvent<HTMLAnchorElement>) => {
    if (draggingIdRef.current !== id) {
      return;
    }

    const distance = Math.hypot(event.clientX - dragStartRef.current.x, event.clientY - dragStartRef.current.y);

    if (distance > 4) {
      dragMovedRef.current = true;
    }

    moveNavBody(id, event.clientX, event.clientY);
  };
  const handleNodePointerUp = (id: ResearchNavItemId, event: PointerEvent<HTMLAnchorElement>) => {
    if (draggingIdRef.current === id) {
      moveNavBody(id, event.clientX, event.clientY);
    }

    setDraggingId(null);
    draggingIdRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };
  const handleNodePointerCancel = (id: ResearchNavItemId, event: PointerEvent<HTMLAnchorElement>) => {
    if (draggingIdRef.current === id) {
      setDraggingId(null);
      draggingIdRef.current = null;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="flex min-h-[330px] w-full flex-col p-3 md:p-3.5">
      <div className="relative z-20 flex items-start justify-between gap-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{copy.indexEyebrow}</div>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-normal text-foreground md:text-[1.7rem]">{copy.ecosystemTitle}</h2>
          <p className="mt-1.5 max-w-sm text-sm leading-6 text-muted-foreground">
            {copy.ecosystemDescription}
          </p>
        </div>
        <div className="hidden rounded-full bg-surface/20 p-3 text-accent shadow-sm backdrop-blur-xl sm:block">
          <Network className="h-5 w-5" />
        </div>
      </div>

      <div ref={navStageRef} className="relative z-10 mt-2 min-h-[240px] flex-1 overflow-hidden rounded-[26px]">
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
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent/80">{copy.core}</div>
          <div className="mt-1 text-sm font-semibold leading-4 text-foreground">{copy.coreTitle}</div>
          <div className="mt-1 text-[0.62rem] leading-3 text-muted-foreground">{copy.coreDescription}</div>
        </div>

        {researchNavItems.map((item) => {
          const body = getNavBody(item.id);
          const itemCopy = copy.navItems[item.id];

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
                title={itemCopy.body}
                aria-label={`${itemCopy.title}: ${itemCopy.body}`}
                onPointerDown={(event) => handleNodePointerDown(item.id, event)}
                onPointerMove={(event) => handleNodePointerMove(item.id, event)}
                onPointerUp={(event) => handleNodePointerUp(item.id, event)}
                onPointerCancel={(event) => handleNodePointerCancel(item.id, event)}
                onPointerEnter={() => setHoveredId(item.id)}
                onPointerLeave={() => setHoveredId((current) => (current === item.id ? null : current))}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId((current) => (current === item.id ? null : current))}
                onClick={(event) => {
                  if (dragMovedRef.current) {
                    event.preventDefault();
                    dragMovedRef.current = false;
                    return;
                  }

                  setActiveId(item.id);
                  window.setTimeout(() => {
                    setActiveId((current) => (current === item.id ? null : current));
                  }, 420);
                }}
                className={[
                  "research-nav-node focus-ring group/item flex touch-none cursor-grab select-none flex-col items-center justify-center rounded-full px-4 py-3 text-center transition duration-300 hover:-translate-y-1 active:cursor-grabbing",
                  item.size === "wide" ? "h-[86px] w-[86px]" : "h-[80px] w-[80px]",
                  hoveredId === item.id || draggingId === item.id ? "research-nav-node-hovered scale-[1.055]" : "",
                  activeId === item.id ? "research-nav-node-clicked" : "",
                ].join(" ")}
              >
                <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-surface/25 text-accent shadow-sm transition group-hover/item:bg-surface/40">
                  <item.icon className="h-3.5 w-3.5" />
                </span>
                <span className="mt-1.5 block text-[0.72rem] font-semibold leading-4 text-foreground">{itemCopy.title}</span>
                <span className="mt-1 block text-[0.66rem] font-medium uppercase tracking-[0.16em] text-accent/70">{item.number}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EvolutionTimeline({ locale }: { locale: Locale }) {
  const copy = heroCopy[locale];

  return (
    <div className="p-1.5 md:p-2">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="inline-flex w-fit rounded-2xl border border-white/10 bg-surface/25 px-3 py-1.5 text-xs font-medium text-accent shadow-sm backdrop-blur-xl">
          {copy.currentFocus}
        </div>
      </div>

      <div className="relative mt-3">
        <div className="absolute left-[7%] right-[7%] top-[25px] hidden h-px overflow-hidden rounded-full bg-white/20 md:block">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="evolution-stage-line h-full rounded-full"
          />
          <div className="analysis-line absolute inset-0" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {evolutionStages.map((stage, index) => {
            const Icon = timelineIcons[index] ?? Sparkles;
            const stageCopy = copy.stages[index] ?? stage;
            const tone = evolutionStageTones[index] ?? evolutionStageTones[0];
            const stageStyle = {
              "--stage-accent": tone.accent,
              "--stage-soft": tone.soft,
              "--stage-glow": tone.glow,
            } as CSSProperties;

            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 + index * 0.07, duration: 0.42, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className="evolution-stage-card group flex h-full min-h-[140px] flex-col rounded-[18px] border p-3 text-left shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1"
                  style={stageStyle}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="evolution-stage-icon grid h-8 w-8 shrink-0 place-items-center rounded-2xl border shadow-sm">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="evolution-stage-index rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-2.5 flex min-h-7 items-end text-sm font-semibold leading-5 tracking-normal text-foreground">
                    {stageCopy.title}
                  </div>
                  <p className="mt-1 min-h-7 text-xs leading-5 text-muted-foreground">
                    {stageCopy.description}
                  </p>
                  <div className="mt-auto grid gap-1.5 pt-1.5">
                    {stageCopy.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="evolution-stage-keyword inline-flex min-h-6 items-center rounded-full border px-3 text-[0.62rem] font-semibold uppercase tracking-[0.10em]"
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
