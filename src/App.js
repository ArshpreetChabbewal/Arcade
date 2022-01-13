import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";
import GameArea from "./Games/Snake/GameArea";
import Typing from "./Games/Typing/Typing";
import Aim from "./Games/Aim/Aim";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
