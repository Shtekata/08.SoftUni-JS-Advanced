'use strict';

function solve(x, y) {
  let result = '';
  function inRange(value, maxValue) {
    return 0 <= value && value < maxValue;
  }
  let rowDirs = [0, +1, 0, -1];
  let colDirs = [+1, 0, -1, 0];
  let dir = 0;
  let row = 0;
  let col = 0;
  let matrix = [];

  for (let i = 0; i < x; i++) {
    matrix[i] = new Array(y).fill(null);
  }

  for (let i = 0; i < x * y; i++) {
    matrix[row][col] = i + 1;
    let nextRow = row + rowDirs[dir];
    let nextCol = col + colDirs[dir];
    if (
      !inRange(nextRow, x) ||
      !inRange(nextCol, y) ||
      matrix[nextRow][nextCol]
    ) {
      dir += 1;
      dir %= 4;
    }
    row += rowDirs[dir];
    col += colDirs[dir];
  }
  for (const line of matrix) {
    result += `${line.join(' ')}\n`;
  }
  return result;
}

console.log(solve(5, 5));
console.log(solve(3, 3));
