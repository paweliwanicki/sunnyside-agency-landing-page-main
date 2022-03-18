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
  margin-top: 1.9em;
  color: ${CssVariables.ColorWhite};
  font-size: 3.5em;
  text-align: center;
  font-family: ${CssVariables.FontFamilyFraunces};
  margin-bottom: 1.75em;
  letter-spacing: 0.157em;

  svg {
    display: block;
    margin: 95px auto 0 auto;
  }

  ${mediaQueries.tabletS`
     margin-top:145px;
    `};

  ${mediaQueries.mobileL`
   font-size: 2.75em;
  `};
`;

const NavigationContainer = (props) => {
  return (
    <NavigationContainerDiv>
      <Navbar />
      <Header>WE ARE CREATIVES
        <Icon id="icon-arrow-down" width="36" height="114" color={CssVariables.ColorWhite}/>
      </Header>
      {/* <CustomImage
        src={arrowDown}
        alt={`arrow, navigate to site`}
        display={`block`}
        margin={`auto`}
      /> */}
      {props.children}
    </NavigationContainerDiv>
  );
};

NavigationContainer.propTypes = {
  children: propTypes.node,
};

export default NavigationContainer;
