const SIZES = {
  // size in pixels -> converted to em in mediaQueries utils
  mobileS: "320",
  mobileM: "375",
  mobileL: "450",
  tabletS: "720",
  tabletM: "768",
  laptopS: "1024",
  laptopM: "1190",
  laptopL: "1425",
  desktop: "2560",
  customTabletMinMax: "",
};

const DEVICE = {
  mobileS: `(max-width: ${SIZES.mobileS})`,
  mobileM: `(max-width: ${SIZES.mobileM})`,
  mobileL: `(max-width: ${SIZES.mobileL})`,
  tabletS: `(max-width: ${SIZES.tabletS})`,
  tabletM: `(max-width: ${SIZES.tabletM})`,
  laptopS: `(max-width: ${SIZES.laptopS})`,
  laptopM: `(max-width: ${SIZES.laptopM})`,
  laptopL: `(max-width: ${SIZES.laptopL})`,
  desktop: `(max-width: ${SIZES.desktop})`,
  customTabletMax: `(max-width: ${SIZES.customTabletMax})`,
  
};

const BREAKPOINTS = {
  sizes: { ...SIZES },
  device: { ...DEVICE },
};
export default BREAKPOINTS;
