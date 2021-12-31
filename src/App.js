import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";

const App = () => {
  return (
    <div>
      <TicTacToe />
    </div>
  );
};

export default App;
