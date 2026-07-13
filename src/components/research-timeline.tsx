import { researchTimeline } from "@/data/research";
import { SectionHeading } from "@/components/section-heading";

export function ResearchTimeline() {
  return (
    <section className="border-y border-border/50 bg-surface/24 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Agent Pipeline"
          title="From raw research evidence to structured scientific answers."
          description="A staged workflow connects data preparation, graph retrieval, reasoning, and report generation into one coherent analysis loop."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {researchTimeline.map((item, index) => (
            <article
              key={item.year}
              className="material-card interactive-lift animate-fade-up p-6"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-3xl font-semibold text-accent">{item.year}</div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                  {index + 1}
                </div>
              </div>
              <div className="analysis-line mt-6 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-accent" style={{ width: `${64 + index * 12}%` }} />
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-normal">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
