import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as siteConfig } from "./site-config-CiewlhAo.mjs";
import { n as ServicesSection, t as BookingCTA } from "./BookingCTA-ym7E_Tdo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B0I-vVxN.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-[oklch(0.88_0.09_85_/_0.3)] to-[oklch(0.72_0.07_70_/_0.2)] blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[oklch(0.905_0.015_65_/_0.4)] blur-2xl" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prose relative py-10 md:py-14 lg:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl",
								children: ["Decor designed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic",
									children: "around the moment"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl text-lg leading-relaxed text-foreground/80 text-balance",
								children: "From signature focal pieces to fully styled venues, every service is led by detail, scale, and a feeling for the room. Choose what you need — we will plan, source, and install it for you."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/booking",
							className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-base font-semibold hover:brightness-110 shadow-luxury hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 px-7 h-12",
							children: [siteConfig.cta.primary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portfolio",
							className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300",
							children: "View Portfolio"
						})]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCTA, {})
	] });
}
//#endregion
export { ServicesPage as component };
