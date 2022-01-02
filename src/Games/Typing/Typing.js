import React, { useState, useEffect } from "react";
import Asteroid from "./Asteroid";
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
  const [userInput, setUserInput] = useState("");
  const [speed, setSpeed] = useState(800);
  const [generationMultiplier, setGenerationMultiplier] = useState(10);

  useEffect(() => {
    setInterval(generateAsteroid, speed * generationMultiplier);
    setInterval(dropAsteroids, speed);
  }, []);

  const generateAsteroid = () => {
    const min = 1;
    const max = 98;
    const horizontalPosition =
      Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    const word = cloud[6];
    const asteroid = { word, position: [horizontalPosition, 2] };
    setAsteroids([...asteroids, asteroid]);
    // get a random horizontal position, with vertical position at the top
    // get a random word
    // append an asteroid to the list of asteroids
  };

  const dropAsteroids = () => {
    let asteroidList = [...asteroids];
    asteroidList.forEach((asteroid) => {
      asteroid.position = [asteroid.position[0], asteroid.position[1] + 1];
    });
    setAsteroids(asteroidList);
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
    let asteroidList = [...asteroids];
    asteroidList.filter((asteroid) => asteroid.word !== word);
    setAsteroids(asteroidList);
  };

  return (
    <div>
      {asteroids.map((asteroid) => (
        <Asteroid word={asteroid.word} position={asteroid.position} />
      ))}
      <div className="platform">{userInput}</div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  );
};

export default Typing;
