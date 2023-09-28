import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CustomText from "../Tumugi/Text/CustomText/CustomText";

function GipsOrder() {
  return (
    <Wrapper>
      <IconWrapWithText>
        <CustomText text="1. Base Shopで商品を購入する" />
        <Image
          src="/order-icon/カート.png"
          width={50}
          height={50}
          alt={""}
        />
      </IconWrapWithText>
      <IconWrapWithText>
        <CustomText text="2. ご注文後、1週間以内に商品が発送されます。" />
        <Image
          src="/order-icon/配達.png"
          width={50}
          height={50}
          alt={""}
        />
      </IconWrapWithText>
      <IconWrapWithText>
        <CustomText text="3. お届けした商品をお受け取りください。" />
        <Image
          src="/order-icon/受け取り.png"
          width={50}
          height={50}
          alt={""}
        />
      </IconWrapWithText>
    </Wrapper>
  );
}

export default GipsOrder;

const Wrapper = styled.div`
  background-color: #cccccc;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  padding: 32px;
`;

const IconWrapWithText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;
