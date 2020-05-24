'use strict';

function solve(number) {
  // const numberToString = number.toString();
  const numberToString = '' + number;
  let sum = +numberToString[0];
  let same = true;

  for (let i = 1; i < numberToString.length; i++) {
    sum += +numberToString[i];
    if (numberToString[i - 1] != numberToString[i]) {
      same = false;
    }
  }
  return same + '\n' + sum;
}

console.log(solve(2222222));
console.log(solve(1234));
