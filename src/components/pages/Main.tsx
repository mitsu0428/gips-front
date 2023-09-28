import React from "react";
import styled from "styled-components";

import GipsHeader from "@/components/features/Layout/GipsHeader";
import GipsDescription from "../features/GipsDescription";
import GipsConcepts from "../features/GipsConcepts";
import GipsFixedButton from "../features/GipsFixedButton";
import GipsOrder from "../features/GipsOrder";

import font from "../Tsumugi/Font/NextFont";
import CustomSimpleButton from "../Tsumugi/Button/CustomSimpleButton/CustomSimpleButton";
import CustomSimpleFooter from "../Tsumugi/Layout/CustomSimpleFooter/CustomSimpleFooter";
import CustomImageWrapper from "../Tsumugi/Image/CustomImage/CustomImageWrapper";
import CustomWrapperWithoutShadow from "../Tsumugi/Wrapper/CustomWrapperWithoutShadow/CustomWrapperWithoutShadow";
import CustomBoldText from "../Tsumugi/Text/CustomBoldText/CustomBoldText";
import CustomSubtitle from "../Tsumugi/Text/CustomSubText/CustomSubtitle";

function MainPage() {
  const onClickToBaseShop = () => {
    window.open("https://gips.base.shop/items/78026928");
  };

  return (
    <Main className={font.notoSansJP400.className}>
      <GipsHeader />
      <GipsFixedButton />

      <CustomWrapperWithoutShadow>
        <CustomImageWrapper
          imgPath="/gips-images/a-top.png"
          alt="G.I.Ps"
          width={800}
          height={800}
        />
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
        <GipsConcepts />
        <CenterWrapper>
          <CustomSimpleButton
            key="1"
            buttonText="オンラインショップを見る"
            onClick={onClickToBaseShop}
          />
        </CenterWrapper>
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
        <CustomSubtitle text="注文までの流れ" />
        <GipsOrder />
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
        <CustomBoldText text="商品イメージ" />
        <CustomImageWrapper
          imgPath="/gips-images/a-concept.png"
          alt="ふぃるぐ商品イメージ"
          width={400}
          height={400}
        />
        <CenterWrapper>
          <CustomSimpleButton
            key="1"
            buttonText="Base Shopで購入する"
            onClick={onClickToBaseShop}
          />
        </CenterWrapper>
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
        <CustomSubtitle text="商品にかける想い" />
        <GipsDescription />
      </CustomWrapperWithoutShadow>

      <CustomSimpleFooter text="© 2023 GIPs" />
    </Main>
  );
}

export default MainPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
