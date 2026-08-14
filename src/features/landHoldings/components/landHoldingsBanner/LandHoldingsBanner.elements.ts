import styled, { keyframes } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LandHoldingsBannerElement = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 560px;
  min-height: 560px;
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const LandHoldingsBannerMediaElement = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
`;

export const LandHoldingsBannerOverlayElement = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      100deg,
      rgba(0, 0, 0, 0.72) 0%,
      rgba(0, 0, 0, 0.38) 48%,
      rgba(0, 0, 0, 0.18) 100%
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 55%);
`;

export const LandHoldingsBannerInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const LandHoldingsBannerContentElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(5)}`};
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LandHoldingsBannerTitleElement = styled.h1`
  max-width: 28ch;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.05;
  letter-spacing: -0.02em;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 3px;
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
    max-width: 100%;
  }
`;

export const LandHoldingsBannerTextElement = styled.p`
  max-width: 42ch;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
  opacity: 0.92;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;
