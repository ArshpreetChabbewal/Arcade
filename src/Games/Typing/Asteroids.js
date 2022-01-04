import React from "react";

const Asteroids = ({ asteroids }) => {
  return (
    <>
      {asteroids.map((asteroid, i) => {
        const style = {
          left: `${asteroid.position[0]}%`,
          top: `${asteroid.position[1]}%`,
        };
        return (
          <div className="asteroid" key={i} style={style}>
            {asteroid.word}
          </div>
        );
      })}
    </>
  );
};

export default Asteroids;
