import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import CssVariables from "../../utils/CssVariables";

const StyledLink = styled.a`
  display: block;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1px;
  font-weight: ${CssVariables.FontWeight900};
  color: ${CssVariables.ColorDark};
  text-decoration: none;
  font-family: ${CssVariables.FontFamilyFraunces};
  width: fit-content;
  position: relative;

  &:hover {
    text-decoration: none;
  }

  ::after {
    content: " ";
    position: absolute;
    left: 0%;
    right: 0%;
    top: 60%;
    bottom: 0%;
    background: ${(props) => props.borderColor};
    mix-blend-mode: normal;
    opacity: 0.25;
    border-radius: 28px;
  }
`;

const Link = (props) => {
  return (
    <StyledLink href={props.href} borderColor={props.borderColor}>
      {props.text}
    </StyledLink>
  );
};

Link.propTypes = {
  href: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  borderColor: propTypes.string,
};

export default Link;
