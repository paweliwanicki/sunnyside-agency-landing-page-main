import React from "react";
import styled from "styled-components";
import backgroundImage from "../../images/desktop/image-header.jpg";
import arrowDown from "../../images/icon-arrow-down.svg";
import Navbar from "./Navbar";
import CustomImage from "../utils/CustomImage";
import propTypes from "prop-types";

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
  color: #fff;
  font-size: 3.5em;
  text-align: center;
  font-family: "Fraunces", serif;
  margin-bottom: 1.75em;
`;

const NavigationContainer = (props) => {
  return (
    <NavigationContainerDiv>
      <Navbar />
      <Header>WE ARE CREATIVES</Header>
      <CustomImage
        src={arrowDown}
        alt={`arrow, navigate to site`}
        display={`block`}
        margin={`auto`}
      />
      {props.children}
    </NavigationContainerDiv>
  );
};

NavigationContainer.propTypes = {
  children: propTypes.node,
};

export default NavigationContainer;