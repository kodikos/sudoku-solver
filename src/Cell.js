import React from 'react';
import styled from 'styled-components';
import './Cell.sass';
import PossiblesGrid from './Possibles';

const CellBaseStyle = styled.div`
  background: ${({ groupError, original }) => {
    if (groupError && original) return '#f4dcdc';
    if (groupError) return '#ffd1d1';
    if (original) return '#EEE';
    return 'white';
  }};
  border-right: 1px solid #BBB;
  border-bottom: 1px solid #BBB;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  & > * {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const MainValue = styled.span`
  display: inline-block;
  font-size: min(max(7vw, 32px), 46px);
  margin: auto;
  text-align: center;
  color: ${({error}) => error ? 'red' : 'black'}
`;

function createClasses(x, y) {
  const classes = [];
  //  border-struct - outer border structure
  if (y === 0) classes.push('border-struct-t');
  if (y === 8) classes.push('border-struct-b');
  if (x === 0) classes.push('border-struct-l');
  if (x === 8) classes.push('border-struct-r');
  //  block-struct - inner block borders
  if (y === 2) classes.push('block-struct-b');
  if (y === 5) classes.push('block-struct-b');
  if (x === 2) classes.push('block-struct-r');
  if (x === 5) classes.push('block-struct-r');
  return classes;
}

export default function Cell(props) {
  const { value, possibles, x , y, onPossibleClick } = props;
  const classes = createClasses(x, y);

  return (
    <CellBaseStyle {...props} className={classes.join(' ')}>
      {value!==null && <MainValue {...props}>{value}</MainValue>}
      {value===null && <PossiblesGrid possibles={possibles} onClick={(idx) => onPossibleClick(x, y, idx)} />}
    </CellBaseStyle>
  );
}
