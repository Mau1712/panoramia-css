import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  luxuryJourneySteps,
  type LuxuryJourneyStep,
} from "@features/trackRecord/data";
import { useInView } from "@features/trackRecord/hooks/useInView";
import { ImageLightbox } from "@shared/ui/overlays/imageLightbox/ImageLightbox";
import * as S from "./LuxuryJourneySection.elements";

const PAIRED_STEP_IDS = new Set(["step2", "step3"]);

const splitLuxuryTitle = (title: string) => {
  const separator = " | ";
  const separatorIndex = title.indexOf(separator);

  if (separatorIndex === -1) {
    return { eyebrow: null, heading: title };
  }

  return {
    eyebrow: title.slice(0, separatorIndex).trim(),
    heading: title.slice(separatorIndex + separator.length).trim(),
  };
};

const LuxuryJourneyHeading = ({ title }: { title: string }) => {
  const { eyebrow, heading } = splitLuxuryTitle(title);

  return (
    <S.LuxuryJourneyHeadingElement>
      {eyebrow ? (
        <S.LuxuryJourneyEyebrowElement>{eyebrow}</S.LuxuryJourneyEyebrowElement>
      ) : null}
      <S.LuxuryJourneyTitleElement>{heading}</S.LuxuryJourneyTitleElement>
    </S.LuxuryJourneyHeadingElement>
  );
};

const LuxuryJourneyPairHeading = ({ title }: { title: string }) => {
  const { eyebrow, heading } = splitLuxuryTitle(title);

  return (
    <S.LuxuryJourneyHeadingElement>
      {eyebrow ? (
        <S.LuxuryJourneyEyebrowElement>{eyebrow}</S.LuxuryJourneyEyebrowElement>
      ) : null}
      <S.LuxuryJourneyPairTitleElement>{heading}</S.LuxuryJourneyPairTitleElement>
    </S.LuxuryJourneyHeadingElement>
  );
};

const LuxuryJourneyStepBlock = ({
  step,
  index,
  onOpen,
}: {
  step: LuxuryJourneyStep;
  index: number;
  onOpen: (index: number) => void;
}) => {
  const { t } = useTranslation("common");
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.14 });
  const tone = index % 2 === 0 ? "primary" : "secondary";
  const title = t(step.titleKey);

  return (
    <S.LuxuryJourneyStepElement $tone={tone} aria-label={title}>
      <S.LuxuryJourneyInnerElement>
        <S.LuxuryJourneyStackElement ref={ref} $visible={isInView}>
          <LuxuryJourneyHeading title={title} />

          <S.LuxuryJourneyFigureElement>
            <S.LuxuryJourneyMediaElement>
              <S.LuxuryJourneyMediaButtonElement
                type="button"
                aria-label={t(
                  "pages.trackRecord.projects.luxury.journey.openAria",
                  { alt: t(step.imageAltKey) },
                )}
                onClick={() => onOpen(index)}
              >
                <S.LuxuryJourneyImageElement
                  src={step.image}
                  alt={t(step.imageAltKey)}
                  loading="lazy"
                  decoding="async"
                />
              </S.LuxuryJourneyMediaButtonElement>
              <S.LuxuryJourneyMediaHintElement>
                {t("pages.trackRecord.projects.luxury.journey.hint")}
              </S.LuxuryJourneyMediaHintElement>
            </S.LuxuryJourneyMediaElement>

            {step.textKey ? (
              <S.LuxuryJourneyTextElement>
                {t(step.textKey)}
              </S.LuxuryJourneyTextElement>
            ) : null}
          </S.LuxuryJourneyFigureElement>
        </S.LuxuryJourneyStackElement>
      </S.LuxuryJourneyInnerElement>
    </S.LuxuryJourneyStepElement>
  );
};

const LuxuryJourneyPairBlock = ({
  left,
  right,
  leftIndex,
  rightIndex,
  toneIndex,
  onOpen,
}: {
  left: LuxuryJourneyStep;
  right: LuxuryJourneyStep;
  leftIndex: number;
  rightIndex: number;
  toneIndex: number;
  onOpen: (index: number) => void;
}) => {
  const { t } = useTranslation("common");
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.14 });
  const tone = toneIndex % 2 === 0 ? "primary" : "secondary";
  const pair = [
    { step: left, index: leftIndex },
    { step: right, index: rightIndex },
  ];

  return (
    <S.LuxuryJourneyPairBandElement $tone={tone}>
      <S.LuxuryJourneyInnerElement>
        <S.LuxuryJourneyPairGridElement ref={ref}>
          {pair.map(({ step, index }, cardIndex) => (
            <S.LuxuryJourneyPairCardElement
              key={step.id}
              $visible={isInView}
              $delayMs={100 + cardIndex * 80}
              aria-label={t(step.titleKey)}
            >
              <LuxuryJourneyPairHeading title={t(step.titleKey)} />
              <S.LuxuryJourneyFigureElement>
                <S.LuxuryJourneyPairMediaElement>
                  <S.LuxuryJourneyMediaButtonElement
                    type="button"
                    aria-label={t(
                      "pages.trackRecord.projects.luxury.journey.openAria",
                      { alt: t(step.imageAltKey) },
                    )}
                    onClick={() => onOpen(index)}
                  >
                    <S.LuxuryJourneyImageElement
                      src={step.image}
                      alt={t(step.imageAltKey)}
                      loading="lazy"
                      decoding="async"
                    />
                  </S.LuxuryJourneyMediaButtonElement>
                  <S.LuxuryJourneyMediaHintElement>
                    {t("pages.trackRecord.projects.luxury.journey.hint")}
                  </S.LuxuryJourneyMediaHintElement>
                </S.LuxuryJourneyPairMediaElement>
              </S.LuxuryJourneyFigureElement>
            </S.LuxuryJourneyPairCardElement>
          ))}
        </S.LuxuryJourneyPairGridElement>
      </S.LuxuryJourneyInnerElement>
    </S.LuxuryJourneyPairBandElement>
  );
};

interface LuxuryJourneySectionProps {
  steps?: LuxuryJourneyStep[];
  toneOffset?: number;
}

export const LuxuryJourneySection = ({
  steps = luxuryJourneySteps,
  toneOffset = 0,
}: LuxuryJourneySectionProps) => {
  const { t, i18n } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const lightboxImages = steps.map((step) => ({
    src: step.image,
    alt: t(step.imageAltKey),
  }));

  const blocks: ReactNode[] = [];
  let toneCursor = toneOffset;

  for (let index = 0; index < steps.length; index += 1) {
    const step = steps[index];
    const next = steps[index + 1];

    if (
      step.id === "step2" &&
      next?.id === "step3" &&
      PAIRED_STEP_IDS.has(step.id) &&
      PAIRED_STEP_IDS.has(next.id)
    ) {
      blocks.push(
        <LuxuryJourneyPairBlock
          key={`${step.id}-${next.id}`}
          left={step}
          right={next}
          leftIndex={index}
          rightIndex={index + 1}
          toneIndex={toneCursor}
          onOpen={setActiveIndex}
        />,
      );
      toneCursor += 1;
      index += 1;
      continue;
    }

    blocks.push(
      <LuxuryJourneyStepBlock
        key={step.id}
        step={step}
        index={toneCursor}
        onOpen={setActiveIndex}
      />,
    );
    toneCursor += 1;
  }

  return (
    <S.LuxuryJourneySectionElement key={i18n.language}>
      {blocks}

      <ImageLightbox
        images={lightboxImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onActiveIndexChange={setActiveIndex}
        closeAriaLabel={t("lightbox.closeAria")}
        prevAriaLabel={t("lightbox.prevAria")}
        nextAriaLabel={t("lightbox.nextAria")}
        dialogAriaLabel={t("lightbox.dialogAria")}
      />
    </S.LuxuryJourneySectionElement>
  );
};
