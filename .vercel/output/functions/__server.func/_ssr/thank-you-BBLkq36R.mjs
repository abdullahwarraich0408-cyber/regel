import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thank-you-BBLkq36R.js
var import_jsx_runtime = require_jsx_runtime();
function BookingSuccess() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-warm py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid mx-auto h-16 w-16 place-items-center rounded-full bg-gradient-gold text-charcoal shadow-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 font-display text-5xl leading-tight md:text-6xl text-balance",
					children: "Your event request has been received."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-relaxed text-muted-foreground",
					children: "Thank you. Regal Knot Events will contact you shortly to discuss availability, styling, and quote details. You can expect a personal reply within two working days."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "h-10 rounded-full px-8 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap",
						children: "Back to home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "h-10 rounded-full px-8 border border-border bg-background text-sm font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap",
						children: "View services"
					})]
				})
			]
		})
	});
}
var SplitComponent = BookingSuccess;
//#endregion
export { SplitComponent as component };
