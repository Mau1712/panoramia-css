import { useEffect, useRef, useState } from "react";

/**
 * Renders the final `target` on the first paint (SSR/prerender/crawlers),
 * then animates from 0 → target once when `enabled` becomes true in the browser.
 */
export const useCountUp = (
  target: number,
  enabled: boolean,
  durationMs = 2600,
) => {
  const [value, setValue] = useState(target);
  const didAnimateRef = useRef(false);

  useEffect(() => {
    if (!enabled || didAnimateRef.current) {
      return;
    }

    didAnimateRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    setValue(0);
    let frameId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [durationMs, enabled, target]);

  return value;
};
