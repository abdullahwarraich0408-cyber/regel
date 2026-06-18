import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ZoomIn } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GalleryCard-T7rZ2F1W.js
var import_jsx_runtime = require_jsx_runtime();
var galleryItems = [
	{
		id: "g1",
		category: "Weddings",
		title: "Champagne & Ivory Reception",
		palette: ["oklch(0.95 0.03 85)", "oklch(0.82 0.08 70)"]
	},
	{
		id: "g2",
		category: "Birthdays",
		title: "Gilded 30th Birthday Setup",
		palette: ["oklch(0.88 0.05 50)", "oklch(0.55 0.1 40)"]
	},
	{
		id: "g3",
		category: "Baby Showers",
		title: "Soft Blush Baby Welcome",
		palette: ["oklch(0.94 0.04 25)", "oklch(0.82 0.06 20)"]
	},
	{
		id: "g4",
		category: "Balloon Installations",
		title: "Organic Garland Ceiling",
		palette: ["oklch(0.92 0.04 85)", "oklch(0.7 0.1 60)"]
	},
	{
		id: "g5",
		category: "Romantic Setups",
		title: "Candlelit Restaurant Surprise",
		palette: ["oklch(0.32 0.02 30)", "oklch(0.65 0.12 35)"]
	},
	{
		id: "g6",
		category: "Custom Backdrops",
		title: "Fluted Arch with Florals",
		palette: ["oklch(0.9 0.04 95)", "oklch(0.6 0.09 150)"]
	},
	{
		id: "g7",
		category: "Weddings",
		title: "Garden Aisle Florals",
		palette: ["oklch(0.93 0.04 130)", "oklch(0.5 0.1 150)"]
	},
	{
		id: "g8",
		category: "Birthdays",
		title: "Black-tie 40th Tablescape",
		palette: ["oklch(0.25 0.02 60)", "oklch(0.7 0.11 80)"]
	},
	{
		id: "g9",
		category: "Custom Backdrops",
		title: "Neon Signage on Mesh Circle",
		palette: ["oklch(0.4 0.05 320)", "oklch(0.82 0.13 350)"]
	}
];
function GalleryCard({ item, className = "", index = 0 }) {
	const [a, b] = item.palette;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: `group relative overflow-hidden border border-border/50 bg-card shadow-soft transition-all duration-700 hover:-translate-y-3 hover:shadow-luxury ${className}`,
		style: { borderRadius: "1.75rem" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full w-full transition-transform duration-1000 group-hover:scale-[1.06] ease-out",
			style: { background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)` },
			role: "img",
			"aria-label": `${item.title} — placeholder. Replace with real event photo.`,
			children: [
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-[oklch(0.88_0.09_85)] shadow-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-cream/85 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-midnight/95 backdrop-blur-md shadow-soft",
							children: item.category
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 font-display text-3xl leading-tight text-cream drop-shadow-xl",
						children: item.title
					})]
				})
			]
		})
	});
}
//#endregion
export { galleryItems as n, GalleryCard as t };
