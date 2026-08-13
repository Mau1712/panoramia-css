import { useTranslation } from "react-i18next";
import { useCategoryItems } from "@features/landHoldings/data";
import { useInView } from "@features/landHoldings/hooks/useInView";
import {
  UseCategoriesIconWrapElement,
  UseCategoriesInnerElement,
  UseCategoriesItemElement,
  UseCategoriesLabelElement,
  UseCategoriesListElement,
  UseCategoriesSectionElement,
  UseCategoriesStackElement,
} from "./UseCategoriesSection.elements";

export const UseCategoriesSection = () => {
  const { t, i18n } = useTranslation("common");
  const { ref: listRef, isInView } = useInView<HTMLUListElement>();

  return (
    <UseCategoriesSectionElement
      key={i18n.language}
      aria-label={t("pages.landHoldings.useCategories.aria")}
    >
      <UseCategoriesInnerElement>
        <UseCategoriesStackElement>
          <UseCategoriesListElement ref={listRef}>
            {useCategoryItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <UseCategoriesItemElement
                  key={item.id}
                  $visible={isInView}
                  $delayMs={index * 100}
                >
                  <UseCategoriesIconWrapElement aria-hidden>
                    <Icon />
                  </UseCategoriesIconWrapElement>
                  <UseCategoriesLabelElement>
                    {t(item.labelKey)}
                  </UseCategoriesLabelElement>
                </UseCategoriesItemElement>
              );
            })}
          </UseCategoriesListElement>
        </UseCategoriesStackElement>
      </UseCategoriesInnerElement>
    </UseCategoriesSectionElement>
  );
};
