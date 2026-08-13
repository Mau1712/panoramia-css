import { Link } from "react-router-dom";
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

export const HeroBannerElement = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: min(56dvh, ${({ theme }) => theme.spacing(70)});
  min-height: min(56dvh, ${({ theme }) => theme.spacing(70)});
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const HeroBannerMediaLayerElement = styled.div`
  position: absolute;
  inset: 0;
`;

interface HeroBannerMediaElementProps {
  $active: boolean;
}

export const HeroBannerMediaElement = styled.img<HeroBannerMediaElementProps>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const HeroBannerOverlayElement = styled.div`
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

export const HeroBannerInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeroBannerContentElement = styled.div`
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
`;

export const HeroBannerTitleElement = styled.h1`
  max-width: 28ch;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.05;
  letter-spacing: -0.02em;
  white-space: pre-line;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
    max-width: 28ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
    max-width: 100%;
  }
`;

export const HeroBannerTextElement = styled.p`
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

export const HeroBannerCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(3)}`};
  background: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.text.primary};
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.neutral[50]};
    box-shadow: ${({ theme }) => theme.shadows.large};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const HeroBannerDotsElement = styled.div`
  position: absolute;
  z-index: 2;
  right: ${({ theme }) => theme.spacing(5)};
  bottom: ${({ theme }) => theme.spacing(3)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    right: ${({ theme }) => theme.spacing(2)};
    bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

interface HeroBannerDotElementProps {
  $active: boolean;
}

export const HeroBannerDotElement = styled.button<HeroBannerDotElementProps>`
  width: ${({ theme, $active }) =>
    $active ? theme.spacing(3) : theme.spacing(1.5)};
  height: ${({ theme }) => theme.spacing(1.5)};
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active
      ? theme.color.background.primary
      : "rgba(255, 255, 255, 0.45)"};
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  transition:
    width ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.background.primary};
  }
`;
