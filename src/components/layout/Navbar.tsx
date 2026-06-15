import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/30 backdrop-blur-sm"
      }`}
    >
      <div className="container-prose flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3" aria-label="Regal Knot Events home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-[11px] font-semibold tracking-widest text-charcoal shadow-gold">
            RK
          </span>
          <span className="font-display text-xl leading-none tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="default" size="lg" className="rounded-full">
            <Link to="/booking">{siteConfig.cta.primary}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} links={navLinks} />
    </header>
  );
}
