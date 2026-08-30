import type { ComponentType, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@app/router";
import { GlobalStyles } from "@shared/styles/GlobalStyles";
import { theme } from "@shared/theme/Theme";

type AppRouterProps = {
  children: ReactNode;
};

type AppProps = {
  Router?: ComponentType<AppRouterProps>;
};

function App({ Router = BrowserRouter }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
