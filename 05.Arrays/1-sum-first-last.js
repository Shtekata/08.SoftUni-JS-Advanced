'use strict';

function solve(arr) {
  const a = +arr[0];
  const b = +arr[arr.length - 1];
  return a + b;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));
