import React from "react";
import styled from "styled-components";

import GipsHeader from "@/components/features/Layout/GipsHeader";
import GipsDescription from "../features/GipsDescription";
import GipsConcepts from "../features/GipsConcepts";
import GipsFixedButton from "../features/GipsFixedButton";

import CustomSimpleButton from "../Tumugi/Button/CustomSimpleButton/CustomSimpleButton";
import CustomImage from "../Tumugi/Image/CustomImage/CustomImage";
import CustomSimpleFooter from "../Tumugi/Layout/CustomSimpleFooter/CustomSimpleFooter";
import CustomWrapperWithoutShadow from "../Tumugi/Wrapper/CustomWrapperWithoutShadow/CustomWrapperWithoutShadow";
import CustomSubtitle from "../Tumugi/Text/CustomSubText/CustomSubtitle";
import GipsOrder from "../features/GipsOrder";
import font from "../Tumugi/Font/NextFont";

function MainPage() {
  const onClickToBaseShop = () => {
    window.open("https://gips.base.shop/items/78026928");
  };

  return (
    <Main className={font.notoSansJP700.className}>
      <GipsHeader />

      <CustomWrapperWithoutShadow>
        <CustomImage
          text="G.I.Ps"
          imgPath="/gips-images/フィルグ-0.PNG"
          alt="G.I.Ps"
          width={400}
          height={400}
        />
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
        <CustomSubtitle text="あなたの毎日が豊かな毎日になりますように。" />
      </CustomWrapperWithoutShadow>

      <CustomWrapperWithoutShadow>
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
