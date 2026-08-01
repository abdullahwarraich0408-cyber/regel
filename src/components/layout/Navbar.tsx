import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { MobileNav } from "./MobileNav";
import { serviceLinks, utilityLinks } from "./nav-links";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const openServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-cream/15 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-luxury backdrop-blur-md"
            : "border-b border-cream/10 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-elegant"
        }`}
      >
        <div className="container-prose flex h-20 items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3" aria-label="Regal Knot Events home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-[11px] font-bold tracking-widest text-midnight shadow-soft transition-transform group-hover:scale-105">
              RK
            </span>
            <span className="font-display text-xl leading-none tracking-tight text-cream drop-shadow-md">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Primary">
            <Link
              to="/"
              className="relative rounded-full px-3 py-2 text-sm font-semibold text-cream/85 transition-all hover:bg-cream/10 hover:text-soft-gold"
              activeProps={{ className: "bg-cream/10 text-soft-gold" }}
              activeOptions={{ exact: true }}
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-gold" />
                  ) : null}
                </>
              )}
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((current) => !current)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
                  servicesOpen
                    ? "bg-cream/15 text-soft-gold"
                    : "text-cream/85 hover:bg-cream/10 hover:text-soft-gold"
                }`}
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-cream/15 bg-[oklch(0.22_0.02_280)] p-2 shadow-luxury backdrop-blur-xl">
                  <div className="border-b border-cream/10 px-3 pb-2.5 pt-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-soft-gold/90">
                      Our expertise
                    </p>
                    <p className="mt-1 text-xs text-cream/55">
                      Luxury styling for every celebration
                    </p>
                  </div>
                  <div className="mt-1 space-y-1">
                    {serviceLinks.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.to}
                          to={service.to}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-all hover:bg-cream/10"
                          activeProps={{
                            className:
                              "group flex items-start gap-3 rounded-xl bg-cream/10 px-3 py-3 ring-1 ring-soft-gold/30",
                          }}
                        >
                          <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft transition-transform group-hover:scale-105">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-display text-lg leading-none text-cream group-hover:text-soft-gold">
                              {service.label}
                            </span>
                            <span className="mt-1 block text-xs leading-snug text-cream/55">
                              {service.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="mt-1 flex items-center justify-between rounded-xl border border-cream/10 bg-cream/5 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream/75 transition-all hover:border-soft-gold/40 hover:text-soft-gold"
                  >
                    View all services
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {utilityLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative rounded-full px-3 py-2 text-sm font-semibold text-cream/85 transition-all hover:bg-cream/10 hover:text-soft-gold"
                activeProps={{ className: "bg-cream/10 text-soft-gold" }}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive ? (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-gold" />
                    ) : null}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/booking"
              className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold px-6 text-sm font-semibold text-midnight shadow-soft transition-all hover:scale-105 hover:brightness-110 hover:shadow-elegant"
            >
              {siteConfig.cta.primary}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream transition-all hover:border-[oklch(0.88_0.09_85)] hover:bg-cream/25 hover:shadow-soft lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
