import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import {
  ChevronBackIcon,
  ChevronForwardIcon,
  CloseIcon,
} from "@assets/icons";
import {
  ImageLightboxBackdropElement,
  ImageLightboxCaptionElement,
  ImageLightboxCloseButtonElement,
  ImageLightboxFigureElement,
  ImageLightboxImageElement,
  ImageLightboxNavButtonElement,
  ImageLightboxRootElement,
  ImageLightboxStageElement,
} from "./ImageLightbox.elements";

export interface ImageLightboxItem {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: ImageLightboxItem[];
  activeIndex: number | null;
  onClose: () => void;
  onActiveIndexChange: (index: number) => void;
  closeAriaLabel: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  dialogAriaLabel: string;
}

export const ImageLightbox = ({
  images,
  activeIndex,
  onClose,
  onActiveIndexChange,
  closeAriaLabel,
  prevAriaLabel,
  nextAriaLabel,
  dialogAriaLabel,
}: ImageLightboxProps) => {
  const titleId = useId();
  const open = activeIndex !== null && images.length > 0;
  const currentImage =
    open && activeIndex !== null ? images[activeIndex] : null;
  const canGoPrev = open && activeIndex !== null && activeIndex > 0;
  const canGoNext =
    open && activeIndex !== null && activeIndex < images.length - 1;

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
    if (!open || activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && activeIndex > 0) {
        onActiveIndexChange(activeIndex - 1);
        return;
      }

      if (event.key === "ArrowRight" && activeIndex < images.length - 1) {
        onActiveIndexChange(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length, onActiveIndexChange, onClose, open]);

  if (typeof document === "undefined" || !currentImage) {
    return null;
  }

  return createPortal(
    <ImageLightboxRootElement $open={open} aria-hidden={!open}>
      <ImageLightboxBackdropElement
        type="button"
        $open={open}
        aria-label={closeAriaLabel}
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <ImageLightboxCloseButtonElement
        type="button"
        aria-label={closeAriaLabel}
        onClick={onClose}
      >
        <CloseIcon aria-hidden />
      </ImageLightboxCloseButtonElement>

      {images.length > 1 ? (
        <>
          <ImageLightboxNavButtonElement
            type="button"
            $side="prev"
            aria-label={prevAriaLabel}
            disabled={!canGoPrev}
            onClick={() => {
              if (activeIndex !== null && activeIndex > 0) {
                onActiveIndexChange(activeIndex - 1);
              }
            }}
          >
            <ChevronBackIcon aria-hidden />
          </ImageLightboxNavButtonElement>

          <ImageLightboxNavButtonElement
            type="button"
            $side="next"
            aria-label={nextAriaLabel}
            disabled={!canGoNext}
            onClick={() => {
              if (
                activeIndex !== null &&
                activeIndex < images.length - 1
              ) {
                onActiveIndexChange(activeIndex + 1);
              }
            }}
          >
            <ChevronForwardIcon aria-hidden />
          </ImageLightboxNavButtonElement>
        </>
      ) : null}

      <ImageLightboxStageElement
        role="dialog"
        aria-modal="true"
        aria-label={dialogAriaLabel}
        aria-labelledby={titleId}
      >
        <ImageLightboxFigureElement>
          <ImageLightboxImageElement
            src={currentImage.src}
            alt={currentImage.alt}
          />
          <ImageLightboxCaptionElement id={titleId}>
            {currentImage.alt}
          </ImageLightboxCaptionElement>
        </ImageLightboxFigureElement>
      </ImageLightboxStageElement>
    </ImageLightboxRootElement>,
    document.body,
  );
};
