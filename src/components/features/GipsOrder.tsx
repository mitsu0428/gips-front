import React from "react";
import styled from "styled-components";
import CustomText from "../Tumugi/Text/CustomText/CustomText";

function GipsOrder() {
  return (
    <Wrapper>
      1. Base Shopで商品を購入する
      <br />
      2. ご注文後、1週間以内に商品が届きます
      <br />
      3. お届けした商品を飲んで頂きます
    </Wrapper>
  );
}

export default GipsOrder;

const Wrapper = styled.div`
  background-color: #cccccc;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  padding: 16px;
`;
