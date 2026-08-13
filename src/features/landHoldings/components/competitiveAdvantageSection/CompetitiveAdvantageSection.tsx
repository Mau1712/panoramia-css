import { useTranslation } from "react-i18next";
import { competitiveAdvantageCards } from "@features/landHoldings/data";
import { useInView } from "@features/landHoldings/hooks/useInView";
import {
  CompetitiveAdvantageCardElement,
  CompetitiveAdvantageCardIndexElement,
  CompetitiveAdvantageCardLabelElement,
  CompetitiveAdvantageCardTitleElement,
  CompetitiveAdvantageCardTopElement,
  CompetitiveAdvantageCardsElement,
  CompetitiveAdvantageCopyElement,
  CompetitiveAdvantageInnerElement,
  CompetitiveAdvantageIntroElement,
  CompetitiveAdvantageSectionElement,
  CompetitiveAdvantageStackElement,
  CompetitiveAdvantageStrongTextElement,
  CompetitiveAdvantageTextElement,
  CompetitiveAdvantageTitleElement,
} from "./CompetitiveAdvantageSection.elements";

export const CompetitiveAdvantageSection = () => {
  const { t, i18n } = useTranslation("common");
  const { ref: cardsRef, isInView: cardsVisible } =
    useInView<HTMLUListElement>();

  return (
    <CompetitiveAdvantageSectionElement
      key={i18n.language}
      aria-label={t("pages.landHoldings.competitiveAdvantage.title")}
    >
      <CompetitiveAdvantageInnerElement>
        <CompetitiveAdvantageStackElement>
          <CompetitiveAdvantageIntroElement>
            <CompetitiveAdvantageTitleElement>
              {t("pages.landHoldings.competitiveAdvantage.title")}
            </CompetitiveAdvantageTitleElement>

            <CompetitiveAdvantageCopyElement>
              <CompetitiveAdvantageTextElement>
                {t("pages.landHoldings.competitiveAdvantage.text")}
              </CompetitiveAdvantageTextElement>
              <CompetitiveAdvantageStrongTextElement>
                {t("pages.landHoldings.competitiveAdvantage.strongText")}
              </CompetitiveAdvantageStrongTextElement>
            </CompetitiveAdvantageCopyElement>
          </CompetitiveAdvantageIntroElement>

          <CompetitiveAdvantageCardsElement ref={cardsRef}>
            {competitiveAdvantageCards.map((card, index) => (
              <CompetitiveAdvantageCardElement
                key={card.id}
                $visible={cardsVisible}
                $delayMs={index * 120}
              >
                <CompetitiveAdvantageCardTopElement>
                  <CompetitiveAdvantageCardIndexElement>
                    {String(index + 1).padStart(2, "0")}
                  </CompetitiveAdvantageCardIndexElement>
                  <CompetitiveAdvantageCardTitleElement>
                    {t(card.titleKey)}
                  </CompetitiveAdvantageCardTitleElement>
                </CompetitiveAdvantageCardTopElement>
                <CompetitiveAdvantageCardLabelElement>
                  {t(card.labelKey)}
                </CompetitiveAdvantageCardLabelElement>
              </CompetitiveAdvantageCardElement>
            ))}
          </CompetitiveAdvantageCardsElement>
        </CompetitiveAdvantageStackElement>
      </CompetitiveAdvantageInnerElement>
    </CompetitiveAdvantageSectionElement>
  );
};
