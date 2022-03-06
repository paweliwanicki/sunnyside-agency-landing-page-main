import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import Button from "../utils/Button";

const NavDrawerDiv = styled.div`
  background-color: #fff;
  width: 20.62em;
  height: 20.62em;
  position: fixed;
  top: 6.65em;
  right: 3em;
  padding: 2.45em;
  box-sizing: border-box;
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
    top: -64px;
    right: -39px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 24px 24px;
    border-color: transparent transparent #ffffff transparent;
  }
`;

const NavDrawer = (props) => {
  return (
    <NavDrawerDiv>
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
