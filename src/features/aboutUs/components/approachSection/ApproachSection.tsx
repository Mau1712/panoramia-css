import { useState } from "react";
import { useTranslation } from "react-i18next";
import approachImage from "@assets/aboutUs/Senior-Citizens1.webp";
import { useInView } from "@features/aboutUs/hooks/useInView";
import { useMobileExpand } from "@features/aboutUs/hooks/useMobileExpand";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import {
  ApproachCopyElement,
  ApproachInnerElement,
  ApproachMediaButtonElement,
  ApproachMediaElement,
  ApproachMediaHintElement,
  ApproachMediaImageElement,
  ApproachSectionElement,
  ApproachStackElement,
  ApproachTextElement,
  ApproachTitleElement,
  ApproachToggleElement,
} from "./ApproachSection.elements";

const APPROACH_TEXT_KEYS = [
  "pages.aboutUs.approach.text1",
  "pages.aboutUs.approach.text2",
] as const;

export const ApproachSection = () => {
  const { t, i18n } = useTranslation("common");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.18,
  });
  const { isMobile, isExpanded, toggleExpanded } = useMobileExpand();

  const visibleTextKeys =
    !isMobile || isExpanded
      ? APPROACH_TEXT_KEYS
      : APPROACH_TEXT_KEYS.slice(0, 1);
  const showToggle = isMobile && APPROACH_TEXT_KEYS.length > 1;

  const lightboxImages = [
    {
      src: approachImage,
      alt: t("pages.aboutUs.approach.imageAlt"),
    },
  ];

  return (
    <ApproachSectionElement
      key={i18n.language}
      aria-label={t("pages.aboutUs.approach.title")}
    >
      <ApproachInnerElement>
        <ApproachStackElement ref={sectionRef} $visible={isInView}>
          <ApproachCopyElement>
            <ApproachTitleElement>
              {t("pages.aboutUs.approach.title")}
            </ApproachTitleElement>
            {visibleTextKeys.map((textKey) => (
              <ApproachTextElement key={textKey}>
                {t(textKey)}
              </ApproachTextElement>
            ))}
            {showToggle ? (
              <ApproachToggleElement
                type="button"
                aria-expanded={isExpanded}
                onClick={toggleExpanded}
              >
                {isExpanded
                  ? t("pages.aboutUs.seeLess")
                  : t("pages.aboutUs.seeMore")}
              </ApproachToggleElement>
            ) : null}
          </ApproachCopyElement>

          <ApproachMediaElement>
            <ApproachMediaButtonElement
              type="button"
              aria-label={t("pages.aboutUs.approach.openAria", {
                alt: t("pages.aboutUs.approach.imageAlt"),
              })}
              onClick={() => setLightboxOpen(true)}
            >
              <ApproachMediaImageElement
                src={approachImage}
                alt={t("pages.aboutUs.approach.imageAlt")}
                loading="lazy"
                decoding="async"
              />
            </ApproachMediaButtonElement>
            <ApproachMediaHintElement>
              {t("pages.aboutUs.approach.hint")}
            </ApproachMediaHintElement>
          </ApproachMediaElement>
        </ApproachStackElement>
      </ApproachInnerElement>

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
    </ApproachSectionElement>
  );
};
