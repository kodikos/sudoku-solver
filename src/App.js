import React, { useState } from 'react';
import Page from './Page';
import Grid from './Grid';
import boardDefs from './presetBoards';
import { validate, fillPossibilities } from './analyzer';

function createCell(value = null, x, y) {
  return {
    value,
    x,
    y,
    possibles: [],
    error: false,
    groupError: false,
    original: value !== null,
  }
}

function initializeEmptyBoard() {
  return Array(9).fill().map((i1, y) => Array(9).fill().map((i2, x) => createCell(null, x, y)));
}

function initializeFromBoardTemplate(boardDef) {
  return boardDef.match(/([\d ]{9})/g).map(
    (row, y) => row.match(/([\d ])/g).map(
      (cell, x) => createCell(
        ['0', ' '].includes(cell) ? null : parseInt(cell),
        x,
        y
      )));
}

function App() {
  const [ board, setBoard ] = useState(initializeEmptyBoard());

  const changeBoard = (boardDefIdx) => {
    let newBoard = initializeFromBoardTemplate(boardDefs[boardDefIdx].def);
    newBoard = validate(newBoard);
    newBoard = fillPossibilities(newBoard);
    setBoard(newBoard);
  }

  return (
    <Page onBoardSelect={(defIdx) => changeBoard(defIdx)} boardPresets={boardDefs}>
      <Grid contents={board} />
    </Page>
  );
}

export default App;
