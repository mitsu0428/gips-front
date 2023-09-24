import React from "react";
import styled from "styled-components";

import GipsHeader from "@/components/features/Layout/GipsHeader";
import GipsDescription from "../features/GipsDescription";
import GipsConcepts from "../features/GipsConcepts";
import GipsFixedButton from "../features/GipsFixedButton";

import font from "../Tumugi/Font/NextFont";
import CustomSimpleButton from "../Tumugi/Button/CustomSimpleButton/CustomSimpleButton";
import CustomImage from "../Tumugi/Image/CustomImage/CustomImage";
import CustomSimpleFooter from "../Tumugi/Layout/CustomSimpleFooter/CustomSimpleFooter";
import CustomWrapperWithShadow from "../Tumugi/Wrapper/CustomWrapperWithShadow/CustomWrapperWithShadow";
import CustomWrapperWithoutShadow from "../Tumugi/Wrapper/CustomWrapperWithoutShadow/CustomWrapperWithoutShadow";
import CustomSubtitle from "../Tumugi/Text/CustomSubText/CustomSubtitle";
import GipsOrder from "../features/GipsOrder";

function MainPage() {
  const onClickToBaseShop = () => {
    window.open("https://gips.base.shop/items/78026928");
  };

  return (
    <Main className={font.notoSansJP700.className}>
      <GipsHeader />

      <CustomWrapperWithShadow>
        <CustomImage
          text="G.I.Ps"
          imgPath="/gips-images/フィルグ-0.PNG"
          alt="G.I.Ps"
          width={400}
          height={400}
        />
      </CustomWrapperWithShadow>

      <CustomWrapperWithoutShadow>
        <CustomSubtitle text="『あなたの毎日が豊かな毎日になりますように。』" />
        <CenterWrapper>
          <CustomSimpleButton
            key="1"
            buttonText="オンラインショップを見る"
            onClick={onClickToBaseShop}
          />
        </CenterWrapper>
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
        <CustomSubtitle text="コンセプト" />
        <GipsConcepts />
      </CustomWrapperWithoutShadow>

      <GipsFixedButton />

      <CustomWrapperWithoutShadow>
        <CustomSimpleButton
          key="1"
          buttonText="Base Shopで購入する"
          onClick={onClickToBaseShop}
        />
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
        <CustomSubtitle text="注文までの流れ" />
        <GipsOrder />
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
