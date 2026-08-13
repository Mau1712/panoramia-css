import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToHash = (hash: string) => {
  const id = hash.replace("#", "");
  if (!id) return false;

  const element = document.getElementById(id);
  if (!element) return false;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
};

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (scrollToHash(hash)) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      if (!scrollToHash(hash)) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    });

    const timeout = window.setTimeout(() => {
      scrollToHash(hash);
    }, 100);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname, hash]);

  return null;
};
