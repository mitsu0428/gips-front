import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  imgPath: string;
  alt: string;
  imageLink?: string;
  width?: number;
  height?: number;
};

function CustomImage({ text, imgPath, alt, imageLink, width, height }: Props) {
  const hasImageLink = imageLink !== undefined;
  return { hasImageLink } ? (
    <CirclePictureContainer>
      <CustomLink href={imageLink ?? ""}>
        <CirclePicture
          src={imgPath}
          alt={alt}
          width={width}
          height={height}
        />
      </CustomLink>
      <Text>{text}</Text>
    </CirclePictureContainer>
  ) : (
    <CirclePictureContainer>
      <CirclePicture
        src={imgPath}
        alt={alt}
        width={width}
        height={height}
      />
      <Text>{text}</Text>
    </CirclePictureContainer>
  );
}

export default CustomImage;

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

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Text = styled.p`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
`;
