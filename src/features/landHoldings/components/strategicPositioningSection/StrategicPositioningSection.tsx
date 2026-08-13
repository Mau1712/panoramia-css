import { useTranslation } from "react-i18next";
import landHoldingsMapImage from "@assets/currentProjects/land_holdings_3.webp";
import { strategicPositioningCards } from "@features/landHoldings/data";
import { useInView } from "@features/landHoldings/hooks/useInView";
import {
  StrategicPositioningCardElement,
  StrategicPositioningCardTextElement,
  StrategicPositioningCardTitleElement,
  StrategicPositioningCardsElement,
  StrategicPositioningCopyElement,
  StrategicPositioningEyebrowElement,
  StrategicPositioningFigureElement,
  StrategicPositioningHeadingElement,
  StrategicPositioningImageElement,
  StrategicPositioningInnerElement,
  StrategicPositioningLeadElement,
  StrategicPositioningSectionElement,
  StrategicPositioningStackElement,
  StrategicPositioningTextElement,
  StrategicPositioningTitleElement,
} from "./StrategicPositioningSection.elements";

export const StrategicPositioningSection = () => {
  const { t, i18n } = useTranslation("common");
  const { ref: cardsRef, isInView: cardsVisible } =
    useInView<HTMLUListElement>();

  return (
    <StrategicPositioningSectionElement
      key={i18n.language}
      aria-label={t("pages.landHoldings.strategicPositioning.title")}
    >
      <StrategicPositioningInnerElement>
        <StrategicPositioningStackElement>
          <StrategicPositioningHeadingElement>
            <StrategicPositioningEyebrowElement>
              {t("pages.landHoldings.strategicPositioning.eyebrow")}
            </StrategicPositioningEyebrowElement>
            <StrategicPositioningTitleElement>
              {t("pages.landHoldings.strategicPositioning.title")}
            </StrategicPositioningTitleElement>
          </StrategicPositioningHeadingElement>

          <StrategicPositioningFigureElement>
            <StrategicPositioningImageElement
              src={landHoldingsMapImage}
              alt={t("pages.landHoldings.strategicPositioning.imageAlt")}
              loading="lazy"
              decoding="async"
            />
          </StrategicPositioningFigureElement>

          <StrategicPositioningCopyElement>
            <StrategicPositioningTextElement>
              {t("pages.landHoldings.strategicPositioning.text1")}
            </StrategicPositioningTextElement>
            <StrategicPositioningTextElement>
              {t("pages.landHoldings.strategicPositioning.text2")}
            </StrategicPositioningTextElement>
            <StrategicPositioningLeadElement>
              {t("pages.landHoldings.strategicPositioning.text3")}
            </StrategicPositioningLeadElement>
          </StrategicPositioningCopyElement>

          <StrategicPositioningCardsElement ref={cardsRef}>
            {strategicPositioningCards.map((card, index) => (
              <StrategicPositioningCardElement
                key={card.id}
                $visible={cardsVisible}
                $delayMs={index * 120}
              >
                <StrategicPositioningCardTitleElement>
                  {t(card.titleKey)}
                </StrategicPositioningCardTitleElement>
                <StrategicPositioningCardTextElement>
                  {t(card.textKey)}
                </StrategicPositioningCardTextElement>
              </StrategicPositioningCardElement>
            ))}
          </StrategicPositioningCardsElement>
        </StrategicPositioningStackElement>
      </StrategicPositioningInnerElement>
    </StrategicPositioningSectionElement>
  );
};
