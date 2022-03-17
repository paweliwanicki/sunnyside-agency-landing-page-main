import milkImg from "../../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../../images/desktop/image-gallery-orange.jpg";
import coneImg from "../../images/desktop/image-gallery-cone.jpg";
import sugarcubesImg from "../../images/desktop/image-gallery-sugarcubes.jpg";

export const galleryImages = {
  milkImage: {
    desktopGridColumn: `1/2`,
    desktopGridRow: `7/8`,
    mobileGridRow: `10/11`,
    mobileGridColumn: `1/3`,
    src: milkImg,
    alt: "milk",
  },
  orangeImage: {
    desktopGridColumn: `2/3`,
    desktopGridRow: `7/8`,
    mobileGridRow: `10/11`,
    mobileGridColumn: `3/5`,
    src: orangeImg,
    alt: "orange",
  },
  coneImage: {
    desktopGridColumn: `3/4`,
    desktopGridRow: `7/8`,
    mobileGridRow: `11/12`,
    mobileGridColumn: `1/3`,
    src: coneImg,
    alt: "cone",
  },
  sugarcubesImage: {
    desktopGridColumn: `4/5`,
    desktopGridRow: `7/8`,
    mobileGridRow: `11/12`,
    mobileGridColumn: `3/5`,
    src: sugarcubesImg,
    alt: "sugar cubes",
  },
};
