'use strict';

function solve(input) {
  return input
    .split(/\.\s+|\.|,\s+|,|\/|!|\?|\s+|-|_|'|"/g)
    .filter((word) => word)
    .join(', ')
    .toString()
    .toUpperCase();
}

console.log(solve('Hi, how are you?'));
console.log(solve('hello'));
