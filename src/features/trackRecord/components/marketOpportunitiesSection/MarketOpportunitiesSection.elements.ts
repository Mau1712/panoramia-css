import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const MarketOpportunitiesSectionElement = styled.section`
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

  &::after {
    content: "";
    position: absolute;
    top: ${({ theme }) => theme.spacing(-8)};
    right: ${({ theme }) => theme.spacing(-6)};
    width: min(42vw, 420px);
    height: min(42vw, 420px);
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: 50%;
    opacity: 0.35;
    pointer-events: none;
  }
`;

export const MarketOpportunitiesInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
`;

export const MarketOpportunitiesStackElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
  }
`;

export const MarketOpportunitiesBodyElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const MarketOpportunitiesCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2.5)};
  min-width: 0;
`;

export const MarketOpportunitiesTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 3px;
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  }
`;

export const MarketOpportunitiesTextElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.65;
`;

export const MarketOpportunitiesFigureElement = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.secondary};
  aspect-ratio: 16 / 11;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    aspect-ratio: 16 / 10;
    max-height: 360px;
  }
`;

export const MarketOpportunitiesImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
