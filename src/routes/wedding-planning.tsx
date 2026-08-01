import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
import { faqs } from "@/data/faqs";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { faqJsonLd } from "@/lib/seo/json-ld";
import { servicePageJsonLd, weddingPlanningPage } from "@/lib/seo/service-pages";

export const Route = createFileRoute("/wedding-planning")({
  head: () => ({
    meta: [
      { title: weddingPlanningPage.seo.title },
      { name: "description", content: weddingPlanningPage.seo.description },
      { name: "keywords", content: weddingPlanningPage.seo.keywords },
      { property: "og:title", content: weddingPlanningPage.seo.title },
      { property: "og:description", content: weddingPlanningPage.seo.description },
      { property: "og:url", content: absoluteUrl("/wedding-planning") },
      { property: "og:type", content: "website" },
      ...(siteConfig.ogImage
        ? [{ property: "og:image", content: siteConfig.ogImage }]
        : []),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/wedding-planning") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(servicePageJsonLd(weddingPlanningPage)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(faqs.slice(0, 4))),
      },
    ],
  }),
  component: () => <ServiceLandingPage content={weddingPlanningPage} />,
});
