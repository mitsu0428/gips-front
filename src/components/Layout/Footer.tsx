import React from "react";
import styled from "styled-components";

function StyledFooter() {
  return <Footer>© 2023 GIPs</Footer>;
}

export default StyledFooter;

const Footer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;
