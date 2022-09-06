import { BrowserRouter } from "react-router-dom";

import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "./hooks/usePersistedState";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    lightTheme
  );

  function toggleTheme() {
    setTheme(theme.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router toggleTheme={toggleTheme} theme={theme} />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
