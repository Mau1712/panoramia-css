import { useState } from "react";
import { useTranslation } from "react-i18next";
import overviewImage from "@assets/trackRecord/lastMile/03_construccion_estructuras_metalicas_paralelo.webp";
import { logisticsProjectOverviewFacts } from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LogisticsProjectOverviewSection.elements";

export const LogisticsProjectOverviewSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const imageAlt = t(
    "pages.trackRecord.projects.logistics.overview.imageAlt",
  );

  const lightboxImages = [
    {
      src: overviewImage,
      alt: imageAlt,
    },
  ];

  return (
    <S.OverviewSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.projects.logistics.overview.title")}
    >
      <S.OverviewInnerElement>
        <S.OverviewStackElement ref={sectionRef} $visible={isInView}>
          <S.OverviewHeadingElement>
            <S.OverviewTitleElement>
              {t("pages.trackRecord.projects.logistics.overview.title")}
            </S.OverviewTitleElement>
          </S.OverviewHeadingElement>

          <S.OverviewLayoutElement>
            <S.OverviewCopyElement>
              <S.OverviewIntroElement>
                <S.OverviewSubtitleElement>
                  {t("pages.trackRecord.projects.logistics.overview.subtitle")}
                </S.OverviewSubtitleElement>
                <S.OverviewTextElement>
                  {t("pages.trackRecord.projects.logistics.overview.text")}
                </S.OverviewTextElement>
              </S.OverviewIntroElement>

              <S.OverviewFactsElement>
                {logisticsProjectOverviewFacts.map((fact) => (
                  <S.OverviewFactElement key={fact.id}>
                    <S.OverviewFactLabelElement>
                      {t(fact.labelKey)}
                    </S.OverviewFactLabelElement>
                    <S.OverviewFactValueElement>
                      {t(fact.valueKey)}
                    </S.OverviewFactValueElement>
                  </S.OverviewFactElement>
                ))}
              </S.OverviewFactsElement>
            </S.OverviewCopyElement>

            <S.OverviewFigureElement>
              <S.OverviewMediaButtonElement
                type="button"
                aria-label={t(
                  "pages.trackRecord.projects.logistics.overview.openAria",
                  { alt: imageAlt },
                )}
                onClick={() => setLightboxOpen(true)}
              >
                <S.OverviewImageElement
                  src={overviewImage}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </S.OverviewMediaButtonElement>
              <S.OverviewMediaHintElement>
                {t("pages.trackRecord.projects.logistics.overview.hint")}
              </S.OverviewMediaHintElement>
            </S.OverviewFigureElement>
          </S.OverviewLayoutElement>
        </S.OverviewStackElement>
      </S.OverviewInnerElement>

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
    </S.OverviewSectionElement>
  );
};
