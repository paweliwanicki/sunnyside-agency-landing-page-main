import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { mediaQueries } from "../../utils/mixins";

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
  const ImageObj = props.image;
  return (
    <StyledImg
      src={ImageObj.src}
      alt={ImageObj.alt}
      desktopGridColumn={ImageObj.desktopGridColumn}
      desktopGridRow={ImageObj.desktopGridRow}
      mobileGridRow={ImageObj.mobileGridRow}
      mobileGridColumn={ImageObj.mobileGridColumn}
      customCss={props.customCss}
    />
  );
};

CustomImage.propTypes = {
  image: propTypes.object.isRequired,
  customCss: propTypes.array,
};

CustomImage.defaultProps = {
  customCss: [],
};

export default CustomImage;
