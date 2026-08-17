import { useState } from "react";
import { useTranslation } from "react-i18next";
import { luxuryDevelopmentItems } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LuxuryDevelopmentSection.elements";

const splitDevelopmentTitle = (title: string) => {
  const separator = " / ";
  const separatorIndex = title.indexOf(separator);

  if (separatorIndex === -1) {
    return { eyebrow: null, heading: title };
  }

  return {
    eyebrow: title.slice(0, separatorIndex).trim(),
    heading: title.slice(separatorIndex + separator.length).trim(),
  };
};

export const LuxuryDevelopmentSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.14,
  });

  const fullTitle = t("pages.trackRecord.projects.luxury.development.title");
  const { eyebrow, heading } = splitDevelopmentTitle(fullTitle);

  const lightboxImages = luxuryDevelopmentItems.map((item) => ({
    src: item.image,
    alt: t(item.captionKey),
  }));

  return (
    <S.LuxuryDevelopmentSectionElement
      key={i18n.language}
      aria-label={fullTitle}
    >
      <S.LuxuryDevelopmentInnerElement>
        <S.LuxuryDevelopmentStackElement ref={sectionRef} $visible={isInView}>
          <S.LuxuryDevelopmentHeadingElement>
            {eyebrow ? (
              <S.LuxuryDevelopmentEyebrowElement>
                {eyebrow}
              </S.LuxuryDevelopmentEyebrowElement>
            ) : null}
            <S.LuxuryDevelopmentTitleElement>
              {heading}
            </S.LuxuryDevelopmentTitleElement>
          </S.LuxuryDevelopmentHeadingElement>

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
