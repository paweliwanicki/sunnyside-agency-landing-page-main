import React from "react";
import styled, { css } from "styled-components";
import logoImg from "../../images/logo.svg";
import { mediaQueries, setColorSVG } from "../../utils/Mixins";
import Svg from "react-inlinesvg";
import CssVariables from "../../utils/CssVariables";
import NavLinks from "../navigation/NavLinks";
import NavIcons from "./NavIcons";
import ImageGallery from "./ImageGallery";
import { galleryImages } from "./Images";

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
      <ImageGallery customCss={CustomImageStyles} images={galleryImages} />
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
