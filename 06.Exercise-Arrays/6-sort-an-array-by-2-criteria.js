'use strict';

function solve(arr) {
  return arr
    .sort(
      (x, y) =>
        x.length - y.length || x.toLowerCase().localeCompare(y.toLowerCase())
    )
    .join('\n');
}

console.log(solve(['alpha', 'beta', 'gamma']));
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(solve(['test', 'Deny', 'omen', 'Default']));
