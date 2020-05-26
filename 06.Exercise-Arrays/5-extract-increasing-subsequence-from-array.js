'use strict';

function solve(arr) {
  // let bigger = arr[0];
  // let result = [];
  // arr.map(x => {
  //     if (x >= bigger) {
  //         result.push(x);
  //         bigger = x;
  //     }
  // });
  /////////////////////////////////////////////////////////////////////////
  // return result.join('\n');
  //   return arr
  //     .reduce((acc, cur) => {
  //       let max = Math.max(...acc);
  //       if (cur >= max) {
  //         acc.push(cur);
  //       }
  //       return acc;
  //     }, [])
  //     .join('\n');
  ////////////////////////////////////////////////////////////////////////
  // let result = arr.filter((x, y) => x >= Math.max(...arr.slice(0, y)));
  // return result.join('\n');
  ////////////////////////////////////////////////////////////////////////
  //   let result = [arr.shift()];
  //   arr.filter((x) => {
  //     let biggest = Math.max(...result);
  //     x >= biggest ? result.push(x) : 'pass';
  //   });
  //   return result.join('\n');
  //////////////////////////////////////////////////////////////////////////
    let result = [arr.shift()];
    for (const x of arr) {
        (x >= result[result.length - 1]) ? result.push(x) : result;
    }
    return result.join('\n');
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));
