import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: readonly { to: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" data-lenis-prevent>
      <button
        type="button"
        aria-label="Close menu backdrop"
        className="absolute inset-0 bg-mobile-backdrop transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-mobile-drawer text-cream p-6 shadow-elegant border-l border-cream/10">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl tracking-wide text-cream/90">{siteConfig.name}</span>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 hover:text-cream hover:bg-cream/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-1.5" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              activeProps={{
                className: "bg-cream/10 text-soft-gold font-semibold border-l-4 border-soft-gold pl-3",
              }}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-xl px-4 py-2.5 font-sans text-base text-cream/80 transition-all hover:bg-cream/5 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 pt-8">
            <Link
              to="/booking"
              onClick={onClose}
              className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold px-4 text-sm font-semibold text-midnight shadow-soft transition-all hover:brightness-105"
            >
              {siteConfig.cta.primary}
            </Link>
            <Link
              to="/services"
              onClick={onClose}
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-cream/25 px-4 text-sm font-semibold text-cream/90 transition-all hover:bg-cream/10"
            >
              View all services
            </Link>
            <p className="text-center text-xs text-cream/60">
              {siteConfig.location} · {siteConfig.email}
            </p>
          </div>
      </div>
    </div>
  );
}
