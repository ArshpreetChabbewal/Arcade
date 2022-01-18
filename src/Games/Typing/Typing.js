import React, { useState, useEffect, useRef } from "react";
import Asteroids from "./Asteroids";
import "./Typing.css";

const Typing = () => {
  const cloud = [
    "stupendous",
    "trace",
    "geese",
    "pumped",
    "exciting",
    "whip",
    "fascinated",
    "flock",
    "many",
    "nose",
    "trousers",
    "whistle",
    "steep",
    "blue",
    "hammer",
    "disarm",
    "ocean",
    "bead",
    "strip",
    "material",
    "giraffe",
    "fabulous",
    "man",
    "abrupt",
    "fat",
    "produce",
    "smooth",
    "extra-small",
    "known",
    "wool",
    "boring",
    "wren",
    "victorious",
    "elastic",
    "vegetable",
    "comfortable",
    "fall",
    "dress",
    "mailbox",
    "lazy",
    "cat",
    "public",
    "cub",
    "pack",
    "question",
    "flawless",
    "collar",
    "books",
    "envious",
    "windy",
    "punish",
    "tasteful",
    "force",
    "tree",
    "noiseless",
    "exchange",
    "sophisticated",
    "sister",
    "high-pitched",
    "boorish",
    "legs",
    "proud",
    "chickens",
    "psychotic",
    "distinct",
    "soft",
    "tub",
    "old",
    "minute",
    "bumpy",
    "welcome",
    "erratic",
    "nutty",
    "well-groomed",
    "charming",
    "toad",
    "decisive",
    "salt",
    "horn",
    "damaged",
    "fertile",
    "cart",
    "lick",
    "unadvised",
    "royal",
    "careful",
    "voice",
    "follow",
    "north",
    "greasy",
    "waste",
    "repair",
    "bear",
    "work",
    "lackadaisical",
    "fang",
    "laugh",
    "harm",
    "tame",
    "thing",
  ];
  const [asteroids, setAsteroids] = useState([]);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [speed, setSpeed] = useState(700);
  const [level, setLevel] = useState(1);
  const [generationMultiplier, setGenerationMultiplier] = useState(6);
  const [resetGame, setResetGame] = useState(false);

  const asteroidsRef = useRef(null);
  const speedRef = useRef();
  const levelRef = useRef();
  const generationMultiplierRef = useRef();

  asteroidsRef.current = asteroids;
  speedRef.current = speed;
  levelRef.current = level;
  generationMultiplierRef.current = generationMultiplier;

  useEffect(() => {
    const levelInterval = setInterval(levelUp, 20000);
    const generateAsteroidInterval = setInterval(
      generateAsteroid,
      speedRef.current * generationMultiplierRef.current
    );
    const dropAsteroidsInterval = setInterval(dropAsteroids, speedRef.current);

    if (resetGame) {
      clearInterval(levelInterval);
      clearInterval(generateAsteroidInterval);
      clearInterval(dropAsteroidsInterval);
      setResetGame(false);
    }

    return function cleanup() {
      clearInterval(levelInterval);
      clearInterval(generateAsteroidInterval);
      clearInterval(dropAsteroidsInterval);
    };
  }, [speedRef.current, generationMultiplier.current]);

  const levelUp = () => {
    console.log("LEVELUP");
    if (speedRef.current > 200) {
      setSpeed(speedRef.current - 50);
      setGenerationMultiplier(generationMultiplierRef.current - 0.25);
      setLevel(levelRef.current + 1);
      console.log(`${speedRef.current}`);
      console.log(`${generationMultiplierRef.current}`);
    }
  };

  const generateAsteroid = () => {
    const min = 20;
    const max = 80;
    const horizontalPosition =
      Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    const word = cloud[Math.floor(Math.random() * 99)];
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
      if (asteroid.position[1] >= 78) {
        // alert("Game over, your score is `${scoreRef.current}`");
        restartGame();
        return;
      }
    });
  };

  const restartGame = () => {
    setAsteroids([]);
    setScore(0);
    setSpeed(700);
    setLevel(1);
    setGenerationMultiplier(15);
    setUserInput("");
    setResetGame(true);
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
    <div className="background">
      <Asteroids asteroids={asteroids} />
      <div className="platform_boundary">_______</div>
      <div className="platform">
        <input
          type="text"
          value={userInput}
          onChange={(e) => processInput(e.target.value)}
        />
        <div className="new_info">
          <h2>SCORE: {score}</h2>
          <h2>LEVEL: {level}</h2>
        </div>
      </div>
    </div>
  );
};

export default Typing;
