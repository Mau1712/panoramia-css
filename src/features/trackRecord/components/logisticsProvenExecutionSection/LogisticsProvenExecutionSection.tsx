import { useState } from "react";
import { useTranslation } from "react-i18next";
import provenImage from "@assets/trackRecord/lastMile/Land-Development-to-Last-Mile-Logistics4.webp";
import { logisticsProvenExecutionStats } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LogisticsProvenExecutionSection.elements";

export const LogisticsProvenExecutionSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const imageAlt = t(
    "pages.trackRecord.projects.logistics.provenExecution.imageAlt",
  );

  const lightboxImages = [
    {
      src: provenImage,
      alt: imageAlt,
    },
  ];

  return (
    <S.ProvenExecutionSectionElement
      key={i18n.language}
      aria-label={t(
        "pages.trackRecord.projects.logistics.provenExecution.title",
      )}
    >
      <S.ProvenExecutionInnerElement>
        <S.ProvenExecutionStackElement ref={sectionRef} $visible={isInView}>
          <S.ProvenExecutionTitleElement>
            {t("pages.trackRecord.projects.logistics.provenExecution.title")}
          </S.ProvenExecutionTitleElement>

          <S.ProvenExecutionFigureElement>
            <S.ProvenExecutionMediaButtonElement
              type="button"
              aria-label={t(
                "pages.trackRecord.projects.logistics.provenExecution.openAria",
                { alt: imageAlt },
              )}
              onClick={() => setLightboxOpen(true)}
            >
              <S.ProvenExecutionImageElement
                src={provenImage}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
              />
            </S.ProvenExecutionMediaButtonElement>
            <S.ProvenExecutionMediaHintElement>
              {t("pages.trackRecord.projects.logistics.provenExecution.hint")}
            </S.ProvenExecutionMediaHintElement>
          </S.ProvenExecutionFigureElement>

          <S.ProvenExecutionSubtitleElement>
            {t("pages.trackRecord.projects.logistics.provenExecution.subtitle")}
          </S.ProvenExecutionSubtitleElement>

          <S.ProvenExecutionStatsElement>
            {logisticsProvenExecutionStats.map((stat, index) => (
              <S.ProvenExecutionStatElement
                key={stat.id}
                $visible={isInView}
                $delayMs={120 + index * 70}
              >
                <S.ProvenExecutionStatValueElement>
                  {t(stat.valueKey)}
                </S.ProvenExecutionStatValueElement>
                <S.ProvenExecutionStatLabelElement>
                  {t(stat.labelKey)}
                </S.ProvenExecutionStatLabelElement>
              </S.ProvenExecutionStatElement>
            ))}
          </S.ProvenExecutionStatsElement>
        </S.ProvenExecutionStackElement>
      </S.ProvenExecutionInnerElement>

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
    </S.ProvenExecutionSectionElement>
  );
};
