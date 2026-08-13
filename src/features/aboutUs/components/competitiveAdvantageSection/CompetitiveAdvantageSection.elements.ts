import styled, { css, keyframes } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CompetitiveAdvantageSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const CompetitiveAdvantageInnerElement = styled(SectionContainer)``;

interface CompetitiveAdvantageRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const CompetitiveAdvantageStackElement = styled.div<CompetitiveAdvantageRevealProps>`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};
  opacity: 0;

  ${({ $visible, $delayMs = 0 }) =>
    $visible &&
    css`
      animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
      animation-delay: ${$delayMs}ms;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(3.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const CompetitiveAdvantageCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    order: 1;
  }
`;

export const CompetitiveAdvantageTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.1;

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

export const CompetitiveAdvantageTextElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.65;
`;

export const CompetitiveAdvantageToggleElement = styled.button`
  align-self: flex-start;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-decoration: underline;
  text-underline-offset: 0.2em;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }
`;

export const CompetitiveAdvantageMediaElement = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 4 / 3;
  justify-self: start;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    order: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    max-width: min(520px, 100%);
    order: 2;
  }
`;

export const CompetitiveAdvantageMediaButtonElement = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: zoom-in;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.primary};
    outline-offset: 2px;
  }
`;

export const CompetitiveAdvantageMediaImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
  transition: transform 0.9s ease;

  ${CompetitiveAdvantageMediaButtonElement}:hover & {
    transform: scale(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${CompetitiveAdvantageMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const CompetitiveAdvantageMediaHintElement = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing(1.5)};
  bottom: ${({ theme }) => theme.spacing(1.5)};
  z-index: 1;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.45);
  pointer-events: none;
`;
