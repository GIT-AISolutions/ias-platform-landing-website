"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = ".opencodie-reveal";

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    if (elements.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("opencodie-inview"));
      return;
    }

    document.documentElement.classList.add("opencodie-motion-ready");

    const revealAllFallbackTimer = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
        .forEach((element) => element.classList.add("opencodie-inview"));
    }, 1600);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("opencodie-inview");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    elements.forEach((element) => {
      if (!element.classList.contains("opencodie-inview")) {
        observer.observe(element);
      }
    });

    return () => {
      window.clearTimeout(revealAllFallbackTimer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
