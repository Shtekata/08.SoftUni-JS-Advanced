'use strict';

let a = 5;
let b = 'name';

function solve(input) {
  let result;
  let inputType = typeof input;

  if (inputType === 'number') {
    result = (Math.pow(input, 2) * Math.PI).toFixed(2);
  } else
    result = `We can not calculate the circle area, because we receive a ${inputType}.`;

  return result;
}

console.log(solve(a));
console.log(solve(b));
