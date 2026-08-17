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

export const LuxuryDevelopmentSectionElement = styled.section`
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
        ellipse 70% 55% at 80% 18%,
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
    opacity: 0.3;
  }
`;

export const LuxuryDevelopmentInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

interface LuxuryDevelopmentRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const LuxuryDevelopmentStackElement = styled.div<LuxuryDevelopmentRevealProps>`
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

export const LuxuryDevelopmentHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.25)};
  max-width: 48rem;
`;

export const LuxuryDevelopmentEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.neutral[400]};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.16em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const LuxuryDevelopmentTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.color.neutral[50]};
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

export const LuxuryDevelopmentGridElement = styled.ul`
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

export const LuxuryDevelopmentCardElement = styled.li<LuxuryDevelopmentRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "16px")});
  transition:
    opacity ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow};
  transition-delay: ${({ $delayMs = 0 }) => `${$delayMs}ms`};

  &:last-child {
    grid-column: 1 / -1;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const LuxuryDevelopmentMediaElement = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: ${({ theme }) => theme.color.neutral[800]};
  border: 1px solid ${({ theme }) => theme.color.neutral[700]};

  ${LuxuryDevelopmentCardElement}:last-child & {
    aspect-ratio: 21 / 9;
    min-height: clamp(14rem, 38vw, 26rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 4 / 3;

    ${LuxuryDevelopmentCardElement}:last-child & {
      aspect-ratio: 16 / 10;
      min-height: clamp(12rem, 48vw, 18rem);
    }
  }
`;

export const LuxuryDevelopmentMediaButtonElement = styled.button`
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

export const LuxuryDevelopmentImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
  transition: transform 1s ease;

  ${LuxuryDevelopmentMediaButtonElement}:hover & {
    transform: scale(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${LuxuryDevelopmentMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const LuxuryDevelopmentMediaHintElement = styled.span`
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

export const LuxuryDevelopmentCaptionElement = styled.p`
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing(1.5)};
  border-left: 2px solid ${({ theme }) => theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.neutral[100]};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.06em;
  line-height: 1.4;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;
