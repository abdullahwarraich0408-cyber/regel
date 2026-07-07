import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
import { eventManagementPage, servicePageJsonLd } from "@/lib/seo/service-pages";

export const Route = createFileRoute("/event-management")({
  head: () => ({
    meta: [
      { title: eventManagementPage.seo.title },
      { name: "description", content: eventManagementPage.seo.description },
      { name: "keywords", content: eventManagementPage.seo.keywords },
      { property: "og:title", content: eventManagementPage.seo.title },
      { property: "og:description", content: eventManagementPage.seo.description },
      { property: "og:url", content: "/event-management" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/event-management" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(servicePageJsonLd(eventManagementPage)),
      },
    ],
  }),
  component: () => <ServiceLandingPage content={eventManagementPage} />,
});
