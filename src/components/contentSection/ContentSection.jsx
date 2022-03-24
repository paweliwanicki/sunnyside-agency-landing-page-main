import React from "react";
import { css } from "styled-components";
import CustomImage from "../utils/CustomImage";
import TextBox from "./TextBox";
import TextBoxBgImage from "./TextBoxBgImage";
import CssVariables from "../../utils/CssVariables";
import { Images } from "../../utils/Images";

const customImageStyles = css`
  width: 100%;
`;

const ContentSection = (props) => {
  return (
    <>
      <TextBox
        desktopGridColumn={`1/3`}
        mobileGridColumn={`1/5`}
        desktopGridRow={`2/3`}
        mobileGridRow={`3/4`}
        headerText={`Transform your brand`}
        text={` We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.`}
        linkBorderColor={CssVariables.ColorLightYellow}
      />
      <CustomImage image={Images.eggImg} customCss={customImageStyles} />
      <CustomImage image={Images.glassImg} customCss={customImageStyles} />
      <TextBox
        desktopGridColumn={`3/5`}
        desktopGridRow={`3/4`}
        mobileGridRow={`6/7`}
        mobileGridColumn={`1/5`}
        headerText={`Stand out to the right audience`}
        text={`Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.`}
        linkBorderColor={CssVariables.ColorOrange}
      />
      <TextBoxBgImage
        backgroundImg={Images.cherry}
        desktopGridColumn={`1/3`}
        desktopGridRow={`4/5`}
        mobileGridRow={`7/8`}
        mobileGridColumn={`1/5`}
        color={CssVariables.ColorDarkGreen}
        headerText={`Graphic Design`}
        text={`Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.`}
      ></TextBoxBgImage>
      <TextBoxBgImage
        backgroundImg={Images.tangerine}
        desktopGridColumn={`3/5`}
        desktopGridRow={`4/5`}
        mobileGridRow={`8/9`}
        mobileGridColumn={`1/5`}
        color={CssVariables.ColorDarkBlue}
        headerText={`Photography`}
        text={`Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.`}
      ></TextBoxBgImage>
    </>
  );
};

export default ContentSection;
