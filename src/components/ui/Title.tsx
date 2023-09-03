import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

function StyledTitle({ title }: Props) {
  return <Title>{title}</Title>;
}

export default StyledTitle;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-top: 16px;
`;
