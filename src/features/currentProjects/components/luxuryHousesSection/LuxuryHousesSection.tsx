import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  luxuryHousesGallery,
  luxuryHousesPoints,
} from "@features/currentProjects/data";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  LuxuryHousesBodyElement,
  LuxuryHousesContentElement,
  LuxuryHousesGalleryButtonElement,
  LuxuryHousesGalleryElement,
  LuxuryHousesGalleryImageElement,
  LuxuryHousesGalleryItemElement,
  LuxuryHousesHeaderElement,
  LuxuryHousesInnerElement,
  LuxuryHousesPointElement,
  LuxuryHousesPointTextElement,
  LuxuryHousesPointTitleElement,
  LuxuryHousesPointsElement,
  LuxuryHousesSectionElement,
  LuxuryHousesStackElement,
  LuxuryHousesSubtitleElement,
  LuxuryHousesTitleElement,
} from "./LuxuryHousesSection.elements";

export const LuxuryHousesSection = () => {
  const { t, i18n } = useTranslation("common");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(
    null,
  );

  const lightboxImages = luxuryHousesGallery.map((image) => ({
    src: image.src,
    alt: t(image.altKey),
  }));

  return (
    <LuxuryHousesSectionElement
      id="luxury-houses"
      key={i18n.language}
      aria-label={t("pages.currentProjects.luxuryHouses.title")}
    >
      <LuxuryHousesInnerElement>
        <LuxuryHousesStackElement>
          <LuxuryHousesBodyElement>
            <LuxuryHousesContentElement>
              <LuxuryHousesHeaderElement>
                <LuxuryHousesTitleElement>
                  {t("pages.currentProjects.luxuryHouses.title")}
                </LuxuryHousesTitleElement>
                <LuxuryHousesSubtitleElement>
                  {t("pages.currentProjects.luxuryHouses.subtitle")}
                </LuxuryHousesSubtitleElement>
              </LuxuryHousesHeaderElement>

              <LuxuryHousesPointsElement>
                {luxuryHousesPoints.map((point) => (
                  <LuxuryHousesPointElement key={point.id}>
                    <LuxuryHousesPointTitleElement>
                      {t(point.titleKey)}
                    </LuxuryHousesPointTitleElement>
                    <LuxuryHousesPointTextElement>
                      {t(point.textKey)}
                    </LuxuryHousesPointTextElement>
                  </LuxuryHousesPointElement>
                ))}
              </LuxuryHousesPointsElement>
            </LuxuryHousesContentElement>

            <LuxuryHousesGalleryElement>
              {luxuryHousesGallery.map((image, index) => (
                <LuxuryHousesGalleryItemElement key={image.id}>
                  <LuxuryHousesGalleryButtonElement
                    type="button"
                    aria-label={t(
                      "pages.currentProjects.luxuryHouses.gallery.openAria",
                      { alt: t(image.altKey) },
                    )}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <LuxuryHousesGalleryImageElement
                      src={image.src}
                      alt={t(image.altKey)}
                    />
                  </LuxuryHousesGalleryButtonElement>
                </LuxuryHousesGalleryItemElement>
              ))}
            </LuxuryHousesGalleryElement>
          </LuxuryHousesBodyElement>
        </LuxuryHousesStackElement>
      </LuxuryHousesInnerElement>

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
    </LuxuryHousesSectionElement>
  );
};
