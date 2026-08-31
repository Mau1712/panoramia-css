import styled from "styled-components";
import { Link } from "react-router-dom";

export const CookieNoticeElement = styled.aside`
  position: fixed;
  z-index: 60;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2)};
  pointer-events: none;
`;

export const CookieNoticePanelElement = styled.div`
  pointer-events: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  width: min(100%, 52rem);
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  background: ${({ theme }) => theme.color.background.primary};
  box-shadow: 0 -8px 32px rgba(17, 17, 17, 0.1);
`;

export const CookieNoticeCopyElement = styled.p`
  flex: 1 1 16rem;
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

export const CookieNoticeLinkElement = styled(Link)`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  text-decoration: underline;
  text-underline-offset: 0.15em;
`;

export const CookieNoticeActionsElement = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const CookieNoticeButtonElement = styled.button`
  min-height: 2.75rem;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  border: 1px solid ${({ theme }) => theme.color.text.primary};
  background: ${({ theme }) => theme.color.text.primary};
  color: ${({ theme }) => theme.color.background.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: transparent;
    color: ${({ theme }) => theme.color.text.primary};
  }
`;
