import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const GridWrapper = styled.div`
  position: relative;
  width: 50%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const RowWrapper = styled.div`
  border-bottom: 1px solid #BBB;
  display: flex;
  flex-grow: 1;
  flex-direction: row;

  &:first-child {
    border-top: 1px solid black;
  }

  &:nth-child(3) {
    border-bottom: 1px solid black;
  }

  &:nth-child(6) {
    border-bottom: 1px solid black;
  }

  &:nth-child(9) {
    border-bottom: 1px solid black;
  }
`;

function GridRow({ row }) {
  return (
    <RowWrapper>
      {row.map((cell, idx) => <Cell key={idx} {...cell} />)}
    </RowWrapper>
  );
}

export default function Grid({ contents }) {
  return (
    <GridWrapper>
      <GridContent>
        {contents.map((row, idx) => <GridRow key={idx} row={row} />)}
      </GridContent>
    </GridWrapper>
  );
}
