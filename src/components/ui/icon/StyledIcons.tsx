import React from "react";
import styled from "styled-components";
import StyledTwittermIcon from "./TwitterIcon";
import StyledInstagramIcon from "./InstagramIcon";

const StyledIconsContainer = () => {
  return (
    <IconsContainer>
      {/* <StyledTwittermIcon /> */}
      <StyledInstagramIcon />
    </IconsContainer>
  );
};

export default StyledIconsContainer;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
