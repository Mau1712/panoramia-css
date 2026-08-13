import "styled-components";
import { theme } from "../theme/Theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: typeof theme.color;
    typography: typeof theme.typography;
    spacing: typeof theme.spacing;
    breakpoints: typeof theme.breakpoints;
    shadows: typeof theme.shadows;
    radii: typeof theme.radii;
    zIndex: typeof theme.zIndex;
    transitions: typeof theme.transitions;
  }
}
