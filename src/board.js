
// Blocks are the 3x3 squares on the grid. 
// Groups can be any row, col or block, because they are just an array of Cells

const groupIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const blockIndices = [0, 1, 2];

export default function boardObj(board) {
  const getRow = (y) => board[y];
  const getCol = (x) => board.map((row) => row[x]);
  const getBlockAt = (bx, by) => [by * 3, by * 3 + 1, by * 3 + 2]
    .map((y) => [bx * 3, bx * 3 + 1, bx * 3 + 2]
      .map((x) => board[y][x])).flat();

  return {
    getBoard: () => board,
    getRow,
    getCol,
    getBlockAt,

    getBlockOf: (x, y) => getBlockAt(
      Math.floor(x / 3), 
      Math.floor(y / 3)
    ),

    forEachRow: (cb) => groupIndices.map((y) => cb(getRow(y), y)),

    forEachCol: (cb) => groupIndices.map((x) => cb(getCol(x), x)),

    forEachBlock: (cb) => blockIndices.map(
      (by) => blockIndices.map(
        (bx) => cb(getBlockAt(bx, by), bx, by))),

    forEachCell: (cb) => board.forEach((row, y) => row.forEach((cell, x) => cb(cell, x, y))),
  }
}
