import styled, { keyframes } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TeamSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.background.primary};
`;

export const TeamInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding-block: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(5)}`};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(4)}`};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(3.5)}`};
  }
`;

export const TeamTopElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TeamTitleRowElement = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const TeamTitleElement = styled.h2`
  flex: 1;
  min-width: 0;
  width: fit-content;
  max-width: 100%;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;

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
    order: 2;
  }
`;

export const TeamSubtitleElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.35;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const TeamBrandElement = styled.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding-top: ${({ theme }) => theme.spacing(0.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
    padding-top: 0;
  }
`;

export const TeamBrandImageElement = styled.img`
  display: block;
  width: auto;
  max-width: min(42vw, ${({ theme }) => theme.spacing(22)});
  height: ${({ theme }) => theme.spacing(5)};
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: min(55vw, ${({ theme }) => theme.spacing(20)});
    height: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const TeamFeaturedElement = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.background.primary};
`;

export const TeamFeaturedInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3.5)};
  padding-block: ${({ theme }) => theme.spacing(5)};
  padding-inline: ${({ theme }) => theme.spacing(5)};
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
  animation-delay: 100ms;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-inline: ${({ theme }) => theme.spacing(2)};
    padding-block: ${({ theme }) => theme.spacing(4)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TeamEyebrowElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  line-height: 1.2;
`;

export const TeamPrincipalsElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

interface TeamPrincipalItemElementProps {
  $index: number;
}

export const TeamPrincipalItemElement = styled.li<TeamPrincipalItemElementProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  border-left: 2px solid ${({ theme }) => theme.color.text.primary};
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
  animation-delay: ${({ $index }) => `${160 + $index * 90}ms`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TeamPrincipalIndexElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.12em;
  line-height: 1;
`;

export const TeamPrincipalNameElement = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.25;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  }
`;

export const TeamBottomElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  padding-block: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(10)}`};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(8)}`};
    padding-inline: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => `${theme.spacing(3.5)} ${theme.spacing(6)}`};
  }
`;

export const TeamMembersBlockElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
  animation-delay: 180ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TeamMembersListElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => `${theme.spacing(0.25)} ${theme.spacing(5)}`};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

interface TeamMemberItemElementProps {
  $index: number;
}

export const TeamMemberItemElement = styled.li<TeamMemberItemElementProps>`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-block: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.soft};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
  animation: ${fadeUp} ${({ theme }) => theme.transitions.slow} both;
  animation-delay: ${({ $index }) => `${220 + $index * 60}ms`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TeamMemberIndexElement = styled.span`
  flex-shrink: 0;
  min-width: 1.6em;
  color: ${({ theme }) => theme.color.neutral[300]};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.06em;
`;
