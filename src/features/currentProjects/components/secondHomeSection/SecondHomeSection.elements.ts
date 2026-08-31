import styled, { css, keyframes } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SecondHomeSectionElement = styled.section`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const SecondHomeInnerElement = styled(SectionContainer)``;

export const SecondHomeStackElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const SecondHomeIntroElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  align-items: end;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const SecondHomeHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
`;

export const SecondHomeTitleElement = styled.h2`
  width: fit-content;
  max-width: 100%;
  scroll-margin-top: ${({ theme }) =>
    `calc(${theme.spacing(3)} * 2 + ${theme.spacing(4.5)} + ${theme.spacing(2)})`};
  color: ${({ theme }) => theme.color.text.primary};
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
    scroll-margin-top: ${({ theme }) =>
      `calc(${theme.spacing(2)} * 2 + ${theme.spacing(4)} + ${theme.spacing(2)})`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  }
`;

export const SecondHomeSubtitleElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const SecondHomeCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  min-width: 0;
  padding-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

export const SecondHomeMetaElement = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.55;
`;

export const SecondHomeTextElement = styled.p`
  max-width: 38rem;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.65;
`;

interface SecondHomeRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const SecondHomeBentoElement = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows:
    minmax(${({ theme }) => theme.spacing(22)}, 1fr)
    minmax(${({ theme }) => theme.spacing(22)}, 1fr)
    auto
    auto;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(1.5)};
    margin-inline: ${({ theme }) => `0 -${theme.spacing(2)}`};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    cursor: grab;

    &::-webkit-scrollbar {
      display: none;
    }

    &:active {
      cursor: grabbing;
    }
  }
`;

interface SecondHomeBentoItemElementProps extends SecondHomeRevealProps {
  $span?: "hero" | "top" | "mid" | "wide" | "cell";
}

export const SecondHomeBentoItemElement = styled.div<SecondHomeBentoItemElementProps>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.color.neutral[300]};
  opacity: 0;

  ${({ $span }) => {
    switch ($span) {
      case "hero":
        return css`
          grid-column: 1 / span 4;
          grid-row: 1 / span 2;

          @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            grid-column: 1 / -1;
            grid-row: auto;
            aspect-ratio: 16 / 10;
          }
        `;
      case "top":
        return css`
          grid-column: 5 / span 2;
          grid-row: 1;

          @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            grid-column: 1;
            grid-row: auto;
            aspect-ratio: 4 / 3;
          }
        `;
      case "mid":
        return css`
          grid-column: 5 / span 2;
          grid-row: 2;

          @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            grid-column: 2;
            grid-row: auto;
            aspect-ratio: 4 / 3;
          }
        `;
      case "wide":
        return css`
          grid-column: 1 / -1;
          grid-row: 3;
          min-height: ${({ theme }) => theme.spacing(28)};
          aspect-ratio: 21 / 8;

          @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            grid-column: 1 / -1;
            grid-row: auto;
            aspect-ratio: 16 / 9;
            min-height: 0;
          }
        `;
      case "cell":
        return css`
          grid-column: span 2;
          grid-row: 4;
          aspect-ratio: 4 / 3;

          @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            grid-column: span 1;
            grid-row: auto;
          }
        `;
      default:
        return css``;
    }
  }}

  ${({ $visible, $delayMs = 0 }) =>
    $visible &&
    css`
      animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
      animation-delay: ${$delayMs}ms;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 calc(100% - ${({ theme }) => theme.spacing(5)});
    width: calc(100% - ${({ theme }) => theme.spacing(5)});
    aspect-ratio: 4 / 3;
    min-height: 0;
    scroll-snap-align: start;
    opacity: 1;
    animation: none;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const SecondHomeBentoButtonElement = styled.button`
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

export const SecondHomeBentoImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.03);
  transition: transform 0.8s ease;

  ${SecondHomeBentoButtonElement}:hover & {
    transform: scale(1.08);
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;

    ${SecondHomeBentoButtonElement}:hover & {
      transform: none;
    }
  }
`;

export const SecondHomeBentoIndexElement = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  left: ${({ theme }) => theme.spacing(2)};
  z-index: 1;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.45);
  pointer-events: none;
`;

export const SecondHomeGalleryShellElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const SecondHomeDotsElement = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

interface SecondHomeDotElementProps {
  $active: boolean;
}

export const SecondHomeDotElement = styled.button<SecondHomeDotElementProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: ${({ $active }) => ($active ? "24px" : "12px")};
    height: 12px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $active }) =>
      $active ? theme.color.text.primary : theme.color.neutral[300]};
    transition:
      width ${({ theme }) => theme.transitions.normal},
      background ${({ theme }) => theme.transitions.fast};
  }

  &:hover::before {
    background: ${({ theme }) => theme.color.text.primary};
  }
`;
