import { i as __toESM } from "../_runtime.mjs";
import { n as fetchPublishedPortfolio } from "./portfolio-api-yrZNFAua.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ZoomIn } from "../_libs/lucide-react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/usePortfolioItems-CP9YL0Yl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryCard({ item, className = "", index = 0, linkToDetail = false }) {
	const [a, b] = item.palette;
	const [imageFailed, setImageFailed] = (0, import_react.useState)(false);
	const showImage = Boolean(item.imageUrl) && !imageFailed;
	const detailPath = `/portfolio/${item.slug ?? item.id}`;
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full transition-transform duration-1000 group-hover:scale-[1.06] ease-out",
		children: [
			showImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.imageUrl,
				alt: item.title,
				className: "h-full w-full object-cover",
				loading: index > 2 ? "lazy" : "eager",
				onError: () => setImageFailed(true)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full w-full",
				style: { background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)` },
				role: "img",
				"aria-label": item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.45),transparent_65%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[oklch(0.32_0.06_300_/_0)] transition-all duration-700 group-hover:bg-[oklch(0.32_0.06_300_/_0.15)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-full bg-gradient-to-br from-cream to-[oklch(0.92_0.025_50)] p-5 shadow-elegant transition-transform duration-300 group-hover:scale-110",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "h-7 w-7 text-midnight" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col justify-end p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-soft-gold shadow-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-cream/85 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-midnight/95 backdrop-blur-md shadow-soft",
							children: item.category
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 font-display text-3xl leading-tight text-cream drop-shadow-xl",
						children: item.title
					}),
					item.clientName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-cream/85",
						children: item.clientName
					}) : null
				]
			})
		]
	}) });
	const figureClass = `group relative overflow-hidden border border-border/50 bg-card shadow-soft transition-all duration-700 hover:-translate-y-3 hover:shadow-luxury ${className}`;
	if (linkToDetail) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: detailPath,
		className: `block ${figureClass}`,
		style: { borderRadius: "1.75rem" },
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: figureClass,
		style: { borderRadius: "1.75rem" },
		children: content
	});
}
var galleryCategories = [
	"All",
	"Weddings",
	"Private Events",
	"Corporate"
];
function usePortfolioItems() {
	return useQuery({
		queryKey: ["portfolio"],
		queryFn: fetchPublishedPortfolio
	});
}
//#endregion
export { galleryCategories as n, usePortfolioItems as r, GalleryCard as t };
