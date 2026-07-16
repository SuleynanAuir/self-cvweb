import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { ResearchHero } from "@/components/research-hero";
import { ResearchProjectModules } from "@/components/research-project-modules";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { defaultLocale, homeCopy, type Locale } from "@/data/site-copy";

export function HomePageContent({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = homeCopy[locale];

  return (
    <>
      <ResearchHero locale={locale} />
      <div id="research-vision" className="scroll-mt-24" aria-hidden="true" />

      <section id="research-projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={copy.portfolioEyebrow}
            title={copy.portfolioTitle}
            description={copy.portfolioDescription}
          />
        </ScrollReveal>

        <ResearchProjectModules locale={locale} />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal className="material-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10" variant="scale">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-accent-soft/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {copy.contactEyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-foreground md:text-4xl">{copy.contactTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{copy.contactDescription}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="https://github.com/SuleynanAuir"
              target="_blank"
              rel="noreferrer"
              className="material-button focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="/papers"
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-surface/25 px-5 text-sm font-medium text-foreground shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-accent"
            >
              {copy.publications}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
