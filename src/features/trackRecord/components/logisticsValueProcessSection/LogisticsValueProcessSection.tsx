import { useState } from "react";
import { useTranslation } from "react-i18next";
import processImage from "@assets/trackRecord/lastMile/Land-Development-to-Last-Mile-Logistics2.webp";
import { logisticsValueProcessSteps } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LogisticsValueProcessSection.elements";

export const LogisticsValueProcessSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const imageAlt = t(
    "pages.trackRecord.projects.logistics.valueProcess.imageAlt",
  );

  const lightboxImages = [
    {
      src: processImage,
      alt: imageAlt,
    },
  ];

  return (
    <S.ValueProcessSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.logistics.valueProcess.title")}
    >
      <S.ValueProcessInnerElement>
        <S.ValueProcessStackElement ref={sectionRef} $visible={isInView}>
          <S.ValueProcessHeadingElement>
            <S.ValueProcessTitleElement>
              {t("pages.trackRecord.projects.logistics.valueProcess.title")}
            </S.ValueProcessTitleElement>
          </S.ValueProcessHeadingElement>

          <S.ValueProcessFigureElement>
            <S.ValueProcessMediaButtonElement
              type="button"
              aria-label={t(
                "pages.trackRecord.projects.logistics.valueProcess.openAria",
                { alt: imageAlt },
              )}
              onClick={() => setLightboxOpen(true)}
            >
              <S.ValueProcessImageElement
                src={processImage}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
              />
            </S.ValueProcessMediaButtonElement>
            <S.ValueProcessMediaHintElement>
              {t("pages.trackRecord.projects.logistics.valueProcess.hint")}
            </S.ValueProcessMediaHintElement>
          </S.ValueProcessFigureElement>

          <S.ValueProcessStepsElement>
            {logisticsValueProcessSteps.map((step, index) => (
              <S.ValueProcessStepElement
                key={step.id}
                $visible={isInView}
                $delayMs={100 + index * 60}
              >
                <S.ValueProcessStepIndexElement>
                  {t(step.indexKey)}
                </S.ValueProcessStepIndexElement>
                <S.ValueProcessStepLabelElement>
                  {t(step.labelKey)}
                </S.ValueProcessStepLabelElement>
              </S.ValueProcessStepElement>
            ))}
          </S.ValueProcessStepsElement>

          <S.ValueProcessTaglineElement>
            {t("pages.trackRecord.projects.logistics.valueProcess.tagline")}
          </S.ValueProcessTaglineElement>
        </S.ValueProcessStackElement>
      </S.ValueProcessInnerElement>

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
    </S.ValueProcessSectionElement>
  );
};
