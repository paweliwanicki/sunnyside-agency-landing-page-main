import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import propTypes from "prop-types";

const NavLinkLink = styled.div`
  width: max-content;
  font-size: 1.125em;
  font-weight: 600;
  color: ${(props) => (props.navdrawer ? "#808397" : "#fff")};
  margin-right: ${(props) => (props.navdrawer ? "" : "2.95em")};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavLink = (props) => {
  return (
    <NavLinkLink navdrawer={props.navdrawer}>
      <Link to={`#${props.link}`}>{props.text}</Link>
    </NavLinkLink>
  );
};

NavLink.propTypes = {
  text: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  navdrawer: propTypes.bool,
};

export default NavLink;