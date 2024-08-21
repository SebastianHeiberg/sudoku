import React from 'react';
import './square.css';

const Square = ({ row, position, selectedNumber }) => {

 const handleClick = (e) => {
    if (selectedNumber !== null) {
      e.target.innerText = selectedNumber;
    }
  };

  return (
    <div className="square-grid">
      <div id={`1-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`2-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`3-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`4-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`5-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`6-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`7-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`8-${row}-${position}`} className="cell" onClick={handleClick}></div>
      <div id={`9-${row}-${position}`} className="cell" onClick={handleClick}></div>
    </div>
  );
};

export default Square;