import { css } from "styled-components";
import Breakpoints from "./Breakpoints";

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
