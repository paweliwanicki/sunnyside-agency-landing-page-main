import React, { useState } from "react";
import propTypes from 'prop-types';
import Icons from "../../images/svg-sprite.svg";

const Icon = (props) => {
  const [color, setColor] = useState(props.color);
  const onMouseEnterHandler = () => {
    if (props.hoverColor) {
      setColor(props.hoverColor);
    }
  };
  const onMouseLeaveHandler = () => {
    setColor(props.color);
  };

  // set default values
  const height = props.height ? props.height : 20;
  const width = props.width ? props.width : 20;
  return (
    <svg
      width={width}
      height={height}
      viewBox={props.viewBox  ? props.viewBox : `0 0 ${width} ${height}`}
      fill={color}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      data-id={props.id}
    >
      <use href={Icons + `#${props.id}`} />
    </svg>
  );
};

Icon.propTypes = {
  id: propTypes.string.isRequired,
  height: propTypes.number,
  width: propTypes.number,
  color: propTypes.string,
  viewBox : propTypes.string
}

export default Icon;
