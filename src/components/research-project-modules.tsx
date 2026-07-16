"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpenCheck, ChevronDown, Github, GraduationCap, Layers3, Sparkles } from "lucide-react";
import { OfficialBrandIcon } from "@/components/official-brand-icon";
import { researchCategories, type ResearchProject } from "@/data/portfolio";
import { defaultLocale, getCategoryDisplay, getProjectDisplay, projectModuleCopy, type Locale } from "@/data/site-copy";
import { getLearningPathBrand } from "@/lib/learning-path-brands";
import { getResearchProjectId, researchProjectLinks } from "@/lib/research-project-index";
import { cn } from "@/lib/utils";

const topicChipClass =
  "module-topic-chip max-w-full shrink-0 rounded-full px-3.5 py-1.5 text-[clamp(0.64rem,1vw,0.75rem)] font-medium leading-tight shadow-sm backdrop-blur-xl";

const moduleTones = [
  { accent: "97 29% 38%", soft: "86 42% 88%", glow: "97 29% 38%" },
  { accent: "39 76% 49%", soft: "43 70% 88%", glow: "39 76% 49%" },
  { accent: "174 36% 36%", soft: "168 39% 88%", glow: "174 36% 36%" },
  { accent: "212 28% 43%", soft: "210 34% 89%", glow: "212 28% 43%" },
  { accent: "350 38% 49%", soft: "354 45% 90%", glow: "350 38% 49%" },
  { accent: "264 26% 47%", soft: "265 32% 90%", glow: "264 26% 47%" },
] as const;

const learningPathTones = [
  { accent: "97 29% 38%", soft: "86 42% 88%" },
  { accent: "39 76% 45%", soft: "43 70% 88%" },
  { accent: "174 36% 34%", soft: "168 39% 88%" },
  { accent: "212 28% 40%", soft: "210 34% 89%" },
  { accent: "350 38% 45%", soft: "354 45% 90%" },
  { accent: "264 26% 44%", soft: "265 32% 90%" },
  { accent: "18 48% 43%", soft: "26 55% 89%" },
  { accent: "146 30% 34%", soft: "142 36% 88%" },
] as const;

function getModuleToneStyle(index: number): CSSProperties {
  const tone = moduleTones[index % moduleTones.length];

  return {
    "--module-accent": tone.accent,
    "--module-soft": tone.soft,
    "--module-glow": tone.glow,
  } as CSSProperties;
}

function getLearningPathToneStyle(index: number): CSSProperties {
  const tone = learningPathTones[index % learningPathTones.length];

  return {
    "--learning-accent": tone.accent,
    "--learning-soft": tone.soft,
  } as CSSProperties;
}

export function ResearchProjectModules({ locale = defaultLocale }: { locale?: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const uiCopy = projectModuleCopy[locale];

  useEffect(() => {
    let jumpTimer: number | null = null;

    const jumpToProject = (projectId?: string) => {
      const id = projectId ?? decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) {
        return;
      }

      const target = researchProjectLinks.find((item) => item.id === id);
      if (!target) {
        return;
      }

      setOpenIndex(target.categoryIndex);

      if (jumpTimer) {
        window.clearTimeout(jumpTimer);
      }

      jumpTimer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 420);
    };

    const handleHashChange = () => jumpToProject();
    const handleProjectJump = (event: Event) => {
      const detail = (event as CustomEvent<{ id?: string }>).detail;
      jumpToProject(detail?.id);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("research-project-jump", handleProjectJump);
    jumpToProject();

    return () => {
      if (jumpTimer) {
        window.clearTimeout(jumpTimer);
      }
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("research-project-jump", handleProjectJump);
    };
  }, []);

  return (
    <div className="mt-12 grid gap-5">
      <ProjectInlineDirectory locale={locale} />
      {researchCategories.map((category, index) => {
        const isOpen = openIndex === index;
        const moduleToneStyle = getModuleToneStyle(index);
        const categoryDisplay = getCategoryDisplay(category, locale);
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
            style={moduleToneStyle}
            className={cn("material-card research-module-card overflow-hidden", isOpen ? "research-module-card-open" : "")}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="focus-ring group w-full p-5 text-left transition md:p-7"
              aria-expanded={isOpen}
            >
              {previewImages.length > 0 ? (
                <div className="mb-7 flex flex-wrap items-start justify-start gap-3 md:gap-4">
                  {previewImages.map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${category.title} project preview ${imageIndex + 1}`}
                      className="h-[clamp(7rem,9.4vw,9.75rem)] w-auto max-w-full min-w-0 object-contain transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.015]"
                    />
                  ))}
                </div>
              ) : null}

              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.25fr)] lg:items-end">
                <div className="min-w-0">
                  <div className="module-meta-row flex max-w-full items-center gap-2 overflow-x-auto pb-1">
                    <div className="module-index-chip inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="module-count-chip inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
                      <Layers3 className="h-3.5 w-3.5" />
                      {locale === "zh" ? `${category.projects.length}${uiCopy.projects}` : `${category.projects.length} ${uiCopy.projects}`}
                    </div>
                    {categoryDisplay.signal.split(", ").map((item) => (
                      <span key={item} className={topicChipClass}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-5 max-w-full text-[clamp(1.55rem,2.55vw,2.45rem)] font-semibold leading-[1.08] tracking-normal text-foreground md:whitespace-nowrap">
                    {categoryDisplay.title}
                  </h3>
                  <p className="mt-4 max-w-5xl text-sm leading-7 text-muted-foreground md:text-[0.96rem]">
                    {categoryDisplay.description}
                  </p>
                </div>

                <div className="module-expand-card flex items-center justify-between rounded-3xl px-4 py-3 shadow-sm backdrop-blur-xl transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-material-sm">
                  <div>
                    <div className="module-eyebrow text-xs font-semibold uppercase tracking-[0.16em]">
                      {isOpen ? uiCopy.collapse : uiCopy.expand}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {uiCopy.openEvidence}
                    </div>
                  </div>
                  <ChevronDown
                    className={cn("module-chevron h-5 w-5 transition duration-300", isOpen ? "rotate-180" : "")}
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
                        <ProjectDetail
                          key={project.name}
                          project={project}
                          index={projectIndex}
                          toneOffset={index * 4 + projectIndex}
                          locale={locale}
                        />
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

function ProjectDetail({
  project,
  index,
  toneOffset,
  locale,
}: {
  project: ResearchProject;
  index: number;
  toneOffset: number;
  locale: Locale;
}) {
  const uiCopy = projectModuleCopy[locale];
  const displayProject = getProjectDisplay(project, locale);
  const images = project.images ?? (project.image ? [project.image] : []);
  const readmeHighlights = displayProject.readmeHighlights ?? [];
  const learningPath = project.learningPath ?? [];
  const [activeEvidencePanel, setActiveEvidencePanel] = useState<"notes" | "logic" | null>(null);
  const readmeLogic = displayProject.logicChain ?? ([
    { label: uiCopy.researchQuestion, value: displayProject.platformRole },
    { label: uiCopy.technicalApproach, value: displayProject.keywords.join(" -> ") },
    { label: uiCopy.keyContribution, value: displayProject.impact },
  ] as const);
  const toggleEvidencePanel = (panel: "notes" | "logic") => {
    setActiveEvidencePanel((current) => (current === panel ? null : panel));
  };

  return (
    <motion.article
      id={getResearchProjectId(project.name)}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.045, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "scroll-mt-28 grid gap-5 rounded-[28px] border border-white/10 bg-surface/25 p-4 shadow-sm backdrop-blur-xl lg:items-start",
        images.length > 0 ? "lg:grid-cols-[minmax(220px,0.34fr)_minmax(0,1fr)]" : "",
      )}
    >
      {images.length > 0 ? (
        <div className="grid gap-3">
          <ProjectVisual name={displayProject.name} images={images} />
        </div>
      ) : null}

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            {uiCopy.contribution}
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

        <h4 className="mt-4 text-2xl font-semibold tracking-normal text-foreground">{displayProject.name}</h4>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{displayProject.description}</p>

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
                {uiCopy.readmeNotes}
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
                {uiCopy.logicChain}
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
                        {uiCopy.readmeNotes}
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
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{uiCopy.logicChain}</div>
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
          <InfoBlock label={uiCopy.researchQuestion} value={displayProject.platformRole} />
          <InfoBlock label={uiCopy.technicalApproach} value={displayProject.keywords.join(" / ")} />
          <InfoBlock label={uiCopy.keyContribution} value={displayProject.impact} />
        </div>

        {displayProject.knowledgeIntro || learningPath.length > 0 ? (
          <div className="mt-5 rounded-2xl border border-white/10 bg-surface/20 p-4 shadow-sm backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <GraduationCap className="h-3.5 w-3.5" />
              {uiCopy.professionalKnowledge}
            </div>
            {displayProject.knowledgeIntro ? (
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{displayProject.knowledgeIntro}</p>
            ) : null}

            {learningPath.length > 0 ? (
              <>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent/90">
                  {uiCopy.learningPath}
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                  {learningPath.map((item, pathIndex) => (
                    <Link
                      key={`${project.name}-${item.href}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      style={getLearningPathToneStyle(toneOffset * 3 + pathIndex)}
                      className="learning-path-card focus-ring group rounded-2xl border p-3 text-left transition hover:-translate-y-0.5"
                    >
                      <span className="learning-path-source block text-[0.68rem] font-semibold uppercase tracking-[0.14em]">
                        {item.source}
                      </span>
                      <span className="mt-1 flex items-start justify-between gap-3 text-sm font-semibold text-foreground">
                        <span className="flex min-w-0 items-start gap-2">
                          <OfficialBrandIcon
                            brand={getLearningPathBrand(item)}
                            className="learning-path-title-icon mt-0.5 h-5 w-5"
                            imageClassName="p-[3px]"
                            fallbackClassName="text-[0.48rem]"
                          />
                          <span className="min-w-0">{item.label}</span>
                        </span>
                        <ArrowUpRight className="learning-path-arrow mt-0.5 h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="mt-2 block text-xs leading-5 text-muted-foreground">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        ) : null}

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

function ProjectInlineDirectory({ locale }: { locale: Locale }) {
  const uiCopy = projectModuleCopy[locale];

  return (
    <nav
      className="project-inline-index sticky top-20 z-30 -mx-1 flex gap-2 overflow-x-auto rounded-3xl px-2 py-2 xl:hidden"
      aria-label={uiCopy.directory}
    >
      {researchProjectLinks.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          title={`${item.projectName} - ${item.categoryTitle}`}
          onClick={() => {
            window.dispatchEvent(new CustomEvent("research-project-jump", { detail: { id: item.id } }));
          }}
          className="project-jump-link focus-ring shrink-0 rounded-2xl px-3 py-2 text-xs font-semibold"
        >
          {item.shortName}
        </a>
      ))}
    </nav>
  );
}

function ProjectVisual({ name, images }: { name: string; images: readonly string[] }) {
  return (
    <div className="grid w-full max-w-[34rem] gap-3">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={index === 0 ? `${name} screenshot` : `${name} supporting screenshot ${index}`}
          className="block w-full max-w-full object-contain"
        />
      ))}
    </div>
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
