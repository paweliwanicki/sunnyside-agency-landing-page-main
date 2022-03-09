import React from "react";
import CustomImage from "../utils/CustomImage";
import eggImg from "../../images/desktop/image-transform.jpg";
import orangeImg from "../../images/desktop/image-photography.jpg";
import cherryImg from "../../images/desktop/image-graphic-design.jpg";
import glassImg from "../../images/desktop/image-stand-out.jpg";
import TextBox from "./TextBox";
import TextBoxBgImage from "./TextBoxBgImage";

const ContentSection = (props) => {
  return (
    <>
      <TextBox
        gridColumn={`1/3`}
        gridRow={`2/3`}
        headerText={`Transform your brand`}
        text={` We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.`}
      />
      <CustomImage
        src={eggImg}
        alt={`egg`}
        gridColumn={`3/5`}
        gridRow={`2/3`}
      />
      <CustomImage
        src={glassImg}
        alt={`glass`}
        gridColumn={`1/3`}
        gridRow={`3/4`}
      />
      <TextBox
        gridColumn={`3/5`}
        gridRow={`3/4`}
        headerText={`Stand out to the right audience`}
        text={`Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.`}
      />
      <TextBoxBgImage
        backgroundImg={cherryImg}
        gridColumn={`1/3`}
        gridRow={`4/5`}
        color={`#24554A`}
        headerText={`Graphic Design`}
        text={`  Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.`}
      ></TextBoxBgImage>
      <TextBoxBgImage
        backgroundImg={orangeImg}
        gridColumn={`3/5`}
        gridRow={`4/5`}
        color={`#24303e`}
        headerText={`Photography`}
        text={`Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.`}
      ></TextBoxBgImage>
    </>
  );
};

export default ContentSection;
