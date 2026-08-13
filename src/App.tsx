import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@app/router";
import { GlobalStyles } from "@shared/styles/GlobalStyles";
import { theme } from "@shared/theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
