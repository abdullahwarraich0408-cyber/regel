import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
import { corporateEventsPage, servicePageJsonLd } from "@/lib/seo/service-pages";

export const Route = createFileRoute("/corporate-events")({
  head: () => ({
    meta: [
      { title: corporateEventsPage.seo.title },
      { name: "description", content: corporateEventsPage.seo.description },
      { name: "keywords", content: corporateEventsPage.seo.keywords },
      { property: "og:title", content: corporateEventsPage.seo.title },
      { property: "og:description", content: corporateEventsPage.seo.description },
      { property: "og:url", content: "/corporate-events" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/corporate-events" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(servicePageJsonLd(corporateEventsPage)),
      },
    ],
  }),
  component: () => <ServiceLandingPage content={corporateEventsPage} />,
});
