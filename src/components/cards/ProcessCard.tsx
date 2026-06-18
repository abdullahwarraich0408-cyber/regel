import { LucideIcon } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  index: number;
  icon: LucideIcon;
}

export function ProcessCard({ step, title, description, index, icon: Icon }: ProcessStep) {
  return (
    <div className="group relative flex h-full flex-col rounded-[1.75rem] border border-border bg-card/40 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant hover:bg-card/90 gold-glow backdrop-blur-sm">
      {/* Minimalist Timeline dot for desktop (small gold gem on the line) */}
      <div
        className={`absolute top-9 hidden h-4 w-4 rounded-full bg-gradient-gold border-2 border-background lg:block transition-all duration-300 group-hover:scale-125 z-10 ${
          index % 2 === 0 ? "lg:-right-[2.5rem]" : "lg:-left-[2.5rem]"
        }`}
        style={{
          boxShadow: "0 0 10px var(--soft-gold)",
        }}
      />

      <div className="flex items-center justify-between gap-4">
        {/* Elegant numbered title */}
        <h3 className="font-display text-2xl leading-snug transition-colors duration-300 group-hover:text-[oklch(0.78_0.06_20)]">
          <span className="text-[oklch(0.78_0.06_20)]/45 font-sans font-medium text-lg mr-2.5">
            {step}
          </span>
          {title}
        </h3>
        {/* Step icon */}
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/40 text-foreground/80 transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-midnight">
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-muted-foreground text-sm flex-grow">
        {description}
      </p>
    </div>
  );
}
