import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

export const HeroBanner = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
          <HeroBannerCtaElement to="/about-us">
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
