import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicTacToe from "./Games/Tic-Tac-Toe/TicTacToe";
import GameArea from "./Games/Snake/GameArea";
import Typing from "./Games/Typing/Typing";
import Aim from "./Games/Aim/Aim";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/aim" element={<Aim />} />
        <Route exact path="/typing" element={<Typing />} />
        <Route exact path="/snake" element={<GameArea />} />
        <Route exact path="/tictactoe" element={<TicTacToe />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
