import { i as __toESM } from "../_runtime.mjs";
import { n as whatsappUrl, t as siteConfig } from "./site-config-CzPcgAYQ.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useScrollReveal } from "./useScrollReveal-3470qMU-.mjs";
import { D as ChevronDown, I as ArrowRight, S as Facebook, _ as Instagram, c as Plus, f as MessageCircle, h as Mail, m as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-De2awqwh.js
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
			href: whatsappUrl(),
			external: true
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
						target: "external" in it && it.external ? "_blank" : void 0,
						rel: "external" in it && it.external ? "noreferrer" : void 0,
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
function ContactPage() {
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl",
									children: ["Let's plan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic",
										children: "something beautiful"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-lg leading-relaxed text-foreground/80 text-balance",
									children: "For event enquiries, the fastest way to get a tailored response is via our booking form. For everything else, our details are below."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/booking",
									className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-base font-semibold hover:brightness-110 shadow-luxury hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 px-7 h-12",
									children: [siteConfig.cta.primary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${siteConfig.email}`,
									className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Email us"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-3",
							children: [siteConfig.social.instagram && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.social.instagram,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-background/90 hover:border-[oklch(0.78_0.06_20)] hover:text-[oklch(0.78_0.06_20)] transition-all shadow-soft hover:shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
							}), siteConfig.social.facebook && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.social.facebook,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook",
								className: "grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-background/90 hover:border-[oklch(0.78_0.06_20)] hover:text-[oklch(0.78_0.06_20)] transition-all shadow-soft hover:shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
							})]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, { limit: 4 })
	] });
}
//#endregion
export { ContactPage as component };
