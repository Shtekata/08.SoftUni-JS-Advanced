'use strict';

function solve(arr) {
  let n = +arr.pop();
  n = n % arr.length;

  //   for (let i = 0; i < n; i++) {
  //     arr.unshift(arr.pop());
  //   }

  n == 0 ? arr : arr = arr.slice(-n).concat(arr.slice(0, arr.length - n));

  return arr.join(' ');
}

console.log(solve(['1', '2', '3', '4', '2']));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']));
