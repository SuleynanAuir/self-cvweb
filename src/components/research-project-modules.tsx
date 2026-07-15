"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, ChevronDown, Github, Layers3, Sparkles } from "lucide-react";
import { researchCategories, type ResearchProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const topicChipClass =
  "max-w-full rounded-full border border-white/10 bg-surface/25 px-3.5 py-1.5 text-[clamp(0.64rem,1vw,0.75rem)] font-medium leading-tight text-muted-foreground shadow-sm backdrop-blur-xl";

export function ResearchProjectModules() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 grid gap-5">
      {researchCategories.map((category, index) => {
        const isOpen = openIndex === index;
        const previewImages = category.projects
          .map((project) => project.image ?? project.images?.[0])
          .filter(Boolean)
          .slice(0, 4);

        return (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 28, scale: 0.992 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.08, margin: "0px 0px 120px 0px" }}
            transition={{ delay: index * 0.045, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className={cn("material-card overflow-hidden", isOpen ? "bg-surface/30" : "")}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="focus-ring group w-full p-5 text-left transition md:p-7"
              aria-expanded={isOpen}
            >
              <div
                className={cn(
                  "mb-7 grid gap-4",
                  previewImages.length > 0
                    ? "xl:grid-cols-[minmax(0,1fr)_minmax(220px,0.28fr)] xl:items-start"
                    : "",
                )}
              >
                {previewImages.length > 0 ? (
                  <div className="flex flex-wrap items-start justify-start gap-3 md:gap-4">
                    {previewImages.map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${category.title} project preview ${imageIndex + 1}`}
                        className="h-[clamp(7rem,9.4vw,9.75rem)] w-auto max-w-full min-w-0 rounded-2xl object-contain shadow-material-sm transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.015]"
                      />
                    ))}
                  </div>
                ) : null}

                <div className="flex flex-wrap items-start justify-start gap-2.5 xl:justify-end xl:pt-1">
                  {category.signal.split(", ").map((item) => (
                    <span key={item} className={topicChipClass}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.25fr)] lg:items-end">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex rounded-full border border-white/10 bg-accent-soft/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/25 px-3 py-1 text-xs font-medium text-muted-foreground">
                      <Layers3 className="h-3.5 w-3.5 text-accent" />
                      {category.projects.length} projects
                    </div>
                  </div>

                  <h3 className="mt-5 max-w-full text-[clamp(1.55rem,2.55vw,2.45rem)] font-semibold leading-[1.08] tracking-normal text-foreground md:whitespace-nowrap">
                    {category.title}
                  </h3>
                  <p className="mt-4 max-w-5xl text-sm leading-7 text-muted-foreground md:text-[0.96rem]">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-surface/25 px-4 py-3 shadow-sm backdrop-blur-xl transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-surface/40 group-hover:shadow-material-sm">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {isOpen ? "Collapse module" : "Expand module"}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Open research contribution evidence
                    </div>
                  </div>
                  <ChevronDown
                    className={cn("h-5 w-5 text-accent transition duration-300", isOpen ? "rotate-180" : "")}
                  />
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/10 p-5 md:p-6">
                    <div className="grid gap-4">
                      {category.projects.map((project, projectIndex) => (
                        <ProjectDetail key={project.name} project={project} index={projectIndex} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.section>
        );
      })}
    </div>
  );
}

function ProjectDetail({ project, index }: { project: ResearchProject; index: number }) {
  const images = project.images ?? (project.image ? [project.image] : []);
  const readmeHighlights = project.readmeHighlights ?? [];
  const [activeEvidencePanel, setActiveEvidencePanel] = useState<"notes" | "logic" | null>(null);
  const readmeLogic = [
    { label: "Research object", value: project.platformRole },
    { label: "Technical route", value: project.keywords.join(" -> ") },
    { label: "Project value", value: project.impact },
  ] as const;
  const toggleEvidencePanel = (panel: "notes" | "logic") => {
    setActiveEvidencePanel((current) => (current === panel ? null : panel));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.045, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "grid gap-5 rounded-[28px] border border-white/10 bg-surface/25 p-4 shadow-sm backdrop-blur-xl lg:items-start",
        images.length > 0 ? "lg:grid-cols-[minmax(220px,0.34fr)_minmax(0,1fr)]" : "",
      )}
    >
      {images.length > 0 ? (
        <div className="grid gap-3">
          <ProjectVisual name={project.name} images={images} />
        </div>
      ) : null}

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Research contribution
          </div>
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-8 items-center gap-2 rounded-full border border-white/10 bg-surface/25 px-3 text-xs font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-accent"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          ) : null}
        </div>

        <h4 className="mt-4 text-2xl font-semibold tracking-normal text-foreground">{project.name}</h4>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>

        {readmeHighlights.length > 0 ? (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => toggleEvidencePanel("notes")}
                className={cn(
                  "focus-ring inline-flex h-10 items-center gap-2 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.12em] shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5",
                  activeEvidencePanel === "notes"
                    ? "border-white/20 bg-accent-soft/55 text-accent"
                    : "border-white/10 bg-surface/25 text-muted-foreground hover:bg-surface/40 hover:text-accent",
                )}
                aria-expanded={activeEvidencePanel === "notes"}
              >
                <BookOpenCheck className="h-3.5 w-3.5" />
                README Notes
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition duration-300", activeEvidencePanel === "notes" ? "rotate-180" : "")}
                />
              </button>
              <button
                type="button"
                onClick={() => toggleEvidencePanel("logic")}
                className={cn(
                  "focus-ring inline-flex h-10 items-center gap-2 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.12em] shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5",
                  activeEvidencePanel === "logic"
                    ? "border-white/20 bg-accent-soft/55 text-accent"
                    : "border-white/10 bg-surface/25 text-muted-foreground hover:bg-surface/40 hover:text-accent",
                )}
                aria-expanded={activeEvidencePanel === "logic"}
              >
                <Layers3 className="h-3.5 w-3.5" />
                Logic chain
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition duration-300", activeEvidencePanel === "logic" ? "rotate-180" : "")}
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {activeEvidencePanel ? (
                <motion.div
                  key={activeEvidencePanel}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  {activeEvidencePanel === "notes" ? (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-surface/25 p-4 shadow-sm backdrop-blur-xl">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        <BookOpenCheck className="h-3.5 w-3.5" />
                        README Notes
                      </div>
                      <ul className="mt-3 grid gap-2.5">
                        {readmeHighlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-accent-soft/20 p-4 shadow-sm backdrop-blur-xl">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Logic chain</div>
                      <ol className="mt-3 grid gap-3">
                        {readmeLogic.map((step, stepIndex) => (
                          <li key={step.label} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 text-sm leading-6">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-surface/35 text-xs font-semibold text-accent">
                              {stepIndex + 1}
                            </span>
                            <span>
                              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                                {step.label}
                              </span>
                              <span className="mt-1 block text-muted-foreground">{step.value}</span>
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ) : null}

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          <InfoBlock label="Research question" value={project.platformRole} />
          <InfoBlock label="Technical approach" value={project.keywords.join(" / ")} />
          <InfoBlock label="Key contribution" value={project.impact} />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.keywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-white/10 bg-surface/25 px-3 py-1 text-xs font-medium text-muted-foreground">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ name, images }: { name: string; images: readonly string[] }) {
  return (
    <>
      <img
        src={images[0]}
        alt={`${name} screenshot`}
        className="h-72 w-auto max-w-full rounded-3xl object-contain shadow-material-sm"
      />
      {images.length > 1 ? (
        <div className="flex flex-wrap items-center gap-3">
          {images.slice(1, 3).map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${name} supporting screenshot ${index + 1}`}
              className="h-36 w-auto max-w-full rounded-2xl object-contain shadow-material-sm"
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-accent-soft/25 p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{label}</div>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">{value}</p>
    </div>
  );
}
