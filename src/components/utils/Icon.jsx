import styled from "styled-components";
import CssVariables from "../../utils/CssVariables";

const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "20",
  height: "20",
})``;

const Svg = styled(Icon)`
  cursor: pointer;
  &:hover {
    color: ${CssVariables.ColorWhite};
  }
`;

export default Svg;
