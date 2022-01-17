import React from "react";

const Cell = ({ id, handleClick, cells }) => {
  return (
    <td onClick={() => handleClick(id)} className={`cell_${id}`}>
      <h1>{cells[id]}</h1>
    </td>
  );
};

export default Cell;
