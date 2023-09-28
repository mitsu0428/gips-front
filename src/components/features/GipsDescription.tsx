import React from "react";
import styled from "styled-components";
import CustomText from "../Tsumugi/Text/CustomText/CustomText";

function GipsDescription() {
  return (
    <Description>
      <CustomText text="心身をリラックスし不眠を解消したい、集中力・記憶力を高めたい。" />
      <CustomText text="健康な生活にはトリプトファンが重要に関わっています。" />
      <CustomText text="トリプトファンは乳製品、大豆製品、ナッツ類などの様々な食品中のたんぱく質に多く含まれます。" />
      <CustomText text="トリプトファンはセロトニンからメラトニンに変わっていきます。" />
      <CustomText text="セロトニンは幸せホルモンと言われていますね。" />
      <CustomText text="ビタミンB6はトリプトファンをセロトニンに変える栄養素として必要です。" />
      <CustomText text="メラトニンは睡眠の質を高め、自律神経を正常にします。" />
      <CustomText text="またそのトリプトファンが不足するとセロトニンの分泌低下が起こり、" />
      <CustomText text="不眠、不安感、うつ病、意識の低下などの症状に繋がります。" />
      <CustomText text="ふぃるぐは幸せホルモン(セロトニン)に必要とされている成分を" />
      <CustomText text="手軽に補給してもらう為に作られました。" />
      <CustomText text="あなたの毎日が豊かな毎日になりますように。" />
      <CustomText text="願いを込めて。" />
    </Description>
  );
}

export default GipsDescription;

const Description = styled.div`
  background-color: #cccccc;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  padding: 16px;
  margin-top: 16px;
`;
