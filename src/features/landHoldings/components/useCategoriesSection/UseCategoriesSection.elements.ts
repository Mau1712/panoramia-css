import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const UseCategoriesSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.background.primary};
`;

export const UseCategoriesInnerElement = styled(SectionContainer)``;

export const UseCategoriesStackElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
  }
`;

export const UseCategoriesListElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing(1.5)};
  }
`;

interface UseCategoriesRevealProps {
  $visible: boolean;
  $delayMs?: number;
}

export const UseCategoriesItemElement = styled.li<UseCategoriesRevealProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "16px")});
  transition:
    opacity ${({ theme }) => theme.transitions.slow},
    transform ${({ theme }) => theme.transitions.slow};
  transition-delay: ${({ $delayMs = 0 }) => `${$delayMs}ms`};

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const UseCategoriesIconWrapElement = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.text.primary};

  svg {
    width: ${({ theme }) => theme.spacing(9)};
    height: ${({ theme }) => theme.spacing(9)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    svg {
      width: ${({ theme }) => theme.spacing(7)};
      height: ${({ theme }) => theme.spacing(7)};
    }
  }
`;

export const UseCategoriesLabelElement = styled.h3`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.16em;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    letter-spacing: 0.08em;
  }
`;
