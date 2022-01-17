import React from "react";
import "./GameArea.css";

const Food = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };
  console.log(`FOOD: ${dot}`);
  return (
    <div className="new-snake-food" style={style}>
      <div></div>
    </div>
  );
};

export default Food;
