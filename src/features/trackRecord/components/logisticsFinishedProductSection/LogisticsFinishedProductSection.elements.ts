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

export const FinishedProductSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const FinishedProductInnerElement = styled(SectionContainer)``;

interface FinishedProductRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const FinishedProductStackElement = styled.div<FinishedProductRevealProps>`
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

export const FinishedProductTitleElement = styled.h2`
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

export const FinishedProductLayoutElement = styled.div`
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

export const FinishedProductFigureElement = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: clamp(20rem, 48vw, 36rem);
  margin: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    order: 2;
    min-height: clamp(16rem, 56vw, 26rem);
  }
`;

export const FinishedProductMediaButtonElement = styled.button`
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

export const FinishedProductImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.03);
  transition: transform 1.1s ease;

  ${FinishedProductMediaButtonElement}:hover & {
    transform: scale(1.07);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${FinishedProductMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const FinishedProductMediaHintElement = styled.span`
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

export const FinishedProductCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    order: 1;
  }
`;

export const FinishedProductIntroElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.75)};
`;

export const FinishedProductSubtitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.mHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  }
`;

export const FinishedProductTextElement = styled.p`
  margin: 0;
  max-width: 38rem;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.65;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const FinishedProductListElement = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid ${({ theme }) => theme.color.border.primary};
`;

export const FinishedProductItemElement = styled.li<FinishedProductRevealProps>`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.spacing(2.5)} minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing(1.25)};
  align-items: start;
  padding-block: ${({ theme }) => theme.spacing(1.75)};
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

export const FinishedProductItemMarkerElement = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  margin-top: 0.55em;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.text.primary};
`;

export const FinishedProductItemTextElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.45;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;
