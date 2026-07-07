import type { Service } from "@/data/services";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getEventTypeIcon } from "@/lib/event-type-icons";

export function ServiceCard({
  service,
  isFeature = false,
}: {
  service: Service;
  isFeature?: boolean;
}) {
  const Icon = getEventTypeIcon(service.icon);

  return (
    <Link
      to="/booking"
      className={`group relative flex h-full flex-col overflow-hidden transition-all duration-300 gold-glow focus-on-scroll ${
        isFeature
          ? "rounded-3xl border border-border/60 bg-gradient-luxury p-10 shadow-elegant hover:-translate-y-2 hover:shadow-luxury"
          : "rounded-2xl border border-cream/10 bg-gradient-to-br from-deep-plum to-midnight text-cream p-7 shadow-elegant hover:-translate-y-2 hover:border-soft-gold/30 hover:shadow-luxury"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`grid place-items-center rounded-xl bg-gradient-gold text-midnight transition-transform duration-300 group-hover:scale-110 ${isFeature ? "h-16 w-16 shadow-luxury" : "h-12 w-12 shadow-soft"}`}
        >
          <Icon className={isFeature ? "h-7 w-7" : "h-5 w-5"} />
        </span>
        <span
          className={`uppercase tracking-[0.22em] ${isFeature ? "text-[11px]" : "text-[10px]"} ${isFeature ? "text-muted-foreground" : "text-soft-gold/90"} font-semibold`}
        >
          {service.bestFor}
        </span>
      </div>
      <h3
        className={`mt-6 font-display leading-tight transition-colors duration-300 ${isFeature ? "text-4xl group-hover:text-[oklch(0.78_0.06_20)]" : "text-2xl text-cream group-hover:text-soft-gold"}`}
      >
        {service.title}
      </h3>
      <p
        className={`mt-4 leading-relaxed ${isFeature ? "text-base text-muted-foreground" : "text-sm text-cream/70"}`}
      >
        {service.short}
      </p>
      <div
        className={`mt-auto flex items-center gap-2 pt-8 font-semibold transition-colors duration-300 ${isFeature ? "text-base group-hover:text-[oklch(0.78_0.06_20)]" : "text-sm text-cream/90 group-hover:text-soft-gold"}`}
      >
        Book Now
        <ArrowUpRight
          className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isFeature ? "h-5 w-5" : "h-4 w-4"}`}
        />
      </div>
    </Link>
  );
}
