"use client";
import { useEffect, useRef } from "react";

/** Content stays visible without JavaScript or when reduced motion is requested. */
export function ScrollMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window))
      return;
    const targets = element.querySelectorAll<HTMLElement>(
      ".home-news,.home-product-tile,.search-centre,.important-links,.home-events,.product-story,.ceo-section,.culture-photo,.culture-values article,.home-help-section",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -28px 0px" },
    );
    targets.forEach((target) => {
      target.dataset.reveal = "";
      observer.observe(target);
    });
    element.dataset.motion = "ready";
    const disable = () => {
      if (preference.matches) {
        delete element.dataset.motion;
        observer.disconnect();
      }
    };
    preference.addEventListener("change", disable);
    return () => {
      observer.disconnect();
      delete element.dataset.motion;
      preference.removeEventListener("change", disable);
    };
  }, []);
  return (
    <div ref={root} className="scroll-motion">
      {children}
    </div>
  );
}
