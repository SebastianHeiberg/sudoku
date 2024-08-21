import React from 'react';
import './App.css';
import Square from './components/sqaure/Square.jsx';
import NumberBar from './components/numbersBar/NumberBar.jsx';
import { useState } from 'react';

function App() {

  const [selectedValue, setSelectedvalue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedvalue(value);
  };


  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className='sudoku-container'>
        <table className='sudoku-table'>
          <tbody>
            <tr>
              <td><Square row={1} position={1} selectedNumber={selectedValue} /></td>
              <td><Square row={1} position={2} selectedNumber={selectedValue}/></td>
              <td><Square row={1} position={3} selectedNumber={selectedValue}/></td>
            </tr>
            <tr>
              <td><Square row={2} position={1} selectedNumber={selectedValue}/></td>
              <td><Square row={2} position={2} selectedNumber={selectedValue}/></td>
              <td><Square row={2} position={3} selectedNumber={selectedValue}/></td>
            </tr>
            <tr>
              <td><Square row={3} position={1} selectedNumber={selectedValue}/></td>
              <td><Square row={3} position={2} selectedNumber={selectedValue}/></td>
              <td><Square row={3} position={3} selectedNumber={selectedValue}/></td>
            </tr>
          </tbody>
        </table>
        <NumberBar onNumberClick={handleValueChange} />
        <h2>Try a game!</h2>
        <button>Start</button>
     </div>
  </div>
  );
}

export default App;
