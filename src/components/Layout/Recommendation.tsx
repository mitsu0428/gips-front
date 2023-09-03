import React from "react";
import styled from "styled-components";
import StyledText from "../ui/Text";

function StyledRecommendationn() {
  return (
    <Recommendationn>
      <StyledText text="ストレス社会と言われている現代。" />
      <StyledText text="仕事・育児・人間関係その他沢山の不安、" />
      <StyledText text="ストレスを抱えて過ごしている皆様の側に寄り添いたい。" />
      <StyledText text="豊かな毎日を過ごして欲しい。" />
      <StyledText text="そんな想いからふぃるぐは作られました。" />
    </Recommendationn>
  );
}

export default StyledRecommendationn;

const Recommendationn = styled.div`
  background-color: #cccccc;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  padding: 16px;
`;
