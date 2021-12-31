import React, { useState } from "react";
import Cell from "./Cell";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));

  return (
    <div className="container">
      <table>
        Turn: {turn}
        <tbody>
          <tr>
            <Cell
              id={0}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
            <Cell
              id={1}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
            <Cell
              id={2}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
          </tr>
          <tr>
            <Cell
              id={3}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
            <Cell
              id={4}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
            <Cell
              id={5}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
          </tr>
          <tr>
            <Cell
              id={6}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
            <Cell
              id={7}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
            <Cell
              id={8}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
