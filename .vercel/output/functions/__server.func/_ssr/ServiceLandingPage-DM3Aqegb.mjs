import { n as whatsappUrl } from "./site-config-CzPcgAYQ.mjs";
import { n as trackConversion } from "./analytics-DQWUx2A-.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as ArrowRight, O as Check, f as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as FinalConversionCTA } from "./FinalConversionCTA-39g1YR7J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceLandingPage-DM3Aqegb.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceLandingPage({ content }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose relative py-14 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: content.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl",
						children: [content.headline, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-dusty-rose italic",
							children: content.headlineAccent
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80",
						children: content.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/booking",
							onClick: () => trackConversion("availability_click", { page: content.slug }),
							className: "inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-7 text-sm font-semibold text-cream shadow-luxury",
							children: ["Check Availability", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl(content.whatsappMessage),
							target: "_blank",
							rel: "noreferrer",
							onClick: () => trackConversion("whatsapp_click", { page: content.slug }),
							className: "inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full border border-border/70 bg-background/70 px-7 text-sm font-semibold backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-[#25D366]" }), "WhatsApp Us"]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose grid gap-12 lg:grid-cols-2 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl",
					children: content.sectionTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4 text-base leading-relaxed text-muted-foreground",
					children: content.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 40)))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[1.75rem] border border-border/60 bg-card p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: "What we deliver"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: content.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-sage" }), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portfolio",
							className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-deep-plum hover:text-dusty-rose",
							children: ["View related portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalConversionCTA, {})
	] });
}
//#endregion
export { ServiceLandingPage as t };
