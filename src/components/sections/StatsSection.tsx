import { siteConfig } from "@/lib/site-config";

const stats = siteConfig.stats;

export function StatsSection() {
  return (
    <section className="relative z-20 pb-6 pt-2 md:pb-8">
      <div className="container-prose">
        <div className="grid gap-4 rounded-[1.75rem] border border-border/60 bg-card/95 p-6 shadow-elegant backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 md:p-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative text-center sm:text-left lg:border-r lg:border-border/50 lg:last:border-r-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="font-display text-3xl text-deep-plum md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
