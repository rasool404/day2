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
  // j represents on column
  for (let j = 0; j < 8; j++) {
    // check if the current column matches the passed in column
    if (j !== col) {
      if (board[row][j] === value) {
        return false;
      }
    }
  }

  return true;
}

function validColumn(board, row, col, value) {
  // j represents on row
  for (let i = 0; i < 8; i++) {
    // check if the current row matches the passed in row
    if (i !== row) {
      if (board[i][col] === value) {
        return false;
      }
    }
  }

  return true;
}
