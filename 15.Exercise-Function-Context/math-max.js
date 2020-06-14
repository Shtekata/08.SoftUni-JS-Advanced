const a = 5;
const b = 1;
const c = 8;
const d = 6;

const arr = [a, b, c, d];

console.log(Math.max.apply(null, arr));
console.log(Math.max(a, b, c, d));
console.log(Math.max(...arr));
