import { siteConfig } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Handshake, Star, CalendarDays } from "lucide-react";

const icons = [CalendarDays, Star, Award, Handshake];

export function TrustSection() {
  const revealRef = useScrollReveal();
  const stats = siteConfig.stats;

  return (
    <section ref={revealRef} className="py-16 md:py-20">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center reveal-on-scroll">
          <span className="eyebrow mx-auto">Why Clients Trust Us</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Built on experience,
            <span className="block text-dusty-rose italic">delivered with care</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index] ?? Star;
            return (
              <div
                key={stat.label}
                className={`reveal-on-scroll reveal-delay-${index * 75} rounded-[1.75rem] border border-border/60 bg-card p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-dusty-rose/30 hover:shadow-elegant`}
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-3xl text-deep-plum md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
