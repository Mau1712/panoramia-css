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

export const ValueProcessSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const ValueProcessInnerElement = styled(SectionContainer)``;

interface ValueProcessRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const ValueProcessStackElement = styled.div<ValueProcessRevealProps>`
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

export const ValueProcessHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 52rem;
`;

export const ValueProcessTitleElement = styled.h2`
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

export const ValueProcessFigureElement = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  min-height: clamp(16rem, 42vw, 30rem);
  background: ${({ theme }) => theme.color.background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: clamp(14rem, 52vw, 22rem);
  }
`;

export const ValueProcessMediaButtonElement = styled.button`
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

export const ValueProcessImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
  transition: transform 1.1s ease;

  ${ValueProcessMediaButtonElement}:hover & {
    transform: scale(1.06);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${ValueProcessMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const ValueProcessMediaHintElement = styled.span`
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

export const ValueProcessStepsElement = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background: ${({ theme }) => theme.color.border.primary};
  border: 1px solid ${({ theme }) => theme.color.border.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ValueProcessStepElement = styled.li<ValueProcessRevealProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.25)};
  min-width: 0;
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
  background: ${({ theme }) => theme.color.background.secondary};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "14px")});
  transition:
    opacity ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow},
    background-color ${({ theme }) => theme.transitions.normal};
  transition-delay: ${({ $delayMs = 0 }) => `${$delayMs}ms`};

  &:hover {
    background: ${({ theme }) => theme.color.background.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing(2.5)} ${theme.spacing(1.5)}`};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: background-color ${({ theme }) => theme.transitions.normal};
  }
`;

export const ValueProcessStepIndexElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.14em;
  line-height: 1.2;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
`;

export const ValueProcessStepLabelElement = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: -0.01em;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const ValueProcessTaglineElement = styled.p`
  max-width: 44rem;
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;
