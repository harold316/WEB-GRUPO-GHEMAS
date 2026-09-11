export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-hero px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
      <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-aqua/25 blur-3xl dark:bg-aqua/10" />
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
