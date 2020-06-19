const obj1 = { height: 180 };
const obj2 = { name: 'Steven' };
const obj3 = { age: 22 };
const obj4 = { name: 'Peter', age: 35 };

const delegate = (x, y) => Object.assign(Object.create(x), y);
//const delegate = (x, y) => ({ ...Object.create(x), ...y });

let result = {};
result = delegate(result, obj4);
result = delegate(result, obj3);
result = delegate(result, obj2);
result = delegate(result, obj1);
console.log(result);
console.log(result.height);
console.log(result.name);
console.log(result.age);
/////////////////////////////////////////////////////////////////////
const objs = [
  { height: 180 },
  { name: 'Steven' },
  { age: 22 },
  { name: 'Peter', age: 35 },
];
const delegate2 = (x, y) => ({ ...Object.create(x), ...y });
const d = objs.reduceRight(delegate2, {});
console.log(d);
console.log(d.height);
