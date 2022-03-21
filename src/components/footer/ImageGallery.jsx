import React from "react";
import CustomImage from "../utils/CustomImage";
import propTypes from 'prop-types';

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

ImageGallery.propTypes = {
 images: propTypes.object,
 customCss: propTypes.array
}


export default ImageGallery;
