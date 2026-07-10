import { researchTimeline } from "@/data/research";
import { SectionHeading } from "@/components/section-heading";

export function ResearchTimeline() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Research Timeline"
          title="A staged path from foundations to autonomous AI systems."
          description="The roadmap is intentionally research-oriented: build foundations, implement systems, then connect papers and projects into a reusable knowledge graph."
        />
        <div className="mt-12 grid gap-0 overflow-hidden rounded-lg border border-border md:grid-cols-3">
          {researchTimeline.map((item, index) => (
            <article key={item.year} className="border-border bg-background p-6 md:border-l first:md:border-l-0">
              <div className="flex items-center justify-between gap-4">
                <div className="text-3xl font-semibold">{item.year}</div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs text-muted-foreground">
                  {index + 1}
                </div>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-normal">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
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
