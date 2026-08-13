import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const ContactSectionElement = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.background.primary};
`;

export const ContactInnerElement = styled(SectionContainer)``;

export const ContactStackElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(10)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(8)};
    padding-inline: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
    gap: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const ContactHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  max-width: 40rem;
`;

export const ContactTitleElement = styled.h1`
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

export const ContactIntroElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.6;
`;

export const ContactGridElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const ContactInfoListElement = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  list-style: none;
`;

export const ContactInfoItemElement = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: start;
  padding: ${({ theme }) => theme.spacing(2.5)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  background: ${({ theme }) => theme.color.background.secondary};
`;

export const ContactInfoIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.color.text.primary};

  svg {
    width: ${({ theme }) => theme.spacing(3)};
    height: ${({ theme }) => theme.spacing(3)};
  }
`;

export const ContactInfoCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-width: 0;
`;

export const ContactInfoLabelElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ContactInfoValueElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1.5)}`};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.45;
`;

export const ContactInfoLinkElement = styled.a`
  color: inherit;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }
`;

export const ContactFormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3.5)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  background: ${({ theme }) => theme.color.background.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const ContactFormTitleElement = styled.h2`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

export const ContactFieldElement = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
`;

export const ContactFieldLabelElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const fieldControlStyles = css`
  width: 100%;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color.border.field};
  background: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.45;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const ContactInputElement = styled.input`
  ${fieldControlStyles}
  min-height: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2)}`};
`;

export const ContactTextareaElement = styled.textarea`
  ${fieldControlStyles}
  min-height: ${({ theme }) => theme.spacing(18)};
  padding: ${({ theme }) => theme.spacing(2)};
  resize: vertical;
`;

export const ContactSubmitElement = styled.button`
  align-self: flex-start;
  margin-top: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(3.5)}`};
  border: 1px solid ${({ theme }) => theme.color.text.primary};
  background: ${({ theme }) => theme.color.text.primary};
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    background: transparent;
    color: ${({ theme }) => theme.color.text.primary};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`;

export const ContactFormStatusElement = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.45;
`;

export const ContactMapWrapElement = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  background: ${({ theme }) => theme.color.background.secondary};
  aspect-ratio: 21 / 9;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 4 / 3;
  }
`;

export const ContactMapElement = styled.iframe`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
`;
