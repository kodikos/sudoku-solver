import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const BoardOuter = styled.div``;
const SidePanel = styled.div`
  margin-left: 10px;
`;
const BoardSelectBtn = styled.button`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  padding: 3px;
`;

export default function Page({ children, onBoardSelect, boardPresets }) {
  return (
    <div>
      <h1>Sudoku be Solved!</h1>
      <ContentWrapper>
        {children}
        <SidePanel>
          {boardPresets.map((preset, idx) =>
            <BoardSelectBtn key={idx} onClick={() => onBoardSelect(idx)}>
              {preset.name}
            </BoardSelectBtn>
          )}
        </SidePanel>
      </ContentWrapper>
    </div>
  );
}