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
import cssVariables from "../../utils/cssVariables";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin: 2.125em 3em 0 2.5em;
  color: ${cssVariables.COLOR_WHITE};
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

  ${respondTo(breakpoints.device.sm, ` display: none;`)}
`;

const NavDrawerToggler = styled.button`
  display: none;
  background-color: ${cssVariables.TRANSPARENT};
  outline: 0;
  border: 0;
  padding: 0;
  ${respondTo(breakpoints.device.sm, ` display: block;`)}
`;

const Navbar = (props) => {
  const [navDrawerIsVisible, setNavDrawerIsVisible] = useState(false);
  const [navDrawerIsOpen, setNavDrawerIsOpen] = useState(false);

  const navDrawerTogglerHandler = () => {
    if (navDrawerIsVisible) {
      setNavDrawerIsOpen(false);
      setTimeout(() => setNavDrawerIsVisible(false), 900);
    } else {
      setNavDrawerIsOpen(true);
      setNavDrawerIsVisible(true);
    }
  };

  return (
    <StyledNav>
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
      {navDrawerIsVisible && <NavDrawer open={navDrawerIsOpen} />}
    </StyledNav>
  );
};

export default Navbar;
