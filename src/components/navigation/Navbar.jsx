import React, { useState } from "react";
import styled from "styled-components";
import CustomImage from "../utils/CustomImage";
import Button from "../utils/Button";
import NavLink from "./NavLink";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import NavDrawer from "./NavDrawer";
import { mediaQueries } from "../../utils/Mixins";
import CssVariables from "../../utils/CssVariables";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin: 2em 3em 0 2.5em;
  color: ${CssVariables.ColorWhite};
  justify-content: space-between;

  ${mediaQueries.mobileL`
    margin-left:  1.4375em;
    margin-right:  1.4375em;
  `}
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  ${mediaQueries.tabletS`
    display: none;
  `}
`;

const NavDrawerToggler = styled.button`
  display: none;
  background-color: ${CssVariables.Transparent};
  outline: 0;
  border: 0;
  padding: 0;

  ${mediaQueries.tabletS`
    display: block;
  `}
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
