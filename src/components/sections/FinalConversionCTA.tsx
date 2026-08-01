import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EnquiryForm } from "@/components/conversion/EnquiryForm";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FinalConversionCTA({ source = "homepage_cta" }: { source?: string }) {
  const revealRef = useScrollReveal();

  return (
    <section
      id="enquire"
      ref={revealRef}
      className="bg-gradient-to-br from-deep-plum to-midnight py-16 text-cream md:py-24"
    >
      <div className="container-prose">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal-on-scroll text-center lg:text-left">
            <span className="eyebrow mx-auto border-cream/20 bg-cream/10 text-cream/90 lg:mx-0">
              Start Your Journey
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-balance md:text-5xl">
              Let&apos;s Create Your
              <span className="block text-soft-gold italic">Perfect Event</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/80 lg:mx-0">
              Share your date and vision — we&apos;ll respond quickly with availability and next
              steps. Prefer WhatsApp? Message us directly.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConversion("whatsapp_click", { location: "final_cta" })}
              className="mt-8 inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white shadow-elegant transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {siteConfig.cta.whatsapp}
            </a>
          </div>

          <div className="reveal-on-scroll reveal-delay-100 rounded-[1.75rem] border border-cream/15 bg-cream/5 p-8 backdrop-blur-sm">
            <h3 className="font-display text-2xl text-cream">Quick Enquiry</h3>
            <p className="mt-2 text-sm text-cream/70">
              Name, phone, event type, and date — takes less than a minute.
            </p>
            <div className="mt-6 [&_input]:bg-white [&_select]:bg-white [&_input]:text-midnight [&_select]:text-midnight [&_span]:text-cream/65 [&_p]:text-cream/55 [&_.enquiry-error]:bg-rose-500/20 [&_.enquiry-error]:text-rose-100">
              <EnquiryForm source={source} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
