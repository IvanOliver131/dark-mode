import { DefaultTheme } from "styled-components";

import fight from "../../assets/fight.gif";
import rest from "../../assets/rest.gif";
import { CardContainer, HomeContainer } from "./styles";

interface HomeProps {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

function Home({ toggleTheme, theme }: HomeProps) {
  return (
    <HomeContainer>
      {theme.theme === "dark" ? (
        <CardContainer>
          <button onClick={toggleTheme}>fight</button>
          <img src={rest}></img>
        </CardContainer>
      ) : (
        <CardContainer>
          <button onClick={toggleTheme}>rest</button>
          <img src={fight}></img>
        </CardContainer>
      )}
    </HomeContainer>
  );
}

export { Home };
