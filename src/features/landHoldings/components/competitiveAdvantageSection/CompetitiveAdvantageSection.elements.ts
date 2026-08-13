import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const CompetitiveAdvantageSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const CompetitiveAdvantageInnerElement = styled(SectionContainer)``;

export const CompetitiveAdvantageStackElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const CompetitiveAdvantageIntroElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const CompetitiveAdvantageTitleElement = styled.h2`
  width: fit-content;
  max-width: 14ch;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 3px;
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  }
`;

export const CompetitiveAdvantageCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  min-width: 0;
`;

export const CompetitiveAdvantageTextElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.65;
`;

export const CompetitiveAdvantageStrongTextElement = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.65;
`;

export const CompetitiveAdvantageCardsElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(1.5)};
  }
`;

interface CompetitiveAdvantageRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const CompetitiveAdvantageCardElement = styled.li<CompetitiveAdvantageRevealProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  min-height: ${({ theme }) => theme.spacing(28)};
  padding: ${({ theme }) => theme.spacing(3.5)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  background: ${({ theme }) => theme.color.background.primary};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "18px")});
  transition:
    opacity ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow},
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};
  transition-delay: ${({ $delayMs = 0 }) => `${$delayMs}ms`};

  &:hover {
    border-color: ${({ theme }) => theme.color.text.primary};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 0;
    gap: ${({ theme }) => theme.spacing(2.5)};
    padding: ${({ theme }) => theme.spacing(3)};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition:
      border-color ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast};
  }
`;

export const CompetitiveAdvantageCardTopElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const CompetitiveAdvantageCardIndexElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const CompetitiveAdvantageCardTitleElement = styled.h3`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  }
`;

export const CompetitiveAdvantageCardLabelElement = styled.p`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid ${({ theme }) => theme.color.border.soft};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
