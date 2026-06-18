import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Check, N as ArrowRight, O as Calendar, S as ClipboardList, a as Star, d as MessageSquare, l as PartyPopper, o as Sparkles, u as Palette, v as Heart } from "../_libs/lucide-react.mjs";
import { t as siteConfig } from "./site-config-CiewlhAo.mjs";
import { t as useScrollReveal } from "./useScrollReveal-BLnud4_b.mjs";
import { n as FAQSection, t as ContactSection } from "./FAQSection-gTaM4Cdp.mjs";
import { n as galleryItems, t as GalleryCard } from "./GalleryCard-T7rZ2F1W.mjs";
import { n as ServicesSection, t as BookingCTA } from "./BookingCTA-ym7E_Tdo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-y2VOxLCX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var previews = [
	{
		category: "Weddings",
		title: "Champagne & Ivory Romance",
		tagline: "Romantic draping, luxury candlelight, and bespoke floral runners.",
		gradient: "linear-gradient(135deg, oklch(0.975 0.005 90) 0%, oklch(0.78 0.06 20) 35%, oklch(0.32 0.06 300) 100%)",
		badge: "Brides & Couples"
	},
	{
		category: "Birthdays",
		title: "Gilded Milestone Setup",
		tagline: "Sleek midnight panels, chrome accents, and cascading warm lights.",
		gradient: "linear-gradient(135deg, oklch(0.20 0.01 260) 0%, oklch(0.32 0.06 300) 45%, oklch(0.8 0.08 85) 100%)",
		badge: "Milestones"
	},
	{
		category: "Baby Showers",
		title: "Blush & Sage Botanical",
		tagline: "Soft organic sage frames, luxury clouds, and custom signage.",
		gradient: "linear-gradient(135deg, oklch(0.975 0.005 90) 0%, oklch(0.55 0.06 150) 40%, oklch(0.78 0.06 20) 100%)",
		badge: "Mothers-to-be"
	},
	{
		category: "Bespoke Themes",
		title: "Architectural Installations",
		tagline: "Sculptural backdrops and balloon styling tailored to your theme.",
		gradient: "linear-gradient(135deg, oklch(0.905 0.015 65) 0%, oklch(0.32 0.06 300) 50%, oklch(0.20 0.01 260) 100%)",
		badge: "Bespoke Concepts"
	}
];
function HeroSection() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % previews.length);
		}, 7e3);
		return () => clearInterval(timer);
	}, []);
	const activePreview = previews[activeIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-hero lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl transition-all duration-1000" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-[oklch(0.88_0.09_85_/_0.3)] to-[oklch(0.72_0.07_70_/_0.2)] blur-3xl transition-all duration-1000" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose relative grid gap-6 py-6 md:py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 flex flex-col items-center lg:items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Manchester Event Decor Studio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl",
								children: ["Transform your celebration", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic",
									children: "into a luxurious experience"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl text-base leading-relaxed text-foreground/80 text-balance mx-auto lg:mx-0",
								children: siteConfig.description
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden lg:block space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground",
							children: "Select an event type to preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5 justify-center lg:justify-start",
							children: previews.map((preview, idx) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveIndex(idx),
									className: `rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${idx === activeIndex ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]" : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"}`,
									children: preview.category
								}, preview.category);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/booking",
							className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose text-cream text-sm font-semibold hover:brightness-110 shadow-luxury hover:scale-[1.02] transition-all duration-300 px-6 h-11",
							children: [siteConfig.cta.primary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-6 h-11 text-sm font-medium hover:border-deep-plum hover:bg-background/70 backdrop-blur-sm transition-all duration-300",
							children: "Explore Services"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2",
						children: siteConfig.trustBadges.map((badge, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-4 py-2 text-[11px] font-medium text-foreground/85 backdrop-blur-sm shadow-soft",
							children: [
								index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 text-[oklch(0.8_0.08_85)]" }),
								index === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3 text-[oklch(0.8_0.08_85)]" }),
								index === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 text-[oklch(0.8_0.08_85)]" }),
								badge
							]
						}, badge))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden lg:block relative max-w-[380px] lg:max-w-none mx-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] max-h-[440px] lg:max-h-[480px] w-full overflow-hidden rounded-[2rem] shadow-elegant border border-border/20 transition-all duration-1000",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 transition-all duration-1000 ease-in-out",
							style: { background: activePreview.gradient }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.4),transparent_70%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col justify-end p-6 text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "glass-card inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] text-cream bg-cream/25 border-cream/20",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-[oklch(0.8_0.08_85)]" }),
											" ",
											activePreview.badge
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl leading-tight drop-shadow-lg transition-all duration-700",
									children: activePreview.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs text-cream/95 drop-shadow-md font-sans font-medium max-w-sm transition-all duration-700",
									children: activePreview.tagline
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-4 -right-4 hidden w-44 rounded-xl border border-soft-gold bg-gradient-to-br from-deep-plum to-midnight text-cream p-3.5 shadow-[0_10px_35px_oklch(0.8_0.08_85_/_0.25)] backdrop-blur-md md:block animate-float",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[8px] uppercase tracking-[0.24em] text-cream/75 font-semibold",
							children: "Now Booking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 font-display text-lg text-cream font-medium",
							children: "2026 Events"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/booking",
							className: "mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-soft-gold hover:text-cream transition-colors duration-200",
							children: ["Reserve Your Date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})
					]
				})]
			})]
		})]
	});
}
function ProcessCard({ step, title, description, index, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex h-full flex-col rounded-[1.75rem] border border-border bg-card/40 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant hover:bg-card/90 gold-glow backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute top-9 hidden h-4 w-4 rounded-full bg-gradient-gold border-2 border-background lg:block transition-all duration-300 group-hover:scale-125 z-10 ${index % 2 === 0 ? "lg:-right-[2.5rem]" : "lg:-left-[2.5rem]"}`,
				style: { boxShadow: "0 0 10px var(--soft-gold)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-display text-2xl leading-snug transition-colors duration-300 group-hover:text-[oklch(0.78_0.06_20)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[oklch(0.78_0.06_20)]/45 font-sans font-medium text-lg mr-2.5",
						children: step
					}), title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/40 text-foreground/80 transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-midnight",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 leading-relaxed text-muted-foreground text-sm flex-grow",
				children: description
			})
		]
	});
}
var steps = [
	{
		step: "01",
		title: "Tell us your vision",
		description: "Share your date, venue, theme, and the feeling you want guests to walk into. No detail is too small.",
		icon: MessageSquare
	},
	{
		step: "02",
		title: "Receive your styling plan",
		description: "We return a tailored proposal with concepts, decor pieces, and a transparent custom quote built around you.",
		icon: ClipboardList
	},
	{
		step: "03",
		title: "Refine the details",
		description: "We collaborate on colour, scale, and finishing touches until the styling plan feels exactly right.",
		icon: Palette
	},
	{
		step: "04",
		title: "We style. You celebrate.",
		description: "On the day, our team installs every element and pack-down is handled — so you can be fully present.",
		icon: PartyPopper
	}
];
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: useScrollReveal(),
		className: "py-16 md:py-20 lg:pb-36 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center reveal-on-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Our Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
						children: ["From dream to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[oklch(0.78_0.06_20)]",
							children: "reality"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-muted-foreground",
						children: "A calm, thoughtful approach focused on clear communication and flawless execution of your vision."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pb-24 lg:pb-32 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[oklch(0.88_0.09_85)] via-[oklch(0.78_0.06_20)] to-[oklch(0.88_0.09_85)] hidden lg:block reveal-on-scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 lg:grid-cols-2 lg:gap-16",
					children: steps.map((s, index) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `relative reveal-on-scroll ${`reveal-delay-${index * 150}`} ${index % 2 === 1 ? "lg:translate-y-24" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessCard, {
								...s,
								index
							})
						}, s.step);
					})
				})]
			})]
		})
	});
}
function GalleryPreview() {
	const preview = galleryItems.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-20 bg-gradient-to-b from-background to-muted/25",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Our Portfolio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
					children: ["Moments of", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[oklch(0.78_0.06_20)]",
						children: "pure elegance"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/portfolio",
					className: "group inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/90 px-8 py-4 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-gradient-to-r hover:from-[oklch(0.32_0.06_300)] hover:to-[oklch(0.78_0.06_20)] hover:text-cream hover:shadow-luxury",
					children: ["View Full Portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-6",
				children: preview.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
					item,
					className: "aspect-[16/10]",
					index: i
				}, item.id))
			})]
		})
	});
}
var packages = [
	{
		name: "Essential Styling",
		tagline: "A considered foundation for smaller, intimate gatherings.",
		bestFor: "Intimate birthdays, baby showers, dinner parties",
		includes: [
			"Initial styling consultation",
			"One signature focal piece (backdrop or balloon installation)",
			"Coordinated table styling for one feature table",
			"Setup and pack-down on the day"
		]
	},
	{
		name: "Signature Celebration",
		tagline: "Our most-requested tier for fully styled celebrations.",
		bestFor: "Engagements, milestone birthdays, mid-size weddings",
		featured: true,
		includes: [
			"Full styling consultation and mood board",
			"Custom backdrop and statement balloon installation",
			"Full guest-table styling with linens, florals & candlelight",
			"Entrance styling and signage",
			"On-site styling team for setup & breakdown"
		]
	},
	{
		name: "Regal Full Styling",
		tagline: "End-to-end art direction for landmark events.",
		bestFor: "Weddings, large private events, bespoke themed celebrations",
		includes: [
			"Concept development & full creative direction",
			"Bespoke installations, florals, and lighting design",
			"Complete reception, ceremony, and lounge styling",
			"Entrance, stage, and focal-point design",
			"Dedicated lead stylist & full styling team on the day"
		]
	}
];
function PackageCard({ tier }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex h-full flex-col rounded-3xl border p-9 transition-all duration-500 ${tier.featured ? "border-[oklch(0.88_0.09_85)]/70 bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-luxury hover:-translate-y-2" : "border-border/60 bg-card shadow-soft hover:-translate-y-2 hover:border-[oklch(0.78_0.06_20)]/40 hover:shadow-elegant"}`,
		children: [
			tier.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-midnight shadow-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Most Popular"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: `font-display text-3xl ${tier.featured ? "text-cream" : ""}`,
				children: tier.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 leading-relaxed ${tier.featured ? "text-cream/80" : "text-muted-foreground"}`,
				children: tier.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-7 text-[11px] uppercase tracking-[0.24em] ${tier.featured ? "text-[oklch(0.88_0.09_85)]" : "text-muted-foreground"}`,
				children: "Ideal For"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-2 ${tier.featured ? "text-cream/90" : "text-foreground/85"}`,
				children: tier.bestFor
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-7 space-y-4 flex-grow",
				children: tier.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: `mt-0.5 h-5 w-5 shrink-0 ${tier.featured ? "text-[oklch(0.88_0.09_85)]" : "text-[oklch(0.55_0.06_150)]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: tier.featured ? "text-cream/90" : "text-foreground/85",
						children: item
					})]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `text-[11px] uppercase tracking-[0.24em] ${tier.featured ? "text-[oklch(0.88_0.09_85)]" : "text-muted-foreground"}`,
					children: "Investment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-2 font-display text-3xl ${tier.featured ? "text-cream" : ""}`,
					children: "Custom Quote"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/booking",
				className: `mt-9 w-full rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold h-auto py-4 transition-all duration-300 hover:brightness-110 ${tier.featured ? "bg-gradient-gold text-midnight shadow-luxury" : "bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream shadow-soft"}`,
				children: "Get Started Today"
			})
		]
	});
}
function PackagesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-luxury py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Service Packages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
						children: ["Choose your perfect", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[oklch(0.78_0.06_20)]",
							children: " celebration experience"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-muted-foreground",
						children: "Every package is carefully curated, with flexible options to match your vision, venue, and guest count perfectly."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-8 lg:grid-cols-3",
				children: packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: p.featured ? "order-first lg:order-none" : "order-last lg:order-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { tier: p })
				}, p.name))
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, { limit: 6 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCTA, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, { limit: 5 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
	] });
}
//#endregion
export { HomePage as component };
