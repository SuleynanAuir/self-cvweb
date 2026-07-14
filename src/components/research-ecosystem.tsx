"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { BookOpen, Bot, FlaskConical, Layers3, Network, Sparkles } from "lucide-react";

const ecosystemNodes = [
  {
    id: "research",
    number: "01",
    title: "Research",
    body: "Explore research directions",
    href: "#research-vision",
    icon: Sparkles,
    radius: 14.2,
    anchorX: 28,
    anchorY: 24,
    seed: 0.8,
    size: "wide",
  },
  {
    id: "projects",
    number: "02",
    title: "Projects",
    body: "Open-source AI systems",
    href: "#research-projects",
    icon: Layers3,
    radius: 13.3,
    anchorX: 72,
    anchorY: 25,
    seed: 2.2,
    size: "medium",
  },
  {
    id: "agents",
    number: "03",
    title: "Agents",
    body: "LLM agents and autonomous systems",
    href: "/agent-hub",
    icon: Bot,
    radius: 13.3,
    anchorX: 21,
    anchorY: 58,
    seed: 3.7,
    size: "medium",
  },
  {
    id: "knowledge",
    number: "04",
    title: "Knowledge",
    body: "RAG and graph intelligence",
    href: "#research-map",
    icon: Network,
    radius: 14.2,
    anchorX: 82,
    anchorY: 56,
    seed: 5.1,
    size: "wide",
  },
  {
    id: "science",
    number: "05",
    title: "Science",
    body: "AI for scientific discovery",
    href: "#research-projects",
    icon: FlaskConical,
    radius: 13.3,
    anchorX: 36,
    anchorY: 81,
    seed: 6.4,
    size: "medium",
  },
  {
    id: "publications",
    number: "06",
    title: "Publications",
    body: "Research notes and technical explorations",
    href: "/papers",
    icon: BookOpen,
    radius: 14.2,
    anchorX: 64,
    anchorY: 81,
    seed: 8.0,
    size: "wide",
  },
] as const;

type EcosystemNodeId = (typeof ecosystemNodes)[number]["id"];

type EcosystemBody = {
  id: EcosystemNodeId;
  x: number;
  y: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  radius: number;
  anchorX: number;
  anchorY: number;
  seed: number;
};

const ecosystemCore = { x: 50, y: 52 } as const;

const ecosystemRelations = [
  ["research", "projects"],
  ["research", "agents"],
  ["agents", "knowledge"],
  ["knowledge", "science"],
  ["science", "publications"],
  ["projects", "publications"],
] as const satisfies readonly (readonly [EcosystemNodeId, EcosystemNodeId])[];

function createInitialBodies(randomizeVelocity: boolean): EcosystemBody[] {
  return ecosystemNodes.map((node) => ({
    id: node.id,
    x: node.anchorX,
    y: node.anchorY,
    vx: randomizeVelocity ? (Math.random() - 0.5) * 0.052 : 0,
    vy: randomizeVelocity ? (Math.random() - 0.5) * 0.052 : 0,
    ax: 0,
    ay: 0,
    radius: node.radius,
    anchorX: node.anchorX,
    anchorY: node.anchorY,
    seed: node.seed,
  }));
}

const initialBodies = createInitialBodies(false);
const initialBodyMap = new Map<EcosystemNodeId, EcosystemBody>(initialBodies.map((body) => [body.id, body]));

export function ResearchEcosystem() {
  const reduceMotion = useReducedMotion();
  const [bodies, setBodies] = useState<EcosystemBody[]>(initialBodies);
  const [hoveredId, setHoveredId] = useState<EcosystemNodeId | null>(null);
  const [activeId, setActiveId] = useState<EcosystemNodeId | null>(null);
  const bodiesRef = useRef<EcosystemBody[]>(initialBodies);
  const hoveredIdRef = useRef<EcosystemNodeId | null>(null);

  useEffect(() => {
    bodiesRef.current = bodies;
  }, [bodies]);

  useEffect(() => {
    hoveredIdRef.current = hoveredId;
  }, [hoveredId]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const randomizedBodies = createInitialBodies(true);
    bodiesRef.current = randomizedBodies;
    setBodies(randomizedBodies);

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = Math.min((time - lastTime) / 16.67, 2);
      lastTime = time;
      const hoveredBodyId = hoveredIdRef.current;

      const next = bodiesRef.current.map((body) => ({
        ...body,
        ax: 0,
        ay: 0,
      }));

      for (const body of next) {
        const centerDx = ecosystemCore.x - body.x;
        const centerDy = ecosystemCore.y - body.y;
        const centerDistance = Math.max(Math.hypot(centerDx, centerDy), 0.001);
        const anchorDx = body.anchorX - body.x;
        const anchorDy = body.anchorY - body.y;
        const orbitForce = Math.sin(time * 0.00018 + body.seed) * 0.0002;
        const perturbX = Math.sin(time * 0.00073 + body.seed * 1.9) * 0.00026;
        const perturbY = Math.cos(time * 0.00061 + body.seed * 1.6) * 0.00026;

        body.ax += (centerDx / centerDistance) * 0.00072;
        body.ay += (centerDy / centerDistance) * 0.00072;
        body.ax += anchorDx * 0.00014;
        body.ay += anchorDy * 0.00014;
        body.ax += (-centerDy / centerDistance) * orbitForce + perturbX;
        body.ay += (centerDx / centerDistance) * orbitForce + perturbY;

        const coreDx = body.x - ecosystemCore.x;
        const coreDy = body.y - ecosystemCore.y;
        const coreDistance = Math.max(Math.hypot(coreDx, coreDy), 0.001);
        const coreMinDistance = body.radius + 16.6;

        if (coreDistance < coreMinDistance) {
          const pressure = ((coreMinDistance - coreDistance) / coreMinDistance) ** 2 * 0.014;
          body.ax += (coreDx / coreDistance) * pressure;
          body.ay += (coreDy / coreDistance) * pressure;
        }

        const edgePadding = body.radius + 1.4;

        if (body.x < edgePadding) {
          body.ax += (edgePadding - body.x) * 0.0042;
        } else if (body.x > 100 - edgePadding) {
          body.ax -= (body.x - (100 - edgePadding)) * 0.0042;
        }

        if (body.y < edgePadding) {
          body.ay += (edgePadding - body.y) * 0.0042;
        } else if (body.y > 100 - edgePadding) {
          body.ay -= (body.y - (100 - edgePadding)) * 0.0042;
        }
      }

      for (let i = 0; i < next.length; i += 1) {
        for (let j = i + 1; j < next.length; j += 1) {
          const first = next[i];
          const second = next[j];
          const dx = second.x - first.x;
          const dy = second.y - first.y;
          const distance = Math.max(Math.hypot(dx, dy), 0.001);
          const minDistance = first.radius + second.radius + 3.8;

          if (distance >= minDistance * 1.18) {
            continue;
          }

          const normalX = dx / distance;
          const normalY = dy / distance;
          const softness = Math.max((minDistance * 1.18 - distance) / minDistance, 0);
          const repulsionForce = softness * softness * 0.0095;

          first.ax -= normalX * repulsionForce;
          first.ay -= normalY * repulsionForce;
          second.ax += normalX * repulsionForce;
          second.ay += normalY * repulsionForce;

          if (distance < minDistance) {
            const correction = (minDistance - distance) * 0.035;
            first.x -= normalX * correction;
            first.y -= normalY * correction;
            second.x += normalX * correction;
            second.y += normalY * correction;
          }
        }
      }

      const integrated = next.map((body) => {
        const damping = hoveredBodyId === body.id ? 0.82 : 0.972;
        let vx = (body.vx + body.ax * delta) * damping;
        let vy = (body.vy + body.ay * delta) * damping;
        const speed = Math.hypot(vx, vy);
        const maxSpeed = hoveredBodyId === body.id ? 0.018 : 0.044;

        if (speed > maxSpeed) {
          vx = (vx / speed) * maxSpeed;
          vy = (vy / speed) * maxSpeed;
        }

        const edgePadding = body.radius + 1.4;
        const x = Math.min(Math.max(body.x + vx * delta, edgePadding), 100 - edgePadding);
        const y = Math.min(Math.max(body.y + vy * delta, edgePadding), 100 - edgePadding);

        return {
          ...body,
          vx,
          vy,
          x,
          y,
        };
      });

      bodiesRef.current = integrated;
      setBodies(integrated);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [reduceMotion]);

  const bodyMap = useMemo(() => new Map<EcosystemNodeId, EcosystemBody>(bodies.map((body) => [body.id, body])), [bodies]);
  const getBody = (id: EcosystemNodeId) => bodyMap.get(id) ?? initialBodyMap.get(id)!;

  return (
    <div className="research-landscape-panel min-h-[580px] p-5 md:p-6">
      <div className="relative z-20 flex items-start justify-between gap-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Research Laboratory Index</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground">Research ecosystem</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
            A laboratory navigation map for projects, agents, knowledge systems, science, and publications.
          </p>
        </div>
        <div className="hidden rounded-full bg-surface/20 p-3 text-accent shadow-sm backdrop-blur-xl sm:block">
          <Network className="h-5 w-5" />
        </div>
      </div>

      <div className="relative z-10 mt-5 h-[430px] overflow-hidden rounded-[30px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--surface)/0.22),transparent_34%),radial-gradient(circle_at_18%_68%,hsl(var(--green)/0.07),transparent_28%),radial-gradient(circle_at_86%_26%,hsl(var(--amber)/0.08),transparent_30%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="presentation">
          <defs>
            <linearGradient id="researchNavLandscapeGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--green))" stopOpacity="0.20" />
              <stop offset="52%" stopColor="hsl(var(--amber))" stopOpacity="0.24" />
              <stop offset="100%" stopColor="hsl(var(--green))" stopOpacity="0.16" />
            </linearGradient>
          </defs>

          {ecosystemNodes.map((node) => {
            const body = getBody(node.id);

            return (
              <line
                key={`core-${node.id}`}
                x1={ecosystemCore.x}
                y1={ecosystemCore.y}
                x2={body.x}
                y2={body.y}
                stroke="url(#researchNavLandscapeGradient)"
                strokeWidth={hoveredId === node.id ? "0.9" : "0.45"}
                strokeLinecap="round"
                strokeDasharray="3 8"
                opacity={hoveredId ? (hoveredId === node.id ? "0.96" : "0.26") : "0.72"}
                className="animate-edge-flow"
              />
            );
          })}

          {ecosystemRelations.map(([from, to]) => {
            const start = getBody(from);
            const end = getBody(to);

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
          style={{ left: `${ecosystemCore.x}%`, top: `${ecosystemCore.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent/80">Core</div>
          <div className="mt-1 text-base font-semibold leading-5 text-foreground">AI Systems Lab</div>
          <div className="mt-1 text-[0.68rem] leading-4 text-muted-foreground">Research directions converge here</div>
        </div>

        {ecosystemNodes.map((node) => {
          const body = getBody(node.id);
          const Icon = node.icon;

          return (
            <div
              key={node.id}
              className="absolute z-30"
              style={{
                left: `${body.x}%`,
                top: `${body.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Link
                href={node.href}
                title={node.body}
                aria-label={`${node.title}: ${node.body}`}
                onPointerEnter={() => setHoveredId(node.id)}
                onPointerLeave={() => setHoveredId((current) => (current === node.id ? null : current))}
                onFocus={() => setHoveredId(node.id)}
                onBlur={() => setHoveredId((current) => (current === node.id ? null : current))}
                onClick={() => {
                  setActiveId(node.id);
                  window.setTimeout(() => {
                    setActiveId((current) => (current === node.id ? null : current));
                  }, 420);
                }}
                className={[
                  "research-nav-node focus-ring group/item flex flex-col items-center justify-center rounded-full px-4 py-3 text-center transition duration-300 hover:-translate-y-1",
                  node.size === "wide" ? "h-[124px] w-[124px]" : "h-[116px] w-[116px]",
                  hoveredId === node.id ? "research-nav-node-hovered scale-[1.055]" : "",
                  activeId === node.id ? "research-nav-node-clicked" : "",
                ].join(" ")}
              >
                <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-surface/25 text-accent shadow-sm transition group-hover/item:bg-surface/40">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="mt-2 block text-sm font-semibold leading-5 text-foreground">{node.title}</span>
                <span className="mt-1 block text-[0.66rem] font-medium uppercase tracking-[0.16em] text-accent/70">{node.number}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
