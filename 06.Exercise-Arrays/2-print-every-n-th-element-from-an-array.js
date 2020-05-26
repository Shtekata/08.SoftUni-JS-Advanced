'use strict';

// function solve(arr) {
//     const step = +arr.pop();
//     let result = [];

//     for (let i = 0; i < arr.length; i+=step) {
//         result.push(arr[i]);
//     }
//     return result.join('\n');
// }

function solve(arr) {
    const step = +arr.pop();
    return arr.filter((x, i) => i % step === 0).join('\n');
}

console.log(solve(['5', '20', '31', '4', '20', '2']));
console.log(solve(['dsa', 'asd', 'test', 'tset', '2']));
console.log(solve(['1', '2', '3', '4', '5', '6']));
