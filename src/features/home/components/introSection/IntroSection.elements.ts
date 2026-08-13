import styled, { keyframes } from "styled-components";

const premiumSheen = keyframes`
  0% {
    transform: translateX(-130%) skewX(-18deg);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  55% {
    transform: translateX(130%) skewX(-18deg);
    opacity: 0;
  }
  100% {
    transform: translateX(130%) skewX(-18deg);
    opacity: 0;
  }
`;

export const IntroSectionElement = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(2.5)}`};
  background: ${({ theme }) => theme.color.background.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(2)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(2)}`};
  }
`;

export const IntroSectionWatermarkElement = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse 55% 70% at 8% 30%,
      ${({ theme }) => theme.color.neutral[100]} 0%,
      transparent 68%
    ),
    radial-gradient(
      ellipse 50% 60% at 96% 75%,
      ${({ theme }) => theme.color.neutral[100]} 0%,
      transparent 65%
    ),
    radial-gradient(
      circle at 72% 18%,
      ${({ theme }) => theme.color.neutral[50]} 0%,
      transparent 42%
    );
`;

export const IntroSectionSheenElement = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 45%;
    background: linear-gradient(
      105deg,
      transparent 0%,
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0.45) 48%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0.45) 52%,
      rgba(255, 255, 255, 0) 65%,
      transparent 100%
    );
    transform: translateX(-130%) skewX(-18deg);
    animation: ${premiumSheen} 5s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
      opacity: 0;
    }
  }
`;

export const IntroSectionTextElement = styled.p`
  position: relative;
  z-index: 1;
  max-width: 92ch;
  margin-inline: auto;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.6;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;
