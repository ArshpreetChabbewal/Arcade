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
    const max = 98;
    const horizontalPosition =
      Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    const word = cloud[6];
    const asteroid = { word, position: [horizontalPosition, 2] };
    setAsteroids([...asteroids, asteroid]);
    console.log(`ASTEROIDS: ${asteroidsRef.current}`);
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
    console.log(`ASTEROIDS: ${asteroidsRef.current[0]?.position}`);
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
    let asteroidList = [...asteroids];
    asteroidList.filter((asteroid) => asteroid.word.trim !== word.trim);
    if (asteroidList.length !== asteroids.length) {
      console.log("list changed");
    }
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
    </div>
  );
};

export default Typing;
