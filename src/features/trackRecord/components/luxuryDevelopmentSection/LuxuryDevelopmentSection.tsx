import { useState } from "react";
import { useTranslation } from "react-i18next";
import { luxuryDevelopmentItems } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LuxuryDevelopmentSection.elements";

export const LuxuryDevelopmentSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.14,
  });

  const lightboxImages = luxuryDevelopmentItems.map((item) => ({
    src: item.image,
    alt: t(item.captionKey),
  }));

  return (
    <S.LuxuryDevelopmentSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.luxury.development.title")}
    >
      <S.LuxuryDevelopmentInnerElement>
        <S.LuxuryDevelopmentStackElement ref={sectionRef} $visible={isInView}>
          <S.LuxuryDevelopmentTitleElement>
            {t("pages.trackRecord.projects.luxury.development.title")}
          </S.LuxuryDevelopmentTitleElement>

          <S.LuxuryDevelopmentGridElement>
            {luxuryDevelopmentItems.map((item, index) => (
              <S.LuxuryDevelopmentCardElement
                key={item.id}
                $visible={isInView}
                $delayMs={120 + index * 80}
              >
                <S.LuxuryDevelopmentMediaElement>
                  <S.LuxuryDevelopmentMediaButtonElement
                    type="button"
                    aria-label={t(
                      "pages.trackRecord.projects.luxury.development.openAria",
                      { alt: t(item.captionKey) },
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <S.LuxuryDevelopmentImageElement
                      src={item.image}
                      alt={t(item.captionKey)}
                      loading="lazy"
                      decoding="async"
                    />
                  </S.LuxuryDevelopmentMediaButtonElement>
                  <S.LuxuryDevelopmentMediaHintElement>
                    {t("pages.trackRecord.projects.luxury.development.hint")}
                  </S.LuxuryDevelopmentMediaHintElement>
                </S.LuxuryDevelopmentMediaElement>
                <S.LuxuryDevelopmentCaptionElement>
                  {t(item.captionKey)}
                </S.LuxuryDevelopmentCaptionElement>
              </S.LuxuryDevelopmentCardElement>
            ))}
          </S.LuxuryDevelopmentGridElement>
        </S.LuxuryDevelopmentStackElement>
      </S.LuxuryDevelopmentInnerElement>

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
    </S.LuxuryDevelopmentSectionElement>
  );
};
