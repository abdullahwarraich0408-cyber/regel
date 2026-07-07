"use client";

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import { buildHeroFanImages, heroFallbackImages } from "@/lib/hero-fan-images";
import { resolvePortfolioMediaUrl } from "@/lib/portfolio-api";
import { useInstagramFeed } from "@/hooks/useInstagramFeed";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";

const sizeClasses = {
  "fan-outer":
    "h-[clamp(120px,22vh,280px)] w-[clamp(62px,11vw,145px)] sm:h-[clamp(148px,24vh,320px)] sm:w-[clamp(76px,12vw,165px)]",
  "fan-inner":
    "h-[clamp(132px,24vh,300px)] w-[clamp(68px,12vw,158px)] sm:h-[clamp(160px,26vh,360px)] sm:w-[clamp(82px,13vw,188px)]",
  "fan-center":
    "h-[clamp(148px,30vh,340px)] w-[clamp(76px,13vw,178px)] sm:h-[clamp(184px,32vh,400px)] sm:w-[clamp(94px,14.5vw,208px)] lg:h-[clamp(220px,36vh,480px)] lg:w-[clamp(112px,16vw,248px)]",
};

function HeroScribbleLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="50"
      viewBox="0 0 80 72"
      fill="none"
      aria-hidden
    >
      <path
        d="M72 8C58 18 42 22 28 18C16 14 8 24 12 36C16 48 30 52 44 46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M44 46L36 58M44 46L52 54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroScribbleRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="44"
      viewBox="0 0 88 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 42C24 28 42 18 62 22C78 26 84 38 76 48C66 60 44 58 28 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M58 18C62 10 70 8 78 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroFanCard({
  image,
  index,
}: {
  image: ReturnType<typeof buildHeroFanImages>[number];
  index: number;
}) {
  const [src, setSrc] = useState(image.imageUrl);
  const [failed, setFailed] = useState(false);
  const isCenter = Boolean(image.featured);
  const hiddenOnMobile = index === 0 || index === 4;

  const handleError = () => {
    if (src !== image.fallbackUrl) {
      setSrc(image.fallbackUrl);
      return;
    }

    const backup = heroFallbackImages[index];
    if (src !== backup) {
      setSrc(backup);
      return;
    }

    setFailed(true);
  };

  return (
    <div
      className={`relative shrink-0 transition-transform duration-500 hover:-translate-y-0.5 ${image.rotate} ${
        sizeClasses[image.size]
      } ${hiddenOnMobile ? "hidden sm:block" : ""}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-xl border border-border/40 shadow-elegant sm:rounded-2xl lg:rounded-[1.35rem] ${
          isCenter
            ? "ring-2 ring-soft-gold/40 ring-offset-1 ring-offset-[oklch(0.97_0.018_95)] sm:ring-offset-2"
            : ""
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${image.palette[0]} 0%, ${image.palette[1]} 100%)`,
          }}
        />

        {!failed ? (
          <img
            src={src}
            alt={image.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading={isCenter ? "eager" : "lazy"}
            decoding="async"
            onError={handleError}
          />
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-t from-midnight/55 via-midnight/10 to-transparent" />

        {isCenter ? (
          <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 lg:p-3">
            <Link
              to="/booking"
              onClick={() => trackConversion("consultation_click")}
              className="inline-flex h-8 w-full items-center justify-center rounded-full border border-midnight/15 bg-cream/95 px-3 text-[11px] font-semibold text-midnight shadow-soft transition-all hover:bg-cream sm:h-9 sm:text-xs lg:h-10 lg:text-sm"
            >
              Get started
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function HeroSection() {
  const { data: instagramData } = useInstagramFeed();
  const { data: portfolioItems = [] } = usePortfolioItems();

  const fanImages = useMemo(() => {
    const portfolioUrls = portfolioItems.flatMap((item) => {
      const urls: string[] = [];
      if (item.imageUrl) urls.push(resolvePortfolioMediaUrl(item.imageUrl));
      if (item.gallery?.length) {
        urls.push(...item.gallery.map(resolvePortfolioMediaUrl));
      }
      return urls;
    });

    const instagramUrls = (instagramData?.posts ?? []).map((post) => post.imageUrl);

    return buildHeroFanImages(instagramUrls, portfolioUrls);
  }, [portfolioItems, instagramData?.posts]);

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-[oklch(0.97_0.018_95)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(1_0_0_/_0.65),transparent_58%)]" />

      <div className="container-prose relative z-10 flex min-h-[calc(100svh-5rem)] flex-col items-center justify-between px-4 pb-4 pt-8 text-center sm:pb-5 sm:pt-10 md:pt-12 lg:pb-6 lg:pt-14">
        <div className="flex shrink-0 flex-col items-center">
          <Link
            to="/booking"
            onClick={() => trackConversion("availability_click")}
            className="hero-fade-in inline-flex items-center gap-1.5 rounded-full bg-midnight px-4 py-2 text-xs font-semibold text-cream shadow-soft transition-transform hover:scale-[1.03] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            style={{ animationDelay: "0.05s" }}
          >
            Plan your celebration
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>

          <div
            className="hero-fade-in relative mx-auto mt-3 max-w-4xl sm:mt-4 lg:mt-5"
            style={{ animationDelay: "0.12s" }}
          >
            <HeroScribbleLeft className="absolute -left-6 top-0 hidden text-deep-plum/70 lg:-left-12 lg:block" />
            <HeroScribbleRight className="absolute -right-6 top-4 hidden text-deep-plum/70 lg:-right-10 lg:block" />

            <h1 className="mx-auto max-w-[16ch] font-sans text-[1.45rem] font-bold leading-[1.1] tracking-tight text-midnight sm:max-w-3xl sm:text-3xl md:text-4xl lg:max-w-4xl lg:text-[2.65rem] lg:leading-[1.08]">
              Connect with professional event styling for your{" "}
              <span className="relative inline-block">
                dream celebration
                <span className="absolute -bottom-0.5 left-0 right-0 hidden h-2 border-b-2 border-dusty-rose/45 rounded-full lg:block" />
              </span>
            </h1>
          </div>

          <p
            className="hero-fade-in mx-auto mt-2 max-w-xl text-xs leading-snug text-muted-foreground sm:mt-3 sm:max-w-2xl sm:text-sm lg:text-base"
            style={{ animationDelay: "0.2s" }}
          >
            Find, plan, and book bespoke wedding and event styling across Manchester —
            tailored to your vision, venue, and budget.
          </p>
        </div>

        <div
          className="hero-fade-in flex w-full min-h-0 flex-1 flex-col items-center justify-end pt-3 sm:pt-4"
          style={{ animationDelay: "0.28s" }}
        >
          <div className="mx-auto flex max-w-5xl items-end justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
            {fanImages.map((image, index) => (
              <HeroFanCard
                key={`${image.title}-${image.imageUrl}`}
                image={image}
                index={index}
              />
            ))}
          </div>

          <div
            className="hero-fade-in mt-3 flex shrink-0 flex-wrap items-center justify-center gap-1.5 pb-1 sm:mt-4 sm:gap-2"
            style={{ animationDelay: "0.36s" }}
          >
            {siteConfig.trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/50 bg-background/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-foreground/65 sm:px-3 sm:text-[10px]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
