function curry(fn) {
  return function helper(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    }
    return function (...newArgs) {
      return helper(...args.concat(newArgs));
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const cSum = curry(sum);

// function sum(a) {
//   return function (b) {
//       return function (c) {
//           return a + b + c;
//     };
//   };
// }

console.log(cSum(1)(2)(3));
console.log(cSum(1, 2)(3));
console.log(cSum(1, 2, 3));
console.log(cSum(1)(2, 3));

const addThree = cSum(1)(2);
const addFour = cSum(2)(2);

function compose(...fns) {
  return function (val) {
    return fns.reduceRight(function (acc, currFn) {
      return currFn(acc);
    }, val);
  };
}

const operation = compose(addThree, addFour);
console.log(operation(10));

function getProp(name, obj) {
  return obj[name];
}

function map(fn, arr) {
  return arr.map((x) => fn(x));
}

function filter(pred, arr) {
  return arr.filter((x) => pred(x));
}

const cGetProp = curry(getProp);
const cMap = curry(map);
const cFilter = curry(filter);

const getName = cGetProp('name');
const mapUserNames = cMap(getName);
const lengthLargerThan3 = cFilter((x) => x.length > 3);

const arr = [
  { name: 'a', age: 1 },
  { name: 'ab', age: 2 },
  { name: 'abc', age: 3 },
  { name: 'abcd', age: 4 },
  { name: 'abcde', age: 5 },
];

const processUsers = compose(lengthLargerThan3, mapUserNames);
console.log(processUsers(arr));

function numGenerator() {
  let a = 0;
  return function () {
    return console.log(++a);
  };
}

const a = numGenerator();
a();
a();
a();
