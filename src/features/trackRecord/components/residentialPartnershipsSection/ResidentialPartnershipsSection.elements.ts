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

export const PartnershipsSectionElement = styled.section`
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

export const PartnershipsInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

interface PartnershipsRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const PartnershipsStackElement = styled.div<PartnershipsRevealProps>`
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

export const PartnershipsHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  max-width: 52rem;
`;

export const PartnershipsTitleElement = styled.h2`
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

export const PartnershipsStageElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(16rem, 0.65fr);
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
  }
`;

export const PartnershipsFigureElement = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  min-height: clamp(18rem, 48vw, 34rem);
  background: ${({ theme }) => theme.color.neutral[800]};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    min-height: clamp(16rem, 58vw, 26rem);
  }
`;

export const PartnershipsMediaButtonElement = styled.button`
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

export const PartnershipsImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  transform: scale(1.03);
  transition: transform 1.1s ease;

  ${PartnershipsMediaButtonElement}:hover & {
    transform: scale(1.07);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${PartnershipsMediaButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const PartnershipsMediaHintElement = styled.span`
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

export const PartnershipsAsideElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(3.5)};
  background: ${({ theme }) => theme.color.neutral[800]};
  border: 1px solid ${({ theme }) => theme.color.neutral[700]};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const PartnershipsStatsElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const PartnershipsStatElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};
  padding-bottom: ${({ theme }) => theme.spacing(2.5)};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[600]};

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const PartnershipsStatValueElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.neutral[50]};
  font-size: clamp(2.75rem, 5vw, 3.75rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.04em;
  line-height: 0.95;
`;

export const PartnershipsStatLabelElement = styled.p`
  margin: 0;
  max-width: 16rem;
  color: ${({ theme }) => theme.color.neutral[200]};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const PartnershipsTextElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.neutral[100]};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;
