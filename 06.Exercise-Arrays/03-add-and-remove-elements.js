'use strict';

function solve(arr) {
  let result = [];

  arr.forEach((x, i) => {
    x === 'add' ? result.push(i + 1) : result.pop();
  });

  return result.length === 0 ? (result = 'Empty') : result.join('\n');
}

console.log(solve(['add', 'add', 'add', 'add']));
console.log(solve(['add', 'add', 'remove', 'add', 'add']));
console.log(solve(['remove', 'remove', 'remove']));
