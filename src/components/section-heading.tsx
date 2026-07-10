type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-normal text-balance md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
