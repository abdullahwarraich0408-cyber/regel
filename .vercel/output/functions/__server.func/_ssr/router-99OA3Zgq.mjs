import { i as __toESM } from "../_runtime.mjs";
import { n as whatsappUrl, t as siteConfig } from "./site-config-CzPcgAYQ.mjs";
import { n as trackConversion, t as initAnalytics } from "./analytics-DQWUx2A-.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route$12 } from "../_id-DH50hdaw.mjs";
import { S as Facebook, _ as Instagram, f as MessageCircle, h as Mail, m as MapPin, n as X, p as Menu, u as Phone } from "../_libs/lucide-react.mjs";
import { t as bookingSchema } from "./booking-schema-CzB3k4xt.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as weddingPlanningPage, i as servicePageJsonLd, n as eventManagementPage, r as organizationJsonLd, t as corporateEventsPage } from "./service-pages-DX3t7ouL.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-99OA3Zgq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DdI-VyuW.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function MobileNav({ open, onClose, links }) {
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const original = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = original;
		};
	}, [open]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 lg:hidden",
		role: "dialog",
		"aria-modal": "true",
		"data-lenis-prevent": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close menu backdrop",
			className: "absolute inset-0 bg-mobile-backdrop transition-opacity duration-300",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-mobile-drawer text-cream p-6 shadow-elegant border-l border-cream/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl tracking-wide text-cream/90",
						children: siteConfig.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 hover:text-cream hover:bg-cream/10 transition-colors",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-10 flex flex-col gap-1.5",
					"aria-label": "Mobile",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						onClick: onClose,
						activeProps: { className: "bg-cream/10 text-soft-gold font-semibold border-l-4 border-soft-gold pl-3" },
						activeOptions: { exact: link.to === "/" },
						className: "rounded-xl px-4 py-2.5 font-sans text-base text-cream/80 transition-all hover:bg-cream/5 hover:text-cream",
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto space-y-4 pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/booking",
						onClick: onClose,
						className: "w-full rounded-full bg-gradient-gold text-midnight text-sm font-semibold hover:brightness-105 transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 px-4 shadow-soft",
						children: siteConfig.cta.primary
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-xs text-cream/60",
						children: [
							siteConfig.location,
							" · ",
							siteConfig.email
						]
					})]
				})
			]
		})]
	});
}
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/portfolio",
		label: "Portfolio"
	},
	{
		to: "/booking",
		label: "Plan My Event"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-cream/15 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-luxury backdrop-blur-md" : "border-b border-cream/10 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-elegant"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose flex h-20 items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3",
					"aria-label": "Regal Knot Events home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-[11px] font-bold tracking-widest text-midnight shadow-soft transition-transform group-hover:scale-105",
						children: "RK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl leading-none tracking-tight text-cream drop-shadow-md",
						children: siteConfig.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "text-sm font-semibold text-cream/85 transition-all hover:text-[oklch(0.88_0.09_85)] hover:scale-105 relative",
						activeProps: { className: "text-[oklch(0.88_0.09_85)] font-bold" },
						activeOptions: { exact: link.to === "/" },
						children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [link.label, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-gold shadow-luxury" })] })
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/booking",
						className: "h-11 rounded-full px-6 bg-gradient-gold text-midnight text-sm font-semibold hover:brightness-110 shadow-soft transition-all hover:shadow-elegant hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap",
						children: siteConfig.cta.primary
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(true),
					className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream lg:hidden transition-all hover:border-[oklch(0.88_0.09_85)] hover:bg-cream/25 hover:shadow-soft",
					"aria-label": "Open menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {
		open,
		onClose: () => setOpen(false),
		links: navLinks
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/70 bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-prose grid gap-14 py-20 sm:grid-cols-2 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-[12px] font-bold tracking-widest text-midnight shadow-luxury",
								children: "RK"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl",
								children: siteConfig.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md leading-relaxed text-cream/80",
							children: siteConfig.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex gap-4",
							children: [siteConfig.social.instagram && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.social.instagram,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "grid h-12 w-12 place-items-center rounded-full border border-cream/30 bg-cream/10 transition-all hover:border-cream hover:bg-cream/20 hover:shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-cream" })
							}), siteConfig.social.facebook && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.social.facebook,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook",
								className: "grid h-12 w-12 place-items-center rounded-full border border-cream/30 bg-cream/10 transition-all hover:border-cream hover:bg-cream/20 hover:shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5 text-cream" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xl text-cream",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-3 text-cream/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-cream transition-colors",
							children: "Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portfolio",
							className: "hover:text-cream transition-colors",
							children: "Portfolio"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/booking",
							className: "hover:text-cream transition-colors",
							children: "Plan my event"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-cream transition-colors",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xl text-cream",
					children: "Get in Touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-4 text-cream/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 h-5 w-5 text-[oklch(0.88_0.09_85)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								siteConfig.location,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								siteConfig.serviceArea
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-[oklch(0.88_0.09_85)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${siteConfig.email}`,
								className: "hover:text-cream transition-colors",
								children: siteConfig.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-[oklch(0.88_0.09_85)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
								className: "hover:text-cream transition-colors",
								children: siteConfig.phone
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-prose flex flex-col items-center justify-between gap-3 py-8 text-sm text-cream/70 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					siteConfig.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Premium event decor · Manchester, UK" })]
			})
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappUrl(),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		onClick: () => trackConversion("whatsapp_click", { location: "floating_button" }),
		className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:brightness-110 md:bottom-8 md:right-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: siteConfig.cta.whatsapp
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${siteConfig.name} — Premium Event Decor in Manchester` },
			{
				name: "description",
				content: siteConfig.description
			},
			{
				name: "author",
				content: siteConfig.name
			},
			{
				property: "og:site_name",
				content: siteConfig.name
			},
			{
				property: "og:title",
				content: `${siteConfig.name} — Premium Event Decor in Manchester`
			},
			{
				property: "og:description",
				content: siteConfig.description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#f7f3ea"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(organizationJsonLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	const { pathname } = useRouterState().location;
	const lenisRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if ("scrollRestoration" in history) history.scrollRestoration = "manual";
		window.scrollTo(0, 0);
		const lenis = new Lenis({
			duration: 1.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		lenisRef.current = lenis;
		lenis.scrollTo(0, { immediate: true });
		let frame = 0;
		const raf = (time) => {
			lenis.raf(time);
			frame = requestAnimationFrame(raf);
		};
		frame = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(frame);
			lenis.destroy();
			lenisRef.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
		window.scrollTo(0, 0);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		initAnalytics();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 w-full shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
			]
		})
	});
}
var $$splitComponentImporter$8 = () => import("./wedding-planning-BknBweLC.mjs");
var Route$10 = createFileRoute("/wedding-planning")({
	head: () => ({
		meta: [
			{ title: weddingPlanningPage.seo.title },
			{
				name: "description",
				content: weddingPlanningPage.seo.description
			},
			{
				name: "keywords",
				content: weddingPlanningPage.seo.keywords
			},
			{
				property: "og:title",
				content: weddingPlanningPage.seo.title
			},
			{
				property: "og:description",
				content: weddingPlanningPage.seo.description
			},
			{
				property: "og:url",
				content: "/wedding-planning"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/wedding-planning"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(servicePageJsonLd(weddingPlanningPage))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./thank-you-BBLkq36R.mjs");
var title$5 = "Thank you — Regal Knot Events";
var description$4 = "Your event request has been received. We will be in touch shortly.";
var Route$9 = createFileRoute("/thank-you")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$4
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title$5
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:url",
				content: "/thank-you"
			}
		],
		links: [{
			rel: "canonical",
			href: "/thank-you"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var BASE_URL = "";
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/wedding-planning",
			changefreq: "monthly",
			priority: "0.95"
		},
		{
			path: "/event-management",
			changefreq: "monthly",
			priority: "0.95"
		},
		{
			path: "/corporate-events",
			changefreq: "monthly",
			priority: "0.95"
		},
		{
			path: "/services",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/portfolio",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/booking",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.7"
		}
	].map((e) => [
		"  <url>",
		`    <loc>${BASE_URL}${e.path}</loc>`,
		e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
		e.priority ? `    <priority>${e.priority}</priority>` : null,
		"  </url>"
	].filter(Boolean).join("\n")).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./services-C_b1WzJu.mjs");
var title$4 = "Event Decor Services — Regal Knot Events";
var description$3 = "Wedding decor, birthday styling, baby showers, balloon installations, backdrops, table settings and floral arrangements across Manchester.";
var Route$7 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$3
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./portfolio-Bq2R9HOX.mjs");
var title$3 = "Portfolio — Regal Knot Events";
var description$2 = "A gallery of premium event setups by Regal Knot Events — weddings, birthdays, baby showers, balloon installations, romantic restaurant setups and bespoke backdrops.";
var Route$6 = createFileRoute("/portfolio")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:url",
				content: "/portfolio"
			}
		],
		links: [{
			rel: "canonical",
			href: "/portfolio"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./event-management-BrTzVYTO.mjs");
var Route$5 = createFileRoute("/event-management")({
	head: () => ({
		meta: [
			{ title: eventManagementPage.seo.title },
			{
				name: "description",
				content: eventManagementPage.seo.description
			},
			{
				name: "keywords",
				content: eventManagementPage.seo.keywords
			},
			{
				property: "og:title",
				content: eventManagementPage.seo.title
			},
			{
				property: "og:description",
				content: eventManagementPage.seo.description
			},
			{
				property: "og:url",
				content: "/event-management"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/event-management"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(servicePageJsonLd(eventManagementPage))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./corporate-events-tT_aKz6X.mjs");
var Route$4 = createFileRoute("/corporate-events")({
	head: () => ({
		meta: [
			{ title: corporateEventsPage.seo.title },
			{
				name: "description",
				content: corporateEventsPage.seo.description
			},
			{
				name: "keywords",
				content: corporateEventsPage.seo.keywords
			},
			{
				property: "og:title",
				content: corporateEventsPage.seo.title
			},
			{
				property: "og:description",
				content: corporateEventsPage.seo.description
			},
			{
				property: "og:url",
				content: "/corporate-events"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/corporate-events"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(servicePageJsonLd(corporateEventsPage))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-De2awqwh.mjs");
var title$2 = "Contact — Regal Knot Events";
var description$1 = `Get in touch with Regal Knot Events — premium event decor and styling in Manchester. Email ${siteConfig.email} or send a booking enquiry.`;
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./booking-Cbcm28jV.mjs");
var title$1 = "Plan My Event — Regal Knot Events";
var description = "Send your event styling enquiry to Regal Knot Events. Share your date, venue, theme, and decor needs and we will reply with availability and a tailored quote.";
var Route$2 = createFileRoute("/booking")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: "/booking"
			}
		],
		links: [{
			rel: "canonical",
			href: "/booking"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BG5Gy7Hk.mjs");
var title = `${siteConfig.name} — Premium Wedding & Event Styling in Manchester`;
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: "Premium wedding and event coordination in Manchester. Check availability, view real event portfolio, and enquire via WhatsApp."
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: siteConfig.description
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/**
* In-memory mock adapter used until Lovable Cloud (Supabase) is connected.
*
* TODO: When Lovable Cloud is enabled, swap this for a Supabase adapter:
*
*   const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
*   const { data, error } = await supabaseAdmin
*     .from("bookings")
*     .insert({ ...input, status: "new" })
*     .select()
*     .single();
*
* Suggested `bookings` table columns:
*   id, created_at, event_type, preferred_date, alternative_date,
*   event_location, area, guest_count, venue_type, setup_time,
*   theme, services_needed (text[]), budget_range, inspiration_notes,
*   full_name, email, phone, preferred_contact_method, message,
*   status ('new' | 'contacted' | 'quoted' | 'confirmed' | 'declined')
*/
var MockBookingAdapter = class {
	bookings = [];
	async create(input) {
		const record = {
			...input,
			id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `booking_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "new"
		};
		this.bookings.push(record);
		console.info("[bookings] new request received", {
			id: record.id,
			eventType: record.eventType,
			preferredDate: record.preferredDate
		});
		return record;
	}
};
var bookingStorage = new MockBookingAdapter();
async function submitBooking(raw) {
	const parsed = bookingSchema.safeParse(raw);
	if (!parsed.success) return {
		ok: false,
		fieldErrors: parsed.error.flatten().fieldErrors,
		error: "Please review the highlighted fields and try again."
	};
	return {
		ok: true,
		record: await bookingStorage.create(parsed.data)
	};
}
var Route = createFileRoute("/api/bookings")({ server: { handlers: { POST: async ({ request }) => {
	let payload;
	try {
		payload = await request.json();
	} catch {
		return Response.json({ error: "Invalid JSON body" }, { status: 400 });
	}
	const result = await submitBooking(payload);
	if (!result.ok) return Response.json({
		error: result.error,
		fieldErrors: result.fieldErrors
	}, { status: 400 });
	return Response.json({
		id: result.record.id,
		status: result.record.status
	}, { status: 201 });
} } } });
var WeddingPlanningRoute = Route$10.update({
	id: "/wedding-planning",
	path: "/wedding-planning",
	getParentRoute: () => Route$11
});
var ThankYouRoute = Route$9.update({
	id: "/thank-you",
	path: "/thank-you",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var PortfolioRoute = Route$6.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$11
});
var EventManagementRoute = Route$5.update({
	id: "/event-management",
	path: "/event-management",
	getParentRoute: () => Route$11
});
var CorporateEventsRoute = Route$4.update({
	id: "/corporate-events",
	path: "/corporate-events",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var BookingRoute = Route$2.update({
	id: "/booking",
	path: "/booking",
	getParentRoute: () => Route$11
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var PortfolioIdRoute = Route$12.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => PortfolioRoute
});
var ApiBookingsRoute = Route.update({
	id: "/api/bookings",
	path: "/api/bookings",
	getParentRoute: () => Route$11
});
var PortfolioRouteChildren = { PortfolioIdRoute };
var rootRouteChildren = {
	IndexRoute,
	BookingRoute,
	ContactRoute,
	CorporateEventsRoute,
	EventManagementRoute,
	PortfolioRoute: PortfolioRoute._addFileChildren(PortfolioRouteChildren),
	ServicesRoute,
	SitemapDotxmlRoute,
	ThankYouRoute,
	WeddingPlanningRoute,
	ApiBookingsRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
