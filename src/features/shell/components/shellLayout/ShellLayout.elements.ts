import styled from "styled-components";

export const ShellLayoutElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
`;

export const ShellContentElement = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  /* Match fixed header: vertical padding + logo height */
  padding-top: ${({ theme }) =>
    `calc(${theme.spacing(3)} * 2 + ${theme.spacing(4.5)})`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-top: ${({ theme }) =>
      `calc(${theme.spacing(2)} * 2 + ${theme.spacing(4)})`};
  }

  /* Clear fixed WhatsApp FAB on mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: calc(
      ${({ theme }) => theme.spacing(6.5)} + ${({ theme }) => theme.spacing(2)} +
        ${({ theme }) => theme.spacing(2)} + env(safe-area-inset-bottom, 0px)
    );
  }
`;
