"use strict";

let a = 5;
let b = 6;
let c = '+';

function solve(num1, num2, operator){
    const cases = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    };
    console.log(cases[operator] (num1, num2));
}

solve(a, b, c);