import { useEffect, useRef, useState } from "react";

const canUseDom = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

/**
 * Starts visible so SSR/prerender HTML includes content and hydrates cleanly.
 * IntersectionObserver still runs in the browser for late-mounted nodes.
 */
export const useInView = <T extends HTMLElement>(
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!canUseDom() || !("IntersectionObserver" in window)) {
      return;
    }

    const element = ref.current;

    if (!element || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, ...options },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, options]);

  return { ref, isInView };
};
