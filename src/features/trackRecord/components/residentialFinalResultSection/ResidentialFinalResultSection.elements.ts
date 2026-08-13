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

export const FinalResultSectionElement = styled.section`
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
        transparent 18%,
        transparent 82%,
        ${({ theme }) => theme.color.background.primary} 100%
      ),
      linear-gradient(
        to bottom,
        ${({ theme }) => theme.color.background.primary} 0%,
        transparent 22%,
        transparent 78%,
        ${({ theme }) => theme.color.background.primary} 100%
      ),
      repeating-linear-gradient(
        to right,
        transparent 0,
        transparent 47px,
        ${({ theme }) => theme.color.border.soft} 47px,
        ${({ theme }) => theme.color.border.soft} 48px
      ),
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 47px,
        ${({ theme }) => theme.color.border.soft} 47px,
        ${({ theme }) => theme.color.border.soft} 48px
      );
    opacity: 0.55;
  }
`;

export const FinalResultInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

interface FinalResultRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const FinalResultStackElement = styled.div<FinalResultRevealProps>`
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

export const FinalResultCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  max-width: 48rem;
`;

export const FinalResultTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.text.primary};
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

export const FinalResultTextElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.65;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const FinalResultFigureElement = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin: 0;
`;

export const FinalResultMediaElement = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: clamp(18rem, 52vw, 36rem);
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const FinalResultMediaButtonElement = styled.button`
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

export const FinalResultImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
  transition: transform 1s ease;

  ${FinalResultMediaButtonElement}:hover & {
    transform: scale(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${FinalResultMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const FinalResultMediaHintElement = styled.span`
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

export const FinalResultCaptionElement = styled.figcaption`
  max-width: 52rem;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;
