import React from "react";
import "./Typing.css";

const Asteroid = ({ word, position }) => {
  const style = {
    left: `${position[0]}%`,
    top: `${position[1]}%`,
  };
  return (
    <div classname="asteroid" style={style}>
      {word}
    </div>
  );
};

export default Asteroid;
