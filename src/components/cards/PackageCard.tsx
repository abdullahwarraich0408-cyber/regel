import { Check, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { PackageTier } from "@/data/packages";

export function PackageCard({ tier }: { tier: PackageTier }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-9 transition-all duration-500 ${
        tier.featured
          ? "border-[oklch(0.88_0.09_85)]/70 bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-luxury hover:-translate-y-2"
          : "border-border/60 bg-card shadow-soft hover:-translate-y-2 hover:border-[oklch(0.78_0.06_20)]/40 hover:shadow-elegant"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-midnight shadow-luxury">
          <Sparkles className="h-3.5 w-3.5" />
          Most Popular
        </span>
      )}
      <h3 className={`font-display text-3xl ${tier.featured ? "text-cream" : ""}`}>{tier.name}</h3>
      <p className={`mt-3 leading-relaxed ${tier.featured ? "text-cream/80" : "text-muted-foreground"}`}>
        {tier.tagline}
      </p>
      <div className={`mt-7 text-[11px] uppercase tracking-[0.24em] ${tier.featured ? "text-[oklch(0.88_0.09_85)]" : "text-muted-foreground"}`}>
        Ideal For
      </div>
      <p className={`mt-2 ${tier.featured ? "text-cream/90" : "text-foreground/85"}`}>{tier.bestFor}</p>

      <ul className="mt-7 space-y-4 flex-grow">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className={`mt-0.5 h-5 w-5 shrink-0 ${tier.featured ? "text-[oklch(0.88_0.09_85)]" : "text-[oklch(0.55_0.06_150)]"}`} />
            <span className={tier.featured ? "text-cream/90" : "text-foreground/85"}>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-9">
        <div className={`text-[11px] uppercase tracking-[0.24em] ${tier.featured ? "text-[oklch(0.88_0.09_85)]" : "text-muted-foreground"}`}>
          Investment
        </div>
        <div className={`mt-2 font-display text-3xl ${tier.featured ? "text-cream" : ""}`}>
          Custom Quote
        </div>
      </div>

      <Link
        to="/booking"
        className={`mt-9 w-full rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold h-auto py-4 transition-all duration-300 hover:brightness-110 ${
          tier.featured
            ? "bg-gradient-gold text-midnight shadow-luxury"
            : "bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream shadow-soft"
        }`}
      >
        Get Started Today
      </Link>
    </div>
  );
}
