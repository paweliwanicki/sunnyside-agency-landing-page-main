import React from "react";
import styled from "styled-components";

const ButtonBtn = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  font-family: "Fraunces 9pt Soft", serif;
  color: #24303e;
  border-radius: 28px;
  padding: 1em 2em;
  line-height: 1.56em;
  font-size: 0.9375em;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #78cdf5;
    color: #fff;
  }
`;

const Button = (props) => {
  return (
    <ButtonBtn
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      bgColor={props.bgColor}
    >
      {props.text}
    </ButtonBtn>
  );
};

export default Button;
