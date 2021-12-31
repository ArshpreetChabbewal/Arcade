import React from "react";
import "./GameArea.css";

const Food = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[0]}%`,
  };
  return (
    <div className="snake-food" style={style}>
      <div></div>
    </div>
  );
};

export default Food;
