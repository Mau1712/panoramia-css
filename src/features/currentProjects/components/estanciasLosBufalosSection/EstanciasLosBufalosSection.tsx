import { useState } from "react";
import { useTranslation } from "react-i18next";
import estanciasImage from "@assets/currentProjects/ScondHomedevelopments1.webp";
import { useInView } from "@features/currentProjects/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  EstanciasBodyElement,
  EstanciasCopyElement,
  EstanciasHeadingElement,
  EstanciasInnerElement,
  EstanciasMediaButtonElement,
  EstanciasMediaElement,
  EstanciasMediaHintElement,
  EstanciasMediaImageElement,
  EstanciasMetaElement,
  EstanciasMetaItemElement,
  EstanciasSectionElement,
  EstanciasStackElement,
  EstanciasTextElement,
  EstanciasTitleElement,
} from "./EstanciasLosBufalosSection.elements";

const metaKeys = [
  "pages.currentProjects.estanciasLosBufalos.meta.parcels",
  "pages.currentProjects.estanciasLosBufalos.meta.plotSize",
  "pages.currentProjects.estanciasLosBufalos.meta.club",
] as const;

export const EstanciasLosBufalosSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.18,
  });

  const lightboxImages = [
    {
      src: estanciasImage,
      alt: t("pages.currentProjects.estanciasLosBufalos.imageAlt"),
    },
  ];

  return (
    <EstanciasSectionElement
      key={i18n.language}
      aria-label={t("pages.currentProjects.estanciasLosBufalos.title")}
    >
      <EstanciasInnerElement>
        <EstanciasStackElement ref={sectionRef}>
          <EstanciasHeadingElement $visible={isInView}>
            <EstanciasTitleElement>
              {t("pages.currentProjects.estanciasLosBufalos.title")}
            </EstanciasTitleElement>
            <EstanciasMetaElement>
              {metaKeys.map((metaKey) => (
                <EstanciasMetaItemElement key={metaKey}>
                  {t(metaKey)}
                </EstanciasMetaItemElement>
              ))}
            </EstanciasMetaElement>
          </EstanciasHeadingElement>

          <EstanciasBodyElement $visible={isInView} $delayMs={120}>
            <EstanciasMediaElement>
              <EstanciasMediaButtonElement
                type="button"
                aria-label={t(
                  "pages.currentProjects.estanciasLosBufalos.openAria",
                  {
                    alt: t("pages.currentProjects.estanciasLosBufalos.imageAlt"),
                  },
                )}
                onClick={() => setLightboxOpen(true)}
              >
                <EstanciasMediaImageElement
                  src={estanciasImage}
                  alt={t("pages.currentProjects.estanciasLosBufalos.imageAlt")}
                />
              </EstanciasMediaButtonElement>
              <EstanciasMediaHintElement>
                {t("pages.currentProjects.estanciasLosBufalos.hint")}
              </EstanciasMediaHintElement>
            </EstanciasMediaElement>

            <EstanciasCopyElement>
              <EstanciasTextElement>
                {t("pages.currentProjects.estanciasLosBufalos.text1")}
              </EstanciasTextElement>
              <EstanciasTextElement>
                {t("pages.currentProjects.estanciasLosBufalos.text2")}
              </EstanciasTextElement>
            </EstanciasCopyElement>
          </EstanciasBodyElement>
        </EstanciasStackElement>
      </EstanciasInnerElement>

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
    </EstanciasSectionElement>
  );
};
