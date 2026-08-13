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

export const ResidentialTrackBannerElement = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: min(72dvh, ${({ theme }) => theme.spacing(88)});
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const ResidentialTrackBannerMediaElement = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
`;

export const ResidentialTrackBannerOverlayElement = styled.div`
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

export const ResidentialTrackBannerInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: inherit;
`;

export const ResidentialTrackBannerContentElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2.5)};
  width: 100%;
  max-width: 42rem;
  padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(5)}`};
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(2)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(4)};
    gap: ${({ theme }) => theme.spacing(2)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ResidentialTrackBannerTitleElement = styled.h1`
  max-width: 22ch;
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

export const ResidentialTrackBannerListElement = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  list-style: none;
`;

export const ResidentialTrackBannerListItemElement = styled.li`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing(2.5)};
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
  opacity: 0.94;

  &::before {
    content: "";
    position: absolute;
    top: 0.65em;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: ${({ theme }) => theme.radii.circle};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const ResidentialTrackBannerTextElement = styled.p`
  max-width: 34ch;
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;
