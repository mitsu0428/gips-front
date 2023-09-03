import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

const StyledTwittermIcon = () => {
  return <TwittermIcon />;
};

export default StyledTwittermIcon;

const TwittermIcon = styled(FaTwitter)`
  color: #fff;
  font-size: 1.5em;
  margin-left: 16px;
  &:hover {
    color: #c13584;
  }
`;
