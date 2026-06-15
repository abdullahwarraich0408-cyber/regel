import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blush/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-champagne/60 blur-3xl" />
      </div>

      <div className="container-prose relative grid gap-14 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-40">
        <div>
          <span className="eyebrow">Manchester Event Decor Studio</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            Elegant event decor
            <span className="block italic text-accent">for unforgettable celebrations.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75 text-balance">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/booking">
                {siteConfig.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/20 bg-background/40 px-7 backdrop-blur">
              <Link to="/services">Explore services</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {siteConfig.trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-foreground/15 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-elegant">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,oklch(0.93_0.05_30)_0%,oklch(0.78_0.09_70)_55%,oklch(0.35_0.05_60)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.45),transparent_55%)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="glass-card inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> Editorial styling
              </div>
              <div className="mt-4 font-display text-3xl leading-tight text-ivory drop-shadow">
                Considered details.
                <br /> Designed moments.
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-border bg-background p-5 shadow-elegant md:block">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Now booking
            </div>
            <div className="mt-1 font-display text-xl">2026 wedding season</div>
            <Link to="/booking" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline">
              Reserve your date <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
