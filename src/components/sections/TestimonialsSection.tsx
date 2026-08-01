"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import { testimonials as fallbackTestimonials } from "@/data/testimonials";
import { useTestimonials } from "@/hooks/useTestimonials";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { siteConfig } from "@/lib/site-config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  const { data: apiTestimonials = [], isLoading } = useTestimonials();
  const revealRef = useScrollReveal([isLoading, apiTestimonials.length]);

  const items =
    apiTestimonials.length > 0
      ? apiTestimonials.map((t) => ({
          quote: t.quote,
          name: t.name,
          event: t.event,
          rating: t.rating,
          source: t.source,
        }))
      : fallbackTestimonials.map((t) => ({ ...t, source: "client" as const }));

  const { googleReviews } = siteConfig;

  return (
    <section
      ref={revealRef}
      className="overflow-hidden bg-gradient-to-b from-muted/20 to-background py-16 md:py-24"
    >
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center reveal-on-scroll">
          <span className="eyebrow mx-auto">Client Love</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Trusted by hosts who want
            <span className="block text-dusty-rose">something truly special</span>
          </h2>
        </div>

        <div className="mt-10 reveal-on-scroll">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {items.map((item) => (
                <CarouselItem key={`${item.name}-${item.event}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <figure className="group relative flex h-full flex-col rounded-[1.75rem] border border-border/60 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-dusty-rose/40 hover:shadow-elegant">
                    <Quote className="h-8 w-8 text-soft-gold/80" aria-hidden />
                    <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 border-t border-border/50 pt-6">
                      <div className="flex gap-1">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-soft-gold text-soft-gold"
                            aria-hidden
                          />
                        ))}
                      </div>
                      <div className="mt-3 font-display text-xl">{item.name}</div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {item.event}
                        {item.source === "google" ? " · Google Review" : ""}
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="mt-10 reveal-on-scroll">
          <a
            href={googleReviews.url}
            target="_blank"
            rel="noreferrer"
            className="mx-auto flex max-w-xl flex-col items-center rounded-[1.75rem] border border-border/60 bg-card p-6 text-center shadow-soft transition-all hover:border-dusty-rose/40 hover:shadow-elegant sm:flex-row sm:gap-6 sm:text-left"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-midnight shadow-soft">
              <span className="font-display text-2xl font-bold">G</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-1 sm:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-soft-gold text-soft-gold" />
                ))}
                <span className="ml-2 text-sm font-semibold">{googleReviews.rating}.0</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {googleReviews.count}+ reviews on Google · {googleReviews.placeName}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-deep-plum sm:mt-0">
              Read Google reviews
              <ExternalLink className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
