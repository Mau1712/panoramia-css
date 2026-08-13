import styled from "styled-components";

export const SkillsSectionElement = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(5)}`};
  background: ${({ theme }) => theme.color.background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(2)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(2)}`};
  }
`;

export const SkillsGridElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
  }
`;

export const SkillItemElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  text-align: center;
`;

export const SkillIconElement = styled.img`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    width: ${({ theme }) => theme.spacing(8)};
    height: ${({ theme }) => theme.spacing(8)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.spacing(7)};
    height: ${({ theme }) => theme.spacing(7)};
  }
`;

export const SkillValueElement = styled.strong`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.15;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  }
`;

export const SkillDescriptionElement = styled.p`
  max-width: 22ch;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;
