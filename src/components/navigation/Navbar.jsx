import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../utils/Button";
import NavDrawer from "./NavDrawer";
import { mediaQueries } from "../../utils/Mixins";
import CssVariables from "../../utils/CssVariables";
import NavLinks from "./NavLinks";
import Icon from "../utils/Icon";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin: 34px 48px 0 40px;
  color: ${CssVariables.ColorWhite};
  justify-content: space-between;

  ${mediaQueries.tabletM`
    margin:0;
    padding: 32px 24px;
    background-color: ${CssVariables.ColorBlue};
    position:fixed;
    width:100%;
    z-index:2;

    svg[data-id="logo"] {
      width:124px;
      height:24px;
    }
  `}
`;

const NavLinksCustomCss = css`
  ${mediaQueries.tabletM`
    display: none;
  `}
`;

const NavDrawerToggler = styled.button`
  display: none;
  background-color: ${CssVariables.Transparent};
  outline: 0;
  border: 0;
  padding: 0;

  ${mediaQueries.tabletM`
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
      <Icon
        id={"logo"}
        color={CssVariables.ColorWhite}
        width={170}
        height={33}
        viewBox={`0 0 124 24`}
      />
      <NavLinks customCss={NavLinksCustomCss}>
        <Button text={`CONTACT`} />
      </NavLinks>
      <NavDrawerToggler onClick={navDrawerTogglerHandler}>
        <Icon
          id={"icon-hamburger"}
          color={CssVariables.ColorWhite}
          height={18}
          width={24}
        />
      </NavDrawerToggler>
      {navDrawerIsVisible && <NavDrawer open={navDrawerIsOpen} />}
    </StyledNav>
  );
};

export default Navbar;
