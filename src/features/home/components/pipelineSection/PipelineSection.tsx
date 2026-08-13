import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronBackIcon, ChevronForwardIcon } from "@assets/icons";
import { pipelineCards } from "../../data";
import {
  PipelineCardBodyElement,
  PipelineCardElement,
  PipelineCardLinkElement,
  PipelineCardMediaElement,
  PipelineCardSubtitleElement,
  PipelineCardTitleElement,
  PipelineCarouselElement,
  PipelineControlButtonElement,
  PipelineControlsElement,
  PipelineDescriptionElement,
  PipelineDotElement,
  PipelineDotsElement,
  PipelineHeaderElement,
  PipelineHeaderTopElement,
  PipelineHeadingGroupElement,
  PipelineInnerElement,
  PipelineSectionElement,
  PipelineSubtitleElement,
  PipelineTitleElement,
} from "./PipelineSection.elements";

export const PipelineSection = () => {
  const { t, i18n } = useTranslation("common");
  const carouselRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
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
    <PipelineSectionElement
      key={i18n.language}
      aria-label={t("pages.home.pipeline.title")}
    >
      <PipelineInnerElement>
        <PipelineHeaderElement>
          <PipelineHeaderTopElement>
            <PipelineHeadingGroupElement>
              <PipelineTitleElement>
                {t("pages.home.pipeline.title")}
              </PipelineTitleElement>
              <PipelineSubtitleElement>
                {t("pages.home.pipeline.subtitle")}
              </PipelineSubtitleElement>
            </PipelineHeadingGroupElement>

            <PipelineControlsElement>
              <PipelineControlButtonElement
                type="button"
                aria-label={t("pages.home.pipeline.prevAria")}
                disabled={!canScrollPrev}
                onClick={() => scrollByCard("prev")}
              >
                <ChevronBackIcon aria-hidden />
              </PipelineControlButtonElement>
              <PipelineControlButtonElement
                type="button"
                aria-label={t("pages.home.pipeline.nextAria")}
                disabled={!canScrollNext}
                onClick={() => scrollByCard("next")}
              >
                <ChevronForwardIcon aria-hidden />
              </PipelineControlButtonElement>
            </PipelineControlsElement>
          </PipelineHeaderTopElement>

          <PipelineDescriptionElement>
            {t("pages.home.pipeline.description")}
          </PipelineDescriptionElement>
        </PipelineHeaderElement>

        <PipelineCarouselElement ref={carouselRef}>
          {pipelineCards.map((card, index) => (
            <PipelineCardElement key={card.id} $index={index}>
              <PipelineCardLinkElement to={card.to}>
                <PipelineCardMediaElement
                  src={card.image}
                  alt={t(card.imageAltKey)}
                />
                <PipelineCardBodyElement>
                  <PipelineCardTitleElement>
                    {t(card.titleKey)}
                  </PipelineCardTitleElement>
                  <PipelineCardSubtitleElement>
                    {t(card.subtitleKey)}
                  </PipelineCardSubtitleElement>
                </PipelineCardBodyElement>
              </PipelineCardLinkElement>
            </PipelineCardElement>
          ))}
        </PipelineCarouselElement>

        <PipelineDotsElement aria-label={t("pages.home.pipeline.dotsAria")}>
          {pipelineCards.map((card, index) => (
            <PipelineDotElement
              key={card.id}
              type="button"
              $active={index === activeIndex}
              aria-label={`${index + 1}`}
              aria-current={index === activeIndex || undefined}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </PipelineDotsElement>
      </PipelineInnerElement>
    </PipelineSectionElement>
  );
};
