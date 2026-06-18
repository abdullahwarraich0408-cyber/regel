import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as siteConfig } from "./site-config-CiewlhAo.mjs";
import { n as galleryItems, t as GalleryCard } from "./GalleryCard-T7rZ2F1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-m4iJ65vu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Weddings",
	"Birthdays",
	"Baby Showers",
	"Balloon Installations",
	"Romantic Setups",
	"Custom Backdrops"
];
function PortfolioPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = (0, import_react.useMemo)(() => filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter), [filter]);
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
								children: "Portfolio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl",
								children: ["A gallery of", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic",
									children: "styled moments"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl text-lg leading-relaxed text-foreground/80 text-balance",
								children: "Below is a preview layout for real event photography. Each card is a placeholder — once your photos are added, this gallery will showcase the styling we have created for clients across Manchester."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/booking",
							className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-base font-semibold hover:brightness-110 shadow-luxury hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 px-7 h-12",
							children: [siteConfig.cta.primary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300",
							children: "Explore Services"
						})]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: categories.map((c) => {
						const active = filter === c;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(c),
							className: `rounded-full border px-4 py-2 text-sm transition-all ${active ? "border-[oklch(0.78_0.06_20)] bg-gradient-to-r from-[oklch(0.32_0.06_300_/_0.15)] to-[oklch(0.78_0.06_20_/_0.15)] text-[oklch(0.78_0.06_20)] font-semibold shadow-soft" : "border-border bg-background hover:border-[oklch(0.78_0.06_20)] hover:shadow-soft"}`,
							"aria-pressed": active,
							children: c
						}, c);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						item,
						className: "aspect-[4/5]"
					}, item.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-border/50 bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] p-10 text-center md:p-16 text-cream shadow-luxury",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[oklch(0.88_0.09_85_/_0.3)] blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[oklch(0.78_0.06_20_/_0.2)] blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-elegant",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: "✨"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl leading-tight md:text-5xl text-balance text-cream",
									children: "Have a vision like this? Let us style it for you."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-lg leading-relaxed text-cream/80 max-w-2xl mx-auto",
									children: "Share your date, theme, and venue — we will design the rest."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/booking",
										className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold text-midnight text-base font-semibold hover:brightness-110 shadow-elegant px-10 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5",
										children: "Plan my event"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cream/40 text-cream text-base font-semibold hover:bg-cream/10 hover:border-cream/80 px-10 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5",
										children: "View services"
									})]
								})
							]
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { PortfolioPage as component };
