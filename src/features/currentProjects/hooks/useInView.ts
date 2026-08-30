import { useEffect, useRef, useState } from "react";

const canUseDom = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

/**
 * Starts visible so SSR/prerender HTML includes content and hydrates cleanly.
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
      { threshold: 0.2, ...options },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, options]);

  return { ref, isInView };
};
