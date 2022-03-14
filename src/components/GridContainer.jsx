import React from "react";
import styled from "styled-components";
import propTypes from 'prop-types';
import cssVariables from "../utils/cssVariables";

const GridContainerDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 50em auto auto auto;
  font-family: ${cssVariables.FONT_FAMILY_BARLOW};
`;

const GridContainer = (props) => {
  return <GridContainerDiv>{props.children}</GridContainerDiv>;
};

GridContainer.propTypes = {
  children: propTypes.node
}

export default GridContainer;
