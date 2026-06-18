import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal-on-scroll");
    const activeTriggers: ScrollTrigger[] = [];

    elements.forEach((el) => {
      // Parse delay from CSS class (e.g. reveal-delay-200 -> 0.2s)
      let delay = 0;
      el.classList.forEach((cls) => {
        if (cls.startsWith("reveal-delay-")) {
          const ms = parseInt(cls.replace("reveal-delay-", ""), 10);
          if (!isNaN(ms)) {
            delay = ms / 1000;
          }
        }
      });

      // Initialize state using GSAP (disables the static CSS transform transition to avoid conflicts)
      gsap.set(el, { opacity: 0, y: 15 });

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: (self) => {
          const velocity = Math.abs(self.getVelocity());
          // If scrolling fast (velocity > 500), make reveal instant and bypass any delayed stagger
          const isFast = velocity > 500;
          const duration = isFast ? 0.15 : 0.45;
          const animDelay = isFast ? 0 : delay;

          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: animDelay,
            ease: "power2.out",
          });
        },
      });

      activeTriggers.push(trigger);
    });

    // Center focus highlights on mobile/tablet viewports (< 1024px)
    const focusElements = container.querySelectorAll(".focus-on-scroll");
    const activeFocusTriggers: ScrollTrigger[] = [];

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      focusElements.forEach((el) => {
        const trigger = ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => el.classList.add("mobile-focused"),
          onLeave: () => el.classList.remove("mobile-focused"),
          onEnterBack: () => el.classList.add("mobile-focused"),
          onLeaveBack: () => el.classList.remove("mobile-focused"),
        });
        activeFocusTriggers.push(trigger);
      });
    }

    return () => {
      activeTriggers.forEach((trigger) => trigger.kill());
      activeFocusTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
}
