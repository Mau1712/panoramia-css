import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

*::before,
*::after {
    box-sizing: border-box;
}

html {
    height: 100%;
}

#root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100dvh;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    min-width: 0;
    overflow-x: hidden;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100dvh;
    background: ${({ theme }) => theme.color.background.primary};
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
}

h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    color: ${({ theme }) => theme.color.text.primary};
    margin: 0;
    padding: 0;
}

div, p, a, span, ul, li, ol, strong, button, input, textarea, select, option, form, label, legend, fieldset, table, caption, tbody, tfoot, thead, tr, th, td  {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    margin: 0;
    padding: 0;
    text-decoration: none;
}

p, a, span, li, label {
    color: ${({ theme }) => theme.color.text.secondary};
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
`;
