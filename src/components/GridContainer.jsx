import React from "react";
import styled from "styled-components";
import propTypes from 'prop-types';
import cssVariables from "../utils/cssVariables";
import respondTo from "../utils/Mixins";
//import breakpoints from "../utils/breakpoints";

const GridContainerDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50em auto auto auto;
  font-family: ${cssVariables.FONT_FAMILY_BARLOW};

  /* ${respondTo(`max-width:`)} */
`;

const GridContainer = (props) => {
  return <GridContainerDiv>{props.children}</GridContainerDiv>;
};

GridContainer.propTypes = {
  children: propTypes.node
}

export default GridContainer;
