"use strict";

let a = [1, 2, 3];
let b = [2, 4, 8, 16];

function solve(input){
    let result1 = aggregate(input, 0, (a, b) => a + b);
    let result2 = aggregate(input, 0, (a, b) => a + 1 / b);
    let result3 = aggregate(input, '', (a, b) => a + b);

   function aggregate (arr, initVal, func) {
       let val = initVal;
       for (let i = 0; i < arr.length; i++) {
           val = func(val, arr[i]);
       }
       return val;
   }
   
   return `${result1} \n${result2} \n${result3}`;
}

console.log(solve(a));
console.log(solve(b));