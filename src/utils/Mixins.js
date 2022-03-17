import { css } from "styled-components";
import Breakpoints from "./Breakpoints";

// help function for custom breakpoints
export const respondTo = (breakpoint, styles = "") => {
  const breakpointProps = `
    @media screen and ${breakpoint} {
      ${styles}
    }
    `;
  return css([breakpointProps]);
};

// mixin/breakpoints inspiration -> https://github.com/styled-components/styled-components/blob/main/packages/styled-components/docs/tips-and-tricks.md#media-templates
export const mediaQueries = Object.keys(Breakpoints.sizes).reduce(
  (accumulator, label) => {
    const emSize = Breakpoints.sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
