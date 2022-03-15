import React from "react";
import styled, { keyframes } from "styled-components";
import NavLink from "./NavLink";
import Button from "../utils/Button";
import { mediaQueries } from "../../utils/Mixins";
import { fadeInDown, fadeOutUp } from "react-animations";
import CssVariables from "../../utils/CssVariables";

// simple animation
const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeOutUpAnimation = keyframes`${fadeOutUp}`;

const NavDrawerDiv = styled.div`
  background-color: ${CssVariables.ColorWhite};
  width: 20.62em;
  height: 20.62em;
  position: fixed;
  top: 6.65em;
  right: 3em;
  padding: 2.45em;
  box-sizing: border-box;
  animation: 1s
    ${(props) => (props.open ? fadeInDownAnimation : fadeOutUpAnimation)};

  ${mediaQueries.mobileL`
    margin: 0 1.4375em;
    width: calc(100% - 2.875em);
    right:0;
  `};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  &:after {
    content: " ";
    position: absolute;
    top: -4em;
    right: -2.4375em;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 24px 24px;
    border-color: Transparent Transparent ${CssVariables.ColorWhite} Transparent;
  }
`;

const NavDrawer = (props) => {
  return (
    <NavDrawerDiv open={props.open}>
      <Content>
        <NavLink text={`About`} link={"About"} navdrawer />
        <NavLink text={`Services`} link={"Services"} navdrawer />
        <NavLink text={`Projects`} link={"Projects"} navdrawer />
        <Button text={`CONTACT`} bgColor={"#FBD600"} />
      </Content>
    </NavDrawerDiv>
  );
};

export default NavDrawer;
