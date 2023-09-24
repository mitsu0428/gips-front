import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  flexDirection?: string;
};

const CustomSimpleLayout: React.FC<Props> = ({
  children,
  flexDirection = "column",
}) => {
  return <Layout flexDirection={flexDirection}>{children}</Layout>;
};

export default CustomSimpleLayout;

const Layout = styled.div<{ flexDirection: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;
