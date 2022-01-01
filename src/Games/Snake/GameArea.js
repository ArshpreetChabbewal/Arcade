import React, { useState, useEffect, useCallback, useRef } from "react";
import Snake from "./Snake";
import Food from "./Food";
import "./GameArea.css";

const GameArea = () => {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
    [4, 0],
  ]);

  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState(null);
  const [speed, setSpeed] = useState(200);

  const snakeDotsRef = useRef(null);
  const directionRef = useRef(null);
  const foodRef = useRef(null);

  snakeDotsRef.current = snakeDots;
  directionRef.current = direction;
  foodRef.current = food;

  const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };

  if (food === null) {
    const coordinates = getRandomCoordinates();
    setFood(coordinates);
  }

  const moveSnake = () => {
    let dots = [...snakeDotsRef.current];
    let head = dots[dots.length - 1];

    switch (directionRef.current) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
    }

    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
  };

  const escFunction = useCallback((event) => {
    event = event || window.event;
    switch (event.keyCode) {
      case 38:
        setDirection("UP");
        break;
      case 40:
        setDirection("DOWN");
        break;
      case 37:
        setDirection("LEFT");
        break;
      case 39:
        setDirection("RIGHT");
        break;
    }
  }, []);

  const checkIfOutOfBorders = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
    return false;
  };

  const checkIfCollapsed = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver();
      }
    });
  };

  const checkIfEat = () => {
    let head = snakeDotsRef.current[snakeDotsRef.current.length - 1];
    console.log(food);
    console.log(`HEAD: ${head}`);
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates());
      enlargeSnake();
      increaseSpeed();
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10);
    }
  };

  const onGameOver = () => {
    alert(`Game Over. Snake length is ${snakeDots.length}`);
    setDirection("RIGHT");
    setSnakeDots([
      [0, 0],
      [2, 0],
      [4, 0],
    ]);
    setFood(null);
    setSpeed(200);
  };

  useEffect(() => {
    setInterval(moveSnake, speed);
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    checkIfOutOfBorders();
    checkIfCollapsed();
    checkIfEat();
  }, [snakeDots]);

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
};

export default GameArea;
