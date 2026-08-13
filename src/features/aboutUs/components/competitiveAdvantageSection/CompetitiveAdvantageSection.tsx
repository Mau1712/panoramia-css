import { useState } from "react";
import { useTranslation } from "react-i18next";
import competitiveAdvantageImage from "@assets/aboutUs/Senior-Citizens2.webp";
import { useInView } from "@features/aboutUs/hooks/useInView";
import { useMobileExpand } from "@features/aboutUs/hooks/useMobileExpand";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  CompetitiveAdvantageCopyElement,
  CompetitiveAdvantageInnerElement,
  CompetitiveAdvantageMediaButtonElement,
  CompetitiveAdvantageMediaElement,
  CompetitiveAdvantageMediaHintElement,
  CompetitiveAdvantageMediaImageElement,
  CompetitiveAdvantageSectionElement,
  CompetitiveAdvantageStackElement,
  CompetitiveAdvantageTextElement,
  CompetitiveAdvantageTitleElement,
  CompetitiveAdvantageToggleElement,
} from "./CompetitiveAdvantageSection.elements";

const COMPETITIVE_ADVANTAGE_TEXT_KEYS = [
  "pages.aboutUs.competitiveAdvantage.text1",
  "pages.aboutUs.competitiveAdvantage.text2",
  "pages.aboutUs.competitiveAdvantage.text3",
] as const;

export const CompetitiveAdvantageSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.18,
  });
  const { isMobile, isExpanded, toggleExpanded } = useMobileExpand();

  const visibleTextKeys =
    !isMobile || isExpanded
      ? COMPETITIVE_ADVANTAGE_TEXT_KEYS
      : COMPETITIVE_ADVANTAGE_TEXT_KEYS.slice(0, 1);
  const showToggle = isMobile && COMPETITIVE_ADVANTAGE_TEXT_KEYS.length > 1;

  const lightboxImages = [
    {
      src: competitiveAdvantageImage,
      alt: t("pages.aboutUs.competitiveAdvantage.imageAlt"),
    },
  ];

  return (
    <CompetitiveAdvantageSectionElement
      key={i18n.language}
      aria-label={t("pages.aboutUs.competitiveAdvantage.title")}
    >
      <CompetitiveAdvantageInnerElement>
        <CompetitiveAdvantageStackElement ref={sectionRef} $visible={isInView}>
          <CompetitiveAdvantageCopyElement>
            <CompetitiveAdvantageTitleElement>
              {t("pages.aboutUs.competitiveAdvantage.title")}
            </CompetitiveAdvantageTitleElement>
            {visibleTextKeys.map((textKey) => (
              <CompetitiveAdvantageTextElement key={textKey}>
                {t(textKey)}
              </CompetitiveAdvantageTextElement>
            ))}
            {showToggle ? (
              <CompetitiveAdvantageToggleElement
                type="button"
                aria-expanded={isExpanded}
                onClick={toggleExpanded}
              >
                {isExpanded
                  ? t("pages.aboutUs.seeLess")
                  : t("pages.aboutUs.seeMore")}
              </CompetitiveAdvantageToggleElement>
            ) : null}
          </CompetitiveAdvantageCopyElement>

          <CompetitiveAdvantageMediaElement>
            <CompetitiveAdvantageMediaButtonElement
              type="button"
              aria-label={t("pages.aboutUs.competitiveAdvantage.openAria", {
                alt: t("pages.aboutUs.competitiveAdvantage.imageAlt"),
              })}
              onClick={() => setLightboxOpen(true)}
            >
              <CompetitiveAdvantageMediaImageElement
                src={competitiveAdvantageImage}
                alt={t("pages.aboutUs.competitiveAdvantage.imageAlt")}
                loading="lazy"
                decoding="async"
              />
            </CompetitiveAdvantageMediaButtonElement>
            <CompetitiveAdvantageMediaHintElement>
              {t("pages.aboutUs.competitiveAdvantage.hint")}
            </CompetitiveAdvantageMediaHintElement>
          </CompetitiveAdvantageMediaElement>
        </CompetitiveAdvantageStackElement>
      </CompetitiveAdvantageInnerElement>

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
    </CompetitiveAdvantageSectionElement>
  );
};
