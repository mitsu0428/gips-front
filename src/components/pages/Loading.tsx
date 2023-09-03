import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Main>
      <div></div>
    </Main>
  );
}

export default Loading;

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;
