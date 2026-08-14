import { useState } from "react";
import { useTranslation } from "react-i18next";
import finishedImage from "@assets/trackRecord/lastMile/Land-Development-to-Last-Mile-Logistics3.png";
import { logisticsFinishedProductItems } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LogisticsFinishedProductSection.elements";

export const LogisticsFinishedProductSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const imageAlt = t(
    "pages.trackRecord.projects.logistics.finishedProduct.imageAlt",
  );

  const lightboxImages = [
    {
      src: finishedImage,
      alt: imageAlt,
    },
  ];

  return (
    <S.FinishedProductSectionElement
      key={i18n.language}
      aria-label={t(
        "pages.trackRecord.projects.logistics.finishedProduct.title",
      )}
    >
      <S.FinishedProductInnerElement>
        <S.FinishedProductStackElement ref={sectionRef} $visible={isInView}>
          <S.FinishedProductTitleElement>
            {t("pages.trackRecord.projects.logistics.finishedProduct.title")}
          </S.FinishedProductTitleElement>

          <S.FinishedProductLayoutElement>
            <S.FinishedProductFigureElement>
              <S.FinishedProductMediaButtonElement
                type="button"
                aria-label={t(
                  "pages.trackRecord.projects.logistics.finishedProduct.openAria",
                  { alt: imageAlt },
                )}
                onClick={() => setLightboxOpen(true)}
              >
                <S.FinishedProductImageElement
                  src={finishedImage}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </S.FinishedProductMediaButtonElement>
              <S.FinishedProductMediaHintElement>
                {t("pages.trackRecord.projects.logistics.finishedProduct.hint")}
              </S.FinishedProductMediaHintElement>
            </S.FinishedProductFigureElement>

            <S.FinishedProductCopyElement>
              <S.FinishedProductIntroElement>
                <S.FinishedProductSubtitleElement>
                  {t(
                    "pages.trackRecord.projects.logistics.finishedProduct.subtitle",
                  )}
                </S.FinishedProductSubtitleElement>
                <S.FinishedProductTextElement>
                  {t(
                    "pages.trackRecord.projects.logistics.finishedProduct.text",
                  )}
                </S.FinishedProductTextElement>
              </S.FinishedProductIntroElement>

              <S.FinishedProductListElement>
                {logisticsFinishedProductItems.map((item, index) => (
                  <S.FinishedProductItemElement
                    key={item.id}
                    $visible={isInView}
                    $delayMs={100 + index * 55}
                  >
                    <S.FinishedProductItemMarkerElement aria-hidden />
                    <S.FinishedProductItemTextElement>
                      {t(item.textKey)}
                    </S.FinishedProductItemTextElement>
                  </S.FinishedProductItemElement>
                ))}
              </S.FinishedProductListElement>
            </S.FinishedProductCopyElement>
          </S.FinishedProductLayoutElement>
        </S.FinishedProductStackElement>
      </S.FinishedProductInnerElement>

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
    </S.FinishedProductSectionElement>
  );
};
