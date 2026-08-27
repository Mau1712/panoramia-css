import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const WhatsAppFabElement = styled.a`
  display: none;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    right: ${({ theme }) => theme.spacing(2)};
    bottom: ${({ theme }) => theme.spacing(2)};
    z-index: ${({ theme }) => theme.zIndex.floating};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.spacing(6.5)};
    height: ${({ theme }) => theme.spacing(6.5)};
    margin: 0;
    padding: 0;
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme }) => theme.color.text.primary};
    color: ${({ theme }) => theme.color.background.primary};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    cursor: pointer;
    animation: ${fadeIn} ${({ theme }) => theme.transitions.slow} both;
    transition:
      transform ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast},
      background ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast};

    svg {
      width: ${({ theme }) => theme.spacing(3.5)};
      height: ${({ theme }) => theme.spacing(3.5)};
    }

    &:hover,
    &:focus-visible {
      background: ${({ theme }) => theme.color.neutral[700]};
      transform: translateY(-2px) scale(1.04);
      box-shadow: ${({ theme }) => theme.shadows.large};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.text.primary};
      outline-offset: 3px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) and (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;

    &:hover,
    &:focus-visible {
      transform: none;
    }
  }
`;
