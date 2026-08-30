import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const canUseDom = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

/**
 * Starts visible so SSR/prerender HTML includes content and hydrates cleanly.
 */
export const useInView = <T extends HTMLElement>(
  options: UseInViewOptions = {},
) => {
  const { threshold = 0.2, rootMargin = "0px 0px -8% 0px", once = true } =
    options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!canUseDom() || !("IntersectionObserver" in window)) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsInView(true);
        if (once) observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, isInView };
};
