import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

const StyledInstagramIcon = () => {
  return <InstagramIcon />;
};

export default StyledInstagramIcon;

const InstagramIcon = styled(FaInstagram)`
  color: #fff;
  font-size: 1.5em;
  margin-left: 16px;
  &:hover {
    color: #c13584;
  }
`;
