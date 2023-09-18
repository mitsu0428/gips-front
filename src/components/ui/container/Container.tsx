import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

function StyledContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

export default StyledContainer;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;
