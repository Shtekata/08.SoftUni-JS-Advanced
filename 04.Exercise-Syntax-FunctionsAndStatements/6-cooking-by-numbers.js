'use strict';

function solve(input) {
  let number = +input.shift();
  let output = '';
  const operation = {
    chop: (x) => x / 2,
    dice: (x) => Math.sqrt(x),
    spice: (x) => x + 1,
    bake: (x) => x * 3,
    fillet: (x) => x * 0.8,
  };

  input.forEach((element) => {
    number = operation[element](number);
    output += number + '\n';
  });

  return output.trim();
}

console.log(solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));
console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));
