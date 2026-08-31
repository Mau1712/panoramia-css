import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const SiteFooterElement = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const SiteFooterInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding-block: ${({ theme }) => theme.spacing(8)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }
`;

export const SiteFooterBrandElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: fit-content;
`;

export const SiteFooterLogoElement = styled.img`
  display: block;
  width: auto;
  height: ${({ theme }) => theme.spacing(4.5)};
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SiteFooterGridElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1.15fr) minmax(0, 0.9fr);
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(3.5)};
    justify-items: center;
  }
`;

export const SiteFooterColumnElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const SiteFooterHeadingElement = styled.h3`
  width: fit-content;
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 2.25ch;
    height: 2px;
    margin-top: ${({ theme }) => theme.spacing(1)};
    background: currentColor;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::after {
      margin-inline: auto;
    }
  }
`;

export const SiteFooterTextElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.55;
  max-width: 32ch;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 36ch;
  }
`;

export const SiteFooterLinkElement = styled.a`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.55;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.background.primary};
  }
`;

export const SiteFooterPhoneListElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const SiteFooterSitemapElement = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const SiteFooterNavLinkElement = styled(Link)`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.background.primary};
  }
`;

export const SiteFooterBottomElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(3)};
  border-top: 1px solid ${({ theme }) => theme.color.neutral[700]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const SiteFooterSocialElement = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const SiteFooterSocialLinkElement = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.color.neutral[300]};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1;
  transition: color ${({ theme }) => theme.transitions.fast};

  svg {
    font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  }

  &:hover {
    color: ${({ theme }) => theme.color.background.primary};
  }
`;

export const SiteFooterRightsElement = styled.p`
  color: ${({ theme }) => theme.color.neutral[300]};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;

export const SiteFooterLegalElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const SiteFooterPrivacyLinkElement = styled(Link)`
  color: ${({ theme }) => theme.color.neutral[300]};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: underline;
  text-underline-offset: 0.15em;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.background.primary};
  }
`;
