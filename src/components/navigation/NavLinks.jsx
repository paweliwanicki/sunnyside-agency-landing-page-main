import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import CssVariables from "../../utils/CssVariables";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.footer ? "18.5625em" : "30em")};

  ${(props) => props.customCss}

  color: ${(props) =>
    props.footer ? CssVariables.ColorGreen : CssVariables.ColorWhite};
`;

const NavLinks = (props) => {
  return (
    <StyledDiv customCss={props.customCss} footer={props.footer}>
      <NavLink text={`About`} link={"About"} />
      <NavLink text={`Services`} link={"Services"} />
      <NavLink text={`Projects`} link={"Projects"} />
      {props.children}
    </StyledDiv>
  );
};

export default NavLinks;
