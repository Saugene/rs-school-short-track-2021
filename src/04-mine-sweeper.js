/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const res = [];
  const rows = matrix.length;
  const columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    res.push([]);
    for (let j = 0; j < columns; j++) {
      res[i][j] = 0;
      if (i !== 0) {
        if (matrix[i - 1][j]) {
          res[i][j]++;
        }
      }
      if (j !== columns - 1) {
        if (matrix[i][j + 1]) {
          res[i][j]++;
        }
      }
      if (i !== rows - 1) {
        if (matrix[i + 1][j]) {
          res[i][j]++;
        }
      }
      if (j !== 0) {
        if (matrix[i][j - 1]) {
          res[i][j]++;
        }
      }
      if (i !== 0 && j !== 0) {
        if (matrix[i - 1][j - 1]) {
          res[i][j]++;
        }
      }
      if (i !== 0 && j !== columns - 1) {
        if (matrix[i - 1][j + 1]) {
          res[i][j]++;
        }
      }
      if (i !== rows - 1 && j !== 0) {
        if (matrix[i + 1][j - 1]) {
          res[i][j]++;
        }
      }
      if (j !== columns - 1 && i !== rows - 1) {
        if (matrix[i + 1][j + 1]) {
          res[i][j]++;
        }
      }
    }
  }
  return res;
}

module.exports = minesweeper;
