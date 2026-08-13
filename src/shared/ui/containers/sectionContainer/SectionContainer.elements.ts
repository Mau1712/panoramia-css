import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const SectionContainerElement = styled.div`
  width: 100%;
  max-width: ${pxToRem(1280)};
  margin-inline: auto;
`;
