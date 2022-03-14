// inspiration -> https://dev.to/cagatayunal/how-to-use-css-media-query-breakpoint-in-styled-components-9of
const size = {
  xs: '28.125em',
  sm: '45em',
  lg: '75em',
 }
 const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`
 }

 const Breakpoints = {
   size: {...size},
   device: {...device}
 }
 export default Breakpoints;
