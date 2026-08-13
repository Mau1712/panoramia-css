import { useEffect, useRef, useState } from "react";

export const useInView = <T extends HTMLElement>(
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
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
