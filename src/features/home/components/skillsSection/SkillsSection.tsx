import { useTranslation } from "react-i18next";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { skillItems } from "../../data";
import { useInView } from "../../hooks/useInView";
import { SkillCard } from "./SkillCard";
import {
  SkillsGridElement,
  SkillsSectionElement,
} from "./SkillsSection.elements";

export const SkillsSection = () => {
  const { t } = useTranslation();
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <SkillsSectionElement ref={ref} aria-label={t("pages.home.skills.aria")}>
      <SectionContainer>
        <SkillsGridElement>
          {skillItems.map((item) => (
            <SkillCard key={item.id} item={item} animate={isInView} />
          ))}
        </SkillsGridElement>
      </SectionContainer>
    </SkillsSectionElement>
  );
};
