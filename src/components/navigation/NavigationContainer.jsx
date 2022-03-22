import React from "react";
import styled from "styled-components";
import backgroundImage from "../../images/desktop/image-header.jpg";
import Navbar from "./Navbar";
import propTypes from "prop-types";
import CssVariables from "../../utils/CssVariables";
import { mediaQueries } from "../../utils/Mixins";
import Icon from "../utils/Icon";

const NavigationContainerDiv = styled.div`
  max-height: 800px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: bottom;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const Header = styled.h1`
  margin-top: 106px;
  color: ${CssVariables.ColorWhite};
  font-size: 3.5em;
  text-align: center;
  font-family: ${CssVariables.FontFamilyFraunces};
  margin-bottom: 1.75em;
  letter-spacing: 8.75px;
  line-height: 69px;

  svg {
    display: block;
    margin: 95px auto 0 auto;
  }

  ${mediaQueries.tabletM`
     margin-top:145px;
     padding-left: 24px;
     padding-right: 24px;
    `};

  ${mediaQueries.mobileL`
   font-size: 2.75em;
  `};
  ${mediaQueries.mobileM`
   font-size: 2.25em;
   letter-spacing: 5px;
  `};
`;

const NavigationContainer = (props) => {
  return (
    <NavigationContainerDiv>
      <Navbar />
      <Header>
        WE ARE CREATIVES
        <Icon
          id="icon-arrow-down"
          width={36}
          height={114}
          color={CssVariables.ColorWhite}
        />
      </Header>
      {props.children}
    </NavigationContainerDiv>
  );
};

NavigationContainer.propTypes = {
  children: propTypes.node,
};

export default NavigationContainer;
