import { i as __toESM } from "../_runtime.mjs";
import { t as siteConfig } from "./site-config-CzPcgAYQ.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useScrollReveal } from "./useScrollReveal-3470qMU-.mjs";
import { F as ArrowUpRight, I as ArrowRight, O as Check, T as ChevronRight, o as Sparkles } from "../_libs/lucide-react.mjs";
import { t as getEventTypeIcon } from "./event-type-icons-BH6Fa6T5.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C_b1WzJu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service, isFeature = false }) {
	const Icon = getEventTypeIcon(service.icon);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/booking",
		className: `group relative flex h-full flex-col overflow-hidden transition-all duration-300 gold-glow focus-on-scroll ${isFeature ? "rounded-3xl border border-border/60 bg-gradient-luxury p-10 shadow-elegant hover:-translate-y-2 hover:shadow-luxury" : "rounded-2xl border border-cream/10 bg-gradient-to-br from-deep-plum to-midnight text-cream p-7 shadow-elegant hover:-translate-y-2 hover:border-soft-gold/30 hover:shadow-luxury"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `grid place-items-center rounded-xl bg-gradient-gold text-midnight transition-transform duration-300 group-hover:scale-110 ${isFeature ? "h-16 w-16 shadow-luxury" : "h-12 w-12 shadow-soft"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: isFeature ? "h-7 w-7" : "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `uppercase tracking-[0.22em] ${isFeature ? "text-[11px]" : "text-[10px]"} ${isFeature ? "text-muted-foreground" : "text-soft-gold/90"} font-semibold`,
					children: service.bestFor
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: `mt-6 font-display leading-tight transition-colors duration-300 ${isFeature ? "text-4xl group-hover:text-[oklch(0.78_0.06_20)]" : "text-2xl text-cream group-hover:text-soft-gold"}`,
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 leading-relaxed ${isFeature ? "text-base text-muted-foreground" : "text-sm text-cream/70"}`,
				children: service.short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-auto flex items-center gap-2 pt-8 font-semibold transition-colors duration-300 ${isFeature ? "text-base group-hover:text-[oklch(0.78_0.06_20)]" : "text-sm text-cream/90 group-hover:text-soft-gold"}`,
				children: ["Book Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: `transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isFeature ? "h-5 w-5" : "h-4 w-4"}` })]
			})
		]
	});
}
var API_URL = "http://localhost:3001";
async function fetchPublishedServices() {
	try {
		const response = await fetch(`${API_URL}/api/services?published=true`);
		if (!response.ok) return [];
		return (await response.json()).items;
	} catch {
		return [];
	}
}
function useServices() {
	return useQuery({
		queryKey: ["services"],
		queryFn: fetchPublishedServices
	});
}
function ServicesSection({ limit }) {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const revealRef = useScrollReveal();
	const { data: services = [], isLoading } = useServices();
	const list = limit ? services.slice(0, limit) : services;
	(0, import_react.useEffect)(() => {
		if (activeIndex >= list.length) setActiveIndex(0);
	}, [activeIndex, list.length]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-prose",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: Array.from({ length: limit ?? 6 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 animate-pulse rounded-2xl bg-muted/40" }, index))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-[28rem] animate-pulse rounded-3xl bg-muted/40" })]
			})
		})
	});
	if (list.length === 0) return null;
	if (limit) {
		const activeService = list[activeIndex] ?? list[0];
		const ActiveIcon = getEventTypeIcon(activeService.icon);
		const highlights = activeService.highlights ?? [];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: revealRef,
			className: "py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-muted/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center justify-between gap-6 md:flex-row md:items-end md:text-left reveal-on-scroll",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl flex flex-col items-center md:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Our Styling Services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
								children: ["Elevate every moment with", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[oklch(0.78_0.06_20)]",
									children: "bespoke event decor"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-relaxed text-muted-foreground mx-auto md:mx-0",
							children: "From intimate birthday setups to grand wedding receptions, explore how we craft timeless experiences across Manchester."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:hidden",
						children: list.slice(0, 3).map((service, index) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `reveal-on-scroll ${`reveal-delay-${index % 2 * 150}`}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
							}, service.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 hidden lg:grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch reveal-on-scroll reveal-delay-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2.5 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2",
								children: "Click a service to explore concepts"
							}), list.map((service, idx) => {
								const Icon = getEventTypeIcon(service.icon);
								const active = idx === activeIndex;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveIndex(idx),
									className: `group flex items-center justify-between rounded-2xl border p-4.5 text-left transition-all duration-300 w-full ${active ? "border-[oklch(0.78_0.06_20)] bg-gradient-to-r from-[oklch(0.32_0.06_300_/_0.06)] to-[oklch(0.78_0.06_20_/_0.06)] text-[oklch(0.78_0.06_20)] shadow-soft translate-x-1.5" : "border-border/60 bg-card/50 hover:border-accent hover:bg-background/80"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 ${active ? "bg-gradient-gold text-midnight" : "bg-secondary/40 text-foreground/75"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-lg leading-tight font-medium",
											children: service.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5",
											children: service.bestFor
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `h-4 w-4 transition-transform duration-300 ${active ? "text-[oklch(0.78_0.06_20)] translate-x-0.5" : "text-muted-foreground group-hover:text-foreground"}` })]
								}, service.id);
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col justify-between rounded-3xl border border-border/60 bg-gradient-luxury p-8 md:p-10 shadow-elegant transition-all duration-500 hover:shadow-luxury",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,oklch(0.78_0.06_20_/_0.08),transparent_50%)] pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "glass-card inline-flex items-center gap-1.5 rounded-full px-4.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-foreground/85",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[oklch(0.8_0.08_85)]" }), " Featured Concept"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
												children: activeService.bestFor
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveIcon, { className: "h-5.5 w-5.5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-3xl md:text-4xl",
													children: activeService.title
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "leading-relaxed text-muted-foreground text-base max-w-xl",
												children: activeService.long
											})]
										}),
										highlights.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3 pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold uppercase tracking-[0.2em] text-foreground/75",
												children: "What's Included"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid gap-2.5 sm:grid-cols-2",
												children: highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[oklch(0.55_0.06_150)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-foreground/85",
														children: item
													})]
												}, item))
											})]
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-4 items-center justify-between relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/booking",
										className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 px-6 h-11 gold-glow",
										children: ["Book this styling", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services",
										className: "text-xs font-semibold text-muted-foreground hover:text-[oklch(0.78_0.06_20)] transition-colors inline-flex items-center gap-1.5",
										children: ["View all details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 flex justify-center reveal-on-scroll",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "group inline-flex items-center gap-3 rounded-full border border-border/70 bg-background px-8 py-4 text-sm font-semibold transition-all hover:border-[oklch(0.78_0.06_20)] hover:text-[oklch(0.78_0.06_20)] hover:shadow-soft gold-glow",
							children: ["Explore All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4.5 w-4.5 transition-transform group-hover:translate-x-1" })]
						})
					})
				]
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: revealRef,
		className: "py-16 md:py-20 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center justify-between gap-8 md:flex-row md:items-end md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl flex flex-col items-center md:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Our Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
						children: ["Elevate every moment with", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[oklch(0.78_0.06_20)]",
							children: "bespoke decor"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-base leading-relaxed text-muted-foreground mx-auto md:mx-0",
					children: "From intimate gatherings to grand celebrations, every detail is crafted to reflect your unique vision and style."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((service, index) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `reveal-on-scroll ${`reveal-delay-${index % 3 * 100}`} ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							service,
							isFeature: index === 0
						})
					}, service.id);
				})
			})]
		})
	});
}
function BookingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: useScrollReveal(),
		className: "py-16 md:py-20 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-prose",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] px-8 py-16 text-cream shadow-elegant md:px-16 md:py-20 reveal-on-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[oklch(0.88_0.09_85_/_0.3)] blur-3xl transition-transform duration-1000" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[oklch(0.78_0.06_20_/_0.2)] blur-3xl transition-transform duration-1000" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-bold uppercase tracking-[0.22em] text-[oklch(0.88_0.09_85)]",
									children: "Now booking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl leading-tight text-cream md:text-5xl text-balance",
									children: "Ready to design a celebration worth remembering?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-base leading-relaxed text-cream/75",
									children: "Share your date, venue, and vision. We will return with availability, ideas, and a tailored styling plan within two working days."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 md:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/booking",
								className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold text-midnight text-sm font-semibold hover:brightness-110 shadow-elegant px-8 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto",
								children: [siteConfig.cta.primary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cream/30 bg-transparent text-cream text-sm font-semibold hover:bg-cream/10 hover:border-cream/80 px-8 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto",
								children: "Speak to us"
							})]
						})]
					})
				]
			})
		})
	});
}
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
