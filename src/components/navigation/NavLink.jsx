import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import propTypes from "prop-types";
import cssVariables from "../../utils/cssVariables";

const StyledNavLink = styled.div`
  width: max-content;
  font-size: 1.125em;
  font-weight: ${cssVariables.FONT_WEIGHT_600};
  color: ${(props) =>
    props.navdrawer ? cssVariables.COLOR_GRAY : cssVariables.COLOR_WHITE};
  margin-right: ${(props) => (props.navdrawer ? "" : "2.95em")};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavLink = (props) => {
  return (
    <StyledNavLink navdrawer={props.navdrawer}>
      <Link to={`#${props.link}`}>{props.text}</Link>
    </StyledNavLink>
  );
};

NavLink.propTypes = {
  text: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  navdrawer: propTypes.bool,
};

export default NavLink;
