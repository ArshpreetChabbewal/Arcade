import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";
import GameArea from "./Games/Snake/GameArea";

const App = () => {
  return (
    <div>
      {/* <TicTacToe /> */}
      <GameArea />
    </div>
  );
};

export default App;
