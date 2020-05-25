const someArray = [1, 2, 3, 4];

function addElement(arr, el) {
  arr.push(el);
}

addElement(someArray, 5);

let arr = [...someArray, 1, 2, 8, 9];

// console.log(someArray);
// console.log(arr);

function test1([a, b, c, d]) {
  //console.log(a, b, c, d);
}
test1(arr);

function test2(a, b, c, d) {
  //   console.log(a, b, c, d);
}
test2(...arr);

function test3(...rest) {
  //   console.log(rest);
}
test3(3, 4, 5, 6, 7);

function test4(...rest) {
  //   console.log(rest);
}
test4(...arr);

function test5(a, b, c, ...rest) {
  //   console.log(a, b, c);
  //   console.log(rest);
}
test5(...arr);

let [a, b, ...rest] = arr;
// console.log(a);
// console.log(b);
// console.log(rest);

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.slice(0, 2).concat(numArr.slice(4));
// console.log(newNumArr);
function removeElementAt(arr, index, newElements) {
  const items = Array.isArray(newElements) ? newElements : [];
  // return arr.slice(0, index).concat(items, numArr.slice(index + 1));
  return [...arr.slice(0, index), ...items, ...arr.slice(index + 1)];
}
// console.log(removeElementAt(numArr, 3, [45, 46, 47]));

function range(start, end) {
  return new Array(end - start + 1).fill(null).map((_, index) => index + start);
}
// console.log(range(2, 5));
// range(2, 5).fill(null).forEach(x => console.log(x));

const newMap = [1, 2, 3].map((x) => x + 1);
// console.log(newMap);

let reduceNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, curr) => {
  // console.log(acc);
  // console.log(curr);
  return (acc * curr) / 5;
}, 2000);
// console.log(`Reduced numer is: ${reduceNumb}`);
// console.log([1, 2, 3].reduce((acc, curr) => acc + curr, 0));
// console.log([1, 2, 3].reduce((acc, curr, index) => {
//     return index === 1 ? acc : acc.concat(curr + 1);
// }, []));

const names = [
  { name: 'Ivan', age: 20 },
  { name: 'Pesho', age: 30 },
].map((x) => x.name);
// console.log(names);

const m = [
  [9, 3],
  [8, 3],
  [6, 7],
  [6, 9],
];
const sortFn = (a, b) => a - b;
const xm = m.map((i) => i[0]).sort(sortFn);
const ym = m.map((i) => i[1]).sort(sortFn);
const res1 = xm.map((item, index) => [item, ym[index]]);
const res2 = xm.reduce(
  (acc, curr, index) => acc.concat([[curr, ym[index]]]),
  []
);
console.log(res1);
console.log(res2);
