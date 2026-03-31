"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const {
    threshold = 0,
    root = null,
    rootMargin = "0px",
    once = true,
  } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, { threshold, root, rootMargin });

    observer.observe(el);

    return () => observer.disconnect();
  }, [once, root, rootMargin, threshold]);

  return { ref, isInView };
}
