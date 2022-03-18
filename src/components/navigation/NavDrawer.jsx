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
  width: 330px;
  height: 330px;
  position: fixed;
  top: 106px;
  right: 24px;
  padding: 2.45em;
  box-sizing: border-box;
  color: ${CssVariables.ColorGray};
  animation: 1s
    ${(props) => (props.open ? fadeInDownAnimation : fadeOutUpAnimation)};
  font-size: 1.1em;

  ${mediaQueries.mobileL`
     margin: 0 24px;
    width: calc(100% - 48px);
    right:0;
  `};

  &:after {
    content: " ";
    position: absolute;
    top: -24px;
    right: -0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 24px 24px;
    border-color: Transparent Transparent ${CssVariables.ColorWhite} Transparent;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
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
