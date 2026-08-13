import { useTranslation } from "react-i18next";
import marketOpportunitiesImage from "@assets/trackRecord/market_opportunities.webp";
import {
  MarketOpportunitiesBodyElement,
  MarketOpportunitiesCopyElement,
  MarketOpportunitiesFigureElement,
  MarketOpportunitiesImageElement,
  MarketOpportunitiesInnerElement,
  MarketOpportunitiesSectionElement,
  MarketOpportunitiesStackElement,
  MarketOpportunitiesTextElement,
  MarketOpportunitiesTitleElement,
} from "./MarketOpportunitiesSection.elements";

export const MarketOpportunitiesSection = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <MarketOpportunitiesSectionElement
      key={i18n.language}
      aria-label={t("pages.trackRecord.marketOpportunities.title")}
    >
      <MarketOpportunitiesInnerElement>
        <MarketOpportunitiesStackElement>
          <MarketOpportunitiesBodyElement>
            <MarketOpportunitiesCopyElement>
              <MarketOpportunitiesTitleElement>
                {t("pages.trackRecord.marketOpportunities.title")}
              </MarketOpportunitiesTitleElement>
              <MarketOpportunitiesTextElement>
                {t("pages.trackRecord.marketOpportunities.text")}
              </MarketOpportunitiesTextElement>
            </MarketOpportunitiesCopyElement>

            <MarketOpportunitiesFigureElement>
              <MarketOpportunitiesImageElement
                src={marketOpportunitiesImage}
                alt={t("pages.trackRecord.marketOpportunities.imageAlt")}
                loading="lazy"
                decoding="async"
              />
            </MarketOpportunitiesFigureElement>
          </MarketOpportunitiesBodyElement>
        </MarketOpportunitiesStackElement>
      </MarketOpportunitiesInnerElement>
    </MarketOpportunitiesSectionElement>
  );
};
