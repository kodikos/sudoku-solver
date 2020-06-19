import React from 'react';
import styled from 'styled-components';

const fillPossibles = (possibles) => Array(9).fill(null).map(
  (v, idx) => possibles.includes(idx + 1) ? idx + 1 : null);

const CellBaseStyle = styled.div`
  background: ${({ groupError, original }) => {
    if (groupError && original) return '#f4dcdc';
    if (groupError) return '#ffd1d1';
    if (original) return '#EEE'; 
    return 'white';
  }};
  border-right: 1px solid #BBB;
  border-collapse: collapse;
  display: flex;
  flex-basis: 9.1%;
  flex-grow: 1;
  flex-flow: row wrap;

  &:first-child {
    border-left: 1px solid black;
  }

  &:nth-child(3) {
    border-right: 1px solid black;
  }

  &:nth-child(6) {
    border-right: 1px solid black;
  }

  &:nth-child(9) {
    border-right: 1px solid black;
  }
`;

const PossiblesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  width: 100%;
`;

const MainValue = styled.span`
  display: inline-block;
  flex-grow: 1;
  font-size: calc(20px + 20 * ((100vw - 200px) / (680)));
  margin: auto;
  text-align: center;
  color: ${({error}) => error ? 'red' : 'black'}
`;

const Possible = styled.span`
  display: inline-block;
  flex-basis: 33.3333%;
  flex-grow: 1;
  font-size: calc(10px + 4 * ((100vw - 200px) / (680)));
  margin: auto;
  text-align: center;
`;

const Possibles = ({ possibles }) => fillPossibles(possibles)
  .map((possible, idx) => <Possible key={idx}>{possible || ' '}</Possible>);

export default function Cell(props) {
  const { value, possibles } = props;
  return (
    <CellBaseStyle {...props}>
      {value!==null && <MainValue {...props}>{value}</MainValue>}
      {value===null && <PossiblesGrid><Possibles possibles={possibles} /></PossiblesGrid>}
    </CellBaseStyle>
  );
}
