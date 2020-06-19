import React, { useState } from 'react';
import Page from './Page';
import Grid from './Grid';
import boardDefs from './presetBoards';
import { validate } from './analyzer';

function createCell(value = null) {
  return {
    value,
    possibles: [],
    error: false
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
    let newBoard = initializeFromBoardTemplate(boardDefs[boardDefIdx].def);
    newBoard = validate(newBoard);
    setBoard(newBoard);
  }

  return (
    <Page onBoardSelect={(defIdx) => changeBoard(defIdx)} boardPresets={boardDefs}>
      <Grid contents={board} />
    </Page>
  );
}

export default App;
