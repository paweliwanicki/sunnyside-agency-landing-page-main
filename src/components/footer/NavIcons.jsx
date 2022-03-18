import React from "react";
import styled from "styled-components";
import CssVariables from "../../utils/CssVariables";
import Icon from "../utils/Icon";

const StyledDiv = styled.div`
  display: flex;
  width: 165px;
  justify-content: space-between;
  align-items: center;
  color: ${CssVariables.ColorGreen};

  svg {
    cursor: pointer;
  }
`;

const iconsID = [
  "icon-facebook",
  "icon-instagram",
  "icon-twitter",
  "icon-pinterest",
];

const NavIcons = (props) => {
  return (
    <StyledDiv>
      {iconsID.map((id) => {
        return <Icon
          id={id}
          key={id}
          color={CssVariables.ColorGreen}
          hoverColor={CssVariables.ColorWhite}
        />;
      })}
    </StyledDiv>
  );
};
export default NavIcons;
