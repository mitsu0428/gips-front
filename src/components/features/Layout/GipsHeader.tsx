import React from "react";
import styled from "styled-components";
import CustomSimpleLayout from "../../Tumugi/Layout/CustomSimpleHeader/CustomSimpleHeader";
import CustomInstagramIcon from "../../Tumugi/Icon/CustomInstagramIcon/CustomInsgaramIcon";

function GipsHeader() {
  return (
    <CustomSimpleLayout flexDirection="row">
      <HeaderText>G.I.Ps</HeaderText>
      <CustomInstagramIcon instagramUrl="https://www.instagram.com/gips_original/" />
    </CustomSimpleLayout>
  );
}

export default GipsHeader;

const HeaderText = styled.h1`
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
