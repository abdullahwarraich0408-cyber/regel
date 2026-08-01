"use client";

import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import { useInstagramFeed } from "@/hooks/useInstagramFeed";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { InstagramCarouselSlide } from "@/components/cards/InstagramCarouselSlide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function InstagramSection() {
  const { data, isLoading } = useInstagramFeed();
  const posts = data?.posts ?? [];
  const username = data?.username ?? "regal.knot.events";
  const followerCount = data?.followerCount ?? 0;
  const profileUrl = siteConfig.social.instagram;
  const revealRef = useScrollReveal([isLoading, posts.length]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [reelPlaying, setReelPlaying] = useState(false);

  const handleAdvance = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handlePlayingChange = useCallback(
    (playing: boolean) => {
      if (playing) {
        setReelPlaying(true);
        return;
      }
      setReelPlaying(false);
    },
    []
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || posts.length === 0) return;

    const viewport = api.rootNode().querySelector<HTMLElement>(".overflow-hidden");
    if (!viewport) return;

    const syncHeight = () => {
      const slide = api.slideNodes()[api.selectedScrollSnap()];
      if (slide) {
        viewport.style.height = `${slide.offsetHeight}px`;
      }
    };

    syncHeight();
    api.on("select", syncHeight);
    api.on("reInit", syncHeight);
    window.addEventListener("resize", syncHeight);

    return () => {
      api.off("select", syncHeight);
      api.off("reInit", syncHeight);
      window.removeEventListener("resize", syncHeight);
      viewport.style.height = "";
    };
  }, [api, posts.length]);

  useEffect(() => {
    setReelPlaying(false);
  }, [current]);

  useEffect(() => {
    if (!api || posts.length <= 1 || reelPlaying) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 8000);

    return () => window.clearInterval(timer);
  }, [api, posts.length, reelPlaying]);

  return (
    <section ref={revealRef} className="overflow-hidden border-y border-border/40 bg-gradient-to-b from-background to-muted/15 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container-prose">
        <div className="flex flex-col items-start justify-between gap-5 reveal-on-scroll sm:gap-6 md:flex-row md:items-end">
          <div className="min-w-0 flex-1">
            <span className="eyebrow">Social Proof</span>
            <h2 className="mt-3 font-display text-[1.75rem] leading-tight sm:text-3xl md:text-4xl">
              Real events from
              <span className="block text-dusty-rose italic">@{username}</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-4">
              Scroll our latest weddings, celebrations, and behind-the-scenes styling — then check
              availability for your date.
              {followerCount > 0 ? ` · ${followerCount.toLocaleString()} followers` : ""}
            </p>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-full min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full border border-border/70 bg-background px-5 text-sm font-semibold transition-all hover:border-dusty-rose hover:shadow-soft sm:h-12 sm:w-auto sm:px-6 md:min-h-[48px]"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </div>

        <div className="mt-8 reveal-on-scroll sm:mt-10">
          {isLoading ? (
            <div className="mx-auto max-w-[1280px] overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft sm:rounded-[1.75rem] lg:rounded-[2rem]">
              <div className="flex flex-col md:h-[480px] md:flex-row lg:h-[520px] xl:h-[560px]">
                <div className="mx-auto aspect-[9/16] w-full max-w-[240px] animate-pulse bg-muted/50 sm:max-w-[280px] md:aspect-auto md:h-full md:max-w-none md:w-[min(42%,340px)] lg:w-[min(38%,400px)] lg:min-w-[300px]" />
                <div className="flex flex-1 flex-col justify-center space-y-4 p-5 sm:p-6 md:p-6 lg:p-10">
                  <div className="h-4 w-32 animate-pulse rounded bg-muted/50" />
                  <div className="h-16 animate-pulse rounded-xl bg-muted/40 sm:h-20" />
                  <div className="h-11 w-full animate-pulse rounded-full bg-muted/50 sm:w-[200px]" />
                </div>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/70 px-5 py-10 text-center sm:rounded-[1.75rem] sm:px-6 sm:py-12">
              <p className="font-display text-xl text-foreground/85 sm:text-2xl">
                See our real event work on Instagram
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Our latest celebrations live on @{username}. Follow for proof of every setup — then
                enquire about your date.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border/70 bg-background px-5 text-sm font-semibold hover:border-dusty-rose"
                >
                  <Instagram className="h-4 w-4" />
                  Follow @{username}
                </a>
                <Link
                  to="/booking"
                  onClick={() =>
                    trackConversion("availability_click", { location: "instagram_empty" })
                  }
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-midnight px-5 text-sm font-semibold text-cream"
                >
                  {siteConfig.cta.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="relative mx-auto w-full max-w-[1280px]">
              <Carousel setApi={setApi} opts={{ align: "center", loop: true }} className="w-full">
                <CarouselContent className="-ml-0 items-start">
                  {posts.slice(0, 8).map((post, index) => (
                    <CarouselItem key={post.id} className="h-auto pl-0">
                      <InstagramCarouselSlide
                        post={post}
                        isActive={current === index}
                        onAdvance={handleAdvance}
                        onPlayingChange={current === index ? handlePlayingChange : undefined}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="hidden h-10 w-10 border-border/70 bg-background/95 shadow-soft hover:border-dusty-rose hover:bg-background disabled:opacity-30 md:flex md:-left-3 lg:-left-5 xl:-left-12 xl:h-11 xl:w-11" />
                <CarouselNext className="hidden h-10 w-10 border-border/70 bg-background/95 shadow-soft hover:border-dusty-rose hover:bg-background disabled:opacity-30 md:flex md:-right-3 lg:-right-5 xl:-right-12 xl:h-11 xl:w-11" />

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:mt-6 md:hidden">
                  <CarouselPrevious className="static h-10 w-10 translate-y-0 border-border/70 bg-background shadow-soft hover:border-dusty-rose hover:bg-background disabled:opacity-30" />
                  <div className="flex max-w-[min(100%,16rem)] flex-wrap items-center justify-center gap-1.5 sm:max-w-none sm:gap-2">
                    {posts.slice(0, 8).map((post, index) => (
                      <button
                        key={post.id}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                          current === index
                            ? "w-6 bg-gradient-to-r from-deep-plum to-dusty-rose sm:w-8"
                            : "w-1.5 bg-border hover:bg-dusty-rose/50 sm:w-2"
                        }`}
                      />
                    ))}
                  </div>
                  <CarouselNext className="static h-10 w-10 translate-y-0 border-border/70 bg-background shadow-soft hover:border-dusty-rose hover:bg-background disabled:opacity-30" />
                </div>

                <div className="mt-5 hidden items-center justify-center gap-2 sm:mt-6 md:flex">
                  {posts.slice(0, 8).map((post, index) => (
                    <button
                      key={post.id}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        current === index
                          ? "w-8 bg-gradient-to-r from-deep-plum to-dusty-rose"
                          : "w-2 bg-border hover:bg-dusty-rose/50"
                      }`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>
          )}
        </div>

        {posts.length > 0 ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 reveal-on-scroll sm:mt-10">
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border/70 bg-background px-6 text-sm font-semibold transition-all hover:border-dusty-rose hover:shadow-soft"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </a>
            <Link
              to="/booking"
              onClick={() =>
                trackConversion("availability_click", { location: "instagram_section" })
              }
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-midnight px-6 text-sm font-semibold text-cream shadow-soft transition-all hover:scale-[1.02]"
            >
              {siteConfig.cta.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
