import React from "react";
import styled from "styled-components";
import CustomCenterText from "../Tsumugi/Text/CustomText/CustomCenterText";

function GipsConcepts() {
  return (
    <Recommendationn>
      <CustomCenterText text="ストレス社会と言われている現代。" />
      <CustomCenterText text="仕事・育児・人間関係その他沢山の不安、" />
      <CustomCenterText text="ストレスを抱えて過ごしている皆様の側に寄り添いたい。" />
      <CustomCenterText text="豊かな毎日を過ごして欲しい。" />
      <CustomCenterText text="そんな想いからふぃるぐは作られました。" />
    </Recommendationn>
  );
}

export default GipsConcepts;

const Recommendationn = styled.div`
  background-color: #cccccc;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  padding: 16px;
`;
