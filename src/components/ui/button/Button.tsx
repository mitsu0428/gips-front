import React from "react";
import styled from "styled-components";

type Props = {
  buttonText: string;
  onClick?: () => void;
};

function StyledButton({ buttonText, onClick }: Props) {
  return <Button onClick={onClick}>{buttonText}</Button>;
}

export default StyledButton;

const Button = styled.button`
  background-color: #c4807d;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  margin-top: 16px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  &:hover {
    background-color: #c4807d;
  }
`;
