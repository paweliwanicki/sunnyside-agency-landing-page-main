import React from "react";
import styled from "styled-components";
import CssVariables from "../../utils/CssVariables";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import PinterestIcon from "../icons/PinterestIcon";

const StyledDiv = styled.div`
  display: flex;
  width: 10.25em;
  justify-content: space-between;
  align-items: center;

  color: ${CssVariables.ColorGreen};
`;

const NavIcons = (props) => {
  return (
    <StyledDiv>
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
      <PinterestIcon />
    </StyledDiv>
  );
};
export default NavIcons;
