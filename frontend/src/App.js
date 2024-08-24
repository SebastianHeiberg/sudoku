import React from 'react';
import './App.css';
import Square from './components/sqaure/Square.jsx';
import NumberBar from './components/numbersBar/NumberBar.jsx';
import { useState } from 'react';

function App() {

  const [selectedValue, setSelectedvalue] = useState(null);
  const [solutionNumbers, setSolutionNumbers] = useState([[],[],[],[],[],[],[],[],[]]);
  const [puzzleNumbers, setPuzzleNumbers ] = useState([[],[],[],[],[],[],[],[],[]]);

  const handleValueChange = (value) => {
    setSelectedvalue(value);
  };

  const handleNumberChange = (position, number, indexInArray ) => {
    const newPuzzleNumbers = [...puzzleNumbers];
    newPuzzleNumbers[indexInArray][position] = number;
    setPuzzleNumbers(newPuzzleNumbers);
    console.log(indexInArray, "index")
    console.log(position, "position")
    console.log(number, "number")
    if (checkIfSolved()) {
      alert('Congratulations! You solved the puzzle!');
    } 
  };

  const checkIfSolved = () => {
    console.log(puzzleNumbers);
    console.log(solutionNumbers);
    for (let i = 0; i < puzzleNumbers.length; i++) {
      for (let j = 0; j < puzzleNumbers[i].length; j++) {
        if (puzzleNumbers[i][j] !== solutionNumbers[i][j]) {
          return false;
        }
      }
    }
    return true;
  };

  const startGame = () => {
    const exampleSolution = [
      [4, 3, 5, 6, 8, 2, 1, 9, 7],
      [2, 6, 9, 5, 7, 1, 8, 3, 4],
      [7, 8, 1, 4, 9, 3, 5, 6, 2],
      [8, 2, 6, 3, 7, 4, 9, 5, 1],
      [1, 9, 5, 6, 8, 2, 7, 4, 3],
      [3, 4, 7, 9, 1, 5, 6, 2, 8],
      [5, 1, 9, 2, 4, 8, 7, 6, 3],
      [3, 2, 6, 9, 5, 7, 4, 1, 8],
      [8, 7, 4, 1, 3, 6, 2, 5, 0]
    ];    
    setSolutionNumbers(exampleSolution);
    const puzzleNumbers = [
      [4, 3, 5, 6, 8, 2, 1, 9, 7],
      [2, 6, 9, 5, 7, 1, 8, 3, 4],
      [7, 8, 1, 4, 9, 3, 5, 6, 2],
      [8, 2, 6, 3, 7, 4, 9, 5, 1],
      [1, 9, 5, 6, null, 2, 7, 4, 3],
      [3, 4, 7, 9, 1, 5, 6, 2, 8],
      [5, 1, 9, 2, 4, 8, 7, 6, 3],
      [3, 2, 6, 9, 5, 7, 4, 1, 8],
      [8, 7, 4, 1, 3, 6, 2, 5, 0]
    ];
    setPuzzleNumbers(puzzleNumbers);
  }

  //Its not DRY, but I wanted to make it visualy clear
  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className='sudoku-container'>
        <table className='sudoku-table'>
          <tbody>
            <tr>
              <td><Square row={1} position={1} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[0]} handleNumberChange={handleNumberChange} indexInArray={0}/></td>
              <td><Square row={1} position={2} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[1]} handleNumberChange={handleNumberChange} indexInArray={1}/></td>
              <td><Square row={1} position={3} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[2]} handleNumberChange={handleNumberChange} indexInArray={2}/></td>
            </tr>
            <tr>
              <td><Square row={2} position={1} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[3]} handleNumberChange={handleNumberChange} indexInArray={3}/></td>
              <td><Square row={2} position={2} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[4]} handleNumberChange={handleNumberChange} indexInArray={4}/></td>
              <td><Square row={2} position={3} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[5]} handleNumberChange={handleNumberChange} indexInArray={5}/></td>
            </tr>
            <tr>
              <td><Square row={3} position={1} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[6]} handleNumberChange={handleNumberChange} indexInArray={6}/></td>
              <td><Square row={3} position={2} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[7]} handleNumberChange={handleNumberChange} indexInArray={7}/></td>
              <td><Square row={3} position={3} selectedNumber={selectedValue} solutionNumbers={puzzleNumbers[8]} handleNumberChange={handleNumberChange} indexInArray={8}/></td>
            </tr>
          </tbody>
        </table>
        <NumberBar onNumberClick={handleValueChange} />
        <h2>Lets play!</h2>
        <button onClick={startGame}>Start</button>
     </div>
  </div>
  );
}

export default App;
