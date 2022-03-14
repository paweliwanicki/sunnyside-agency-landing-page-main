import { css } from "styled-components";

export const respondTo = (
  breakpoint,
  styles = ""
) => {
  const breakpointProps = `
    @media screen and ${breakpoint} {
      ${styles}
    }
    `;
  return css([breakpointProps]);
};

export default respondTo;
