import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/wedding-planning", label: "Weddings" },
  { to: "/event-management", label: "Private Events" },
  { to: "/corporate-events", label: "Corporate" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/booking", label: "Plan My Event" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-semibold text-cream/85 transition-all hover:text-[oklch(0.88_0.09_85)] hover:scale-105 relative"
                activeProps={{
                  className: "text-[oklch(0.88_0.09_85)] font-bold",
                }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-gold shadow-luxury" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/booking"
              className="h-11 rounded-full px-6 bg-gradient-gold text-midnight text-sm font-semibold hover:brightness-110 shadow-soft transition-all hover:shadow-elegant hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {siteConfig.cta.primary}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream lg:hidden transition-all hover:border-[oklch(0.88_0.09_85)] hover:bg-cream/25 hover:shadow-soft"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} links={navLinks} />
    </>
  );
}
