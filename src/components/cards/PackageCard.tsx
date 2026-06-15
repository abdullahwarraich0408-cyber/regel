import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { PackageTier } from "@/data/packages";
import { Button } from "@/components/ui/button";

export function PackageCard({ tier }: { tier: PackageTier }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
        tier.featured
          ? "border-accent/70 bg-charcoal text-ivory shadow-elegant"
          : "border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-elegant"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal shadow-gold">
          Most requested
        </span>
      )}
      <h3 className={`font-display text-3xl ${tier.featured ? "text-ivory" : ""}`}>{tier.name}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${tier.featured ? "text-ivory/75" : "text-muted-foreground"}`}>
        {tier.tagline}
      </p>
      <div className={`mt-6 text-[11px] uppercase tracking-[0.22em] ${tier.featured ? "text-accent" : "text-muted-foreground"}`}>
        Best for
      </div>
      <p className={`mt-1 text-sm ${tier.featured ? "text-ivory/90" : "text-foreground/85"}`}>{tier.bestFor}</p>

      <ul className="mt-6 space-y-3">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-accent" : "text-emerald-deep"}`} />
            <span className={tier.featured ? "text-ivory/90" : "text-foreground/85"}>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-end justify-between">
        <div>
          <div className={`text-[11px] uppercase tracking-[0.22em] ${tier.featured ? "text-accent" : "text-muted-foreground"}`}>
            Investment
          </div>
          <div className={`mt-1 font-display text-2xl ${tier.featured ? "text-ivory" : ""}`}>
            Custom quote
          </div>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        variant={tier.featured ? "secondary" : "default"}
        className="mt-8 w-full rounded-full"
      >
        <Link to="/booking">Request a quote</Link>
      </Button>
    </div>
  );
}
