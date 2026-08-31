import { useTranslation } from "react-i18next";
import type { SkillItem } from "../../data";
import { useCountUp } from "../../hooks/useCountUp";
import {
  SkillDescriptionElement,
  SkillIconElement,
  SkillItemElement,
  SkillValueElement,
} from "./SkillsSection.elements";

interface SkillCardProps {
  item: SkillItem;
  animate: boolean;
}

export const SkillCard = ({ item, animate }: SkillCardProps) => {
  const { t, i18n } = useTranslation();
  const count = useCountUp(item.target, animate);
  const locale = i18n.resolvedLanguage ?? i18n.language;
  const formattedCount = count.toLocaleString(locale);
  const finalFormatted = item.target.toLocaleString(locale);
  const suffix = t(item.suffixKey);

  return (
    <SkillItemElement>
      <SkillIconElement
        src={item.icon}
        alt=""
        aria-hidden
        width={80}
        height={80}
        loading="lazy"
        decoding="async"
      />
      <SkillValueElement>
        <span className="sr-only">
          {finalFormatted}+{suffix}
        </span>
        <span aria-hidden="true">
          {formattedCount}+{suffix}
        </span>
      </SkillValueElement>
      <SkillDescriptionElement>
        {t(item.descriptionKey)}
      </SkillDescriptionElement>
    </SkillItemElement>
  );
};
