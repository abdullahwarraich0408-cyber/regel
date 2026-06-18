import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useScrollReveal-BLnud4_b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function useScrollReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = ref.current;
		if (!container) return;
		const elements = container.querySelectorAll(".reveal-on-scroll");
		const activeTriggers = [];
		elements.forEach((el) => {
			let delay = 0;
			el.classList.forEach((cls) => {
				if (cls.startsWith("reveal-delay-")) {
					const ms = parseInt(cls.replace("reveal-delay-", ""), 10);
					if (!isNaN(ms)) delay = ms / 1e3;
				}
			});
			gsapWithCSS.set(el, {
				opacity: 0,
				y: 15
			});
			const trigger = ScrollTrigger.create({
				trigger: el,
				start: "top 92%",
				once: true,
				onEnter: (self) => {
					const isFast = Math.abs(self.getVelocity()) > 500;
					const duration = isFast ? .15 : .45;
					const animDelay = isFast ? 0 : delay;
					gsapWithCSS.to(el, {
						opacity: 1,
						y: 0,
						duration,
						delay: animDelay,
						ease: "power2.out"
					});
				}
			});
			activeTriggers.push(trigger);
		});
		const focusElements = container.querySelectorAll(".focus-on-scroll");
		const activeFocusTriggers = [];
		if (typeof window !== "undefined" && window.innerWidth < 1024) focusElements.forEach((el) => {
			const trigger = ScrollTrigger.create({
				trigger: el,
				start: "top 55%",
				end: "bottom 45%",
				onEnter: () => el.classList.add("mobile-focused"),
				onLeave: () => el.classList.remove("mobile-focused"),
				onEnterBack: () => el.classList.add("mobile-focused"),
				onLeaveBack: () => el.classList.remove("mobile-focused")
			});
			activeFocusTriggers.push(trigger);
		});
		return () => {
			activeTriggers.forEach((trigger) => trigger.kill());
			activeFocusTriggers.forEach((trigger) => trigger.kill());
		};
	}, []);
	return ref;
}
//#endregion
export { useScrollReveal as t };
