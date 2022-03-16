import React from "react";
import styled from "styled-components";
import * as Svg from "react-inlinesvg";
import facebookIcon from "../../../images/icon-facebook.svg";
import instagramIcon from "../../../images/icon-instagram.svg";
import twitterIcon from "../../../images/icon-twitter.svg";
import pinterestIcon from "../../../images/icon-pinterest.svg";
import CssVariables from "../../../utils/CssVariables";
import { setColorSVG } from "../../../utils/Mixins";

const StyledDiv = styled.div`
  display: flex;
  width: 10.25em;
  justify-content: space-between;
  align-items: center;
`;

const NavIcons = (props) => {
  return (
    <StyledDiv>
      <Svg
        src={facebookIcon}
        preProcessor={setColorSVG(CssVariables.ColorGreen)}
      />
      <Svg
        src={instagramIcon}
        preProcessor={setColorSVG(CssVariables.ColorGreen)}
      />
      <Svg
        src={twitterIcon}
        preProcessor={setColorSVG(CssVariables.ColorGreen)}
      />
      <Svg
        src={pinterestIcon}
        preProcessor={setColorSVG(CssVariables.ColorGreen)}
      />
    </StyledDiv>
  );
};
export default NavIcons;
