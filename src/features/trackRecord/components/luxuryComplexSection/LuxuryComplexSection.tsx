import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  luxuryComplexGalleryItems,
  luxuryComplexHeroImage,
} from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LuxuryComplexSection.elements";

export const LuxuryComplexSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.12,
  });

  const heroAlt = t("pages.trackRecord.projects.luxury.complex.imageAlt");

  const lightboxImages = [
    { src: luxuryComplexHeroImage, alt: heroAlt },
    ...luxuryComplexGalleryItems.map((item) => ({
      src: item.image,
      alt: t(item.captionKey),
    })),
  ];

  return (
    <S.LuxuryComplexSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.luxury.complex.title")}
    >
      <S.LuxuryComplexInnerElement>
        <S.LuxuryComplexStackElement ref={sectionRef} $visible={isInView}>
          <S.LuxuryComplexTitleElement>
            {t("pages.trackRecord.projects.luxury.complex.title")}
          </S.LuxuryComplexTitleElement>

          <S.LuxuryComplexHeroElement>
            <S.LuxuryComplexMediaButtonElement
              type="button"
              aria-label={t(
                "pages.trackRecord.projects.luxury.complex.openAria",
                { alt: heroAlt },
              )}
              onClick={() => setActiveIndex(0)}
            >
              <S.LuxuryComplexImageElement
                src={luxuryComplexHeroImage}
                alt={heroAlt}
                loading="lazy"
                decoding="async"
              />
            </S.LuxuryComplexMediaButtonElement>
            <S.LuxuryComplexMediaHintElement>
              {t("pages.trackRecord.projects.luxury.complex.hint")}
            </S.LuxuryComplexMediaHintElement>
          </S.LuxuryComplexHeroElement>

          <S.LuxuryComplexGridElement>
            {luxuryComplexGalleryItems.map((item, index) => (
              <S.LuxuryComplexCardElement
                key={item.id}
                $visible={isInView}
                $delayMs={120 + index * 70}
              >
                <S.LuxuryComplexCardMediaElement>
                  <S.LuxuryComplexMediaButtonElement
                    type="button"
                    aria-label={t(
                      "pages.trackRecord.projects.luxury.complex.openAria",
                      { alt: t(item.captionKey) },
                    )}
                    onClick={() => setActiveIndex(index + 1)}
                  >
                    <S.LuxuryComplexImageElement
                      src={item.image}
                      alt={t(item.captionKey)}
                      loading="lazy"
                      decoding="async"
                    />
                  </S.LuxuryComplexMediaButtonElement>
                  <S.LuxuryComplexMediaHintElement>
                    {t("pages.trackRecord.projects.luxury.complex.hint")}
                  </S.LuxuryComplexMediaHintElement>
                </S.LuxuryComplexCardMediaElement>
                <S.LuxuryComplexCaptionElement>
                  {t(item.captionKey)}
                </S.LuxuryComplexCaptionElement>
              </S.LuxuryComplexCardElement>
            ))}
          </S.LuxuryComplexGridElement>
        </S.LuxuryComplexStackElement>
      </S.LuxuryComplexInnerElement>

      <ImageLightbox
        images={lightboxImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onActiveIndexChange={setActiveIndex}
        closeAriaLabel={t("lightbox.closeAria")}
        prevAriaLabel={t("lightbox.prevAria")}
        nextAriaLabel={t("lightbox.nextAria")}
        dialogAriaLabel={t("lightbox.dialogAria")}
      />
    </S.LuxuryComplexSectionElement>
  );
};
