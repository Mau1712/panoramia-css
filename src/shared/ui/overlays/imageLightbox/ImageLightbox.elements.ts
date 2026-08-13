import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface ImageLightboxRootElementProps {
  $open: boolean;
}

export const ImageLightboxRootElement = styled.div<ImageLightboxRootElementProps>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
`;

interface ImageLightboxBackdropElementProps {
  $open: boolean;
}

export const ImageLightboxBackdropElement = styled.button<ImageLightboxBackdropElementProps>`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: rgba(0, 0, 0, 0.88);
  cursor: pointer;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.normal};
`;

export const ImageLightboxStageElement = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(100%, ${({ theme }) => theme.spacing(140)});
  max-width: calc(100vw - ${({ theme }) => theme.spacing(8)});
  max-height: calc(100dvh - ${({ theme }) => theme.spacing(10)});
  padding: ${({ theme }) => theme.spacing(2)};
  animation: ${fadeIn} ${({ theme }) => theme.transitions.normal} both;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: calc(100vw - ${({ theme }) => theme.spacing(2)});
    max-height: calc(100dvh - ${({ theme }) => theme.spacing(6)});
    padding: ${({ theme }) => theme.spacing(1)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ImageLightboxFigureElement = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin: 0;
  max-width: 100%;
  max-height: 100%;
`;

export const ImageLightboxImageElement = styled.img`
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100dvh - ${({ theme }) => theme.spacing(16)});
  object-fit: contain;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: calc(100dvh - ${({ theme }) => theme.spacing(12)});
  }
`;

export const ImageLightboxCaptionElement = styled.figcaption`
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
  text-align: center;
  opacity: 0.8;
`;

export const ImageLightboxCloseButtonElement = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.background.primary};
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }

  svg {
    width: ${({ theme }) => theme.spacing(3.5)};
    height: ${({ theme }) => theme.spacing(3.5)};
  }
`;

interface ImageLightboxNavButtonElementProps {
  $side: "prev" | "next";
}

export const ImageLightboxNavButtonElement = styled.button<ImageLightboxNavButtonElementProps>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "prev" ? "left: 0;" : "right: 0;")}
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(5.5)};
  height: ${({ theme }) => theme.spacing(5.5)};
  margin: 0;
  padding: 0;
  border: none;
  transform: translateY(-50%);
  background: transparent;
  color: ${({ theme }) => theme.color.background.primary};
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }

  svg {
    width: ${({ theme }) => theme.spacing(3.5)};
    height: ${({ theme }) => theme.spacing(3.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.spacing(4.5)};
    height: ${({ theme }) => theme.spacing(4.5)};
  }
`;
