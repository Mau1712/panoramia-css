import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  nicheResidencesGallery,
  nicheResidencesPoints,
} from "@features/currentProjects/data";
import { useInView } from "@features/currentProjects/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  NicheResidencesCardElement,
  NicheResidencesCardIndexElement,
  NicheResidencesCardTextElement,
  NicheResidencesCardTitleElement,
  NicheResidencesCardsElement,
  NicheResidencesHeaderElement,
  NicheResidencesInnerElement,
  NicheResidencesMediaButtonElement,
  NicheResidencesMediaElement,
  NicheResidencesMediaHintElement,
  NicheResidencesMediaImageElement,
  NicheResidencesMediaItemElement,
  NicheResidencesSectionElement,
  NicheResidencesStackElement,
  NicheResidencesSubtitleElement,
  NicheResidencesTitleElement,
} from "./NicheResidencesSection.elements";

export const NicheResidencesSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(
    null,
  );
  const { ref: cardsRef, isInView: cardsVisible } =
    useInView<HTMLUListElement>();
  const { ref: mediaRef, isInView: mediaVisible } =
    useInView<HTMLDivElement>();

  const lightboxImages = nicheResidencesGallery.map((image) => ({
    src: image.src,
    alt: t(image.altKey),
  }));

  return (
    <NicheResidencesSectionElement
      key={i18n.language}
      aria-label={t("pages.currentProjects.nicheResidences.title")}
    >
      <NicheResidencesInnerElement>
        <NicheResidencesStackElement>
          <NicheResidencesHeaderElement>
            <NicheResidencesTitleElement>
              {t("pages.currentProjects.nicheResidences.title")}
            </NicheResidencesTitleElement>
            <NicheResidencesSubtitleElement>
              {t("pages.currentProjects.nicheResidences.subtitle")}
            </NicheResidencesSubtitleElement>
          </NicheResidencesHeaderElement>

          <NicheResidencesCardsElement ref={cardsRef}>
            {nicheResidencesPoints.map((point, index) => (
              <NicheResidencesCardElement
                key={point.id}
                $visible={cardsVisible}
                $delayMs={index * 120}
              >
                <NicheResidencesCardIndexElement>
                  {String(index + 1).padStart(2, "0")}
                </NicheResidencesCardIndexElement>
                <NicheResidencesCardTitleElement>
                  {t(point.titleKey)}
                </NicheResidencesCardTitleElement>
                <NicheResidencesCardTextElement>
                  {t(point.textKey)}
                </NicheResidencesCardTextElement>
              </NicheResidencesCardElement>
            ))}
          </NicheResidencesCardsElement>

          <NicheResidencesMediaElement ref={mediaRef}>
            {nicheResidencesGallery.map((image, index) => {
              const side = index === 1 ? "right" : "left";

              return (
                <NicheResidencesMediaItemElement
                  key={image.id}
                  $visible={mediaVisible}
                  $side={side}
                  $delayMs={side === "right" ? 160 : 0}
                >
                  <NicheResidencesMediaButtonElement
                    type="button"
                    aria-label={t(
                      "pages.currentProjects.nicheResidences.gallery.openAria",
                      { alt: t(image.altKey) },
                    )}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <NicheResidencesMediaImageElement
                      src={image.src}
                      alt={t(image.altKey)}
                    />
                  </NicheResidencesMediaButtonElement>
                  <NicheResidencesMediaHintElement>
                    {t("pages.currentProjects.nicheResidences.gallery.hint")}
                  </NicheResidencesMediaHintElement>
                </NicheResidencesMediaItemElement>
              );
            })}
          </NicheResidencesMediaElement>
        </NicheResidencesStackElement>
      </NicheResidencesInnerElement>

      <ImageLightbox
        images={lightboxImages}
        activeIndex={activeImageIndex}
        onClose={() => setActiveImageIndex(null)}
        onActiveIndexChange={setActiveImageIndex}
        closeAriaLabel={t("lightbox.closeAria")}
        prevAriaLabel={t("lightbox.prevAria")}
        nextAriaLabel={t("lightbox.nextAria")}
        dialogAriaLabel={t("lightbox.dialogAria")}
      />
    </NicheResidencesSectionElement>
  );
};
