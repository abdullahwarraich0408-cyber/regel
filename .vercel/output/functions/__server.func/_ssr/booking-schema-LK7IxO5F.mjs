import { a as objectType, i as literalType, n as booleanType, o as stringType, r as enumType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-schema-LK7IxO5F.js
var eventTypes = [
	"Wedding",
	"Birthday",
	"Baby Shower",
	"Party",
	"Corporate or Private Event",
	"Custom Theme"
];
var venueTypes = [
	"Indoor",
	"Outdoor",
	"Both"
];
var contactMethods = [
	"Email",
	"Phone",
	"WhatsApp"
];
var decorServices = [
	"Backdrop",
	"Balloon decor",
	"Table styling",
	"Floral arrangements",
	"Full event styling",
	"Entrance styling",
	"Stage or focal-point decor"
];
var budgetRanges = [
	"Under £500",
	"£500 – £1,500",
	"£1,500 – £3,000",
	"£3,000 – £6,000",
	"£6,000+",
	"Not sure yet"
];
var bookingSchema = objectType({
	eventType: enumType(eventTypes, { message: "Please select an event type" }),
	preferredDate: stringType().min(1, { message: "Please choose a preferred date" }),
	alternativeDate: stringType().optional().default(""),
	eventLocation: stringType().trim().min(2, { message: "Please share the venue or location" }).max(160),
	area: stringType().trim().max(120).optional().default(""),
	guestCount: stringType().trim().max(20).optional().default(""),
	venueType: enumType(venueTypes).optional(),
	setupTime: stringType().trim().max(120).optional().default(""),
	theme: stringType().trim().max(200).optional().default(""),
	servicesNeeded: arrayType(enumType(decorServices)).default([]),
	budgetRange: enumType(budgetRanges).optional(),
	inspirationNotes: stringType().trim().max(1500).optional().default(""),
	fullName: stringType().trim().min(2, { message: "Please share your full name" }).max(120),
	email: stringType().trim().email({ message: "Please enter a valid email" }).max(200).optional().or(literalType("")),
	phone: stringType().trim().max(40).optional().default(""),
	preferredContactMethod: enumType(contactMethods, { message: "Choose a preferred contact method" }),
	message: stringType().trim().max(1500).optional().default(""),
	consent: booleanType().refine((v) => v === true, { message: "Please confirm consent to proceed" })
}).refine((data) => Boolean(data.email && data.email.length > 0) || Boolean(data.phone && data.phone.length > 0), {
	message: "Please provide either an email or a phone number",
	path: ["email"]
});
//#endregion
export { eventTypes as a, decorServices as i, budgetRanges as n, venueTypes as o, contactMethods as r, bookingSchema as t };
