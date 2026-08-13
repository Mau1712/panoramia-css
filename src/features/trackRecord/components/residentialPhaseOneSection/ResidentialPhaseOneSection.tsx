import { useState } from "react";
import { useTranslation } from "react-i18next";
import phaseOneImage from "@assets/trackRecord/residential/LAND-DEVELOPMENT-TO-HIGH-DENSITY-RESIDENTIAL-HOUSING-PHASE-1-scaled.webp";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  PhaseOneCopyElement,
  PhaseOneEyebrowElement,
  PhaseOneFigureElement,
  PhaseOneImageElement,
  PhaseOneInnerElement,
  PhaseOneMediaButtonElement,
  PhaseOneMediaHintElement,
  PhaseOneSectionElement,
  PhaseOneStackElement,
  PhaseOneTextElement,
  PhaseOneTitleElement,
} from "./ResidentialPhaseOneSection.elements";

export const ResidentialPhaseOneSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.18,
  });

  const lightboxImages = [
    {
      src: phaseOneImage,
      alt: t("pages.trackRecord.projects.residential.phaseOne.imageAlt"),
    },
  ];

  return (
    <PhaseOneSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.residential.phaseOne.title")}
    >
      <PhaseOneInnerElement>
        <PhaseOneStackElement ref={sectionRef} $visible={isInView}>
          <PhaseOneCopyElement>
            <PhaseOneEyebrowElement>
              {t("pages.trackRecord.projects.residential.phaseOne.eyebrow")}
            </PhaseOneEyebrowElement>
            <PhaseOneTitleElement>
              {t("pages.trackRecord.projects.residential.phaseOne.title")}
            </PhaseOneTitleElement>
            <PhaseOneTextElement>
              {t("pages.trackRecord.projects.residential.phaseOne.text")}
            </PhaseOneTextElement>
          </PhaseOneCopyElement>

          <PhaseOneFigureElement>
            <PhaseOneMediaButtonElement
              type="button"
              aria-label={t(
                "pages.trackRecord.projects.residential.phaseOne.openAria",
                {
                  alt: t(
                    "pages.trackRecord.projects.residential.phaseOne.imageAlt",
                  ),
                },
              )}
              onClick={() => setLightboxOpen(true)}
            >
              <PhaseOneImageElement
                src={phaseOneImage}
                alt={t("pages.trackRecord.projects.residential.phaseOne.imageAlt")}
                loading="lazy"
                decoding="async"
              />
            </PhaseOneMediaButtonElement>
            <PhaseOneMediaHintElement>
              {t("pages.trackRecord.projects.residential.phaseOne.hint")}
            </PhaseOneMediaHintElement>
          </PhaseOneFigureElement>
        </PhaseOneStackElement>
      </PhaseOneInnerElement>

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
    </PhaseOneSectionElement>
  );
};
