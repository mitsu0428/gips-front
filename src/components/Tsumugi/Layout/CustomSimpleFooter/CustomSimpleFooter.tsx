import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const CustomSimpleFooter: React.FC<Props> = ({ text }) => {
  return <Footer>{text}</Footer>;
};

export default CustomSimpleFooter;

const Footer = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 16px;
`;
