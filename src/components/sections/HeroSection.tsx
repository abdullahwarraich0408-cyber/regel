import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star, Calendar, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const previews = [
  {
    category: "Weddings",
    title: "Champagne & Ivory Romance",
    tagline: "Romantic draping, luxury candlelight, and bespoke floral runners.",
    gradient: "linear-gradient(135deg, oklch(0.975 0.005 90) 0%, oklch(0.78 0.06 20) 35%, oklch(0.32 0.06 300) 100%)",
    badge: "Brides & Couples",
  },
  {
    category: "Birthdays",
    title: "Gilded Milestone Setup",
    tagline: "Sleek midnight panels, chrome accents, and cascading warm lights.",
    gradient: "linear-gradient(135deg, oklch(0.20 0.01 260) 0%, oklch(0.32 0.06 300) 45%, oklch(0.8 0.08 85) 100%)",
    badge: "Milestones",
  },
  {
    category: "Baby Showers",
    title: "Blush & Sage Botanical",
    tagline: "Soft organic sage frames, luxury clouds, and custom signage.",
    gradient: "linear-gradient(135deg, oklch(0.975 0.005 90) 0%, oklch(0.55 0.06 150) 40%, oklch(0.78 0.06 20) 100%)",
    badge: "Mothers-to-be",
  },
  {
    category: "Bespoke Themes",
    title: "Architectural Installations",
    tagline: "Sculptural backdrops and balloon styling tailored to your theme.",
    gradient: "linear-gradient(135deg, oklch(0.905 0.015 65) 0%, oklch(0.32 0.06 300) 50%, oklch(0.20 0.01 260) 100%)",
    badge: "Bespoke Concepts",
  }
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 7 seconds unless interacted with
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % previews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activePreview = previews[activeIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-hero lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center">
      {/* Decorative floating blurred spots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl transition-all duration-1000" />
        <div className="absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-[oklch(0.88_0.09_85_/_0.3)] to-[oklch(0.72_0.07_70_/_0.2)] blur-3xl transition-all duration-1000" />
      </div>

      <div className="container-prose relative grid gap-6 py-6 md:py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center w-full">
        {/* Left content */}
        <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-3 flex flex-col items-center lg:items-start">
            <span className="eyebrow">Manchester Event Decor Studio</span>
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
              Transform your celebration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic">
                into a luxurious experience
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-foreground/80 text-balance mx-auto lg:mx-0">
              {siteConfig.description}
            </p>
          </div>

          {/* Interactive tabs switcher */}
          <div className="hidden lg:block space-y-2">
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Select an event type to preview
            </div>
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {previews.map((preview, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={preview.category}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${active
                        ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]"
                        : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"
                      }`}
                  >
                    {preview.category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose text-cream text-sm font-semibold hover:brightness-110 shadow-luxury hover:scale-[1.02] transition-all duration-300 px-6 h-11"
            >
              {siteConfig.cta.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-6 h-11 text-sm font-medium hover:border-deep-plum hover:bg-background/70 backdrop-blur-sm transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            {siteConfig.trustBadges.map((badge, index) => (
              <span
                key={badge}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-4 py-2 text-[11px] font-medium text-foreground/85 backdrop-blur-sm shadow-soft"
              >
                {index === 0 && <Star className="h-3 w-3 text-[oklch(0.8_0.08_85)]" />}
                {index === 1 && <Calendar className="h-3 w-3 text-[oklch(0.8_0.08_85)]" />}
                {index === 2 && <Heart className="h-3 w-3 text-[oklch(0.8_0.08_85)]" />}
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right content - Dynamic Preview Card */}
        <div className="hidden lg:block relative max-w-[380px] lg:max-w-none mx-auto w-full">
          <div className="relative aspect-[4/5] max-h-[440px] lg:max-h-[480px] w-full overflow-hidden rounded-[2rem] shadow-elegant border border-border/20 transition-all duration-1000">
            {/* Background gradient layout with smooth transition overlay */}
            <div
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{ background: activePreview.gradient }}
            />
            {/* Luxury soft flare light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.4),transparent_70%)]" />

            {/* Visual shine element */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-cream">
              {/* Active Badge */}
              <div className="flex items-center gap-2">
                <span className="glass-card inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] text-cream bg-cream/25 border-cream/20">
                  <Sparkles className="h-3 w-3 text-[oklch(0.8_0.08_85)]" /> {activePreview.badge}
                </span>
              </div>

              {/* Dynamic Title and Details */}
              <h3 className="mt-3 font-display text-2xl leading-tight drop-shadow-lg transition-all duration-700">
                {activePreview.title}
              </h3>
              <p className="mt-1.5 text-xs text-cream/95 drop-shadow-md font-sans font-medium max-w-sm transition-all duration-700">
                {activePreview.tagline}
              </p>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-4 -right-4 hidden w-44 rounded-xl border border-soft-gold bg-gradient-to-br from-deep-plum to-midnight text-cream p-3.5 shadow-[0_10px_35px_oklch(0.8_0.08_85_/_0.25)] backdrop-blur-md md:block animate-float">
            <div className="text-[8px] uppercase tracking-[0.24em] text-cream/75 font-semibold">
              Now Booking
            </div>
            <div className="mt-0.5 font-display text-lg text-cream font-medium">2026 Events</div>
            <Link to="/booking" className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-soft-gold hover:text-cream transition-colors duration-200">
              Reserve Your Date <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
