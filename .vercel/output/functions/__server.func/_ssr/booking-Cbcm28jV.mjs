import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as ChevronDown, E as ChevronLeft, I as ArrowRight, L as ArrowLeft, O as Check, T as ChevronRight, g as LoaderCircle, k as Calendar } from "../_libs/lucide-react.mjs";
import { a as venueTypes, i as decorServices, n as budgetRanges, r as contactMethods, t as bookingSchema } from "./booking-schema-CzB3k4xt.mjs";
import { t as getEventTypeIcon } from "./event-type-icons-BH6Fa6T5.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as buttonVariants, t as Button } from "./button-BLZ6ednA.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as useFormContext, i as useForm, n as Controller, r as FormProvider, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { l as format } from "../_libs/date-fns.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-Cbcm28jV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var API_URL$1 = "http://localhost:3001";
async function submitBooking(data) {
	try {
		const response = await fetch(`${API_URL$1}/api/bookings`, {
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
			id: body.id,
			status: body.status
		};
	} catch {
		return {
			ok: false,
			error: "Network error — please try again."
		};
	}
}
var API_URL = "http://localhost:3001";
async function fetchPublishedEventTypes() {
	try {
		const response = await fetch(`${API_URL}/api/event-types?published=true`);
		if (!response.ok) return [];
		return (await response.json()).items;
	} catch {
		return [];
	}
}
function useEventTypes() {
	return useQuery({
		queryKey: ["event-types"],
		queryFn: fetchPublishedEventTypes
	});
}
function BookingStepEventType() {
	const { setValue, watch, formState } = useFormContext();
	const selected = watch("eventType");
	const error = formState.errors.eventType?.message;
	const { data: eventTypes = [], isLoading } = useEventTypes();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
			step: "01",
			title: "What are we styling?",
			subtitle: "Choose the type of event you would like styled."
		}),
		isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 animate-pulse rounded-2xl border border-border/60 bg-muted/40" }, index))
		}) : eventTypes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-2xl border border-dashed border-border/70 bg-background/60 px-6 py-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl text-foreground/90",
				children: "Event types coming soon"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Booking options will appear here once they are published from the admin panel."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: eventTypes.map((type) => {
				const Icon = getEventTypeIcon(type.icon);
				const active = selected === type.name;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setValue("eventType", type.name, { shouldValidate: true }),
					className: `group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 backdrop-blur-sm gold-glow ${active ? "border-[oklch(0.78_0.06_20)] bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]" : "border-border/60 bg-background/40 hover:border-accent hover:bg-background/80 hover:shadow-soft"}`,
					"aria-pressed": active,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-all duration-500 group-hover:scale-110 ${active ? "bg-gradient-gold text-midnight shadow-soft" : "bg-secondary/50 text-foreground/70"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `block font-display text-xl leading-tight font-medium transition-colors ${active ? "text-cream" : "group-hover:text-[oklch(0.78_0.06_20)]"}`,
						children: type.name
					}) })]
				}, type.id);
			})
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-destructive font-medium animate-shake",
			children: error
		}) : null
	] });
}
function StepHeader({ step, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-[10px] font-bold uppercase tracking-[0.24em] text-accent",
			children: ["Step ", step]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-3xl leading-tight md:text-4xl",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: subtitle
		})
	] });
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-xl border border-border/60 bg-background/40 px-4 py-2 text-sm shadow-inner transition-all duration-300 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(0.8_0.08_85)] focus-visible:border-[oklch(0.8_0.08_85)] focus-visible:bg-background/95 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
function Field({ label, error, required, className = "", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
				children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 text-accent",
					children: "*"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm text-destructive",
				children: error
			})
		]
	});
}
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
function BookingStepDetails() {
	const { setValue, watch, formState: { errors }, control } = useFormContext();
	const venueType = watch("venueType");
	const today = import_react.useMemo(() => {
		const d = /* @__PURE__ */ new Date();
		d.setHours(0, 0, 0, 0);
		return d;
	}, []);
	const parseLocalDate = (dateStr) => {
		if (!dateStr) return void 0;
		const [year, month, day] = dateStr.split("-").map(Number);
		return new Date(year, month - 1, day);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
		step: "02",
		title: "Tell us the details.",
		subtitle: "Date, venue, and the basics about the day."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 grid gap-5 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Preferred date",
				error: errors.preferredDate?.message,
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
					control,
					name: "preferredDate",
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("flex h-11 w-full items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-2 text-sm shadow-inner transition-all duration-300 text-left hover:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(0.8_0.08_85)] focus-visible:border-[oklch(0.8_0.08_85)] focus-visible:bg-background/95", !field.value && "text-muted-foreground/60"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: field.value ? format(parseLocalDate(field.value), "PPP") : "Pick a date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4.5 w-4.5 text-muted-foreground/70" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
						className: "w-auto p-0 rounded-2xl border-border bg-card shadow-elegant",
						align: "start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
							mode: "single",
							selected: field.value ? parseLocalDate(field.value) : void 0,
							onSelect: (date) => {
								if (date) {
									const year = date.getFullYear();
									const month = String(date.getMonth() + 1).padStart(2, "0");
									const day = String(date.getDate()).padStart(2, "0");
									field.onChange(`${year}-${month}-${day}`);
								} else field.onChange("");
							},
							disabled: { before: today },
							initialFocus: true
						})
					})] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Alternative date",
				error: errors.alternativeDate?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
					control,
					name: "alternativeDate",
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("flex h-11 w-full items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-2 text-sm shadow-inner transition-all duration-300 text-left hover:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(0.8_0.08_85)] focus-visible:border-[oklch(0.8_0.08_85)] focus-visible:bg-background/95", !field.value && "text-muted-foreground/60"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: field.value ? format(parseLocalDate(field.value), "PPP") : "Pick an alternative date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4.5 w-4.5 text-muted-foreground/70" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
						className: "w-auto p-0 rounded-2xl border-border bg-card shadow-elegant",
						align: "start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
							mode: "single",
							selected: field.value ? parseLocalDate(field.value) : void 0,
							onSelect: (date) => {
								if (date) {
									const year = date.getFullYear();
									const month = String(date.getMonth() + 1).padStart(2, "0");
									const day = String(date.getDate()).padStart(2, "0");
									field.onChange(`${year}-${month}-${day}`);
								} else field.onChange("");
							},
							disabled: { before: today },
							initialFocus: true
						})
					})] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Event location or venue",
				error: errors.eventLocation?.message,
				required: true,
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Venue name or address",
					className: "rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					...control._formValues.eventLocation && setValue("eventLocation", control._formValues.eventLocation),
					...control.register("eventLocation")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Manchester area",
				error: errors.area?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "e.g. Didsbury, Salford, City Centre",
					className: "rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					...control.register("area")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Estimated guest count",
				error: errors.guestCount?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "e.g. 80",
					inputMode: "numeric",
					className: "rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					...control.register("guestCount")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Indoor or outdoor",
				error: errors.venueType?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: venueTypes.map((v) => {
						const active = venueType === v;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setValue("venueType", v, { shouldValidate: true }),
							className: `rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 gold-glow ${active ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]" : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"}`,
							"aria-pressed": active,
							children: v
						}, v);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Setup time preference",
				error: errors.setupTime?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "e.g. From 10am, 2-hour window",
					className: "rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					...control.register("setupTime")
				})
			})
		]
	})] });
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[100px] w-full rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-sm shadow-inner transition-all duration-300 placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(0.8_0.08_85)] focus-visible:border-[oklch(0.8_0.08_85)] focus-visible:bg-background/95 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function BookingStepStyle() {
	const { register, setValue, watch, formState: { errors } } = useFormContext();
	const services = watch("servicesNeeded") ?? [];
	const budget = watch("budgetRange");
	const toggle = (s) => {
		setValue("servicesNeeded", services.includes(s) ? services.filter((x) => x !== s) : [...services, s], { shouldValidate: true });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
		step: "03",
		title: "Style & decor preferences.",
		subtitle: "Share the look, the feel, and the elements you have in mind."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Preferred theme or colour palette",
				error: errors.theme?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "e.g. Champagne, ivory and gold — soft and romantic",
					className: "rounded-xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					...register("theme")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Decor services needed",
				error: errors.servicesNeeded?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: decorServices.map((s) => {
						const active = services.includes(s);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggle(s),
							className: `rounded-full border px-4.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 gold-glow ${active ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]" : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"}`,
							"aria-pressed": active,
							children: s
						}, s);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Budget range",
				error: errors.budgetRange?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: budgetRanges.map((b) => {
						const active = budget === b;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setValue("budgetRange", b, { shouldValidate: true }),
							className: `rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 gold-glow ${active ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]" : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"}`,
							"aria-pressed": active,
							children: b
						}, b);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Inspiration notes",
				error: errors.inspirationNotes?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 4,
					placeholder: "Anything you've seen and loved, references, must-haves, or details to avoid.",
					className: "rounded-2xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] p-4",
					...register("inspirationNotes")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground",
				children: "Inspiration image uploads are available once you reply to our follow-up email — no need to attach anything here."
			})
		]
	})] });
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
function BookingStepContact() {
	const { register, setValue, watch, formState: { errors } } = useFormContext();
	const method = watch("preferredContactMethod");
	const consent = watch("consent");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
		step: "04",
		title: "How can we reach you?",
		subtitle: "We will reply within two working days."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 grid gap-5 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				error: errors.fullName?.message,
				required: true,
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Your full name",
					className: "rounded-xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					autoComplete: "name",
					...register("fullName")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				error: errors.email?.message,
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "email",
					placeholder: "you@email.com",
					className: "rounded-xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					autoComplete: "email",
					...register("email")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone or WhatsApp",
				error: errors.phone?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "+44 …",
					className: "rounded-xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4",
					inputMode: "tel",
					autoComplete: "tel",
					...register("phone")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Preferred contact method",
				error: errors.preferredContactMethod?.message,
				required: true,
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: contactMethods.map((m) => {
						const active = method === m;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setValue("preferredContactMethod", m, { shouldValidate: true }),
							className: `rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 gold-glow ${active ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]" : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"}`,
							"aria-pressed": active,
							children: m
						}, m);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message or special notes",
				error: errors.message?.message,
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 4,
					placeholder: "Anything else we should know?",
					className: "rounded-2xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] p-4",
					...register("message")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background/40 p-5 text-sm hover:border-[oklch(0.8_0.08_85)] transition-all duration-300 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						checked: !!consent,
						onCheckedChange: (v) => setValue("consent", !!v, { shouldValidate: true }),
						"aria-required": "true",
						className: "mt-0.5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground/80 leading-relaxed",
						children: "I consent to Regal Knot Events contacting me about my event enquiry and storing the details I have submitted for this purpose."
					})]
				}), errors.consent?.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-destructive font-medium",
					children: errors.consent.message
				})]
			})
		]
	})] });
}
function BookingSummary() {
	const { watch } = useFormContext();
	const v = watch();
	const rows = [
		["Event type", v.eventType ?? "—"],
		["Preferred date", v.preferredDate || "—"],
		["Alternative date", v.alternativeDate || "—"],
		["Location", v.eventLocation || "—"],
		["Area", v.area || "—"],
		["Guests", v.guestCount || "—"],
		["Venue", v.venueType ?? "—"],
		["Setup time", v.setupTime || "—"],
		["Theme", v.theme || "—"],
		["Services", (v.servicesNeeded ?? []).join(", ") || "—"],
		["Budget", v.budgetRange ?? "—"],
		["Name", v.fullName || "—"],
		["Email", v.email || "—"],
		["Phone", v.phone || "—"],
		["Contact via", v.preferredContactMethod ?? "—"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepHeader, {
			step: "05",
			title: "Review your request.",
			subtitle: "A quick check before we receive your enquiry."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-8 divide-y divide-border rounded-2xl border border-border bg-background",
			children: rows.map(([k, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-4 px-5 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "col-span-2 break-words text-foreground",
					children: val
				})]
			}, k))
		}),
		(v.inspirationNotes || v.message) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-4",
			children: [v.inspirationNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-background p-5 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "Inspiration notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 whitespace-pre-wrap text-foreground/85",
					children: v.inspirationNotes
				})]
			}), v.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-background p-5 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 whitespace-pre-wrap text-foreground/85",
					children: v.message
				})]
			})]
		})
	] });
}
var steps = [
	{
		id: 1,
		label: "Event Type"
	},
	{
		id: 2,
		label: "Details"
	},
	{
		id: 3,
		label: "Style"
	},
	{
		id: 4,
		label: "Contact"
	},
	{
		id: 5,
		label: "Review"
	}
];
var fieldsPerStep = {
	1: ["eventType"],
	2: ["preferredDate", "eventLocation"],
	3: ["servicesNeeded"],
	4: [
		"fullName",
		"email",
		"phone",
		"preferredContactMethod",
		"consent"
	],
	5: []
};
function BookingWizard() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const methods = useForm({
		resolver: u(bookingSchema),
		mode: "onTouched",
		defaultValues: {
			eventType: void 0,
			preferredDate: "",
			alternativeDate: "",
			eventLocation: "",
			area: "",
			guestCount: "",
			venueType: void 0,
			setupTime: "",
			theme: "",
			servicesNeeded: [],
			budgetRange: void 0,
			inspirationNotes: "",
			fullName: "",
			email: "",
			phone: "",
			preferredContactMethod: void 0,
			message: "",
			consent: false
		}
	});
	const next = async () => {
		const fields = fieldsPerStep[step];
		if (!await methods.trigger(fields, { shouldFocus: true })) return;
		setStep((s) => Math.min(s + 1, steps.length));
	};
	const back = () => {
		setStep((s) => Math.max(s - 1, 1));
	};
	const onSubmit = methods.handleSubmit(async (data) => {
		setSubmitting(true);
		setServerError(null);
		const result = await submitBooking(data);
		if (!result.ok) {
			setServerError(result.error ?? "Something went wrong. Please try again.");
			setSubmitting(false);
			return;
		}
		navigate({ to: "/thank-you" });
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormProvider, {
		...methods,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, { current: step }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-[2rem] border border-border bg-card/50 backdrop-blur-md p-6 shadow-elegant md:p-10 transition-all duration-300 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,oklch(0.78_0.06_20_/_0.04),transparent_40%)] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,oklch(0.8_0.08_85_/_0.04),transparent_40%)] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStepEventType, {}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStepDetails, {}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStepStyle, {}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingStepContact, {}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingSummary, {})
						]
					}),
					serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive font-medium animate-shake",
						children: serverError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center pt-6 border-t border-border/40 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: back,
							disabled: step === 1 || submitting,
							className: "h-11 rounded-full px-6 border border-border bg-background/50 text-sm font-semibold hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
						}), step < steps.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: next,
							className: "h-11 rounded-full px-8 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 hover:shadow-elegant inline-flex items-center justify-center gap-2 whitespace-nowrap gold-glow",
							children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: submitting,
							className: "h-11 rounded-full px-8 bg-gradient-gold text-midnight text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 hover:shadow-elegant inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed gold-glow",
							children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Sending Request…"] }) : "Send Booking Request"
						})]
					})
				]
			})]
		})
	});
}
function Stepper({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full relative px-4 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[21px] left-10 right-10 h-0.5 bg-border hidden sm:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[21px] left-10 h-0.5 bg-gradient-gold hidden sm:block transition-all duration-500",
				style: { width: `${(current - 1) / (steps.length - 1) * 84}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 w-full",
				children: steps.map((s) => {
					const active = s.id === current;
					const done = s.id < current;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center sm:flex-col gap-3 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${active ? "border-accent bg-accent/15 text-foreground scale-110 shadow-soft" : done ? "border-transparent bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-sm" : "border-border bg-background text-muted-foreground"}`,
							children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4.5 w-4.5 stroke-[2.5]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold",
								children: s.id
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${active ? "text-[oklch(0.78_0.06_20)]" : done ? "text-[oklch(0.32_0.06_300)]" : "text-muted-foreground"}`,
							children: s.label
						})]
					}, s.id);
				})
			})
		]
	});
}
function BookingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
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
				className: "space-y-6 mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Book Regal Knot Events"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl",
							children: ["Tell us about your", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic",
								children: "celebration"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-lg leading-relaxed text-foreground/80 mx-auto",
							children: "A quick five-step form. We will return with availability, styling ideas, and a tailored quote within two working days."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio",
						className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-base font-semibold hover:brightness-110 shadow-luxury hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 px-7 h-12",
						children: ["View Portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300",
						children: "Contact Us"
					})]
				})]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-24 pt-12 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-prose",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWizard, {})
		})
	})] });
}
//#endregion
export { BookingPage as component };
