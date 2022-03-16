import React from "react";
import styled, { css } from "styled-components";
import CustomImage from "../../utils/CustomImage";
import milkImg from "../../../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../../../images/desktop/image-gallery-orange.jpg";
import coneImg from "../../../images/desktop/image-gallery-cone.jpg";
import sugarcubesImg from "../../../images/desktop/image-gallery-sugarcubes.jpg";
import logoImg from "../../../images/logo.svg";
import { mediaQueries, setColorSVG } from "../../../utils/Mixins";
import * as Svg from "react-inlinesvg";
import CssVariables from "../../../utils/CssVariables";
import NavLinks from "../../navigation/NavLinks";
import NavIcons from "./NavIcons";

const StyledFooter = styled.footer`
  grid-column: 1/5;
  grid-row: 9/10;
  background-color: #90d4c6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.5em 2.4375em;
  flex-flow: column;

  ${mediaQueries.tabletS`
    grid-row: 12/13;
  `}
`;

const CustomImageStyles = css`
  max-width: 22.5em;
  width: 100%;
`;

const CustomNavLinksStyles = css`
  margin-top: 2.5em;
  margin-bottom: 5.5em;
`;

const Footer = (props) => {
  return (
    <>
      <CustomImage
        desktopGridColumn={`1/2`}
        desktopGridRow={`7/8`}
        mobileGridRow={`10/11`}
        mobileGridColumn={`1/3`}
        src={milkImg}
        customCss={CustomImageStyles}
      />
      <CustomImage
        desktopGridColumn={`2/3`}
        desktopGridRow={`7/8`}
        mobileGridRow={`10/11`}
        mobileGridColumn={`3/5`}
        src={orangeImg}
        customCss={CustomImageStyles}
      />
      <CustomImage
        desktopGridColumn={`3/4`}
        desktopGridRow={`7/8`}
        mobileGridRow={`11/12`}
        mobileGridColumn={`1/3`}
        src={coneImg}
        customCss={CustomImageStyles}
      />
      <CustomImage
        desktopGridColumn={`4/5`}
        desktopGridRow={`7/8`}
        mobileGridRow={`11/12`}
        mobileGridColumn={`3/5`}
        src={sugarcubesImg}
        customCss={CustomImageStyles}
      />
      <StyledFooter>
        <Svg
          src={logoImg}
          preProcessor={setColorSVG(CssVariables.ColorGreen)}
        />
        <NavLinks footer customCss={CustomNavLinksStyles} />
        <NavIcons />
      </StyledFooter>
    </>
  );
};

export default Footer;
