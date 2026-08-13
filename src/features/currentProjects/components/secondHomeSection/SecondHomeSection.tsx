import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { secondHomeGallery } from "@features/currentProjects/data";
import { useInView } from "@features/currentProjects/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  SecondHomeBentoButtonElement,
  SecondHomeBentoElement,
  SecondHomeBentoImageElement,
  SecondHomeBentoIndexElement,
  SecondHomeBentoItemElement,
  SecondHomeCopyElement,
  SecondHomeDotElement,
  SecondHomeDotsElement,
  SecondHomeGalleryShellElement,
  SecondHomeHeadingElement,
  SecondHomeInnerElement,
  SecondHomeIntroElement,
  SecondHomeMetaElement,
  SecondHomeSectionElement,
  SecondHomeStackElement,
  SecondHomeSubtitleElement,
  SecondHomeTextElement,
  SecondHomeTitleElement,
} from "./SecondHomeSection.elements";

const bentoSpans = [
  "hero",
  "top",
  "mid",
  "wide",
  "cell",
  "cell",
  "cell",
] as const;

export const SecondHomeSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { ref: galleryRef, isInView: galleryVisible } =
    useInView<HTMLDivElement>({
      threshold: 0.15,
    });

  const lightboxImages = secondHomeGallery.map((image) => ({
    src: image.src,
    alt: t(image.altKey),
  }));

  const updateCarouselIndex = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const items = carousel.querySelectorAll<HTMLElement>(":scope > div");
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const distance = Math.abs(item.offsetLeft - carousel.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCarouselIndex(closestIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    updateCarouselIndex();
    carousel.addEventListener("scroll", updateCarouselIndex, { passive: true });
    window.addEventListener("resize", updateCarouselIndex);

    return () => {
      carousel.removeEventListener("scroll", updateCarouselIndex);
      window.removeEventListener("resize", updateCarouselIndex);
    };
  }, [i18n.language]);

  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current;
    const item = carousel?.querySelectorAll<HTMLElement>(":scope > div")[
      index
    ];

    if (!carousel || !item) {
      return;
    }

    carousel.scrollTo({
      left: item.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <SecondHomeSectionElement
      id="second-home"
      key={i18n.language}
      aria-label={t("pages.currentProjects.secondHome.title")}
    >
      <SecondHomeInnerElement>
        <SecondHomeStackElement>
          <SecondHomeIntroElement>
            <SecondHomeHeadingElement>
              <SecondHomeTitleElement>
                {t("pages.currentProjects.secondHome.title")}
              </SecondHomeTitleElement>
              <SecondHomeSubtitleElement>
                {t("pages.currentProjects.secondHome.subtitle")}
              </SecondHomeSubtitleElement>
            </SecondHomeHeadingElement>

            <SecondHomeCopyElement>
              <SecondHomeMetaElement>
                {t("pages.currentProjects.secondHome.meta")}
              </SecondHomeMetaElement>
              <SecondHomeTextElement>
                {t("pages.currentProjects.secondHome.text")}
              </SecondHomeTextElement>
            </SecondHomeCopyElement>
          </SecondHomeIntroElement>

          <SecondHomeGalleryShellElement ref={galleryRef}>
            <SecondHomeBentoElement ref={carouselRef}>
              {secondHomeGallery.map((image, index) => (
                <SecondHomeBentoItemElement
                  key={image.id}
                  $span={bentoSpans[index] ?? "cell"}
                  $visible={galleryVisible}
                  $delayMs={index * 110}
                >
                  <SecondHomeBentoButtonElement
                    type="button"
                    aria-label={t(
                      "pages.currentProjects.secondHome.gallery.openAria",
                      { alt: t(image.altKey) },
                    )}
                    onClick={() => setLightboxIndex(index)}
                  >
                    <SecondHomeBentoImageElement
                      src={image.src}
                      alt={t(image.altKey)}
                    />
                  </SecondHomeBentoButtonElement>
                  <SecondHomeBentoIndexElement>
                    {String(index + 1).padStart(2, "0")}
                  </SecondHomeBentoIndexElement>
                </SecondHomeBentoItemElement>
              ))}
            </SecondHomeBentoElement>

            <SecondHomeDotsElement
              role="tablist"
              aria-label={t("pages.currentProjects.secondHome.gallery.dotsAria")}
            >
              {secondHomeGallery.map((image, index) => (
                <SecondHomeDotElement
                  key={image.id}
                  type="button"
                  $active={carouselIndex === index}
                  aria-label={t(
                    "pages.currentProjects.secondHome.gallery.dotAria",
                    { index: index + 1 },
                  )}
                  aria-current={carouselIndex === index ? "true" : undefined}
                  onClick={() => scrollToSlide(index)}
                />
              ))}
            </SecondHomeDotsElement>
          </SecondHomeGalleryShellElement>
        </SecondHomeStackElement>
      </SecondHomeInnerElement>

      <ImageLightbox
        images={lightboxImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onActiveIndexChange={setLightboxIndex}
        closeAriaLabel={t("lightbox.closeAria")}
        prevAriaLabel={t("lightbox.prevAria")}
        nextAriaLabel={t("lightbox.nextAria")}
        dialogAriaLabel={t("lightbox.dialogAria")}
      />
    </SecondHomeSectionElement>
  );
};
