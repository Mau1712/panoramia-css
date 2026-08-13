import styled from "styled-components";

interface GlobalContainerElementProps {
  $bg?: string;
  $bgImage?: string;
  $fullWidth?: boolean;
}

export const GlobalContainerElement = styled.div<GlobalContainerElementProps>`
  width: 100%;
  ${({ $fullWidth }) => !$fullWidth && `max-width: 1920px;`}
  flex: 1;
  min-height: 0;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  ${({ $bg }) => $bg && `background: ${$bg};`}
  ${({ $bgImage }) =>
    $bgImage &&
    `
        background-image: url(${$bgImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    `}
`;
