"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Github, Layers3, Sparkles } from "lucide-react";
import { researchCategories, type ResearchProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const topicChipClass =
  "max-w-full rounded-full border border-border/55 bg-surface/42 px-3.5 py-1.5 text-[clamp(0.64rem,1vw,0.75rem)] font-medium leading-tight text-muted-foreground shadow-sm backdrop-blur-xl";

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
            className={cn("material-card overflow-hidden", isOpen ? "border-accent/35" : "")}
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
                        className="h-[clamp(7rem,9.4vw,9.75rem)] w-auto max-w-full min-w-0 rounded-2xl border border-border/45 object-contain shadow-material-sm transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.015]"
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
                    <div className="inline-flex rounded-full border border-border/35 bg-accent-soft/58 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/45 bg-surface/36 px-3 py-1 text-xs font-medium text-muted-foreground">
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

                <div className="flex items-center justify-between rounded-3xl border border-border/45 bg-surface/38 px-4 py-3 shadow-material-sm backdrop-blur-xl transition duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/45 group-hover:bg-surface/50">
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
                  <div className="border-t border-border/40 p-5 md:p-6">
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.045, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "grid gap-5 rounded-[28px] border border-border/45 bg-surface/34 p-4 shadow-material-sm backdrop-blur-xl lg:items-start",
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
              className="focus-ring inline-flex h-8 items-center gap-2 rounded-full border border-border/65 bg-surface/42 px-3 text-xs font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          ) : null}
        </div>

        <h4 className="mt-4 text-2xl font-semibold tracking-normal text-foreground">{project.name}</h4>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          <InfoBlock label="Research question" value={project.platformRole} />
          <InfoBlock label="Technical approach" value={project.keywords.join(" / ")} />
          <InfoBlock label="Key contribution" value={project.impact} />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.keywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-border/60 bg-surface/42 px-3 py-1 text-xs font-medium text-muted-foreground">
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
        className="h-72 w-auto max-w-full rounded-3xl border border-border/45 object-contain shadow-material-sm"
      />
      {images.length > 1 ? (
        <div className="flex flex-wrap items-center gap-3">
          {images.slice(1, 3).map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${name} supporting screenshot ${index + 1}`}
              className="h-36 w-auto max-w-full rounded-2xl border border-border/45 object-contain shadow-material-sm"
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/45 bg-accent-soft/32 p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{label}</div>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">{value}</p>
    </div>
  );
}
