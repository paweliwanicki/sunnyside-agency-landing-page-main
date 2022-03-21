import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { mediaQueries } from "../../utils/Mixins";

const StyledImg = styled.img`
  grid-column: ${(props) =>
    props.desktopGridColumn ? props.desktopGridColumn : ""};
  grid-row: ${(props) => (props.desktopGridRow ? props.desktopGridRow : "")};

  ${(props) => props.customCss}

  ${mediaQueries.tabletS`
    grid-column: ${(props) =>
      props.mobileGridColumn ? props.mobileGridColumn : ""};
    grid-row: ${(props) => (props.mobileGridRow ? props.mobileGridRow : "")};
  `}
`;

const CustomImage = (props) => {
  return (
    <StyledImg
      src={props.src}
      alt={props.alt}
      desktopGridColumn={props.desktopGridColumn}
      desktopGridRow={props.desktopGridRow}
      mobileGridRow={props.mobileGridRow}
      mobileGridColumn={props.mobileGridColumn}
      customCss={props.customCss}
    />
  );
};

CustomImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  desktopGridColumn: propTypes.string,
  desktopGridRow: propTypes.string,
  mobileGridRow: propTypes.string,
  mobileGridColumn: propTypes.string,
  customCss: propTypes.array,
};

export default CustomImage;
