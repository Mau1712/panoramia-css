import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@app/i18n";
import { ChevronBackIcon, ChevronForwardIcon } from "@assets/icons";
import blueprintBg from "@assets/selectedTrack/selected-track-blueprint-bg.png";
import { selectedTrackCards } from "../../data";
import {
  SelectedTrackBgElement,
  SelectedTrackCardBodyElement,
  SelectedTrackCardElement,
  SelectedTrackCardLinkElement,
  SelectedTrackCardMediaElement,
  SelectedTrackCardSubtitleElement,
  SelectedTrackCardSurfaceElement,
  SelectedTrackCardTitleElement,
  SelectedTrackCarouselElement,
  SelectedTrackControlButtonElement,
  SelectedTrackControlsElement,
  SelectedTrackDescriptionElement,
  SelectedTrackDotElement,
  SelectedTrackDotsElement,
  SelectedTrackHeaderElement,
  SelectedTrackHeaderTopElement,
  SelectedTrackHeadingGroupElement,
  SelectedTrackInnerElement,
  SelectedTrackSectionElement,
  SelectedTrackTitleElement,
} from "./SelectedTrackSection.elements";

interface SelectedTrackSectionProps {
  showBackground?: boolean;
  linkCards?: boolean;
}

export const SelectedTrackSection = ({
  showBackground = true,
  linkCards = true,
}: SelectedTrackSectionProps) => {
  const { t, i18n } = useTranslation("common");
  const localize = useLocalizedPath();
  const carouselRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    setCanScrollPrev(carousel.scrollLeft > 4);
    setCanScrollNext(carousel.scrollLeft < maxScrollLeft - 4);

    const cards = carousel.querySelectorAll("li");
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        (card as HTMLElement).offsetLeft - carousel.scrollLeft,
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [i18n.language]);

  const getCardStep = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return 0;
    }

    const cards = carousel.querySelectorAll("li");
    const firstCard = cards[0];
    const secondCard = cards[1];
    const cardWidth =
      firstCard?.getBoundingClientRect().width ?? carousel.clientWidth * 0.45;
    const gap =
      firstCard && secondCard
        ? secondCard.getBoundingClientRect().left -
          firstCard.getBoundingClientRect().right
        : 0;

    return cardWidth + gap;
  };

  const scrollByCard = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const delta = getCardStep();

    carousel.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelectorAll("li")[index] as
      | HTMLElement
      | undefined;

    if (!carousel || !card) {
      return;
    }

    carousel.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <SelectedTrackSectionElement
      key={i18n.language}
      aria-label={t("pages.home.selectedTrack.title")}
    >
      {showBackground ? (
        <SelectedTrackBgElement src={blueprintBg} alt="" aria-hidden />
      ) : null}

      <SelectedTrackInnerElement>
        <SelectedTrackHeaderElement>
          <SelectedTrackHeaderTopElement>
            <SelectedTrackHeadingGroupElement>
              <SelectedTrackTitleElement>
                {t("pages.home.selectedTrack.title")}
              </SelectedTrackTitleElement>
            </SelectedTrackHeadingGroupElement>

            <SelectedTrackControlsElement>
              <SelectedTrackControlButtonElement
                type="button"
                aria-label={t("pages.home.selectedTrack.prevAria")}
                disabled={!canScrollPrev}
                onClick={() => scrollByCard("prev")}
              >
                <ChevronBackIcon aria-hidden />
              </SelectedTrackControlButtonElement>
              <SelectedTrackControlButtonElement
                type="button"
                aria-label={t("pages.home.selectedTrack.nextAria")}
                disabled={!canScrollNext}
                onClick={() => scrollByCard("next")}
              >
                <ChevronForwardIcon aria-hidden />
              </SelectedTrackControlButtonElement>
            </SelectedTrackControlsElement>
          </SelectedTrackHeaderTopElement>

          <SelectedTrackDescriptionElement>
            {t("pages.home.selectedTrack.description")}
          </SelectedTrackDescriptionElement>
        </SelectedTrackHeaderElement>

        <SelectedTrackCarouselElement ref={carouselRef}>
          {selectedTrackCards.map((card, index) => {
            const cardContent = (
              <>
                <SelectedTrackCardMediaElement
                  src={card.image}
                  alt={t(card.imageAltKey)}
                />
                <SelectedTrackCardBodyElement>
                  <SelectedTrackCardTitleElement>
                    {t(card.titleKey)}
                  </SelectedTrackCardTitleElement>
                  <SelectedTrackCardSubtitleElement>
                    {t(card.subtitleKey)}
                  </SelectedTrackCardSubtitleElement>
                </SelectedTrackCardBodyElement>
              </>
            );

            return (
              <SelectedTrackCardElement key={card.id} $index={index}>
                {linkCards ? (
                  <SelectedTrackCardLinkElement to={localize(card.path)}>
                    {cardContent}
                  </SelectedTrackCardLinkElement>
                ) : (
                  <SelectedTrackCardSurfaceElement>
                    {cardContent}
                  </SelectedTrackCardSurfaceElement>
                )}
              </SelectedTrackCardElement>
            );
          })}
        </SelectedTrackCarouselElement>

        <SelectedTrackDotsElement
          aria-label={t("pages.home.selectedTrack.dotsAria")}
        >
          {selectedTrackCards.map((card, index) => (
            <SelectedTrackDotElement
              key={card.id}
              type="button"
              $active={index === activeIndex}
              aria-label={`${index + 1}`}
              aria-current={index === activeIndex || undefined}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </SelectedTrackDotsElement>
      </SelectedTrackInnerElement>
    </SelectedTrackSectionElement>
  );
};
