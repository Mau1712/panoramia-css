import { useTranslation } from "react-i18next";
import platformImage from "@assets/platform_residential_development.jpg";
import { platformPoints } from "../../data";
import {
  PlatformBodyElement,
  PlatformContentElement,
  PlatformInnerElement,
  PlatformIntroElement,
  PlatformMediaElement,
  PlatformMediaWrapElement,
  PlatformPointElement,
  PlatformPointTextElement,
  PlatformPointTitleElement,
  PlatformPointsElement,
  PlatformSectionElement,
  PlatformStackElement,
  PlatformTitleElement,
} from "./PlatformSection.elements";

export const PlatformSection = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <PlatformSectionElement
      key={i18n.language}
      aria-label={t("pages.home.platform.title")}
    >
      <PlatformInnerElement>
        <PlatformStackElement>
          <PlatformTitleElement>
            {t("pages.home.platform.title")}
          </PlatformTitleElement>

          <PlatformBodyElement>
            <PlatformMediaWrapElement>
              <PlatformMediaElement
                src={platformImage}
                alt={t("pages.home.platform.imageAlt")}
                loading="lazy"
                decoding="async"
              />
            </PlatformMediaWrapElement>

            <PlatformContentElement>
              <PlatformIntroElement>
                {t("pages.home.platform.intro")}
              </PlatformIntroElement>

              <PlatformPointsElement>
                {platformPoints.map((point) => (
                  <PlatformPointElement key={point.id}>
                    <PlatformPointTitleElement>
                      {t(point.titleKey)}
                    </PlatformPointTitleElement>
                    <PlatformPointTextElement>
                      {t(point.textKey)}
                    </PlatformPointTextElement>
                  </PlatformPointElement>
                ))}
              </PlatformPointsElement>
            </PlatformContentElement>
          </PlatformBodyElement>
        </PlatformStackElement>
      </PlatformInnerElement>
    </PlatformSectionElement>
  );
};
