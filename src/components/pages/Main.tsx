import React from "react";
import styled from "styled-components";
import StyledContainer from "@/components/ui/Container";
import StyledButton from "@/components/ui/button/Button";
import StyledText from "@/components/ui/Text";
import StyledFooter from "@/components/Layout/Footer";
import StyledHeader from "@/components/Layout/Header";
import TextWithCirclePicture from "../ui/image/CirclePicture";
import StyledButtons from "../ui/button/Buttons";
import StyledDescription from "../Layout/Description";
import StyledRecommendationn from "../Layout/Recommendation";

function MainPage() {
  const onClickToBaseShop = () => {
    window.open("https://gips.base.shop/items/78026928");
  };

  return (
    <Main>
      <StyledHeader />

      <StyledContainer>
        <TextWithCirclePicture
          text="GIPS"
          width={400}
          height={400}
          imgPath="/gips-images/フィルグ-0.PNG"
        />
      </StyledContainer>

      <StyledContainer>
        <StyledRecommendationn />
      </StyledContainer>

      <StyledContainer>
        <StyledText text="あなたの毎日が豊かな毎日になりますように。" />
      </StyledContainer>

      <StyledContainer>
        <StyledButton
          buttonText="Base Shopで購入する"
          onClick={onClickToBaseShop}
        />
      </StyledContainer>

      <StyledContainer>
        <StyledDescription />
      </StyledContainer>

      <StyledFooter />
    </Main>
  );
}

export default MainPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;
