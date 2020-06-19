import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const BoardWrapper = styled.div`
  position: relative;
  width: 50%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const BoardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const RowWrapper = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-grow: 1;
  flex-direction: row;

  &:first-child {
    border-top: 1px solid black;
  }
`;

function BoardRow({ row }) {
  return (
    <RowWrapper>
      {row.map((cell, idx) => <Cell key={idx} {...cell} />)}
    </RowWrapper>
  );
}

export default function Board({ contents }) {
  return (
    <BoardWrapper>
      <BoardContent>
        {contents.map((row, idx) => <BoardRow key={idx} row={row} />)}
      </BoardContent>
    </BoardWrapper>
  );
}
