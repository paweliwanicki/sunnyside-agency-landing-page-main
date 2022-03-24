import milkImg from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../images/desktop/image-gallery-orange.jpg";
import coneImg from "../images/desktop/image-gallery-cone.jpg";
import sugarcubesImg from "../images/desktop/image-gallery-sugarcubes.jpg";
import glassImg from "../images/desktop/image-stand-out.jpg";
import eggImg from "../images/desktop/image-transform.jpg";
import orangeHeaderImg from "../images/desktop/image-header.jpg";
import tangerine from "../images/desktop/image-photography.jpg";
import cherryImg from "../images/desktop/image-graphic-design.jpg";
import userEmilyImg from "../images/image-emily.jpg";
import userJennyImg from "../images/image-jennie.jpg";
import userThomasImg from "../images/image-thomas.jpg";

export const Images = {
  //content section
  egg: {
    src: eggImg,
    alt: `egg`,
    desktopGridColumn: `3/5`,
    desktopGridRow: `2/3`,
    mobileGridRow: `4/5`,
    mobileGridColumn: `1/5`,
  },
  glass: {
    src: glassImg,
    alt: `glass`,
    desktopGridColumn: `1/3`,
    desktopGridRow: `3/4`,
    mobileGridRow: `5/6`,
    mobileGridColumn: `1/5`,
  },
  orangeHeader: {
    src: orangeHeaderImg,
    alt: `orange header`,
  },
  cherry: {
    src: cherryImg,
    alt: `cherry`,
  },
  tangerine: {
    src: tangerine,
    alt: `tangerine`,
  },

  // gallery
  gallery: {
    milk: {
      desktopGridColumn: `1/2`,
      desktopGridRow: `7/8`,
      mobileGridRow: `10/11`,
      mobileGridColumn: `1/3`,
      src: milkImg,
      alt: "milk",
    },
    orange: {
      desktopGridColumn: `2/3`,
      desktopGridRow: `7/8`,
      mobileGridRow: `10/11`,
      mobileGridColumn: `3/5`,
      src: orangeImg,
      alt: "orange",
    },
    cone: {
      desktopGridColumn: `3/4`,
      desktopGridRow: `7/8`,
      mobileGridRow: `11/12`,
      mobileGridColumn: `1/3`,
      src: coneImg,
      alt: "cone",
    },
    sugarcubes: {
      desktopGridColumn: `4/5`,
      desktopGridRow: `7/8`,
      mobileGridRow: `11/12`,
      mobileGridColumn: `3/5`,
      src: sugarcubesImg,
      alt: "sugar cubes",
    },
  },

  // users
  emily: {
    src: userEmilyImg,
    alt: 'Emily'
  },
  jenny: {
    src: userJennyImg,
    alt: 'Jenny'
  },
  thomas: {
    src: userThomasImg,
    alt: 'Thomas'
  },

};
