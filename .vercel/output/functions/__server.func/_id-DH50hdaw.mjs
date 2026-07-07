import { t as siteConfig } from "./_ssr/site-config-CzPcgAYQ.mjs";
import { t as fetchPortfolioItem } from "./_ssr/portfolio-api-yrZNFAua.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-DH50hdaw.js
var $$splitComponentImporter = () => import("./_id-niJOVRq4.mjs");
var Route = createFileRoute("/portfolio/$id")({
	loader: async ({ params }) => {
		const item = await fetchPortfolioItem(params.id);
		if (!item || item.published === false) throw notFound();
		return { item };
	},
	head: ({ loaderData }) => {
		const item = loaderData?.item;
		const title = item ? `${item.title} — Portfolio | ${siteConfig.name}` : `Portfolio | ${siteConfig.name}`;
		const description = item?.description || `Real event styling by ${siteConfig.name} — ${item?.category ?? "premium events"} in Manchester.`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: `/portfolio/${item?.slug ?? item?.id ?? ""}`
				},
				{
					property: "og:type",
					content: "article"
				}
			],
			links: [{
				rel: "canonical",
				href: `/portfolio/${item?.slug ?? item?.id ?? ""}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
