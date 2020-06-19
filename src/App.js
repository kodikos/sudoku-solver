import React, { useState } from 'react';
import Board from './Board';

function createCell() {
  return {
    value: null,
    possibles: [1,2,3,4,5,6,7,8,9]
  }
}

function initializeBoard() {
  return Array(9).fill().map(() => Array(9).fill().map(() => createCell()));
}

function App() {
  const [ board, setBoard ] = useState(initializeBoard());

  return (
    <div className="App">
      <h1>Sudoku be Solved!</h1>
      <Board contents={board} />
    </div>
  );
}

export default App;
