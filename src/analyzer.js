import Board from './board';

const getAllValues = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];

const valuesInGroup = (group) => group.filter((c) => c.value).map((c) => c.value);

function validateGroup(group, x, y) {
	const actualValues = [];
	let groupError = false;

	group.forEach((cell, idx) => {
		if (actualValues.includes(cell.value)) {
			cell.error = true;
			groupError = true;
		};
		if (cell.value !== null) actualValues.push(cell.value);
	});
	
	if (groupError) {
		group.forEach((cell) => cell.groupError = true);
	}
}

export function validate(boardIn) {
	const board = Board(boardIn);
	board.forEachCell((cell) => { cell.error = false; cell.blockError = false });
	board.forEachRow(validateGroup);
	board.forEachCol(validateGroup);
	board.forEachBlock(validateGroup);

	return board.getBoard();
}

export function fillPossibilities(boardIn) {
	const board = Board(boardIn);
	board.forEachCell((cell) => cell.possibles = []);
	board.forEachCell((cell, x , y) => {
		const rowValues = valuesInGroup(board.getRow(y));
		const colValues = valuesInGroup(board.getCol(x));
		const blockValues = valuesInGroup(board.getBlockOf(x, y));
		//	Perform a union of the above
		const allValues = [...new Set([...rowValues, ...colValues, ...blockValues])];
		//	Perform a dissect against all possible values
		const valuesLeft = getAllValues().filter((v) => !allValues.includes(v));
		cell.possibles = valuesLeft;
	});
	return board.getBoard();
}