"use strict";

let a = 5;
let b = -3;
let c = 16;

function solve(num1, num2, num3){
    let args = Array.from(arguments);
    let result = args[0];

    for (let i = 0; i < args.length; i++) {
    if (result < args[i]) { result = args[i]; }
    }

    return 'The largest number is ' + result + '.';
}

console.log(solve(a, b, c)); 