import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

function StyledText({ text }: Props) {
  return <Text>{text}</Text>;
}

export default StyledText;

const Text = styled.p`
  font-size: 18px;
  margin-top: 16px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
