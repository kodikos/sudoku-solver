import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const GridWrapper = styled.div`
  position: relative;
  width: 80%;
  min-width: 350px;
  max-width: 500px;
`;

const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;

export default function Grid({ contents }) {
  return (
    <GridWrapper>
      <GridContent>
        {contents.map((row, y) => row.map((cell, x) => <Cell key={y*10+x} {...cell} />))}
      </GridContent>
    </GridWrapper>
  );
}
