import styled from "styled-components";
import { Link } from "react-router-dom";
import { pxToRem } from "@shared/utils/styles-utils";

export const NotFoundSectionElement = styled.section`
  display: grid;
  place-items: center;
  min-height: min(70vh, ${pxToRem(640)});
  padding-block: ${pxToRem(80)};
  padding-inline: ${pxToRem(40)};
  text-align: center;
  background:
    radial-gradient(circle at top left, ${({ theme }) => theme.color.neutral[50]} 0%, transparent 45%),
    #ffffff;

  @media (max-width: 767px) {
    padding-block: ${pxToRem(64)};
    padding-inline: ${pxToRem(16)};
  }
`;

export const NotFoundInnerElement = styled.div`
  max-width: ${pxToRem(560)};
`;

export const NotFoundCodeElement = styled.p`
  margin: 0 0 ${pxToRem(12)};
  color: ${({ theme }) => theme.color.neutral[300]};
  font-size: ${pxToRem(14)};
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const NotFoundTitleElement = styled.h1`
  margin: 0 0 ${pxToRem(12)};
  color: ${({ theme }) => theme.color.neutral[900]};
  font-size: clamp(${pxToRem(28)}, 4vw, ${pxToRem(40)});
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
`;

export const NotFoundTextElement = styled.p`
  margin: 0 0 ${pxToRem(28)};
  color: ${({ theme }) => theme.color.neutral[400]};
  font-size: ${pxToRem(16)};
  line-height: 1.55;
`;

export const NotFoundCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(44)};
  padding: ${pxToRem(12)} ${pxToRem(20)};
  background: ${({ theme }) => theme.color.neutral[900]};
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.neutral[600]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.neutral[900]};
    outline-offset: 3px;
  }
`;
