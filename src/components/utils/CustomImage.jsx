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
  const ImageObj = props;
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
  image: propTypes.object,
  customCss: propTypes.array,
};

export default CustomImage;
