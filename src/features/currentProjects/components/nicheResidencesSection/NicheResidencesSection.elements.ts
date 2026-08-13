import styled, { css, keyframes } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-28px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(28px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

export const NicheResidencesSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const NicheResidencesInnerElement = styled(SectionContainer)``;

export const NicheResidencesStackElement = styled.div`
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

export const NicheResidencesHeaderElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  max-width: 42rem;
`;

export const NicheResidencesTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 3px;
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  }
`;

export const NicheResidencesSubtitleElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

interface NicheResidencesRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const NicheResidencesCardsElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(1.5)};
  }
`;

export const NicheResidencesCardElement = styled.li<NicheResidencesRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "22px")});
  transition:
    opacity ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow},
    border-color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};
  transition-delay: ${({ $delayMs = 0 }) => `${$delayMs}ms`};

  &:hover {
    border-color: rgba(255, 255, 255, 0.28);
    background: rgba(255, 255, 255, 0.07);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: border-color ${({ theme }) => theme.transitions.fast},
      background ${({ theme }) => theme.transitions.fast};
  }
`;

export const NicheResidencesCardIndexElement = styled.span`
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
`;

export const NicheResidencesCardTitleElement = styled.h3`
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  }
`;

export const NicheResidencesCardTextElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.5;
`;

export const NicheResidencesMediaElement = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    gap: ${({ theme }) => theme.spacing(1.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

interface NicheResidencesMediaItemElementProps extends NicheResidencesRevealProps {
  $side?: "left" | "right";
}

export const NicheResidencesMediaItemElement = styled.div<NicheResidencesMediaItemElementProps>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[800]};
  aspect-ratio: 16 / 11;
  opacity: 0;

  ${({ $visible, $side = "left", $delayMs = 0 }) =>
    $visible &&
    css`
      animation: ${$side === "right" ? slideInRight : slideInLeft}
        ${({ theme }) => theme.transitions.slow} both;
      animation-delay: ${$delayMs}ms;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const NicheResidencesMediaButtonElement = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: zoom-in;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.background.primary};
    outline-offset: 2px;
  }
`;

export const NicheResidencesMediaImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.04);
  transition: transform 0.7s ease;

  ${NicheResidencesMediaButtonElement}:hover & {
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${NicheResidencesMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const NicheResidencesMediaHintElement = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing(2)};
  bottom: ${({ theme }) => theme.spacing(2)};
  z-index: 1;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.8;
  pointer-events: none;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
`;
