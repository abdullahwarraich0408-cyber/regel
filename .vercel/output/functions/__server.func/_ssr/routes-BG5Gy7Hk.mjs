import { i as __toESM } from "../_runtime.mjs";
import { t as siteConfig } from "./site-config-CzPcgAYQ.mjs";
import { n as trackConversion } from "./analytics-DQWUx2A-.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useScrollReveal } from "./useScrollReveal-3470qMU-.mjs";
import { A as CalendarDays, C as ExternalLink, I as ArrowRight, L as ArrowLeft, P as Award, _ as Instagram, a as Star, k as Calendar, l as Play, o as Sparkles, s as Quote, v as Heart, w as CircleCheck, y as Handshake } from "../_libs/lucide-react.mjs";
import { t as FinalConversionCTA } from "./FinalConversionCTA-39g1YR7J.mjs";
import { t as getEventTypeIcon } from "./event-type-icons-BH6Fa6T5.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as galleryCategories, r as usePortfolioItems, t as GalleryCard } from "./usePortfolioItems-CP9YL0Yl.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BG5Gy7Hk.js
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
		category: "Private Events",
		title: "Gilded Milestone Setup",
		tagline: "Sleek midnight panels, chrome accents, and cascading warm lights.",
		gradient: "linear-gradient(135deg, oklch(0.20 0.01 260) 0%, oklch(0.32 0.06 300) 45%, oklch(0.8 0.08 85) 100%)",
		badge: "Milestones"
	},
	{
		category: "Corporate",
		title: "Executive Brand Launch",
		tagline: "Architectural installations and polished brand-aligned styling.",
		gradient: "linear-gradient(135deg, oklch(0.905 0.015 65) 0%, oklch(0.32 0.06 300) 50%, oklch(0.20 0.01 260) 100%)",
		badge: "Corporate"
	}
];
function HeroSection() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % previews.length);
		}, 6e3);
		return () => clearInterval(timer);
	}, []);
	const activePreview = previews[activeIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-hero pt-6 pb-20 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 z-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.2)] blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[oklch(0.88_0.09_85_/_0.28)] to-[oklch(0.72_0.07_70_/_0.18)] blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.55),transparent_55%)]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-prose relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-fade-in eyebrow mx-auto lg:mx-0",
							style: { animationDelay: "0.05s" },
							children: "Manchester's Premium Event Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "hero-fade-in mt-5 font-display text-[2.5rem] leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]",
							style: { animationDelay: "0.15s" },
							children: ["Where luxury meets", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-dusty-rose italic",
								children: "flawless celebration"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-fade-in mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/80 lg:mx-0 lg:text-lg",
							style: { animationDelay: "0.25s" },
							children: "Premium wedding and event coordination across Manchester — bespoke styling, seamless setup, and unforgettable moments crafted for you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "hero-fade-in mx-auto mt-6 flex max-w-xl flex-col gap-2.5 text-left lg:mx-0",
							style: { animationDelay: "0.32s" },
							children: siteConfig.heroHighlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5 text-sm text-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-sage" }), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-fade-in mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start",
							style: { animationDelay: "0.4s" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/booking",
								onClick: () => trackConversion("availability_click"),
								className: "inline-flex h-12 min-h-[48px] min-w-[160px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-7 text-sm font-semibold text-cream shadow-luxury transition-all duration-300 hover:scale-[1.02] hover:brightness-110",
								children: [siteConfig.cta.primary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/booking",
								onClick: () => trackConversion("consultation_click"),
								className: "inline-flex h-12 min-h-[48px] min-w-[160px] items-center justify-center gap-2 rounded-full border border-border/70 bg-background/70 px-7 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-deep-plum hover:bg-background",
								children: [siteConfig.cta.secondary, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-fade-in mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start",
							style: { animationDelay: "0.48s" },
							children: siteConfig.trustBadges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border/50 bg-background/70 px-3.5 py-1.5 text-[11px] font-medium text-foreground/80 backdrop-blur-sm",
								children: badge
							}, badge))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-fade-in relative mx-auto w-full max-w-md lg:max-w-none",
					style: { animationDelay: "0.3s" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-end",
							children: previews.map((preview, idx) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveIndex(idx),
									className: `shrink-0 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${idx === activeIndex ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury" : "border-border/60 bg-background/60 text-foreground/75 hover:border-dusty-rose/50"}`,
									children: preview.category
								}, preview.category);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] max-h-[420px] w-full overflow-hidden rounded-[2rem] border border-border/30 shadow-elegant",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 transition-all duration-700 ease-in-out",
									style: { background: activePreview.gradient }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.45),transparent_70%)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col justify-end p-6 text-cream",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex w-fit items-center gap-1.5 rounded-full border border-cream/20 bg-cream/20 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-soft-gold" }), activePreview.badge]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-2xl leading-tight drop-shadow-lg",
											children: activePreview.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 max-w-sm text-xs font-medium text-cream/95 drop-shadow-md",
											children: activePreview.tagline
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-4 -right-2 hidden w-44 rounded-xl border border-soft-gold bg-gradient-to-br from-deep-plum to-midnight p-3.5 text-cream shadow-[0_10px_35px_oklch(0.8_0.08_85_/_0.25)] sm:block animate-float",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[8px] font-semibold uppercase tracking-[0.24em] text-cream/75",
									children: "Now Booking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 font-display text-lg font-medium",
									children: "2026 Events"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-center gap-1 text-[11px] font-semibold text-soft-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-soft-gold" }), "Limited dates available"]
								})
							]
						})
					]
				})]
			})
		})]
	});
}
var API_URL$1 = "http://localhost:3001";
async function fetchInstagramFeed() {
	try {
		const response = await fetch(`${API_URL$1}/api/instagram/feed`);
		if (!response.ok) return {
			posts: [],
			username: "regal.knot.events",
			followerCount: 0
		};
		return await response.json();
	} catch {
		return {
			posts: [],
			username: "regal.knot.events",
			followerCount: 0
		};
	}
}
function useInstagramFeed() {
	return useQuery({
		queryKey: ["instagram-feed"],
		queryFn: fetchInstagramFeed,
		staleTime: 1e3 * 60 * 30,
		refetchOnWindowFocus: false
	});
}
function InstagramSection() {
	const revealRef = useScrollReveal();
	const { data, isLoading } = useInstagramFeed();
	const posts = data?.posts ?? [];
	const username = data?.username ?? "regal.knot.events";
	const followerCount = data?.followerCount ?? 0;
	const profileUrl = siteConfig.social.instagram;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: revealRef,
		className: "border-y border-border/40 bg-background py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Real Events, Real Moments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-3xl leading-tight md:text-4xl",
						children: ["Follow our latest", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-dusty-rose italic",
							children: "celebrations on Instagram"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: [
							"Live from",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: profileUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "font-semibold text-deep-plum hover:text-dusty-rose",
								children: ["@", username]
							}),
							followerCount > 0 ? ` · ${followerCount.toLocaleString()} followers` : ""
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: profileUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full border border-border/70 bg-background px-6 text-sm font-semibold transition-all hover:border-dusty-rose hover:shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }),
						"@",
						username
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4",
				children: isLoading ? Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square animate-pulse rounded-2xl bg-muted/50" }, index)) : posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-full rounded-2xl border border-dashed border-border/70 px-6 py-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-foreground/85",
						children: "Instagram feed loading soon"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							"Follow us on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: profileUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "text-dusty-rose",
								children: ["@", username]
							}),
							" ",
							"for the latest event styling."
						]
					})]
				}) : posts.slice(0, 8).map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: post.url,
					target: "_blank",
					rel: "noreferrer",
					className: `reveal-on-scroll reveal-delay-${index * 75} group relative aspect-square overflow-hidden rounded-2xl border border-border/50 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.imageUrl,
							alt: post.caption,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
							loading: index > 3 ? "lazy" : "eager",
							referrerPolicy: "no-referrer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" }),
						post.isVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-3 top-3 rounded-full bg-black/50 p-1.5 text-cream backdrop-blur-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3 fill-current" })
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col justify-end p-4 text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "line-clamp-2 text-xs font-medium leading-snug",
								children: post.caption
							}), post.likes > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-soft-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 fill-soft-gold" }), post.likes]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-3 top-3 rounded-full bg-cream/90 p-1.5 opacity-0 transition-opacity group-hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-3.5 w-3.5 text-midnight" })
						})
					]
				}, post.id))
			})]
		})
	});
}
var serviceRoutes = {
	"wedding-planning": "/wedding-planning",
	"event-management": "/event-management",
	"corporate-events": "/corporate-events"
};
function PremiumServicesOverview() {
	const revealRef = useScrollReveal();
	const services = siteConfig.premiumServices;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: revealRef,
		className: "py-16 md:py-24 bg-gradient-to-b from-muted/10 to-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow mx-auto",
					children: "Our Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
					children: ["Premium styling for every", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-dusty-rose",
						children: "celebration"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: services.map((service, index) => {
					const Icon = getEventTypeIcon(service.icon);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `reveal-on-scroll reveal-delay-${index * 100} group flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-dusty-rose/40 hover:shadow-elegant`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							style: { background: `linear-gradient(135deg, ${service.palette[0]} 0%, ${service.palette[1]} 100%)` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: service.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: serviceRoutes[service.slug],
									className: "mt-6 inline-flex h-11 min-h-[44px] items-center gap-2 text-sm font-semibold text-deep-plum transition-colors hover:text-dusty-rose",
									children: ["Learn More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})]
					}, service.slug);
				})
			})]
		})
	});
}
function PortfolioSection() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const { data: portfolioItems = [], isLoading } = usePortfolioItems();
	const revealRef = useScrollReveal();
	const items = (0, import_react.useMemo)(() => filter === "All" ? portfolioItems.slice(0, 6) : portfolioItems.filter((item) => item.category === filter).slice(0, 6), [filter, portfolioItems]);
	if (!isLoading && portfolioItems.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: revealRef,
		className: "py-16 md:py-24 bg-gradient-to-b from-background to-muted/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end reveal-on-scroll",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Real Event Stories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
						children: ["Celebrations we've", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-dusty-rose",
							children: "brought to life"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio",
						className: "group inline-flex h-12 min-h-[48px] items-center gap-3 rounded-full border border-border/70 bg-background/90 px-8 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-dusty-rose hover:shadow-luxury",
						children: ["View Full Portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1.5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2 reveal-on-scroll",
					children: galleryCategories.map((category) => {
						const active = filter === category;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(category),
							className: `min-h-[44px] rounded-full border px-4 py-2 text-sm transition-all ${active ? "border-dusty-rose bg-gradient-to-r from-deep-plum/15 to-dusty-rose/15 font-semibold text-dusty-rose shadow-soft" : "border-border bg-background hover:border-dusty-rose"}`,
							"aria-pressed": active,
							children: category
						}, category);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3",
					children: isLoading ? Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-5 aspect-[4/5] animate-pulse break-inside-avoid rounded-[1.75rem] bg-muted" }, index)) : items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 break-inside-avoid reveal-on-scroll",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
							item,
							className: index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]",
							index,
							linkToDetail: true
						})
					}, item.id))
				})
			]
		})
	});
}
var testimonials = [
	{
		quote: "Regal Knot transformed our wedding reception into something straight from a magazine. Every detail felt intentional, luxurious, and completely us.",
		name: "Sarah & James",
		event: "Wedding Reception",
		rating: 5
	},
	{
		quote: "From the first mood board to pack-down on the night, the team were calm, creative, and incredibly professional. Our guests couldn't stop talking about the decor.",
		name: "Amira K.",
		event: "Milestone Birthday",
		rating: 5
	},
	{
		quote: "They understood our baby shower theme instantly and delivered a setup that felt warm, elegant, and beautifully styled. Booking was effortless too.",
		name: "Priya M.",
		event: "Baby Shower",
		rating: 5
	}
];
var API_URL = "http://localhost:3001";
async function fetchPublishedTestimonials() {
	try {
		const response = await fetch(`${API_URL}/api/testimonials?published=true`);
		if (!response.ok) return [];
		return (await response.json()).items;
	} catch {
		return [];
	}
}
function useTestimonials() {
	return useQuery({
		queryKey: ["testimonials"],
		queryFn: fetchPublishedTestimonials
	});
}
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
function TestimonialsSection() {
	const revealRef = useScrollReveal();
	const { data: apiTestimonials = [] } = useTestimonials();
	const items = apiTestimonials.length > 0 ? apiTestimonials.map((t) => ({
		quote: t.quote,
		name: t.name,
		event: t.event,
		rating: t.rating,
		source: t.source
	})) : testimonials.map((t) => ({
		...t,
		source: "client"
	}));
	const { googleReviews } = siteConfig;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: revealRef,
		className: "overflow-hidden bg-gradient-to-b from-muted/20 to-background py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center reveal-on-scroll",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow mx-auto",
						children: "Client Love"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
						children: ["Trusted by hosts who want", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-dusty-rose",
							children: "something truly special"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 reveal-on-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
						opts: {
							align: "start",
							loop: true
						},
						className: "w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
							className: "-ml-4",
							children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
								className: "pl-4 md:basis-1/2 lg:basis-1/3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "group relative flex h-full flex-col rounded-[1.75rem] border border-border/60 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-dusty-rose/40 hover:shadow-elegant",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
											className: "h-8 w-8 text-soft-gold/80",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
											className: "mt-5 flex-1 text-base leading-relaxed text-foreground/85",
											children: [
												"“",
												item.quote,
												"”"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-8 border-t border-border/50 pt-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex gap-1",
													children: Array.from({ length: item.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
														className: "h-3.5 w-3.5 fill-soft-gold text-soft-gold",
														"aria-hidden": true
													}, i))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3 font-display text-xl",
													children: item.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
													children: [item.event, item.source === "google" ? " · Google Review" : ""]
												})
											]
										})
									]
								})
							}, `${item.name}-${item.event}`))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static translate-y-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static translate-y-0" })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 reveal-on-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: googleReviews.url,
						target: "_blank",
						rel: "noreferrer",
						className: "mx-auto flex max-w-xl flex-col items-center rounded-[1.75rem] border border-border/60 bg-card p-6 text-center shadow-soft transition-all hover:border-dusty-rose/40 hover:shadow-elegant sm:flex-row sm:gap-6 sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-midnight shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-bold",
									children: "G"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-1 sm:justify-start",
									children: [Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-soft-gold text-soft-gold" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-2 text-sm font-semibold",
										children: [googleReviews.rating, ".0"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: [
										googleReviews.count,
										"+ reviews on Google · ",
										googleReviews.placeName
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-deep-plum sm:mt-0",
								children: ["Read reviews", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
							})
						]
					})
				})
			]
		})
	});
}
var icons = [
	CalendarDays,
	Star,
	Award,
	Handshake
];
function TrustSection() {
	const revealRef = useScrollReveal();
	const stats = siteConfig.stats;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: revealRef,
		className: "py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center reveal-on-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow mx-auto",
					children: "Why Clients Trust Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl leading-tight md:text-5xl",
					children: ["Built on experience,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-dusty-rose italic",
						children: "delivered with care"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((stat, index) => {
					const Icon = icons[index] ?? Star;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `reveal-on-scroll reveal-delay-${index * 75} rounded-[1.75rem] border border-border/60 bg-card p-7 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-dusty-rose/30 hover:shadow-elegant`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 font-display text-3xl text-deep-plum md:text-4xl",
								children: stat.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
								children: stat.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/70",
								children: stat.detail
							})
						]
					}, stat.label);
				})
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PremiumServicesOverview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalConversionCTA, {})
	] });
}
//#endregion
export { HomePage as component };
