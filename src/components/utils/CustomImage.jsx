import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const CustomImageImg = styled.img`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  grid-column: ${(props) => props.gridColumn ? props.gridColumn : ''};
  grid-row: ${(props) => props.gridRow ? props.gridRow : '' };
`;

const CustomImage = (props) => {
  return (
    <CustomImageImg
      src={props.src}
      alt={props.alt}
      display={props.display}
      margin={props.margin}
      gridColumn={props.gridColumn}
      gridRow={props.gridRow}
    />
  );
};

CustomImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  className: propTypes.string,
};

export default CustomImage;
