import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  OffCanvasBackdropElement,
  OffCanvasPanelElement,
  OffCanvasRootElement,
  type OffCanvasSide,
  type OffCanvasSurface,
} from "./OffCanvas.elements";

export type { OffCanvasSide, OffCanvasSurface };

interface OffCanvasProps {
  open: boolean;
  onClose: () => void;
  side?: OffCanvasSide;
  surface?: OffCanvasSurface;
  width?: number;
  height?: number;
  children: ReactNode;
  "aria-label"?: string;
  closeAriaLabel?: string;
}

export const OffCanvas = ({
  open,
  onClose,
  side = "left",
  surface = "default",
  width = 300,
  height = 680,
  children,
  "aria-label": ariaLabel = "Panel",
  closeAriaLabel = "Close panel",
}: OffCanvasProps) => {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <OffCanvasRootElement $open={open} aria-hidden={!open}>
      <OffCanvasBackdropElement
        type="button"
        $open={open}
        aria-label={closeAriaLabel}
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <OffCanvasPanelElement
        $open={open}
        $side={side}
        $surface={surface}
        $width={width}
        $height={height}
        role="dialog"
        aria-modal={open || undefined}
        aria-label={ariaLabel}
      >
        {children}
      </OffCanvasPanelElement>
    </OffCanvasRootElement>,
    document.body,
  );
};
