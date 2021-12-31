import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";
import Snake from "./Games/Snake/Snake";

const App = () => {
  return (
    <div>
      {/* <TicTacToe /> */}
      <Snake />
    </div>
  );
};

export default App;
