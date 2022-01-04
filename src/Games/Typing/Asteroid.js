import React from "react";
import "./Typing.css";

const Asteroid = ({ word, position }) => {
  const style = {
    left: `${position[0]}px`,
    top: `${position[1]}px`,
  };
  return (
    <div className="asteroid" style={style}>
      {word}
    </div>
  );
};

export default Asteroid;
