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

export const LuxuryTrackBannerElement = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 560px;
  min-height: 560px;
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const LuxuryTrackBannerMediaElement = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
`;

export const LuxuryTrackBannerOverlayElement = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      105deg,
      rgba(0, 0, 0, 0.78) 0%,
      rgba(0, 0, 0, 0.52) 42%,
      rgba(0, 0, 0, 0.28) 100%
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 55%);
`;

export const LuxuryTrackBannerInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: inherit;
`;

export const LuxuryTrackBannerContentElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 44rem;
  padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(5)}`};
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(2)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(4)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LuxuryTrackBannerTitleElement = styled.h1`
  max-width: 18ch;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.08;
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
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  }
`;
