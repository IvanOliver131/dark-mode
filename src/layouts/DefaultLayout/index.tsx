import { Outlet } from "react-router-dom";

import { Container } from "./styles";

function DefaultLayout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export { DefaultLayout };
