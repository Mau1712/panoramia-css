import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@app/i18n";
import { HERO_CAROUSEL_INTERVAL_MS, heroSlides } from "../../data";
import {
  HeroBannerContentElement,
  HeroBannerCtaElement,
  HeroBannerDotElement,
  HeroBannerDotsElement,
  HeroBannerElement,
  HeroBannerInnerElement,
  HeroBannerMediaElement,
  HeroBannerMediaLayerElement,
  HeroBannerOverlayElement,
  HeroBannerTextElement,
  HeroBannerTitleElement,
} from "./HeroBanner.elements";

const HERO_IMAGE_WIDTH = 1920;
const HERO_IMAGE_HEIGHT = 1080;

export const HeroBanner = () => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const primaryHeroSrc = heroSlides[0]?.src;

  useEffect(() => {
    if (!primaryHeroSrc) {
      return;
    }

    const existing = document.head.querySelector<HTMLLinkElement>(
      'link[data-hero-preload="true"]',
    );
    const link = existing ?? document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = primaryHeroSrc;
    link.setAttribute("fetchpriority", "high");
    link.setAttribute("data-hero-preload", "true");

    if (!existing) {
      document.head.appendChild(link);
    }
  }, [primaryHeroSrc]);

  useEffect(() => {
    if (isPaused || heroSlides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, HERO_CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <HeroBannerElement
      aria-label={t("pages.home.hero.title")}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <HeroBannerMediaLayerElement>
        {heroSlides.map((slide, index) => (
          <HeroBannerMediaElement
            key={slide.id}
            src={slide.src}
            alt={t(slide.altKey)}
            width={HERO_IMAGE_WIDTH}
            height={HERO_IMAGE_HEIGHT}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            $active={index === activeIndex}
            aria-hidden={index !== activeIndex}
          />
        ))}
      </HeroBannerMediaLayerElement>

      <HeroBannerOverlayElement aria-hidden />

      <HeroBannerInnerElement>
        <HeroBannerContentElement>
          <HeroBannerTitleElement>
            {t("pages.home.hero.title")}
          </HeroBannerTitleElement>
          <HeroBannerTextElement>
            {t("pages.home.hero.text")}
          </HeroBannerTextElement>
          <HeroBannerCtaElement to={localize("/about-us")}>
            {t("pages.home.hero.cta")}
          </HeroBannerCtaElement>
        </HeroBannerContentElement>

        <HeroBannerDotsElement aria-label={t("pages.home.hero.dotsAria")}>
          {heroSlides.map((slide, index) => (
            <HeroBannerDotElement
              key={slide.id}
              type="button"
              $active={index === activeIndex}
              aria-label={`${index + 1}`}
              aria-current={index === activeIndex || undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </HeroBannerDotsElement>
      </HeroBannerInnerElement>
    </HeroBannerElement>
  );
};
