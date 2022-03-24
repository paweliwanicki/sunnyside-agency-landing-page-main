import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import CssVariables from "../../utils/CssVariables";
import Icon from "../utils/Icon";
import {Icons} from "../../utils/Icons";

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

const NavIcons = (props) => {
  return (
    <StyledDiv>
      {Object.keys(Icons.footer).map((key) => {
        const IconObj = Icons.footer[key];
        return (
          <Link to={`#${IconObj.url}`} key={IconObj.id}>
            <Icon
              id={IconObj.id}
              color={CssVariables.ColorGreen}
              hoverColor={CssVariables.ColorWhite}
            />
          </Link>
        );
      })}
    </StyledDiv>
  );
};
export default NavIcons;
