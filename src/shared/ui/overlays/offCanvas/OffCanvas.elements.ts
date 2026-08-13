import { pxToRem } from "@shared/utils/styles-utils";
import styled, { css } from "styled-components";

export type OffCanvasSide = "left" | "right" | "bottom";
export type OffCanvasSurface = "default" | "sheet";

interface OffCanvasRootElementProps {
  $open: boolean;
}

export const OffCanvasRootElement = styled.div<OffCanvasRootElementProps>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  overflow: hidden;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
`;

interface OffCanvasBackdropElementProps {
  $open: boolean;
}

export const OffCanvasBackdropElement = styled.button<OffCanvasBackdropElementProps>`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: ${({ theme }) => theme.color.overlay};
  cursor: pointer;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.normal};
`;

interface OffCanvasPanelElementProps {
  $open: boolean;
  $side: OffCanvasSide;
  $surface: OffCanvasSurface;
  $width: number;
  $height: number;
}

const sidePanelStyles = css<OffCanvasPanelElementProps>`
  top: 0;
  bottom: 0;
  ${({ $side }) => ($side === "left" ? "left: 0;" : "right: 0;")}
  width: min(100%, ${({ $width }) => pxToRem($width)});
  max-width: 85vw;
  height: 100%;
  transform: ${({ $open, $side }) => {
    if ($open) {
      return "translateX(0)";
    }
    return $side === "left" ? "translateX(-100%)" : "translateX(100%)";
  }};
`;

const bottomPanelStyles = css<OffCanvasPanelElementProps>`
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: none;
  height: min(100%, ${({ $height }) => pxToRem($height)});
  max-height: 90dvh;
  border-radius: ${({ theme, $surface }) => {
    const radius =
      $surface === "sheet" ? theme.radii.xxLarge : theme.radii.xLarge;
    return `${radius} ${radius} 0 0`;
  }};
  transform: ${({ $open }) =>
    $open ? "translateY(0)" : `translateY(calc(100% + ${pxToRem(80)}))`};
`;

export const OffCanvasPanelElement = styled.aside<OffCanvasPanelElementProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: ${({ theme, $surface }) =>
    $surface === "sheet"
      ? `0.668px solid ${theme.color.border.primary}`
      : "none"};
  background: ${({ theme, $surface }) =>
    $surface === "sheet"
      ? theme.color.background.sheet
      : theme.color.background.primary};
  box-shadow: ${({ theme, $surface, $open }) => {
    if (!$open) {
      return "none";
    }
    return $surface === "sheet" ? theme.shadows.sheet : theme.shadows.large;
  }};
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  ${({ $side }) => ($side === "bottom" ? bottomPanelStyles : sidePanelStyles)}
`;
