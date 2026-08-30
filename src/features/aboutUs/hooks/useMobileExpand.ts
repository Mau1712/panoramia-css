import { useEffect, useState } from "react";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

const canUseDom = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

export const useMobileExpand = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!canUseDom()) {
      return;
    }

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const updateIsMobile = () => {
      const matches = mediaQuery.matches;
      setIsMobile(matches);

      if (!matches) {
        setIsExpanded(false);
      }
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return {
    isMobile,
    isExpanded,
    toggleExpanded: () => setIsExpanded((current) => !current),
  };
};
