import React, { useState } from "react";
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
  const height = props.height ? props.height : "24";
  const width = props.width ? props.width : "24";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <use href={Icons + `#${props.id}`} />
    </svg>
  );
};

export default Icon;
