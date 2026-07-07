import { useEffect, useRef } from "react";

export function useScrollReveal(deps: ReadonlyArray<unknown> = []) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = container.querySelectorAll(".reveal-on-scroll");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    const revealVisible = () => {
      container.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add("is-visible");
        }
      });
    };
    revealVisible();
    const timeout = window.setTimeout(revealVisible, 100);
    const raf = requestAnimationFrame(revealVisible);

    const focusElements = container.querySelectorAll(".focus-on-scroll");
    if (window.innerWidth < 1024) {
      const focusObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("mobile-focused", entry.isIntersecting);
          });
        },
        { threshold: 0.45 },
      );
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
  }, deps);

  return ref;
}
