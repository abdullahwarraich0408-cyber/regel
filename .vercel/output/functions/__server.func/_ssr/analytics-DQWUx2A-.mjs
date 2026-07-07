import { t as siteConfig } from "./site-config-CzPcgAYQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-DQWUx2A-.js
function trackConversion(event, params) {
	if (typeof window === "undefined") return;
	if (siteConfig.analytics.gtagId && window.gtag) window.gtag("event", event, {
		event_category: "conversion",
		...params
	});
	window.dataLayer = window.dataLayer ?? [];
	window.dataLayer.push({
		event,
		...params
	});
}
function initAnalytics() {
	const gtagId = siteConfig.analytics.gtagId;
	if (!gtagId || typeof document === "undefined") return;
	if (document.getElementById("gtag-script")) return;
	const script = document.createElement("script");
	script.id = "gtag-script";
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
	document.head.appendChild(script);
	window.dataLayer = window.dataLayer ?? [];
	window.gtag = function gtag(...args) {
		window.dataLayer?.push(args);
	};
	window.gtag("js", /* @__PURE__ */ new Date());
	window.gtag("config", gtagId);
}
//#endregion
export { trackConversion as n, initAnalytics as t };
