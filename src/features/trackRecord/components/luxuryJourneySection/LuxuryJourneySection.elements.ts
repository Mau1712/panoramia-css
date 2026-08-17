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

const softGrid = (fadeColor: string, lineColor: string) => css`
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        to right,
        ${fadeColor} 0%,
        transparent 16%,
        transparent 84%,
        ${fadeColor} 100%
      ),
      linear-gradient(
        to bottom,
        ${fadeColor} 0%,
        transparent 18%,
        transparent 82%,
        ${fadeColor} 100%
      ),
      repeating-linear-gradient(
        to right,
        transparent 0,
        transparent 55px,
        ${lineColor} 55px,
        ${lineColor} 56px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 55px,
        ${lineColor} 55px,
        ${lineColor} 56px
      );
    opacity: 0.42;
  }
`;

interface LuxuryJourneyToneProps {
  $tone: "primary" | "secondary";
}

export const LuxuryJourneySectionElement = styled.section`
  width: 100%;
`;

export const LuxuryJourneyStepElement = styled.article<LuxuryJourneyToneProps>`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ theme, $tone }) =>
    $tone === "primary"
      ? theme.color.background.primary
      : theme.color.background.secondary};

  ${({ theme, $tone }) =>
    softGrid(
      $tone === "primary"
        ? theme.color.background.primary
        : theme.color.background.secondary,
      theme.color.border.soft,
    )}
`;

export const LuxuryJourneyInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

interface LuxuryJourneyRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const LuxuryJourneyStackElement = styled.div<LuxuryJourneyRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(9)};
  padding-inline: ${({ theme }) => theme.spacing(5)};
  opacity: 0;

  ${({ $visible, $delayMs = 0 }) =>
    $visible &&
    css`
      animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
      animation-delay: ${$delayMs}ms;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(7)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(2.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const LuxuryJourneyHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.25)};
  max-width: 42rem;
`;

export const LuxuryJourneyEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.16em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const LuxuryJourneyTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 3px;
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  }
`;

export const LuxuryJourneyFigureElement = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin: 0;
`;

export const LuxuryJourneyMediaElement = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: clamp(16rem, 44vw, 32rem);
  background: ${({ theme }) => theme.color.background.secondary};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: clamp(14rem, 54vw, 22rem);
  }
`;

export const LuxuryJourneyMediaButtonElement = styled.button`
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

export const LuxuryJourneyImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
  transition: transform 1s ease;

  ${LuxuryJourneyMediaButtonElement}:hover & {
    transform: scale(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${LuxuryJourneyMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const LuxuryJourneyMediaHintElement = styled.span`
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

export const LuxuryJourneyTextElement = styled.p`
  margin: 0;
  max-width: 40rem;
  padding-left: ${({ theme }) => theme.spacing(2)};
  border-left: 2px solid ${({ theme }) => theme.color.text.primary};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const LuxuryJourneyPairBandElement = styled.div<LuxuryJourneyToneProps>`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ theme, $tone }) =>
    $tone === "primary"
      ? theme.color.background.primary
      : theme.color.background.secondary};

  ${({ theme, $tone }) =>
    softGrid(
      $tone === "primary"
        ? theme.color.background.primary
        : theme.color.background.secondary,
      theme.color.border.soft,
    )}
`;

export const LuxuryJourneyPairGridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(9)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(7)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(2.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding-block: ${({ theme }) => theme.spacing(6)};
  }
`;

export const LuxuryJourneyPairCardElement = styled.article<LuxuryJourneyRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)};
  min-width: 0;
  opacity: 0;

  ${({ $visible, $delayMs = 0 }) =>
    $visible &&
    css`
      animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
      animation-delay: ${$delayMs}ms;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const LuxuryJourneyPairTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 3px;
    margin-top: ${({ theme }) => theme.spacing(1.25)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  }
`;

export const LuxuryJourneyPairMediaElement = styled(LuxuryJourneyMediaElement)`
  min-height: clamp(14rem, 32vw, 24rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: clamp(14rem, 54vw, 22rem);
  }
`;
