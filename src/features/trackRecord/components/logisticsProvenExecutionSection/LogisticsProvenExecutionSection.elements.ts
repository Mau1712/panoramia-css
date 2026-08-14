import styled, { css, keyframes } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProvenExecutionSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[900]};
  color: ${({ theme }) => theme.color.neutral[50]};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(
        ellipse 70% 55% at 80% 20%,
        ${({ theme }) => theme.color.neutral[700]} 0%,
        transparent 70%
      ),
      repeating-linear-gradient(
        to right,
        transparent 0,
        transparent 71px,
        ${({ theme }) => theme.color.neutral[700]} 71px,
        ${({ theme }) => theme.color.neutral[700]} 72px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 71px,
        ${({ theme }) => theme.color.neutral[700]} 71px,
        ${({ theme }) => theme.color.neutral[700]} 72px
      );
    opacity: 0.28;
  }
`;

export const ProvenExecutionInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

interface ProvenExecutionRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const ProvenExecutionStackElement = styled.div<ProvenExecutionRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(11)};
  padding-inline: ${({ theme }) => theme.spacing(5)};
  opacity: 0;

  ${({ $visible, $delayMs = 0 }) =>
    $visible &&
    css`
      animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
      animation-delay: ${$delayMs}ms;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(9)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(7)};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const ProvenExecutionTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.neutral[50]};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.04em;
  line-height: 1.15;
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
    font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  }
`;

export const ProvenExecutionFigureElement = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  min-height: clamp(16rem, 42vw, 30rem);
  background: ${({ theme }) => theme.color.neutral[800]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: clamp(14rem, 52vw, 22rem);
  }
`;

export const ProvenExecutionMediaButtonElement = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: zoom-in;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.neutral[50]};
    outline-offset: 2px;
  }
`;

export const ProvenExecutionImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
  transition: transform 1.1s ease;

  ${ProvenExecutionMediaButtonElement}:hover & {
    transform: scale(1.06);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${ProvenExecutionMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const ProvenExecutionMediaHintElement = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing(1.5)};
  bottom: ${({ theme }) => theme.spacing(1.5)};
  z-index: 1;
  color: ${({ theme }) => theme.color.neutral[50]};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.55);
  pointer-events: none;
`;

export const ProvenExecutionSubtitleElement = styled.h3`
  margin: 0;
  max-width: 36ch;
  color: ${({ theme }) => theme.color.neutral[50]};
  font-size: ${({ theme }) => theme.typography.fontSizes.mHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  }
`;

export const ProvenExecutionStatsElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[700]};
  border: 1px solid ${({ theme }) => theme.color.neutral[700]};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProvenExecutionStatElement = styled.li<ProvenExecutionRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  min-width: 0;
  padding: ${({ theme }) => `${theme.spacing(3.5)} ${theme.spacing(2.5)}`};
  background: ${({ theme }) => theme.color.neutral[900]};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "14px")});
  transition:
    opacity ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow};
  transition-delay: ${({ $delayMs = 0 }) => `${$delayMs}ms`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const ProvenExecutionStatValueElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.neutral[50]};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.03em;
  line-height: 1;
`;

export const ProvenExecutionStatLabelElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.neutral[200]};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.06em;
  line-height: 1.4;
  text-transform: uppercase;
`;
