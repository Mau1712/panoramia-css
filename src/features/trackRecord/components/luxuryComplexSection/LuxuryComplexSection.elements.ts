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

export const LuxuryComplexSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.secondary};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        to right,
        ${({ theme }) => theme.color.background.secondary} 0%,
        transparent 16%,
        transparent 84%,
        ${({ theme }) => theme.color.background.secondary} 100%
      ),
      linear-gradient(
        to bottom,
        ${({ theme }) => theme.color.background.secondary} 0%,
        transparent 18%,
        transparent 82%,
        ${({ theme }) => theme.color.background.secondary} 100%
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

export const LuxuryComplexInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

interface LuxuryComplexRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const LuxuryComplexStackElement = styled.div<LuxuryComplexRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3.5)};
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

export const LuxuryComplexHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.25)};
  max-width: 48rem;
`;

export const LuxuryComplexEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.16em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const LuxuryComplexTitleElement = styled.h2`
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

export const LuxuryComplexHeroElement = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  min-height: clamp(16rem, 44vw, 32rem);
  background: ${({ theme }) => theme.color.background.primary};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.background.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: clamp(14rem, 54vw, 22rem);
  }
`;

export const LuxuryComplexMediaButtonElement = styled.button`
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

export const LuxuryComplexImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
  transition: transform 1s ease;

  ${LuxuryComplexMediaButtonElement}:hover & {
    transform: scale(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${LuxuryComplexMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const LuxuryComplexMediaHintElement = styled.span`
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

export const LuxuryComplexGridElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const LuxuryComplexCardElement = styled.li<LuxuryComplexRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "14px")});
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

export const LuxuryComplexCardMediaElement = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: ${({ theme }) => theme.color.background.primary};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
`;

export const LuxuryComplexCaptionElement = styled.p`
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing(1.5)};
  border-left: 2px solid ${({ theme }) => theme.color.text.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.06em;
  line-height: 1.35;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;
