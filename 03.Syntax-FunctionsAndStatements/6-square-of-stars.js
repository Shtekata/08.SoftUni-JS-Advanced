'use strict';

let a = 1;
let b = 10;

function solve(input = 5) {
  for (let i = 0; i < input; i++) {
    console.log('* '.repeat(input));
  }
}

solve();
solve(a);
solve(b);
