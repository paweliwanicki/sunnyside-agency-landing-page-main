import React from "react";
import styled from "styled-components";

const CustomImageImg = styled.img`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
`;

const CustomImage = (props) => {
  return (
    <CustomImageImg
      src={props.src}
      alt={props.alt}
      display={props.display}
      margin={props.margin}
    />
  );
};

export default CustomImage;
