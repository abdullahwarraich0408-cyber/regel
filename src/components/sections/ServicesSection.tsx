import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight, Sparkles, Check } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useServices } from "@/hooks/useServices";
import { getEventTypeIcon } from "@/lib/event-type-icons";

export function ServicesSection({ limit }: { limit?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const revealRef = useScrollReveal();
  const { data: services = [], isLoading } = useServices();
  const list = limit ? services.slice(0, limit) : services;

  useEffect(() => {
    if (activeIndex >= list.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, list.length]);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              {Array.from({ length: limit ?? 6 }).map((_, index) => (
                <div key={index} className="h-20 animate-pulse rounded-2xl bg-muted/40" />
              ))}
            </div>
            <div className="min-h-[28rem] animate-pulse rounded-3xl bg-muted/40" />
          </div>
        </div>
      </section>
    );
  }

  if (list.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container-prose text-center">
          <span className="eyebrow mx-auto">Our Services</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Services coming soon
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Styling services will appear here once published from the admin panel.
          </p>
        </div>
      </section>
    );
  }

  if (limit) {
    const activeService = list[activeIndex] ?? list[0];
    const ActiveIcon = getEventTypeIcon(activeService.icon);
    const highlights = activeService.highlights ?? [];

    return (
      <section
        ref={revealRef}
        className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-muted/10"
      >
        <div className="container-prose">
          <div className="flex flex-col items-center text-center justify-between gap-6 md:flex-row md:items-end md:text-left reveal-on-scroll">
            <div className="max-w-2xl flex flex-col items-center md:items-start">
              <span className="eyebrow">Our Styling Services</span>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
                Elevate every moment with
                <span className="block text-[oklch(0.78_0.06_20)]">bespoke event decor</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground mx-auto md:mx-0">
              From intimate birthday setups to grand wedding receptions, explore how we craft
              timeless experiences across Manchester.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
            {list.slice(0, 3).map((service, index) => {
              const delayClass = `reveal-delay-${(index % 2) * 150}`;
              return (
                <div key={service.id} className={`reveal-on-scroll ${delayClass}`}>
                  <ServiceCard service={service} />
                </div>
              );
            })}
          </div>

          <div className="mt-16 hidden lg:grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch reveal-on-scroll reveal-delay-100">
            <div className="flex flex-col gap-2.5 justify-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Click a service to explore concepts
              </div>
              {list.map((service, idx) => {
                const Icon = getEventTypeIcon(service.icon);
                const active = idx === activeIndex;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`group flex items-center justify-between rounded-2xl border p-4.5 text-left transition-all duration-300 w-full ${
                      active
                        ? "border-[oklch(0.78_0.06_20)] bg-gradient-to-r from-[oklch(0.32_0.06_300_/_0.06)] to-[oklch(0.78_0.06_20_/_0.06)] text-[oklch(0.78_0.06_20)] shadow-soft translate-x-1.5"
                        : "border-border/60 bg-card/50 hover:border-accent hover:bg-background/80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 ${
                          active
                            ? "bg-gradient-gold text-midnight"
                            : "bg-secondary/40 text-foreground/75"
                        }`}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <span className="block font-display text-lg leading-tight font-medium">
                          {service.title}
                        </span>
                        <span className="block text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">
                          {service.bestFor}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        active
                          ? "text-[oklch(0.78_0.06_20)] translate-x-0.5"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="relative flex flex-col justify-between rounded-3xl border border-border/60 bg-gradient-luxury p-8 md:p-10 shadow-elegant transition-all duration-500 hover:shadow-luxury">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,oklch(0.78_0.06_20_/_0.08),transparent_50%)] pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <span className="glass-card inline-flex items-center gap-1.5 rounded-full px-4.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-foreground/85">
                    <Sparkles className="h-3.5 w-3.5 text-[oklch(0.8_0.08_85)]" /> Featured
                    Concept
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {activeService.bestFor}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft">
                      <ActiveIcon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl">{activeService.title}</h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground text-base max-w-xl">
                    {activeService.long}
                  </p>
                </div>

                {highlights.length > 0 ? (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/75">
                      What's Included
                    </h4>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 text-[oklch(0.55_0.06_150)] shrink-0" />
                          <span className="text-sm text-foreground/85">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-4 items-center justify-between relative">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 px-6 h-11 gold-glow"
                >
                  Book this styling
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-muted-foreground hover:text-[oklch(0.78_0.06_20)] transition-colors inline-flex items-center gap-1.5"
                >
                  View all details <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-center reveal-on-scroll">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-border/70 bg-background px-8 py-4 text-sm font-semibold transition-all hover:border-[oklch(0.78_0.06_20)] hover:text-[oklch(0.78_0.06_20)] hover:shadow-soft gold-glow"
            >
              Explore All Services
              <ChevronRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={revealRef} className="py-16 md:py-20 overflow-hidden">
      <div className="container-prose">
        <div className="flex flex-col items-center text-center justify-between gap-8 md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
              Elevate every moment with
              <span className="block text-[oklch(0.78_0.06_20)]">bespoke decor</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground mx-auto md:mx-0">
            From intimate gatherings to grand celebrations, every detail is crafted to reflect
            your unique vision and style.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, index) => {
            const delayClass = `reveal-delay-${(index % 3) * 100}`;
            return (
              <div
                key={service.id}
                className={`reveal-on-scroll ${delayClass} ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <ServiceCard service={service} isFeature={index === 0} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
