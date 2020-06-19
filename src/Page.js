import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
`;

const BoardOuter = styled.div``;
const SidePanel = styled.div`
  margin-left: 10px;
`;
const BoardSelectBtn = styled.button`
  padding: 3px;
  font-size: 14px;
`;

export default function Page({ children, onBoardSelect, boardPresets }) {
  return (
    <div>
      <h1>Sudoku be Solved!</h1>
      <ContentWrapper>
        {children}
        <SidePanel>
          {boardPresets.map((preset, idx) =>
            <BoardSelectBtn onClick={() => onBoardSelect(0)}>
              {preset.name}
            </BoardSelectBtn>
          )}
        </SidePanel>
      </ContentWrapper>
    </div>
  );
}