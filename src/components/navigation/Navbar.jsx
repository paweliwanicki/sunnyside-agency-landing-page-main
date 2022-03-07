import React, { useState } from "react";
import styled from "styled-components";
import CustomImage from "../utils/CustomImage";
import Button from "../utils/Button";
import NavLink from "./NavLink";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import NavDrawer from "./NavDrawer";
import breakpoints from "../../utils/breakpoints";
import { respondTo } from "../../utils/Mixins";

const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
  margin: 2.125em 3em 0 2.5em;
  color: #fff;
  justify-content: space-between;

  ${respondTo(
    breakpoints.device.xs,
    `
    margin-left:  1.4375em;
    margin-right:  1.4375em;
  `
  )}
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavDrawerToggler = styled.button`
  display: none;
  background-color: transparent;
  outline: 0;
  border: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = (props) => {
  const [navDrawerIsVisible, setNavDrawerIsVisible] = useState(false);

  const navDrawerTogglerHandler = () => {
    navDrawerIsVisible
      ? setNavDrawerIsVisible(false)
      : setNavDrawerIsVisible(true);
  };

  return (
    <NavbarNav>
      <CustomImage src={logo} alt={`sunnyside `} />
      <NavLinks>
        <NavLink text={`About`} link={"About"} />
        <NavLink text={`Services`} link={"Services"} />
        <NavLink text={`Projects`} link={"Projects"} />
        <Button text={`CONTACT`} />
      </NavLinks>
      <NavDrawerToggler onClick={navDrawerTogglerHandler}>
        <CustomImage src={hamburger} alt={`navdrawer toggler`} />
      </NavDrawerToggler>
      {navDrawerIsVisible && <NavDrawer />}
    </NavbarNav>
  );
};

export default Navbar;
