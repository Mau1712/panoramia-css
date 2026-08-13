import { useState } from "react";
import { useTranslation } from "react-i18next";
import phaseFourImageA from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE4b.webp";
import phaseFourImageB from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE4.webp";
import { residentialPhaseFourItems } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  PhaseFourCaptionElement,
  PhaseFourCardElement,
  PhaseFourGridElement,
  PhaseFourHeadingElement,
  PhaseFourImageElement,
  PhaseFourInnerElement,
  PhaseFourMediaButtonElement,
  PhaseFourMediaElement,
  PhaseFourMediaHintElement,
  PhaseFourSectionElement,
  PhaseFourStackElement,
  PhaseFourTitleElement,
} from "./ResidentialPhaseFourSection.elements";

const phaseFourImages = [phaseFourImageA, phaseFourImageB] as const;

export const ResidentialPhaseFourSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const lightboxImages = residentialPhaseFourItems.map((item, index) => ({
    src: phaseFourImages[index],
    alt: t(item.captionKey),
  }));

  return (
    <PhaseFourSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.residential.phaseFour.eyebrow")}
    >
      <PhaseFourInnerElement>
        <PhaseFourStackElement ref={sectionRef} $visible={isInView}>
          <PhaseFourHeadingElement>
            <PhaseFourTitleElement>
              {t("pages.trackRecord.projects.residential.phaseFour.eyebrow")}
            </PhaseFourTitleElement>
          </PhaseFourHeadingElement>

          <PhaseFourGridElement>
            {residentialPhaseFourItems.map((item, index) => (
              <PhaseFourCardElement
                key={item.id}
                $visible={isInView}
                $delayMs={120 + index * 100}
              >
                <PhaseFourMediaElement>
                  <PhaseFourMediaButtonElement
                    type="button"
                    aria-label={t(
                      "pages.trackRecord.projects.residential.phaseFour.openAria",
                      { alt: t(item.captionKey) },
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <PhaseFourImageElement
                      src={phaseFourImages[index]}
                      alt={t(item.captionKey)}
                      loading="lazy"
                      decoding="async"
                    />
                  </PhaseFourMediaButtonElement>
                  <PhaseFourMediaHintElement>
                    {t("pages.trackRecord.projects.residential.phaseFour.hint")}
                  </PhaseFourMediaHintElement>
                </PhaseFourMediaElement>
                <PhaseFourCaptionElement>
                  {t(item.captionKey)}
                </PhaseFourCaptionElement>
              </PhaseFourCardElement>
            ))}
          </PhaseFourGridElement>
        </PhaseFourStackElement>
      </PhaseFourInnerElement>

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
    </PhaseFourSectionElement>
  );
};
