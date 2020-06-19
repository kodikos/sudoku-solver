import React, { useState } from 'react';
import Page from './Page';
import Board from './Board';
import boardDefs from './presetBoards';

function createCell(value = null) {
  return {
    value,
    possibles: []
  }
}

function initializeEmptyBoard() {
  return Array(9).fill().map(() => Array(9).fill().map(() => createCell()));
}

function initializeFromBoardTemplate(boardDef) {
  return boardDef.match(/([\d ]{9})/g).map(
    (row) => row.match(/([\d ])/g).map(
      (cell) => createCell(
        ['0', ' '].includes(cell) ? null : parseInt(cell)
      )));
}

function App() {
  const [ board, setBoard ] = useState(initializeEmptyBoard());

  const changeBoard = (boardDefIdx) => {
    setBoard(initializeFromBoardTemplate(boardDefs[boardDefIdx].def));
  }

  return (
    <Page onBoardSelect={(defIdx) => changeBoard(defIdx)} boardPresets={boardDefs}>
      <Board contents={board} />
    </Page>
  );
}

export default App;
