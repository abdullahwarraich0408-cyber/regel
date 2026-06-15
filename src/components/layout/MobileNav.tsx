import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
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
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Close menu backdrop"
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-background p-6 shadow-elegant">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg">{siteConfig.name}</span>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-border"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="rounded-xl px-4 py-3 font-display text-2xl text-foreground/85 transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 pt-8">
          <Button asChild size="lg" className="w-full rounded-full">
            <Link to="/booking" onClick={onClose}>
              {siteConfig.cta.primary}
            </Link>
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            {siteConfig.location} · {siteConfig.email}
          </p>
        </div>
      </div>
    </div>
  );
}
