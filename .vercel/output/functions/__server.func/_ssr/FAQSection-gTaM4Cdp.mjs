import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as ChevronDown, N as ArrowRight, _ as Instagram, c as Phone, h as Mail, m as MapPin, s as Plus, x as Facebook } from "../_libs/lucide-react.mjs";
import { t as siteConfig } from "./site-config-CiewlhAo.mjs";
import { t as useScrollReveal } from "./useScrollReveal-BLnud4_b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQSection-gTaM4Cdp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactSection() {
	const items = [
		{
			icon: Mail,
			label: "Email",
			value: siteConfig.email,
			href: `mailto:${siteConfig.email}`
		},
		{
			icon: Phone,
			label: "Phone / WhatsApp",
			value: siteConfig.phone,
			href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`
		},
		{
			icon: MapPin,
			label: "Service area",
			value: siteConfig.serviceArea
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-20 bg-gradient-to-br from-[oklch(0.975_0.005_90)] via-[oklch(0.94_0.01_70)] to-[oklch(0.905_0.015_65)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose grid gap-14 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center lg:text-left flex flex-col items-center lg:items-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
						children: "Let's talk through your event."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground mx-auto lg:mx-0",
						children: "Prefer to chat first? Reach us directly or follow along to see recent setups."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex gap-4 justify-center lg:justify-start",
						children: [siteConfig.social.instagram && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: siteConfig.social.instagram,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Instagram",
							className: "group grid h-14 w-14 place-items-center rounded-full border border-border/70 bg-background transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-gradient-gold hover:text-midnight hover:shadow-luxury",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 transition-transform duration-300 group-hover:scale-110" })
						}), siteConfig.social.facebook && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: siteConfig.social.facebook,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Facebook",
							className: "group grid h-14 w-14 place-items-center rounded-full border border-border/70 bg-background transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-gradient-gold hover:text-midnight hover:shadow-luxury",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5 transition-transform duration-300 group-hover:scale-110" })
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5",
				children: items.map((it) => {
					const Icon = it.icon;
					const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-center gap-5 rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[oklch(0.78_0.06_20)] hover:shadow-luxury",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-midnight shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-[0.24em] text-muted-foreground",
									children: it.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-lg sm:text-xl break-all sm:break-normal",
									children: it.value
								})]
							}),
							it.href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[oklch(0.78_0.06_20)] transition-transform duration-300 group-hover:translate-x-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
							})
						]
					});
					return it.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: it.href,
						className: "block",
						children: content
					}, it.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: content }, it.label);
				})
			})]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		question: "Which areas do you cover?",
		answer: "We are based in Manchester and style events across Greater Manchester and the wider North West. For destination and out-of-area events, please share your venue when enquiring and we will confirm logistics."
	},
	{
		question: "How far in advance should I book?",
		answer: "For weddings and large events, three to nine months ahead is ideal. For smaller celebrations we can often accommodate shorter timelines — get in touch with your date and we will let you know."
	},
	{
		question: "Do you have a minimum spend?",
		answer: "We work on a custom-quote basis so every event is priced around what you actually need. Once you share your event details we will return a tailored proposal."
	},
	{
		question: "Can you work with my florist, planner, or venue stylist?",
		answer: "Absolutely. We regularly collaborate with planners, florists, and venue teams and are happy to fit into an existing creative team."
	},
	{
		question: "What happens after I send a booking request?",
		answer: "We review your details and reply within two working days with availability, ideas, and a personalised quote. From there we refine the styling plan together before confirming the booking."
	},
	{
		question: "Do you provide setup and pack-down?",
		answer: "Yes. Every package includes professional setup and pack-down by our styling team so you can focus on the celebration."
	}
];
function FAQSection({ limit }) {
	const list = limit ? faqs.slice(0, limit) : faqs;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: useScrollReveal(),
		className: "py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose grid gap-12 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-32 lg:self-start reveal-on-scroll text-center lg:text-left flex flex-col items-center lg:items-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Common questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
						children: "Everything you might be wondering."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground mx-auto lg:mx-0",
						children: "Not finding your answer? Get in touch and we will reply personally."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full space-y-4",
				children: list.map((f, i) => {
					const delayClass = `reveal-delay-${i % 5 * 100}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: `border-none rounded-3xl border border-border/60 bg-card p-1 shadow-soft transition-all duration-300 hover:shadow-elegant reveal-on-scroll ${delayClass}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-display text-xl hover:no-underline px-6 py-5 data-[state=open]:pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between w-full gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 transition-all duration-300 group-hover:border-[oklch(0.78_0.06_20)] group-data-[state=open]:rotate-45 group-data-[state=open]:bg-gradient-gold group-data-[state=open]:border-transparent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-base leading-relaxed text-muted-foreground px-6 pb-5",
							children: f.answer
						})]
					}, f.question);
				})
			})]
		})
	});
}
//#endregion
export { FAQSection as n, ContactSection as t };
