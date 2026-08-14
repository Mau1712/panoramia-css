import { useState } from "react";
import { useTranslation } from "react-i18next";
import locationImage from "@assets/trackRecord/lastMile/Land-Development-to-Last-Mile-Logistics2.webp";
import { logisticsStrategicLocationItems } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LogisticsStrategicLocationSection.elements";

export const LogisticsStrategicLocationSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const imageAlt = t(
    "pages.trackRecord.projects.logistics.strategicLocation.imageAlt",
  );

  const lightboxImages = [
    {
      src: locationImage,
      alt: imageAlt,
    },
  ];

  return (
    <S.StrategicLocationSectionElement
      key={i18n.language}
      aria-label={t(
        "pages.trackRecord.projects.logistics.strategicLocation.title",
      )}
    >
      <S.StrategicLocationInnerElement>
        <S.StrategicLocationStackElement ref={sectionRef} $visible={isInView}>
          <S.StrategicLocationTitleElement>
            {t("pages.trackRecord.projects.logistics.strategicLocation.title")}
          </S.StrategicLocationTitleElement>

          <S.StrategicLocationLayoutElement>
            <S.StrategicLocationCopyElement>
              <S.StrategicLocationSubtitleElement>
                {t(
                  "pages.trackRecord.projects.logistics.strategicLocation.subtitle",
                )}
              </S.StrategicLocationSubtitleElement>

              <S.StrategicLocationListElement>
                {logisticsStrategicLocationItems.map((item, index) => (
                  <S.StrategicLocationItemElement
                    key={item.id}
                    $visible={isInView}
                    $delayMs={120 + index * 70}
                  >
                    <S.StrategicLocationItemIndexElement>
                      {t(item.indexKey)}
                    </S.StrategicLocationItemIndexElement>
                    <S.StrategicLocationItemBodyElement>
                      <S.StrategicLocationItemTitleElement>
                        {t(item.titleKey)}
                      </S.StrategicLocationItemTitleElement>
                      <S.StrategicLocationItemTextElement>
                        {t(item.textKey)}
                      </S.StrategicLocationItemTextElement>
                    </S.StrategicLocationItemBodyElement>
                  </S.StrategicLocationItemElement>
                ))}
              </S.StrategicLocationListElement>
            </S.StrategicLocationCopyElement>

            <S.StrategicLocationFigureElement>
              <S.StrategicLocationMediaButtonElement
                type="button"
                aria-label={t(
                  "pages.trackRecord.projects.logistics.strategicLocation.openAria",
                  { alt: imageAlt },
                )}
                onClick={() => setLightboxOpen(true)}
              >
                <S.StrategicLocationImageElement
                  src={locationImage}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </S.StrategicLocationMediaButtonElement>
              <S.StrategicLocationMediaHintElement>
                {t(
                  "pages.trackRecord.projects.logistics.strategicLocation.hint",
                )}
              </S.StrategicLocationMediaHintElement>
            </S.StrategicLocationFigureElement>
          </S.StrategicLocationLayoutElement>
        </S.StrategicLocationStackElement>
      </S.StrategicLocationInnerElement>

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
    </S.StrategicLocationSectionElement>
  );
};
