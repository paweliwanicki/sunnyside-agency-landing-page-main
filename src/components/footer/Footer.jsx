import React from "react";
import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/Mixins";
import CssVariables from "../../utils/CssVariables";
import NavLinks from "../navigation/NavLinks";
import NavIcons from "./NavIcons";
import ImageGallery from "./ImageGallery";
import { galleryImages } from "./Images";
import Icon from "../utils/Icon";

const StyledFooter = styled.footer`
  grid-column: 1/5;
  grid-row: 9/10;
  background-color: ${CssVariables.ColorLightGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72px 39px;
  flex-flow: column;

  ${mediaQueries.tabletS`
    grid-row: 12/13;
  `}
`;

const customImageStyles = css`
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
      <ImageGallery customCss={customImageStyles} images={galleryImages} />
      <StyledFooter>
        <Icon
          id={"logo"}
          color={CssVariables.ColorGreen}
          width={170}
          height={33}
          viewBox={`0 0 124 24`}
        />
        <NavLinks footer customCss={CustomNavLinksStyles} />
        <NavIcons />
      </StyledFooter>
    </>
  );
};

export default Footer;
