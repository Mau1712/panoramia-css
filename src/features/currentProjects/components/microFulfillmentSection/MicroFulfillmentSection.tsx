import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import microFulfillmentImage from "@assets/currentProjects/Microfulfillment-new.webp";
import { microFulfillmentPoints } from "@features/currentProjects/data";
import {
  MicroFulfillmentBodyElement,
  MicroFulfillmentInnerElement,
  MicroFulfillmentMediaElement,
  MicroFulfillmentMediaWrapElement,
  MicroFulfillmentPointElement,
  MicroFulfillmentPointTextElement,
  MicroFulfillmentPointTitleElement,
  MicroFulfillmentPointsElement,
  MicroFulfillmentPointsWrapElement,
  MicroFulfillmentSectionElement,
  MicroFulfillmentStackElement,
  MicroFulfillmentTitleElement,
  MicroFulfillmentToggleElement,
} from "./MicroFulfillmentSection.elements";

const MOBILE_VISIBLE_POINTS = 2;
const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

export const MicroFulfillmentSection = () => {
  const { t, i18n } = useTranslation("common");
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const updateIsMobile = () => {
      const matches = mediaQuery.matches;
      setIsMobile(matches);

      if (!matches) {
        setIsExpanded(false);
      }
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const visiblePoints =
    !isMobile || isExpanded
      ? microFulfillmentPoints
      : microFulfillmentPoints.slice(0, MOBILE_VISIBLE_POINTS);
  const showToggle =
    isMobile && microFulfillmentPoints.length > MOBILE_VISIBLE_POINTS;

  return (
    <MicroFulfillmentSectionElement
      key={i18n.language}
      aria-label={t("pages.currentProjects.microFulfillment.title")}
    >
      <MicroFulfillmentInnerElement>
        <MicroFulfillmentStackElement>
          <MicroFulfillmentTitleElement id="micro-fulfillment">
            {t("pages.currentProjects.microFulfillment.title")}
          </MicroFulfillmentTitleElement>

          <MicroFulfillmentBodyElement>
            <MicroFulfillmentMediaWrapElement>
              <MicroFulfillmentMediaElement
                src={microFulfillmentImage}
                alt={t("pages.currentProjects.microFulfillment.imageAlt")}
              />
            </MicroFulfillmentMediaWrapElement>

            <MicroFulfillmentPointsWrapElement>
              <MicroFulfillmentPointsElement>
                {visiblePoints.map((point) => (
                  <MicroFulfillmentPointElement key={point.id}>
                    <MicroFulfillmentPointTitleElement>
                      {t(point.titleKey)}
                    </MicroFulfillmentPointTitleElement>
                    <MicroFulfillmentPointTextElement>
                      {t(point.textKey)}
                    </MicroFulfillmentPointTextElement>
                  </MicroFulfillmentPointElement>
                ))}
              </MicroFulfillmentPointsElement>

              {showToggle ? (
                <MicroFulfillmentToggleElement
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => setIsExpanded((current) => !current)}
                >
                  {isExpanded
                    ? t("pages.currentProjects.microFulfillment.seeLess")
                    : t("pages.currentProjects.microFulfillment.seeMore")}
                </MicroFulfillmentToggleElement>
              ) : null}
            </MicroFulfillmentPointsWrapElement>
          </MicroFulfillmentBodyElement>
        </MicroFulfillmentStackElement>
      </MicroFulfillmentInnerElement>
    </MicroFulfillmentSectionElement>
  );
};
