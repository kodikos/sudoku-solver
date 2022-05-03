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

  const resetBoard = (boardDefIdx) => {
    let newBoard = initializeFromBoardTemplate(boardDefs[boardDefIdx].def);
    newBoard = validate(newBoard);
    newBoard = fillPossibilities(newBoard);
    setBoard(newBoard);
  }

  const updateBoard = (x, y, action, value) => {
    //<<<<<<<<GOTHERE: trying to set value and redo board
    const current = board.getBoard();
    current[x][y] = value;
    current = validate(current);
    current = fillPossibilities(current);
    setBoard(current);
  }

  return (
    <Page onBoardSelect={(defIdx) => resetBoard(defIdx)} boardPresets={boardDefs}>
      <Grid contents={board} onPossibleClick={(x, y, idx) => updateBoard(x, y, 'set', idx)} />
    </Page>
  );
}

export default App;
