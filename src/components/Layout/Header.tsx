import React from "react";
import styled from "styled-components";
import StyledIconsContainer from "../ui/icon/StyledIcons";

function StyledHeader() {
  return (
    <Header>
      <HeaderText>GIPs公式サイト</HeaderText>
      <StyledIconsContainer />
    </Header>
  );
}

export default StyledHeader;

const Header = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 1.5em;
  text-align: center;
`;
