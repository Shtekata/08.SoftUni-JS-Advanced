'use strict';

function solve([x1, y1, x2, y2]) {
  let result = '';
  let output = '';

  output += chek(x1, y1, 0, 0);
  output += chek(x2, y2, 0, 0);
  output += chek(x1, y1, x2, y2);

  function chek(x1, y1, x2, y2) {
    let result = Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
    const isValid = result ? 'valid' : 'invalid';
    let output = `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}\n`;
    return output;
  }

  return output.trim();
}

console.log(solve([3, 0, 0, 4]));
console.log(solve([2, 1, 1, 1]));
