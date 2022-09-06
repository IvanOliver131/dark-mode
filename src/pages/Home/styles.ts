import styled from "styled-components";

import { darken } from "polished";

export const HomeContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border: 1rem solid ${(props) => props.theme.text};
  }

  button {
    padding: 1rem;
    margin: 1rem;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.text};
    font-weight: bold;
    border-radius: 0.25rem;
    text-transform: uppercase;

    &:hover {
      background: ${(props) => darken(0.1, props.theme.text)};
    }
  }

  @media (max-width: 1120px) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`;
