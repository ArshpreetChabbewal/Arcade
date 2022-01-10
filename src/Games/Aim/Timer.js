import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const secondsRef = useRef(null);

  secondsRef.current = seconds;

  const gameOver = () => {
    alert("The game is over");
    setSeconds(60);
  };

  useEffect(() => {
    setInterval(() => {
      if (secondsRef.current > 0) {
        setSeconds(secondsRef.current - 1);
      } else {
        gameOver();
      }
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <h1>{seconds}</h1>
    </div>
  );
};
export default Timer;
