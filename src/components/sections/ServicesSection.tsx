import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="py-24 md:py-32">
      <div className="container-prose">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Our services</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
              Decor that feels personal, polished, and unforgettable.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            From intimate birthdays to statement wedding backdrops, every styling element is chosen
            with intention — and installed by our team on the day.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>

        {limit && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
