import React from "react";
import styled from "styled-components";
import StyledText from "../ui/Text";

function StyledDescription() {
  return (
    <Description>
      <StyledText text="心身をリラックスし不眠を解消したい、集中力・記憶力を高めたい。" />
      <StyledText text="健康な生活にはトリプトファンが重要に関わっています。" />
      <StyledText text="トリプトファンは乳製品、大豆製品、ナッツ類などの様々な食品中のたんぱく質に多く含まれます。" />
      <StyledText text="トリプトファンはセロトニンからメラトニンに変わっていきます。" />
      <StyledText text="セロトニンは幸せホルモンと言われていますね。" />
      <StyledText text="ビタミンB6はトリプトファンをセロトニンに変える栄養素として必要です。" />
      <StyledText text="メラトニンは睡眠の質を高め、自律神経を正常にします。" />
      <StyledText text="またそのトリプトファンが不足するとセロトニンの分泌低下が起こり、" />
      <StyledText text="不眠、不安感、うつ病、意識の低下などの症状に繋がります。" />
      <StyledText text="ふぃるぐは幸せホルモン(セロトニン)に必要とされている成分を" />
      <StyledText text="手軽に補給してもらう為に作られました。" />
      <StyledText text="あなたの毎日が豊かな毎日になりますように。" />
      <StyledText text="願いを込めて。" />
    </Description>
  );
}

export default StyledDescription;

const Description = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  line-height: 2;
  background-color: #cccccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
