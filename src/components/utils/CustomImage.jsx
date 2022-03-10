import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const StyledImg = styled.img`
  width: ${(props) => props.width ? props.width : 'initial' };
  height: ${(props) => props.height ? props.height : 'auto' };
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  grid-column: ${(props) => props.gridColumn ? props.gridColumn : ''};
  grid-row: ${(props) => props.gridRow ? props.gridRow : '' };
`;

const CustomImage = (props) => {
  return (
    <StyledImg
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
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
