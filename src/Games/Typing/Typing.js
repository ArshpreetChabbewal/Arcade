import React, { useState, useEffect, useRef } from "react";
import Asteroids from "./Asteroids";
import "./Typing.css";

const Typing = () => {
  const cloud = [
    "meningococcus",
    "asininely",
    "shavers",
    "cockpit",
    "misbinds",
    "corse",
    "bee",
    "stibnite",
    "dorsoventrality",
    "quatres",
    "truckloads",
    "affidavits",
    "macrophotograph",
    "coevolutions",
    "footsy",
    "angering",
    "quassins",
    "stratospheres",
    "squirm",
    "artel",
    "restations",
    "upsoars",
    "lacunose",
    "reinsert",
    "fibroblastic",
    "matchmark",
    "underfeeds",
    "trumeaux",
    "whimsicalities",
    "haziness",
  ];
  const [asteroids, setAsteroids] = useState([]);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [speed, setSpeed] = useState(600);
  const [generationMultiplier, setGenerationMultiplier] = useState(10);

  const asteroidsRef = useRef(null);

  asteroidsRef.current = asteroids;

  useEffect(() => {
    setInterval(generateAsteroid, speed * generationMultiplier);
    setInterval(dropAsteroids, speed);
  }, []);

  const generateAsteroid = () => {
    const min = 1;
    const max = 5;
    const horizontalPosition =
      Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    const word = cloud[Math.floor(Math.random() * 25)];
    const asteroid = { word, position: [horizontalPosition, 2] };
    setAsteroids([...asteroidsRef.current, asteroid]);
    // get a random horizontal position, with vertical position at the top
    // get a random word
    // append an asteroid to the list of asteroids
  };

  const dropAsteroids = () => {
    let asteroidList = [...asteroidsRef.current];
    asteroidList.forEach((asteroid) => {
      asteroid.position = [asteroid.position[0], asteroid.position[1] + 2];
    });
    setAsteroids(asteroidList);
    checkForCollision();
  };

  const checkForCollision = () => {
    let asteroidList = [...asteroidsRef.current];
    asteroidList.forEach((asteroid) => {
      if (asteroid.position[1] >= 70) {
        alert("Game over");
        restartGame();
        return;
      }
    });
  };

  const restartGame = () => {
    setAsteroids([]);
    setScore(0);
  };

  const processInput = (word) => {
    if (word.endsWith(" ")) {
      // the user has finished this word
      checkAsteroidDestroyed(word);
      setUserInput("");
    } else {
      setUserInput(word);
    }
  };

  const checkAsteroidDestroyed = (word) => {
    // loop through all asteroids and check if word matches any of them
    // if word equals any of the asteroids, remove the asteroid
    console.log(word);
    let asteroidList = [...asteroidsRef.current];
    asteroidList.forEach((asteroid) => {
      if (asteroid.word.trim() === word.trim()) {
        setScore(score + 100);
      }
    });
    asteroidList = asteroidList.filter(
      (asteroid) => asteroid.word.trim() !== word.trim()
    );
    setAsteroids(asteroidList);
  };

  return (
    <div>
      <Asteroids asteroids={asteroids} />
      <div className="platform">abc</div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
      <div>SCORE: {score}</div>
    </div>
  );
};

export default Typing;
