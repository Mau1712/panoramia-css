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
  const formattedCount = count.toLocaleString(i18n.resolvedLanguage ?? i18n.language);

  return (
    <SkillItemElement>
      <SkillIconElement src={item.icon} alt="" aria-hidden />
      <SkillValueElement>
        {formattedCount}+{t(item.suffixKey)}
      </SkillValueElement>
      <SkillDescriptionElement>
        {t(item.descriptionKey)}
      </SkillDescriptionElement>
    </SkillItemElement>
  );
};
