import React from "react";
import styled from "styled-components";

const GridContainerDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 50em auto auto auto;
  font-family: 'Barlow', sans-serif;
`;

const GridContainer = (props) => {
  return <GridContainerDiv>{props.children}</GridContainerDiv>;
};

export default GridContainer;
