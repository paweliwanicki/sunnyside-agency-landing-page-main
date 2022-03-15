const sizes = {
  // size in pixesl -> converted to em in mediaQueries utils
  mobileS: "320",
  mobileM: "375",
  mobileL: "450",
  tabletS: "720",
  tabletM: "768",
  laptop: "1024",
  laptopL: "1350",
  desktop: "2560",
};

const device = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tabletS: `(max-width: ${sizes.tabletS})`,
  tabletM: `(max-width: ${sizes.tabletM})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const Breakpoints = {
  sizes: { ...sizes },
  device: { ...device },
};
export default Breakpoints;
