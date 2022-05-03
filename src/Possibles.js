import React from 'react';
import styled from 'styled-components';

const PossiblesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  width: 100%;
`;

const Possible = styled.span`
  display: inline-block;
  font-size: min(max(2vw, 10px), 12px);
  font-weight: ${({ isPossible, onClick }) => (isPossible && !!onClick ? '700' : '200')};
  margin: auto;
  text-align: center;
`;

const fillPossibles = (possibles) => Array(9).fill(null).map(
  (v, idx) => possibles.includes(idx + 1) ? idx + 1 : null);

const Possibles = ({ possibles, onClick }) => fillPossibles(possibles)
  .map((possible, idx) => (
    <Possible key={idx} onClick={() => onClick(idx + 1)} isPossible={possibles.includes(idx + 1)}>
      {possible || (!!onClick ? idx + 1 : '')}
    </Possible>
  ));

/**
 * Displays the grid of possible values within a cell. Also doubles up as a way of
 * inputting values into a cell, depending on mode flags.
 * @param {array} possibles Array of numbers that are possible values
 * @param {function} onClick function for handling a click on a number
 * @param {boolean} showingPossibles true if we're meant to display the possible values
 */
export default function PossiblesGrid({ possibles, onClick, showingPossibles = false }) {
  return (
    <PossiblesWrapper>
      <Possibles possibles={possibles} onClick={onClick} showingPossibles={showingPossibles} />
    </PossiblesWrapper>
  );
}
