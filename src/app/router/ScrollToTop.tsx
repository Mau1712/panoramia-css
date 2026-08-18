import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_GAP_PX = 16;
const ALIGN_TOLERANCE_PX = 12;
const HASH_RETRY_DELAYS_MS = [0, 120, 500, 1000, 1600];

const getHeaderOffset = () => {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  return (header?.getBoundingClientRect().height ?? 0) + HEADER_GAP_PX;
};

const getHashElement = (hash: string) => {
  const id = hash.replace("#", "");
  if (!id) return null;
  return document.getElementById(id);
};

const isHashAligned = (hash: string) => {
  const element = getHashElement(hash);
  if (!element) return false;

  const offset = getHeaderOffset();
  return Math.abs(element.getBoundingClientRect().top - offset) <= ALIGN_TOLERANCE_PX;
};

const scrollToHash = (hash: string, behavior: ScrollBehavior) => {
  const element = getHashElement(hash);
  if (!element) return false;

  const top =
    window.scrollY + element.getBoundingClientRect().top - getHeaderOffset();

  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
};

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    let cancelled = false;
    let didSmoothScroll = false;
    const timeouts: number[] = [];

    const attemptScroll = () => {
      if (cancelled) return;

      if (!didSmoothScroll) {
        if (scrollToHash(hash, "smooth")) {
          didSmoothScroll = true;
        }
        return;
      }

      if (!isHashAligned(hash)) {
        scrollToHash(hash, "auto");
      }
    };

    HASH_RETRY_DELAYS_MS.forEach((delayMs) => {
      timeouts.push(window.setTimeout(attemptScroll, delayMs));
    });

    const onLoad = () => {
      if (!cancelled && !isHashAligned(hash)) {
        scrollToHash(hash, "auto");
      }
    };

    if (document.readyState !== "complete") {
      window.addEventListener("load", onLoad);
    }

    return () => {
      cancelled = true;
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("load", onLoad);
    };
  }, [pathname, hash]);

  return null;
};
