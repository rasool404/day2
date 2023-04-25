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

const validSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value !== ".") {
        if (
          !validRow(board, i, j, value) ||
          !validColumn(board, i, j, value) | !validBox(board, i, j, value)
        ) {
          return false;
        }
      }
    }
  }
  return true;
};

const validRow = (board, row, col, value) => {
  for (let j = 0; j < 8; j++) {
    if (j !== col) {
      if (board[row][j] === value) {
        return false;
      }
    }
  }

  return true;
};
