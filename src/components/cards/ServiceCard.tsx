import type { Service } from "@/data/services";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      to="/booking"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-elegant"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-charcoal shadow-gold">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {service.bestFor}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl leading-tight">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-foreground/85 transition-colors group-hover:text-accent">
        Plan with us
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
