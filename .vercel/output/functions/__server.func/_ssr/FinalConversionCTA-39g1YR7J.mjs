import { i as __toESM } from "../_runtime.mjs";
import { n as whatsappUrl, t as siteConfig } from "./site-config-CzPcgAYQ.mjs";
import { n as trackConversion } from "./analytics-DQWUx2A-.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useScrollReveal } from "./useScrollReveal-3470qMU-.mjs";
import { f as MessageCircle, g as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalConversionCTA-39g1YR7J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var API_URL = "http://localhost:3001";
async function submitEnquiry(data) {
	try {
		const response = await fetch(`${API_URL}/api/enquiries`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		const body = await response.json().catch(() => ({}));
		if (!response.ok) return {
			ok: false,
			error: body.error ?? "Something went wrong. Please try again.",
			fieldErrors: body.fieldErrors
		};
		return {
			ok: true,
			id: body.id
		};
	} catch {
		return {
			ok: false,
			error: "Network error — please try again."
		};
	}
}
var eventTypes = [
	"Wedding",
	"Birthday",
	"Baby Shower",
	"Corporate Event",
	"Other"
];
function EnquiryForm({ source = "homepage" }) {
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		fullName: "",
		phone: "",
		eventType: "",
		eventDate: ""
	});
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const onSubmit = async (event) => {
		event.preventDefault();
		setError(null);
		setLoading(true);
		const result = await submitEnquiry({
			...form,
			source
		});
		setLoading(false);
		if (!result.ok) {
			setError(result.error ?? "Please check your details and try again.");
			return;
		}
		trackConversion("enquiry_submit", { source });
		navigate({ to: "/thank-you" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: form.fullName,
						onChange: (e) => setForm((f) => ({
							...f,
							fullName: e.target.value
						})),
						className: "h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20",
						placeholder: "Your name",
						autoComplete: "name"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "tel",
						value: form.phone,
						onChange: (e) => setForm((f) => ({
							...f,
							phone: e.target.value
						})),
						className: "h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20",
						placeholder: "+44 7XXX XXXXXX",
						autoComplete: "tel"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Event Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						required: true,
						value: form.eventType,
						onChange: (e) => setForm((f) => ({
							...f,
							eventType: e.target.value
						})),
						className: "h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select event type"
						}), eventTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: type,
							children: type
						}, type))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Event Date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "date",
						value: form.eventDate,
						onChange: (e) => setForm((f) => ({
							...f,
							eventDate: e.target.value
						})),
						className: "h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20"
					})]
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: loading,
				className: "inline-flex h-12 min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose text-sm font-semibold text-cream shadow-luxury transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto sm:px-10",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Sending..."] }) : "Send Enquiry"
			})
		]
	});
}
function FinalConversionCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "enquire",
		ref: useScrollReveal(),
		className: "py-16 md:py-24 bg-gradient-to-br from-deep-plum to-midnight text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-prose",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal-on-scroll text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow mx-auto border-cream/20 bg-cream/10 text-cream/90 lg:mx-0",
							children: "Start Your Journey"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl leading-tight md:text-5xl text-balance",
							children: ["Let's Create Your", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-soft-gold italic",
								children: "Perfect Event"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base leading-relaxed text-cream/80 mx-auto lg:mx-0",
							children: "Share your date and vision — we'll respond quickly with availability and next steps. Prefer WhatsApp? Message us directly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl(),
							target: "_blank",
							rel: "noreferrer",
							onClick: () => trackConversion("whatsapp_click", { location: "final_cta" }),
							className: "mt-8 inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white shadow-elegant transition-all hover:brightness-110 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), siteConfig.cta.whatsapp]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal-on-scroll reveal-delay-100 rounded-[1.75rem] border border-cream/15 bg-cream/5 p-8 backdrop-blur-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-cream",
							children: "Quick Enquiry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-cream/70",
							children: "Takes less than a minute — we'll be in touch soon."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 [&_input]:bg-cream [&_select]:bg-cream [&_span]:text-cream/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { source: "homepage_cta" })
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { FinalConversionCTA as t };
