import React from "react";

const Cell = ({ id, handleClick, cells }) => {
  return <td onClick={() => handleClick(id)}>{cells[id]}</td>;
};

export default Cell;
