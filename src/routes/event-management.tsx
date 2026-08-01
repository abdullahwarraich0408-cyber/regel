import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
import { faqs } from "@/data/faqs";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { faqJsonLd } from "@/lib/seo/json-ld";
import { eventManagementPage, servicePageJsonLd } from "@/lib/seo/service-pages";

export const Route = createFileRoute("/event-management")({
  head: () => ({
    meta: [
      { title: eventManagementPage.seo.title },
      { name: "description", content: eventManagementPage.seo.description },
      { name: "keywords", content: eventManagementPage.seo.keywords },
      { property: "og:title", content: eventManagementPage.seo.title },
      { property: "og:description", content: eventManagementPage.seo.description },
      { property: "og:url", content: absoluteUrl("/event-management") },
      { property: "og:type", content: "website" },
      ...(siteConfig.ogImage
        ? [{ property: "og:image", content: siteConfig.ogImage }]
        : []),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/event-management") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(servicePageJsonLd(eventManagementPage)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(faqs.slice(0, 4))),
      },
    ],
  }),
  component: () => <ServiceLandingPage content={eventManagementPage} />,
});
