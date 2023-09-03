import React from "react";
import styled from "styled-components";
import Image from "next/image";

type Props = {
  text: string;
  imgPath: string;
  width?: number;
  height?: number;
};

function TextWithCirclePicture({ text, imgPath, width, height }: Props) {
  return (
    <CirclePictureContainer>
      <CirclePicture
        src={imgPath}
        width={width ? width : 200}
        height={height ? height : 200}
        alt="circle picture"
      />
      <Text>{text}</Text>
    </CirclePictureContainer>
  );
}

export default TextWithCirclePicture;

const CirclePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CirclePicture = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Text = styled.p`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
`;
