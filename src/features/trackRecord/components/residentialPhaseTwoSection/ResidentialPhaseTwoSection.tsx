import { useState } from "react";
import { useTranslation } from "react-i18next";
import phaseTwoImageA from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE-2.webp";
import phaseTwoImageB from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE-2a.webp";
import { residentialPhaseTwoItems } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  PhaseTwoCaptionElement,
  PhaseTwoCardElement,
  PhaseTwoGridElement,
  PhaseTwoHeadingElement,
  PhaseTwoImageElement,
  PhaseTwoInnerElement,
  PhaseTwoMediaButtonElement,
  PhaseTwoMediaElement,
  PhaseTwoMediaHintElement,
  PhaseTwoSectionElement,
  PhaseTwoStackElement,
  PhaseTwoTitleElement,
} from "./ResidentialPhaseTwoSection.elements";

const phaseTwoImages = [phaseTwoImageA, phaseTwoImageB] as const;

export const ResidentialPhaseTwoSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const lightboxImages = residentialPhaseTwoItems.map((item, index) => ({
    src: phaseTwoImages[index],
    alt: t(item.captionKey),
  }));

  return (
    <PhaseTwoSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.residential.phaseTwo.eyebrow")}
    >
      <PhaseTwoInnerElement>
        <PhaseTwoStackElement ref={sectionRef} $visible={isInView}>
          <PhaseTwoHeadingElement>
            <PhaseTwoTitleElement>
              {t("pages.trackRecord.projects.residential.phaseTwo.eyebrow")}
            </PhaseTwoTitleElement>
          </PhaseTwoHeadingElement>

          <PhaseTwoGridElement>
            {residentialPhaseTwoItems.map((item, index) => (
              <PhaseTwoCardElement
                key={item.id}
                $visible={isInView}
                $delayMs={120 + index * 100}
              >
                <PhaseTwoMediaElement>
                  <PhaseTwoMediaButtonElement
                    type="button"
                    aria-label={t(
                      "pages.trackRecord.projects.residential.phaseTwo.openAria",
                      { alt: t(item.captionKey) },
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <PhaseTwoImageElement
                      src={phaseTwoImages[index]}
                      alt={t(item.captionKey)}
                      loading="lazy"
                      decoding="async"
                    />
                  </PhaseTwoMediaButtonElement>
                  <PhaseTwoMediaHintElement>
                    {t("pages.trackRecord.projects.residential.phaseTwo.hint")}
                  </PhaseTwoMediaHintElement>
                </PhaseTwoMediaElement>
                <PhaseTwoCaptionElement>
                  {t(item.captionKey)}
                </PhaseTwoCaptionElement>
              </PhaseTwoCardElement>
            ))}
          </PhaseTwoGridElement>
        </PhaseTwoStackElement>
      </PhaseTwoInnerElement>

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
    </PhaseTwoSectionElement>
  );
};
