'use strict';

function solve(matrix) {
  return matrix.reduce((acc, currRow, rowIndex) => {
    const currentCount = currRow.reduce((acc, currItem, itemIndex) => {
      if (currItem === currRow[itemIndex + 1]) {
        acc += 1;
      }
      if (currItem === (matrix[rowIndex + 1] || [])[itemIndex]) {
        acc += 1;
      }
      return acc;
    }, 0);
    return acc + currentCount;
  }, 0);
}

console.log(
  solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
  ])
);
console.log(
  solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
  ])
);
console.log(
  solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5'],
  ])
);
