import { useState } from "react";
import { useTranslation } from "react-i18next";
import partnershipsImage from "@assets/trackRecord/residential/residentialdevelopment1.webp";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./ResidentialPartnershipsSection.elements";

export const ResidentialPartnershipsSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.16,
  });

  const imageAlt = t(
    "pages.trackRecord.projects.residential.partnerships.imageAlt",
  );

  const lightboxImages = [
    {
      src: partnershipsImage,
      alt: imageAlt,
    },
  ];

  return (
    <S.PartnershipsSectionElement
      key={i18n.language}
      aria-label={t(
        "pages.trackRecord.projects.residential.partnerships.title",
      )}
    >
      <S.PartnershipsInnerElement>
        <S.PartnershipsStackElement ref={sectionRef} $visible={isInView}>
          <S.PartnershipsHeadingElement>
            <S.PartnershipsTitleElement>
              {t("pages.trackRecord.projects.residential.partnerships.title")}
            </S.PartnershipsTitleElement>
          </S.PartnershipsHeadingElement>

          <S.PartnershipsStageElement>
            <S.PartnershipsFigureElement>
              <S.PartnershipsMediaButtonElement
                type="button"
                aria-label={t(
                  "pages.trackRecord.projects.residential.partnerships.openAria",
                  { alt: imageAlt },
                )}
                onClick={() => setLightboxOpen(true)}
              >
                <S.PartnershipsImageElement
                  src={partnershipsImage}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </S.PartnershipsMediaButtonElement>
              <S.PartnershipsMediaHintElement>
                {t("pages.trackRecord.projects.residential.partnerships.hint")}
              </S.PartnershipsMediaHintElement>
            </S.PartnershipsFigureElement>

            <S.PartnershipsAsideElement>
              <S.PartnershipsStatsElement>
                <S.PartnershipsStatElement>
                  <S.PartnershipsStatValueElement>
                    {t(
                      "pages.trackRecord.projects.residential.partnerships.stats.developmentsValue",
                    )}
                  </S.PartnershipsStatValueElement>
                  <S.PartnershipsStatLabelElement>
                    {t(
                      "pages.trackRecord.projects.residential.partnerships.stats.developmentsLabel",
                    )}
                  </S.PartnershipsStatLabelElement>
                </S.PartnershipsStatElement>
                <S.PartnershipsStatElement>
                  <S.PartnershipsStatValueElement>
                    {t(
                      "pages.trackRecord.projects.residential.partnerships.stats.apartmentsValue",
                    )}
                  </S.PartnershipsStatValueElement>
                  <S.PartnershipsStatLabelElement>
                    {t(
                      "pages.trackRecord.projects.residential.partnerships.stats.apartmentsLabel",
                    )}
                  </S.PartnershipsStatLabelElement>
                </S.PartnershipsStatElement>
              </S.PartnershipsStatsElement>

              <S.PartnershipsTextElement>
                {t("pages.trackRecord.projects.residential.partnerships.text")}
              </S.PartnershipsTextElement>
            </S.PartnershipsAsideElement>
          </S.PartnershipsStageElement>
        </S.PartnershipsStackElement>
      </S.PartnershipsInnerElement>

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
    </S.PartnershipsSectionElement>
  );
};
