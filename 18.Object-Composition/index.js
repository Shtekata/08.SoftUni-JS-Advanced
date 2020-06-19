function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, currFn) => currFn(acc), x);
  };
}

const obj1 = { name: 'Ivan', age: 20 };
const obj2 = { age: 30 };
const obj3 = { test: 123 };

function concatObj(o1, o2, maintainExisting) {
  return maintainExisting ? { ...o1, ...o2 } : { ...o2, ...o1 };
  // return maintainExisting ? Object.assign({}, o1, o2) : Object.assign({}, o2, o1);
}

let result = {};
result = concatObj(result, obj1, true);
result = concatObj(result, obj2, true);
result = concatObj(result, obj3, true);
console.log(result);
////////////////////////////////////////////////////////////
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}

const ivan = new Person('Ivan');
console.log(ivan.getName());

class Person2 {
    constructor(name) {
        this.name = name;
    }
  get Name() {}
}

