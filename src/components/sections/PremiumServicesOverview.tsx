"use client";

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getEventTypeIcon } from "@/lib/event-type-icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useServices } from "@/hooks/useServices";
import type { Service } from "@/data/services";

const cardPalettes: [string, string][] = siteConfig.premiumServices.map((service) => service.palette);

type ServiceCardData = {
  key: string;
  title: string;
  description: string;
  icon: string;
  palette: [string, string];
};

function mapApiService(service: Service, index: number): ServiceCardData {
  return {
    key: service.id,
    title: service.title,
    description: service.short,
    icon: service.icon,
    palette: cardPalettes[index % cardPalettes.length],
  };
}

function mapFallbackService(
  service: (typeof siteConfig.premiumServices)[number],
): ServiceCardData {
  return {
    key: service.slug,
    title: service.title,
    description: service.description,
    icon: service.icon,
    palette: service.palette,
  };
}

export function PremiumServicesOverview() {
  const { data: apiServices = [], isLoading } = useServices();
  const revealRef = useScrollReveal([isLoading, apiServices.length]);

  const services: ServiceCardData[] =
    apiServices.length > 0
      ? apiServices.slice(0, 3).map(mapApiService)
      : siteConfig.premiumServices.map(mapFallbackService);

  return (
    <section ref={revealRef} className="bg-gradient-to-b from-muted/10 to-background py-16 md:py-24">
      <div className="container-prose">
        <div className="reveal-on-scroll mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto">Our Services</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-balance md:text-5xl">
            Premium styling for every
            <span className="block text-dusty-rose">celebration</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-soft"
                >
                  <div className="aspect-[4/3] animate-pulse bg-muted/50" />
                  <div className="space-y-3 p-7">
                    <div className="h-7 w-2/3 animate-pulse rounded bg-muted/50" />
                    <div className="h-16 animate-pulse rounded bg-muted/40" />
                    <div className="h-4 w-24 animate-pulse rounded bg-muted/50" />
                  </div>
                </div>
              ))
            : services.map((service, index) => {
                const Icon = getEventTypeIcon(service.icon);
                return (
                  <article
                    key={service.key}
                    className={`reveal-on-scroll reveal-delay-${index * 100} group flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-dusty-rose/40 hover:shadow-elegant`}
                  >
                    <div
                      className="relative aspect-[4/3] overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${service.palette[0]} 0%, ${service.palette[1]} 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                      <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-2xl">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <Link
                        to="/services"
                        className="mt-6 inline-flex h-11 min-h-[44px] items-center gap-2 text-sm font-semibold text-deep-plum transition-colors hover:text-dusty-rose"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
        </div>
      </div>
    </section>
  );
}
