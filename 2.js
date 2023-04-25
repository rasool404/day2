const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function validRow(board, row, col, value) {
  for (let j = 0; j < 8; j++) {
    if (j !== col) {
      if (board[row][j] === value) {
        return false;
      }
    }
  }
  return true;
}

function validColumn(board, row, col, value) {
  for (let i = 0; i < 8; i++) {
    if (i !== row) {
      if (board[i][col] === value) {
        return false;
      }
    }
  }
  return true;
}

function validBox(board, row, col, value) {
  const startRow = row - (row % 3),
    startCol = col - (col % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (i !== row && j !== col) {
        if (board[i][j] === value) {
          return false;
        }
      }
    }
  }
  return true;
}
