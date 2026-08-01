import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
import { faqs } from "@/data/faqs";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { faqJsonLd } from "@/lib/seo/json-ld";
import { corporateEventsPage, servicePageJsonLd } from "@/lib/seo/service-pages";

export const Route = createFileRoute("/corporate-events")({
  head: () => ({
    meta: [
      { title: corporateEventsPage.seo.title },
      { name: "description", content: corporateEventsPage.seo.description },
      { name: "keywords", content: corporateEventsPage.seo.keywords },
      { property: "og:title", content: corporateEventsPage.seo.title },
      { property: "og:description", content: corporateEventsPage.seo.description },
      { property: "og:url", content: absoluteUrl("/corporate-events") },
      { property: "og:type", content: "website" },
      ...(siteConfig.ogImage
        ? [{ property: "og:image", content: siteConfig.ogImage }]
        : []),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/corporate-events") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(servicePageJsonLd(corporateEventsPage)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(faqs.slice(0, 4))),
      },
    ],
  }),
  component: () => <ServiceLandingPage content={corporateEventsPage} />,
});
