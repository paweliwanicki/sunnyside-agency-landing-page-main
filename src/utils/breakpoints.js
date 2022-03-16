const sizes = {
  // size in pixesl -> converted to em in mediaQueries utils
  mobileS: "320",
  mobileM: "375",
  mobileL: "450",
  tabletS: "720",
  tabletM: "768",
  laptopS: "1024",
  laptopM: "1190",
  laptopL: "1425",
  desktop: "2560",
};

const device = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tabletS: `(max-width: ${sizes.tabletS})`,
  tabletM: `(max-width: ${sizes.tabletM})`,
  laptopS: `(max-width: ${sizes.laptopS})`,
  laptopM: `(max-width: ${sizes.laptopM})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const Breakpoints = {
  sizes: { ...sizes },
  device: { ...device },
};
export default Breakpoints;
