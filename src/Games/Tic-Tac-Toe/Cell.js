import React from "react";

const Cell = ({ id, turn, setTurn }) => {
  const handleClick = (id) => {
    alert(`${id}`);
    setTurn(turn === "X" ? "O" : "X");
  };
  return <td onClick={() => handleClick(id)}>-</td>;
};

export default Cell;
