import React, { useState, useEffect, useCallback, useRef } from "react";
import Targets from "./Target";
import Timer from "./Timer";
import "./Aim.css";

const Aim = () => {
  const [targets, setTargets] = useState([
    [20, 20],
    [20, 80],
    [80, 20],
    [80, 80],
  ]);
  const [score, setScore] = useState(0);

  const targetsRef = useRef(null);
  const scoreRef = useRef(null);

  targetsRef.current = targets;
  scoreRef.current = score;

  const fillTargets = (targets) => {
    console.log("hello1");
    console.log(`targets: ${targets}`);
    while (targets.length < 4) {
      console.log("hello");
      const newCoordinates = getRandomCoordinates();
      let newCoordinatesNotInArray = true;
      targets.forEach((target) => {
        if (
          target[0] === newCoordinates[0] &&
          target[1] === newCoordinates[0]
        ) {
          newCoordinatesNotInArray = false;
        }
      });
      if (newCoordinatesNotInArray) {
        targets = [...targets, newCoordinates];
        setTargets(targets);
      }
    }
  };

  const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };

  const hitTarget = (index) => {
    console.log("hello");
    const selectedTarget = targetsRef.current[index];
    const newTargets = targetsRef.current.filter(
      (target) =>
        target[0] !== selectedTarget[0] || target[1] !== selectedTarget[1]
    );
    console.log(`hitTarget current targets: ${targetsRef.current}`);
    console.log(`hitTarget new targets: ${newTargets}`);
    fillTargets(newTargets);

    setScore(scoreRef.current + 1);
  };

  const onGameOver = () => {
    alert(`Game Over. Score: ${score}`);
    setTargets(null);
    setScore(0);
  };

  return (
    <>
      <Timer />
      <div className="game-area">
        <div>
          {/* <Targets targets={targets} hitTarget={hitTarget} /> */}
          <button
            className="snake-dot"
            style={{
              left: `${targets[0][0]}%`,
              top: `${targets[0][1]}%`,
            }}
            onClick={() => {
              hitTarget(0);
            }}
          ></button>
          <button
            className="snake-dot"
            style={{
              left: `${targets[1][0]}%`,
              top: `${targets[1][1]}%`,
            }}
            onClick={() => {
              hitTarget(1);
            }}
          ></button>
          <button
            className="snake-dot"
            style={{
              left: `${targets[2][0]}%`,
              top: `${targets[2][1]}%`,
            }}
            onClick={() => {
              hitTarget(2);
            }}
          ></button>
          <button
            className="snake-dot"
            style={{
              left: `${targets[3][0]}%`,
              top: `${targets[3][1]}%`,
            }}
            onClick={() => {
              hitTarget(3);
            }}
          ></button>
        </div>
      </div>
      <div>Score: {score}</div>
    </>
  );
};

export default Aim;