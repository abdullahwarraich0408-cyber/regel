import { Link } from "@tanstack/react-router";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(20,16,30,0.12)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          to="/booking"
          onClick={() =>
            trackConversion("availability_click", { location: "mobile_sticky" })
          }
          className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-midnight px-3 text-sm font-semibold text-cream"
        >
          {siteConfig.cta.primary}
        </Link>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          aria-label={siteConfig.cta.whatsapp}
          onClick={() =>
            trackConversion("whatsapp_click", { location: "mobile_sticky" })
          }
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
