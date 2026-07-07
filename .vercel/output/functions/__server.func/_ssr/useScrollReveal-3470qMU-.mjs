import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useScrollReveal-3470qMU-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useScrollReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = ref.current;
		if (!container) return;
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const elements = container.querySelectorAll(".reveal-on-scroll");
		if (prefersReducedMotion) {
			elements.forEach((el) => el.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -5% 0px"
		});
		elements.forEach((el) => observer.observe(el));
		const revealVisible = () => {
			elements.forEach((el) => {
				if (el.getBoundingClientRect().top < window.innerHeight * .95) el.classList.add("is-visible");
			});
		};
		revealVisible();
		const timeout = window.setTimeout(revealVisible, 100);
		const raf = requestAnimationFrame(revealVisible);
		const focusElements = container.querySelectorAll(".focus-on-scroll");
		if (window.innerWidth < 1024) {
			const focusObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle("mobile-focused", entry.isIntersecting);
				});
			}, { threshold: .45 });
			focusElements.forEach((el) => focusObserver.observe(el));
			return () => {
				observer.disconnect();
				focusObserver.disconnect();
				clearTimeout(timeout);
				cancelAnimationFrame(raf);
			};
		}
		return () => {
			observer.disconnect();
			clearTimeout(timeout);
			cancelAnimationFrame(raf);
		};
	}, []);
	return ref;
}
//#endregion
export { useScrollReveal as t };
