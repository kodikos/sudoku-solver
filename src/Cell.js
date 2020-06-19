import React from 'react';
import styled from 'styled-components';

const CellBaseStyle = styled.div`
  border-right: 1px solid black;
  border-collapse: collapse;
  display: flex;
  flex-grow: 1;
  flex-flow: row wrap;
  &:first-child {
    border-left: 1px solid black;
  }
`;

const MainValue = styled.span`
  display: inline-block;
  flex-grow: 1;
  font-size: calc(20px + 20 * ((100vw - 200px) / (680)));
  margin: auto;
  text-align: center;
`;

const Possible = styled.span`
  display: inline-block;
  flex-basis: 33.3333%;
  flex-grow: 1;
  font-size: calc(8px + 4 * ((100vw - 200px) / (680)));
  margin: auto;
  text-align: center;
`;

export default function Cell({ value, possibles }) {
  return (
    <CellBaseStyle>
      {value!==null && <MainValue>{value}</MainValue>}
      {value===null && possibles.map((possible) => <Possible>{possible}</Possible>)}
    </CellBaseStyle>
  );
}
