function solution1(num1) {
    const num = num1;
    return function (num2) {
        return num + num2;
    }
}

function solution(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
