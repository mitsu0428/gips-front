import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CustomSimpleLayout from "../../Tsumugi/Layout/CustomSimpleHeader/CustomSimpleHeader";
import CustomInstagramIcon from "../../Tsumugi/Icon/CustomInstagramIcon/CustomInsgaramIcon";

function GipsHeader() {
  return (
    <CustomSimpleLayout flexdirection="row">
      <LogoWrapper>
        <StyledImage
          src="/gips-logo/gips-logo.jpg"
          width={50}
          height={50}
          alt={""}
        />
      </LogoWrapper>
      <CustomInstagramIcon instagramUrl="https://www.instagram.com/gips_original/" />
    </CustomSimpleLayout>
  );
}

export default GipsHeader;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;
