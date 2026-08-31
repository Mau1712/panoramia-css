import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const PrivacyPageElement = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.color.background.primary};
`;

export const PrivacyInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const PrivacyHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  max-width: 44rem;
`;

export const PrivacyTitleElement = styled.h1`
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.1;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 3px;
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  }
`;

export const PrivacyUpdatedElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

export const PrivacyIntroElement = styled.p`
  max-width: 44rem;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.65;
`;

export const PrivacySectionElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.25)};
  max-width: 44rem;
`;

export const PrivacySectionTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.3;
`;

export const PrivacyTextElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.65;
`;

export const PrivacyListElement = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.65;
`;

export const PrivacyMailLinkElement = styled.a`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  text-decoration: underline;
  text-underline-offset: 0.15em;

  &:hover {
    opacity: 0.75;
  }
`;

export const PrivacyBackLinkElement = styled(Link)`
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  text-decoration: underline;
  text-underline-offset: 0.15em;

  &:hover {
    opacity: 0.75;
  }
`;
