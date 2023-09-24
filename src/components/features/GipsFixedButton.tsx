import React from "react";
import styled from "styled-components";
import CustomSimpleButton from "../Tumugi/Button/CustomSimpleButton/CustomSimpleButton";

function GipsFixedButton() {
  const onClickToBaseShop = () => {
    window.open("https://gips.base.shop/items/78026928");
  };
  return (
    <FixedButtonWrapper>
      <CustomSimpleButton
        key="1"
        onClick={onClickToBaseShop}
        buttonText="Base Shopで購入する"
      />
    </FixedButtonWrapper>
  );
}

export default GipsFixedButton;

const FixedButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 16px;
`;
