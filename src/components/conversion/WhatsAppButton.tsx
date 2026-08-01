import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackConversion("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-8 right-8 z-50 hidden h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:brightness-110 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">{siteConfig.cta.whatsapp}</span>
    </a>
  );
}
