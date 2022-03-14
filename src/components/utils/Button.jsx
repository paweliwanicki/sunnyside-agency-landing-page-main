import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import CssVariables from "../../utils/CssVariables";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : CssVariables.ColorWhite};
  font-family: ${CssVariables.FontFamilyFraunces};
  color: ${CssVariables.BtnPrimaryColor};
  border-radius: 28px;
  padding: 1em 2em;
  line-height: 1.56em;
  font-size: 0.9375em;
  font-weight: ${CssVariables.FontWeightBold};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${CssVariables.BtnPrimaryHoverBgColor};
    color: ${CssVariables.ColorWhite};
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
