import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const StyledImg = styled.img`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
`;

const CustomImage = (props) => {
  return (
    <StyledImg
      src={props.src}
      alt={props.alt}
      display={props.display}
      margin={props.margin}
    />
  );
};

CustomImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  className: propTypes.string,
};

export default CustomImage;
