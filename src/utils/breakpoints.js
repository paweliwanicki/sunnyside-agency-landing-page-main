// inspiration -> https://dev.to/cagatayunal/how-to-use-css-media-query-breakpoint-in-styled-components-9of
const size = {
  xs: '28.125em',
  sm: '48em',
  lg: '75em',
 }
 const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`
 }

 const breakpoint = {
   size: {...size},
   device: {...device}
 }
 
 export default breakpoint;