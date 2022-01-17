import React, { useRef, useState, useEffect } from "react";
import Cell from "./Cell";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);

  const winnerRef = useRef();
  winnerRef.current = winner;

  const checkForWinner = (cells) => {
    const combos = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          cells[pattern[0]] !== "" &&
          cells[pattern[0]] === cells[pattern[1]] &&
          cells[pattern[1]] === cells[pattern[2]]
        ) {
          setWinner(cells[pattern[0]]);
          console.log(cells[pattern[0]]);
          console.log(winnerRef.current);
        }
      });
    }
  };

  const handleClick = (id) => {
    if (cells[id] === "" && !winner) {
      let squares = [...cells];
      squares[id] = turn;
      setCells(squares);
      checkForWinner(squares);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  useEffect(() => {
    if (winner !== null) {
      alert(
        `${winnerRef.current} is the winner! Would you like to play again?`
      );
      handleRestart();
    }
  }, [winner]);

  return (
    <div className="background">
      <div className="turn">Player {turn}'s Turn</div>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <Cell id={0} handleClick={handleClick} cells={cells} />
              <Cell id={1} handleClick={handleClick} cells={cells} />
              <Cell id={2} handleClick={handleClick} cells={cells} />
            </tr>
            <tr>
              <Cell id={3} handleClick={handleClick} cells={cells} />
              <Cell id={4} handleClick={handleClick} cells={cells} />
              <Cell id={5} handleClick={handleClick} cells={cells} />
            </tr>
            <tr>
              <Cell id={6} handleClick={handleClick} cells={cells} />
              <Cell id={7} handleClick={handleClick} cells={cells} />
              <Cell id={8} handleClick={handleClick} cells={cells} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicTacToe;
