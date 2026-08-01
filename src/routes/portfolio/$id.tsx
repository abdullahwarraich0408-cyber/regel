import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { fetchPortfolioItem } from "@/lib/portfolio-api";
import { FinalConversionCTA } from "@/components/sections/FinalConversionCTA";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export const Route = createFileRoute("/portfolio/$id")({
  loader: async ({ params }) => {
    const item = await fetchPortfolioItem(params.id);
    if (!item || item.published === false) {
      throw notFound();
    }
    return { item };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    const title = item
      ? `${item.title} — Portfolio | ${siteConfig.name}`
      : `Portfolio | ${siteConfig.name}`;
    const description =
      item?.description ||
      `Real event styling by ${siteConfig.name} — ${item?.category ?? "premium events"} in Manchester.`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/portfolio/${item?.slug ?? item?.id ?? ""}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${item?.slug ?? item?.id ?? ""}` }],
    };
  },
  component: PortfolioDetailPage,
});

function PortfolioDetailPage() {
  const { item } = Route.useLoaderData();
  const [a, b] = item.palette;
  const gallery = item.gallery?.length ? item.gallery : item.imageUrl ? [item.imageUrl] : [];

  return (
    <>
      <section className="bg-gradient-hero py-10 md:py-14">
        <div className="container-prose">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-deep-plum"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">{item.category}</span>
              <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{item.title}</h1>
              {item.clientName ? (
                <p className="mt-3 text-lg text-muted-foreground">{item.clientName}</p>
              ) : null}
              {item.description ? (
                <p className="mt-6 text-base leading-relaxed text-foreground/80">{item.description}</p>
              ) : null}
              {item.highlights && item.highlights.length > 0 ? (
                <ul className="mt-8 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-sage" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/booking"
                  onClick={() =>
                    trackConversion("availability_click", { location: "portfolio_detail" })
                  }
                  className="inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-7 text-sm font-semibold text-cream shadow-luxury"
                >
                  {siteConfig.cta.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={item.instagramUrl || siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full border border-border/70 px-7 text-sm font-semibold"
                >
                  <Instagram className="h-4 w-4" />
                  {item.instagramUrl ? "View on Instagram" : "Follow on Instagram"}
                </a>
                <a
                  href={whatsappUrl(
                    `Hi, I loved your ${item.title} event and would like to enquire about a similar celebration.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackConversion("whatsapp_click", { location: "portfolio_detail" })
                  }
                  className="inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-semibold text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {siteConfig.cta.whatsapp}
                </a>
              </div>
            </div>
            <div
              className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/40 shadow-elegant"
              style={{
                background: item.imageUrl
                  ? undefined
                  : `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
              }}
            >
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {gallery.length > 1 ? (
        <section className="py-12 md:py-16">
          <div className="container-prose">
            <h2 className="font-display text-3xl">Event gallery</h2>
            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {gallery.map((url, index) => (
                <div key={`${url}-${index}`} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl">
                  <img
                    src={url}
                    alt={`${item.title} — photo ${index + 1}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FinalConversionCTA />
    </>
  );
}
