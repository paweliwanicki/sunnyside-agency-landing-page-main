import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import propTypes from "prop-types";
import CssVariables from "../../utils/CssVariables";

const StyledNavLink = styled.div`
  width: max-content;
  font-size: 1.125em;
  line-height: 25px;
  font-weight: ${CssVariables.FontWeight600};
  color: inherit;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${(props) => (props.footer ? CssVariables.ColorWhite : "inherit")};
    }
  }
`;

const NavLink = (props) => {
  return (
    <StyledNavLink navdrawer={props.navdrawer} footer={props.footer}>
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
