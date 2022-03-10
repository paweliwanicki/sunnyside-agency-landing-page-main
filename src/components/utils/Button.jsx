import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import cssVariables from "../../utils/cssVariables";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : cssVariables.COLOR_WHITE};
  font-family: ${cssVariables.FONT_FAMILY_FRAUNCES};
  color: ${cssVariables.BTN_PRIMARY_COLOR};
  border-radius: 28px;
  padding: 1em 2em;
  line-height: 1.56em;
  font-size: 0.9375em;
  font-weight: ${cssVariables.FONT_WEIGHT_BOLD};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${cssVariables.BTN_PRIMARY_BG_H_COLOR};
    color: ${cssVariables.COLOR_WHITE};
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      bgColor={props.bgColor}
    >
      {props.text}
    </StyledButton>
  );
};

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool,
  bgColor: propTypes.string,
};

export default Button;
