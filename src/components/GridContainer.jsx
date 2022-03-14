import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import CssVariables from "../utils/CssVariables";

const GridContainerDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50em auto auto auto;
  font-family: ${CssVariables.FontFamilyBarlow};
`;

const GridContainer = (props) => {
  return <GridContainerDiv>{props.children}</GridContainerDiv>;
};

GridContainer.propTypes = {
  children: propTypes.node,
};

export default GridContainer;
