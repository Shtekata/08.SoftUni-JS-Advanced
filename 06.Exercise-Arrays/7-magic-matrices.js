'use strict';

function solve(matrix) {
  // let resultOne = [];
  // for (let row = 0; row < matrix.length; row++) {
  //   resultOne.push(matrix[row].map(Number).reduce((a, b) => a + b, 0));
  // }
  // let resultTwo = matrix.reduce(function (arr, row) {
  //   row.forEach(function (rowElement, i) {
  //     arr[i] = (arr[i] || 0) + rowElement;
  //   });
  //   return arr;
  // }, []);
  // return new Set(resultOne.concat(resultTwo)).size === 1;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // let sum = matrix[0].reduce((a, b) => a + b);
  // let cols = matrix.reduce((acc, cur, i, matrix) => {
  //   if (!acc[i]) {
  //     acc[i] = matrix.map((x) => x[i]);
  //   }
  //   return acc;
  // }, []);
  // let row = [...matrix];
  // return row.every(r => r.reduce((a, b) => a + b) === sum) && cols.every(c => c.reduce((a, b) => a + b) === sum);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // function sumRow(row) {
  //   return row.reduce((x, y) => x + y);
  // }
  // const transposedMatrix = matrix.map((row, i) => matrix.map(row => row[i]));
  // const firstRowSum = sumRow(matrix[0]);
  // let magicMatrix = true;
  // for (let i = 0; i < matrix.length; i++) {
  //   if (sumRow(matrix[i]) !== firstRowSum || sumRow(transposedMatrix[i]) !== firstRowSum) {
  //     magicMatrix = false;
  //     break;
  //   }
  // }
  // return magicMatrix;

  let sumRow = (x) => matrix[x].reduce((x, y) => x + y);
  let sumCol = (y) => matrix.map((x) => x[y]).reduce((x, y) => x + y);

  if (matrix.length > 0) {
    let targetSum = sumRow(0);

    for (let i = 1; i < matrix.length; i++) {
      let rowSum = sumRow(i);
      if (rowSum !== targetSum) {
        return false;
      }
    }

    for (let j = 0; j < matrix[0].length; j++) {
      let colSum = sumCol(j);
      if (colSum !== targetSum) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log(
  solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
