"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      targets.forEach((target) => {
        target.dataset.revealed = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.dataset.revealed = "true";
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    targets.forEach((target) => {
      const group = target.closest<HTMLElement>("[data-reveal-stagger]");
      if (group) {
        const siblings = Array.from(
          group.querySelectorAll<HTMLElement>("[data-reveal]"),
        );
        const index = siblings.indexOf(target);
        target.style.setProperty(
          "--reveal-delay",
          `${Math.min(index * 90, 360)}ms`,
        );
      }

      target.dataset.revealReady = "true";
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}