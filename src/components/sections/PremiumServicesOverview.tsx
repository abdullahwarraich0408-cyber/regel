"use client";

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getEventTypeIcon } from "@/lib/event-type-icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useServices } from "@/hooks/useServices";
import type { Service } from "@/data/services";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

function resolveMediaUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

type Pillar = (typeof siteConfig.premiumServices)[number];
type PillarRoute = `/${Pillar["slug"]}`;

const pillarRoutes: Record<Pillar["slug"], PillarRoute> = {
  "wedding-planning": "/wedding-planning",
  "event-management": "/event-management",
  "corporate-events": "/corporate-events",
};

type ServiceCardData = {
  key: string;
  slug: Pillar["slug"];
  title: string;
  description: string;
  icon: string;
  palette: [string, string];
  imageUrl?: string;
};

function matchApiImage(pillar: Pillar, apiServices: Service[]) {
  const matched = apiServices.find((service) => {
    const haystack = `${service.slug} ${service.title}`.toLowerCase();
    return pillar.match.some((token) => haystack.includes(token));
  });
  return matched?.imageUrl ? resolveMediaUrl(matched.imageUrl) : undefined;
}

function mapPillar(pillar: Pillar, apiServices: Service[]): ServiceCardData {
  return {
    key: pillar.slug,
    slug: pillar.slug,
    title: pillar.title,
    description: pillar.description,
    icon: pillar.icon,
    palette: pillar.palette,
    imageUrl: matchApiImage(pillar, apiServices),
  };
}

export function PremiumServicesOverview() {
  const { data: apiServices = [], isLoading } = useServices();
  const revealRef = useScrollReveal([isLoading, apiServices.length]);

  const services = siteConfig.premiumServices.map((pillar) =>
    mapPillar(pillar, apiServices),
  );

  return (
    <section ref={revealRef} className="bg-gradient-to-b from-muted/10 to-background py-16 md:py-24">
      <div className="container-prose">
        <div className="reveal-on-scroll mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto">Our Services</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-balance md:text-5xl">
            Premium styling for every
            <span className="block text-dusty-rose">celebration</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Dedicated pages for weddings, private celebrations, and corporate events — built for
            UK hosts who want luxury coordination without the guesswork.
          </p>
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
                const imageSrc = service.imageUrl ?? "";

                return (
                  <article
                    key={service.key}
                    className={`reveal-on-scroll reveal-delay-${index * 100} group flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-dusty-rose/40 hover:shadow-elegant`}
                  >
                    <Link
                      to={pillarRoutes[service.slug]}
                      className="relative block aspect-[4/3] overflow-hidden"
                      style={
                        imageSrc
                          ? undefined
                          : {
                              background: `linear-gradient(135deg, ${service.palette[0]} 0%, ${service.palette[1]} 100%)`,
                            }
                      }
                    >
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft">
                        <Icon className="h-5 w-5" />
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-2xl">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <Link
                        to={pillarRoutes[service.slug]}
                        className="mt-6 inline-flex h-11 min-h-[44px] items-center gap-2 text-sm font-semibold text-deep-plum transition-colors hover:text-dusty-rose"
                      >
                        Explore {service.title}
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
