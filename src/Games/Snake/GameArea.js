import React, { useState } from "react";
import Snake from "./Snake";
import Food from "./Food";
import "./GameArea.css";

const GameArea = () => {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
    [4, 0],
  ]);

  const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };

  const [food, setFood] = useState(null);
  if (food === null) {
    const coordinates = getRandomCoordinates();
    console.log(coordinates);
    setFood(coordinates);
  }

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
};

export default GameArea;
