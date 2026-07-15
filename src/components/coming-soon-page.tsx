import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export function ComingSoonPage({ eyebrow, title, description, items }: ComingSoonPageProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <Link
        href="/asrl_agent_ml_dl_cv_nlp"
        className="focus-ring inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-medium text-muted-foreground shadow-material-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
      <ScrollReveal className="material-card mt-12 p-8 md:p-10" variant="scale">
        <div className="inline-flex items-center gap-3 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <FlaskConical className="h-4 w-4" />
          {eyebrow}
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-normal text-balance md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{description}</p>
        <div className="mt-10 flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
