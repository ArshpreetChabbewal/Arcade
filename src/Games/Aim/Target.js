import React from "react";
import "./Aim.css";

const Targets = ({ targets, hitTarget }) => {
  return (
    <div>
      {targets.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return (
          <button
            className="snake-dot"
            key={i}
            style={style}
            onClick={(e) => {
              hitTarget(e.target.value);
            }}
          ></button>
        );
      })}
    </div>
  );
};

export default Targets;
