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

export const StrategicLocationSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.primary};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        to right,
        ${({ theme }) => theme.color.background.primary} 0%,
        transparent 16%,
        transparent 84%,
        ${({ theme }) => theme.color.background.primary} 100%
      ),
      linear-gradient(
        to bottom,
        ${({ theme }) => theme.color.background.primary} 0%,
        transparent 20%,
        transparent 80%,
        ${({ theme }) => theme.color.background.primary} 100%
      ),
      repeating-linear-gradient(
        to right,
        transparent 0,
        transparent 55px,
        ${({ theme }) => theme.color.border.soft} 55px,
        ${({ theme }) => theme.color.border.soft} 56px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 55px,
        ${({ theme }) => theme.color.border.soft} 55px,
        ${({ theme }) => theme.color.border.soft} 56px
      );
    opacity: 0.45;
  }
`;

export const StrategicLocationInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

interface StrategicLocationRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const StrategicLocationStackElement = styled.div<StrategicLocationRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
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
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const StrategicLocationTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.06em;
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

export const StrategicLocationLayoutElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const StrategicLocationCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  min-width: 0;
`;

export const StrategicLocationSubtitleElement = styled.h3`
  margin: 0;
  max-width: 22ch;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.mHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  }
`;

export const StrategicLocationListElement = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.color.border.primary};
`;

export const StrategicLocationItemElement = styled.li<StrategicLocationRevealProps>`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.spacing(4.5)} minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding-block: ${({ theme }) => theme.spacing(2.25)};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.primary};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "12px")});
  transition:
    opacity ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow};
  transition-delay: ${({ $delayMs = 0 }) => `${$delayMs}ms`};

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const StrategicLocationItemIndexElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.6;
  font-variant-numeric: tabular-nums;
`;

export const StrategicLocationItemBodyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-width: 0;
`;

export const StrategicLocationItemTitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: -0.01em;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const StrategicLocationItemTextElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const StrategicLocationFigureElement = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: clamp(20rem, 48vw, 36rem);
  margin: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    min-height: clamp(16rem, 56vw, 26rem);
  }
`;

export const StrategicLocationMediaButtonElement = styled.button`
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

export const StrategicLocationImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.03);
  transition: transform 1.1s ease;

  ${StrategicLocationMediaButtonElement}:hover & {
    transform: scale(1.07);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${StrategicLocationMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const StrategicLocationMediaHintElement = styled.span`
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
