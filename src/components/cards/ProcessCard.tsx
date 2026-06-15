interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export function ProcessCard({ step, title, description }: ProcessStep) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="font-display text-5xl text-accent/80">{step}</div>
      <h3 className="mt-3 font-display text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
