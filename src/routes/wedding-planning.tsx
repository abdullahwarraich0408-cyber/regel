import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
import { servicePageJsonLd, weddingPlanningPage } from "@/lib/seo/service-pages";

export const Route = createFileRoute("/wedding-planning")({
  head: () => ({
    meta: [
      { title: weddingPlanningPage.seo.title },
      { name: "description", content: weddingPlanningPage.seo.description },
      { name: "keywords", content: weddingPlanningPage.seo.keywords },
      { property: "og:title", content: weddingPlanningPage.seo.title },
      { property: "og:description", content: weddingPlanningPage.seo.description },
      { property: "og:url", content: "/wedding-planning" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/wedding-planning" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(servicePageJsonLd(weddingPlanningPage)),
      },
    ],
  }),
  component: () => <ServiceLandingPage content={weddingPlanningPage} />,
});
