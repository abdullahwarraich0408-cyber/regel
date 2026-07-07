import { n as whatsappUrl } from "./_ssr/site-config-CzPcgAYQ.mjs";
import { n as trackConversion } from "./_ssr/analytics-DQWUx2A-.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route } from "./_id-DH50hdaw.mjs";
import { I as ArrowRight, L as ArrowLeft, O as Check, _ as Instagram, f as MessageCircle } from "./_libs/lucide-react.mjs";
import { t as FinalConversionCTA } from "./_ssr/FinalConversionCTA-39g1YR7J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-niJOVRq4.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioDetailPage() {
	const { item } = Route.useLoaderData();
	const [a, b] = item.palette;
	const gallery = item.gallery?.length ? item.gallery : item.imageUrl ? [item.imageUrl] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-hero py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/portfolio",
					className: "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-deep-plum",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to portfolio"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-10 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: item.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl leading-tight md:text-5xl",
							children: item.title
						}),
						item.clientName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg text-muted-foreground",
							children: item.clientName
						}) : null,
						item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-foreground/80",
							children: item.description
						}) : null,
						item.highlights && item.highlights.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-2.5",
							children: item.highlights.map((highlight) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-sage" }), highlight]
							}, highlight))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/booking",
									className: "inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-7 text-sm font-semibold text-cream shadow-luxury",
									children: ["Plan a similar event", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}),
								item.instagramUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: item.instagramUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-12 items-center gap-2 rounded-full border border-border/70 px-7 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), "View on Instagram"]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappUrl(`Hi, I loved your ${item.title} portfolio piece and would like to enquire.`),
									target: "_blank",
									rel: "noreferrer",
									onClick: () => trackConversion("whatsapp_click", { location: "portfolio_detail" }),
									className: "inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-semibold text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/40 shadow-elegant",
						style: { background: item.imageUrl ? void 0 : `linear-gradient(135deg, ${a} 0%, ${b} 100%)` },
						children: item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.imageUrl,
							alt: item.title,
							className: "h-full w-full object-cover"
						}) : null
					})]
				})]
			})
		}),
		gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Event gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3",
					children: gallery.map((url, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 break-inside-avoid overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: url,
							alt: `${item.title} — photo ${index + 1}`,
							className: "w-full object-cover",
							loading: "lazy"
						})
					}, `${url}-${index}`))
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalConversionCTA, {})
	] });
}
//#endregion
export { PortfolioDetailPage as component };
