type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
