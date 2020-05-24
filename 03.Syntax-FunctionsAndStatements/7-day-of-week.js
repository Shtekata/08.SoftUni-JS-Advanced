'use strict';

let a = 'Monday';
let b = 'Friday';
let c = 'Invalid';

function solve(input) {
  let result;
  switch (input) {
    case 'Monday':
      result = 1;
      break;
    case 'Tuesday':
      result = 2;
      break;
    case 'Wednesday':
      result = 3;
      break;
    case 'Thursday':
      result = 4;
      break;
    case 'Friday':
      result = 5;
      break;
    case 'Saturday':
      result = 6;
      break;
    case 'Sunday':
      result = 7;
      break;
    default:
      result = 'error';
      break;
  }
  return result;
}

console.log(solve(a));
console.log(solve(b));
console.log(solve(c));
