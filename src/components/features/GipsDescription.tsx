import React from "react";
import styled from "styled-components";

import CustomBr from "../Tsumugi/Divider/CustomBr/CustomBr";
import CustomLeftText from "../Tsumugi/Text/CustomText/CustomLeftText";

function GipsDescription() {
  return (
    <Description>
      <CustomLeftText text="「心身をリラックスし不眠を解消したい。」" />
      <CustomLeftText text="「集中力・記憶力を高めたい。」" />
      <CustomBr />
      <CustomLeftText text="ふぃるぐは幸せホルモンである[セロトニン]に必要とされている成分" />
      <CustomLeftText text="[トリプトファン]や[ビタミンB6]を手軽に補給してもらう為に作られました。" />
      <CustomBr />
      <CustomLeftText text="セロトニンは、幸せホルモンと言われており、" />
      <CustomLeftText text="ビタミンB6は、トリプトファンをセロトニンに変える栄養素として必要です。" />
      <CustomBr />
      <CustomLeftText text="本来、 トリプトファンは、" />
      <CustomLeftText text="乳製品や大豆製品、ナッツ類などの様々な食品中のたんぱく質に多く含まれます。" />
      <CustomLeftText text="健康な生活にはトリプトファンを摂ることが重要です。" />
      <CustomBr />
      <CustomLeftText text="そしてセロトニンは、メラトニンに変わっていきます。" />
      <CustomLeftText text="メラトニンは睡眠の質を高め、自律神経を正常に戻します。" />
      <CustomLeftText text="トリプトファンが不足するとセロトニンの分泌低下が起こり、" />
      <CustomLeftText text="不眠、不安感、うつ病、意識の低下などの症状に繋がります。" />
      <CustomBr />
      <CustomLeftText text="あなたの毎日が豊かな日々になりますように。" />
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
