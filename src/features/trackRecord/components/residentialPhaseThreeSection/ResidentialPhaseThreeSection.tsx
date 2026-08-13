import { useState } from "react";
import { useTranslation } from "react-i18next";
import phaseThreeImageA from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE3.webp";
import phaseThreeImageB from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE3b.webp";
import { residentialPhaseThreeItems } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  PhaseThreeCaptionElement,
  PhaseThreeCardElement,
  PhaseThreeGridElement,
  PhaseThreeHeadingElement,
  PhaseThreeImageElement,
  PhaseThreeInnerElement,
  PhaseThreeMediaButtonElement,
  PhaseThreeMediaElement,
  PhaseThreeMediaHintElement,
  PhaseThreeSectionElement,
  PhaseThreeStackElement,
  PhaseThreeTitleElement,
} from "./ResidentialPhaseThreeSection.elements";

const phaseThreeImages = [phaseThreeImageA, phaseThreeImageB] as const;

export const ResidentialPhaseThreeSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const lightboxImages = residentialPhaseThreeItems.map((item, index) => ({
    src: phaseThreeImages[index],
    alt: t(item.captionKey),
  }));

  return (
    <PhaseThreeSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.residential.phaseThree.eyebrow")}
    >
      <PhaseThreeInnerElement>
        <PhaseThreeStackElement ref={sectionRef} $visible={isInView}>
          <PhaseThreeHeadingElement>
            <PhaseThreeTitleElement>
              {t("pages.trackRecord.projects.residential.phaseThree.eyebrow")}
            </PhaseThreeTitleElement>
          </PhaseThreeHeadingElement>

          <PhaseThreeGridElement>
            {residentialPhaseThreeItems.map((item, index) => (
              <PhaseThreeCardElement
                key={item.id}
                $visible={isInView}
                $delayMs={120 + index * 100}
              >
                <PhaseThreeMediaElement>
                  <PhaseThreeMediaButtonElement
                    type="button"
                    aria-label={t(
                      "pages.trackRecord.projects.residential.phaseThree.openAria",
                      { alt: t(item.captionKey) },
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <PhaseThreeImageElement
                      src={phaseThreeImages[index]}
                      alt={t(item.captionKey)}
                      loading="lazy"
                      decoding="async"
                    />
                  </PhaseThreeMediaButtonElement>
                  <PhaseThreeMediaHintElement>
                    {t("pages.trackRecord.projects.residential.phaseThree.hint")}
                  </PhaseThreeMediaHintElement>
                </PhaseThreeMediaElement>
                <PhaseThreeCaptionElement>
                  {t(item.captionKey)}
                </PhaseThreeCaptionElement>
              </PhaseThreeCardElement>
            ))}
          </PhaseThreeGridElement>
        </PhaseThreeStackElement>
      </PhaseThreeInnerElement>

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
    </PhaseThreeSectionElement>
  );
};
