import React from "react";
import CustomImage from "../utils/CustomImage";
import propTypes from 'prop-types';
import {Images} from '../../utils/images';

const ImageGallery = (props) => {
  return Object.keys(Images.gallery).map((key) => {
    const image = Images.gallery[key];
    return (
      <CustomImage
        key={key}
        image={image}
        customCss={props.customCss}
      />
    );
  });
};

ImageGallery.propTypes = {
 images: propTypes.object,
 customCss: propTypes.array
}

ImageGallery.defaultProps = {
  images: null,
  customCss: [],
};


export default ImageGallery;
