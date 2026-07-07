import { siteConfig } from "@/lib/site-config";

type ConversionEvent =
  | "enquiry_submit"
  | "whatsapp_click"
  | "booking_start"
  | "consultation_click"
  | "availability_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackConversion(event: ConversionEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") {
    return;
  }

  const gtagId = siteConfig.analytics.gtagId;
  if (gtagId && window.gtag) {
    window.gtag("event", event, {
      event_category: "conversion",
      ...params,
    });
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

export function initAnalytics() {
  const gtagId = siteConfig.analytics.gtagId;
  if (!gtagId || typeof document === "undefined") {
    return;
  }

  if (document.getElementById("gtag-script")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", gtagId);
}
