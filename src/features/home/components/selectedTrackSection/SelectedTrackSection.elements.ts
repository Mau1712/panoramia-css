import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SelectedTrackSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const SelectedTrackBgElement = styled.img`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% center;
  pointer-events: none;
  user-select: none;
  opacity: 0.42;
`;

export const SelectedTrackInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
    padding-right: 0;
  }
`;

export const SelectedTrackHeaderElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-right: ${({ theme }) => theme.spacing(2)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const SelectedTrackHeaderTopElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
`;

export const SelectedTrackHeadingGroupElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  flex: 1;
  min-width: 0;
`;

export const SelectedTrackTitleElement = styled.h2`
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

export const SelectedTrackDescriptionElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.6;
`;

export const SelectedTrackControlsElement = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SelectedTrackControlButtonElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.background.secondary};
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`;

export const SelectedTrackCarouselElement = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(1)}`};
  list-style: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-right: ${({ theme }) => theme.spacing(2)};
  }
`;

interface SelectedTrackCardElementProps {
  $index: number;
}

export const SelectedTrackCardElement = styled.li<SelectedTrackCardElementProps>`
  display: flex;
  flex: 0 0 calc((100% - ${({ theme }) => theme.spacing(6)}) / 3);
  min-width: 0;
  scroll-snap-align: start;
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
  animation-delay: ${({ $index }) => `${120 + $index * 90}ms`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    flex-basis: calc((100% - ${({ theme }) => theme.spacing(3)}) / 2.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: calc(100% - ${({ theme }) => theme.spacing(5)});
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const selectedTrackCardSurfaceStyles = `
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const SelectedTrackCardLinkElement = styled(Link)`
  ${selectedTrackCardSurfaceStyles}
  background: ${({ theme }) => theme.color.background.primary};
  border: 1px solid ${({ theme }) => theme.color.border.soft};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

export const SelectedTrackCardSurfaceElement = styled.div`
  ${selectedTrackCardSurfaceStyles}
  background: ${({ theme }) => theme.color.background.primary};
  border: 1px solid ${({ theme }) => theme.color.border.soft};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const SelectedTrackCardMediaElement = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 6 / 5;
  object-fit: cover;
  object-position: center;
  transition: transform ${({ theme }) => theme.transitions.slow};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const SelectedTrackCardBodyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2.5)}`};
  text-align: center;
`;

export const SelectedTrackCardTitleElement = styled.h3`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const SelectedTrackCardSubtitleElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const SelectedTrackDotsElement = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    padding-right: ${({ theme }) => theme.spacing(2)};
  }
`;

interface SelectedTrackDotElementProps {
  $active: boolean;
}

export const SelectedTrackDotElement = styled.button<SelectedTrackDotElementProps>`
  width: ${({ theme, $active }) =>
    $active ? theme.spacing(3) : theme.spacing(1.5)};
  height: ${({ theme }) => theme.spacing(1.5)};
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.color.text.primary : theme.color.neutral[200]};
  cursor: pointer;
  transition:
    width ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.text.primary};
  }
`;
