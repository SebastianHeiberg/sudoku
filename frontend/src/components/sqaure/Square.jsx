import React from 'react';
import './square.css';

const Square = ({ row, position, selectedNumber, solutionNumbers, handleNumberChange, indexInArray }) => {

  const handleClick = (e) => {
    if (selectedNumber !== null) {
      e.target.innerText = selectedNumber; // set the inner text of the clicked cell to the selected number
      const idParts = e.target.id.split('-'); // split the id to get the position in the array
      const id = parseInt(idParts[0], 10) - 1; // subtract 1 to get the correct index
      handleNumberChange(id, selectedNumber, indexInArray);    
    }
  };

  return (
    //I wanted to make it visualy clear, even though its not DRY
    <div className="square-grid">
      <div id={`1-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[0] !== null ? solutionNumbers[0] : ''}</div>
      <div id={`2-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[1] !== null ? solutionNumbers[1] : ''}</div>
      <div id={`3-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[2] !== null ? solutionNumbers[2] : ''}</div>
      <div id={`4-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[3] !== null ? solutionNumbers[3] : ''}</div>
      <div id={`5-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[4] !== null ? solutionNumbers[4] : ''}</div>
      <div id={`6-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[5] !== null ? solutionNumbers[5] : ''}</div>
      <div id={`7-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[6] !== null ? solutionNumbers[6] : ''}</div>
      <div id={`8-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[7] !== null ? solutionNumbers[7] : ''}</div>
      <div id={`9-${row}-${position}`} className="cell" onClick={handleClick}>{solutionNumbers[8] !== null ? solutionNumbers[8] : ''}</div>
    </div>
  );
};

export default Square;