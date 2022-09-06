import { Route, Routes } from "react-router-dom";

import { DefaultTheme } from "styled-components";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";

interface RouterProps {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

function Router({ toggleTheme, theme }: RouterProps) {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={<Home toggleTheme={toggleTheme} theme={theme} />}
        />
      </Route>
    </Routes>
  );
}

export { Router };
