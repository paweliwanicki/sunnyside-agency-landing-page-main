import React from "react";
import CustomImage from "../utils/CustomImage";

const ImageGallery = (props) => {
  return Object.keys(props.images).map((key) => {
    const image = props.images[key];
    return (
      <CustomImage
        key={key}
        desktopGridColumn={image.desktopGridColumn}
        desktopGridRow={image.desktopGridRow}
        mobileGridRow={image.mobileGridRow}
        mobileGridColumn={image.mobileGridColumn}
        src={image.src}
        customCss={props.customCss}
        alt={image.alt}
      />
    );
  });
};

export default ImageGallery;
