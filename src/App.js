import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";
import GameArea from "./Games/Snake/GameArea";
import Typing from "./Games/Typing/Typing";

const App = () => {
  return (
    <div>
      <Typing />
    </div>
  );
};

export default App;
