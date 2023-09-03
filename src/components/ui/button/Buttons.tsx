import React from "react";
import styled from "styled-components";

type Props = {
  buttonActions: { buttonText: string; onClick: () => void }[];
};

function StyledButtons({ buttonActions }: Props) {
  return (
    <ButtonContainer>
      {buttonActions.map((buttonAction, index) => (
        <Button
          key={index}
          onClick={buttonAction.onClick}
        >
          {buttonAction.buttonText}
        </Button>
      ))}
    </ButtonContainer>
  );
}
export default StyledButtons;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Button = styled.button`
  background-color: #c4807d;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  margin-top: 16px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  &:hover {
    background-color: #c4807d;
  }
`;
