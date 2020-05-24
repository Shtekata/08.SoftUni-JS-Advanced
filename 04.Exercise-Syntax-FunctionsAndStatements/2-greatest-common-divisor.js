"use strict";

function solve(a, b) {
  //   //   if (a > b) {
  //   //     a = a + b;
  //   //     b = a - b;
  //   //     a = a - b;
  //   //   }

  //   const smallNumb = Math.min(a, b);

  //   let num;

  //   for (let i = smallNumb; i >= 1; i--) {
  //     if (a % i == 0 && b % i == 0) {
  //       num = i;
  //       return num;
  //     }
  //   }
  let small = Math.min(a, b);
  let large = Math.max(a, b);
  let reminder = 1;

  do {
    reminder = large % small;
    large = small;
    small = reminder;
  } while (reminder != 0);

  return large;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));
