import { useState } from "react";
import { useTranslation } from "react-i18next";
import finalResultImage from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE-final.png";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./ResidentialFinalResultSection.elements";

export const ResidentialFinalResultSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const imageAlt = t(
    "pages.trackRecord.projects.residential.finalResult.imageAlt",
  );

  const lightboxImages = [
    {
      src: finalResultImage,
      alt: imageAlt,
    },
  ];

  return (
    <S.FinalResultSectionElement
      key={i18n.language}
      aria-label={t(
        "pages.trackRecord.projects.residential.finalResult.title",
      )}
    >
      <S.FinalResultInnerElement>
        <S.FinalResultStackElement ref={sectionRef} $visible={isInView}>
          <S.FinalResultCopyElement>
            <S.FinalResultTitleElement>
              {t("pages.trackRecord.projects.residential.finalResult.title")}
            </S.FinalResultTitleElement>
            <S.FinalResultTextElement>
              {t("pages.trackRecord.projects.residential.finalResult.text")}
            </S.FinalResultTextElement>
          </S.FinalResultCopyElement>

          <S.FinalResultFigureElement>
            <S.FinalResultMediaElement>
              <S.FinalResultMediaButtonElement
                type="button"
                aria-label={t(
                  "pages.trackRecord.projects.residential.finalResult.openAria",
                  { alt: imageAlt },
                )}
                onClick={() => setLightboxOpen(true)}
              >
                <S.FinalResultImageElement
                  src={finalResultImage}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </S.FinalResultMediaButtonElement>
              <S.FinalResultMediaHintElement>
                {t("pages.trackRecord.projects.residential.finalResult.hint")}
              </S.FinalResultMediaHintElement>
            </S.FinalResultMediaElement>
            <S.FinalResultCaptionElement>
              {t("pages.trackRecord.projects.residential.finalResult.caption")}
            </S.FinalResultCaptionElement>
          </S.FinalResultFigureElement>
        </S.FinalResultStackElement>
      </S.FinalResultInnerElement>

      <ImageLightbox
        images={lightboxImages}
        activeIndex={lightboxOpen ? 0 : null}
        onClose={() => setLightboxOpen(false)}
        onActiveIndexChange={() => undefined}
        closeAriaLabel={t("lightbox.closeAria")}
        prevAriaLabel={t("lightbox.prevAria")}
        nextAriaLabel={t("lightbox.nextAria")}
        dialogAriaLabel={t("lightbox.dialogAria")}
      />
    </S.FinalResultSectionElement>
  );
};
