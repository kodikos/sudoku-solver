import Board from './board';

function validateGroup(group, x, y) {
	const actualValues = [];
	group.forEach((cell, idx) => {
		if (actualValues.includes(cell.value)) {
			cell.error = true;
		};
		if (cell.value !== null) actualValues.push(cell.value);
	});
}

export function validate(boardIn) {
	const board = Board(boardIn);
	board.forEachRow(validateGroup);
	board.forEachCol(validateGroup);
	board.forEachBlock(validateGroup);

	return board.getBoard();
}
