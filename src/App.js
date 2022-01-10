import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";
import GameArea from "./Games/Snake/GameArea";
import Typing from "./Games/Typing/Typing";
import Aim from "./Games/Aim/Aim";

const App = () => {
  return (
    <div>
      <Aim />
    </div>
  );
};

export default App;
