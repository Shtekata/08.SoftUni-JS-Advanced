class SpyClass {
  constructor(obj, methodName) {
    this.count = 0;
    const method = obj[methodName];
    if (!method) {
      throw new Error('No such method!');
    }
    obj[methodName] = function (...args) {
      this.count++;
      //   return method.call(obj, ...args);
      return method.apply(obj, args);
    }.bind(this);
  }
}

const objClass = {
  test: function (a, b, c) {
    return this.data;
  },
  data: 1,
};
const spyClass = new SpyClass(objClass, 'test');

objClass.test(1, 2, 3);
objClass.test(4);
objClass.test(5);
console.log(spyClass);
//////////////////////////////////////////////////////////////////////
function Spy(obj, methodName) {
  const spy = { count: 0 };
  const method = obj[methodName];
  if (!method) {
    throw new Error('No such method!');
  }
  obj[methodName] = function (...args) {
    //   spy.count++;
    this.count++;
    //   return method.call(obj, ...args);
    return method.apply(obj, args);
    // };
  }.bind(spy);
  return spy;
}

let obj = {
  method: () => 'invoked',
};
let spy = Spy(obj, 'method');

obj.method();
obj.method();
obj.method();

console.log(spy); // { count: 3 }
let spy2 = Spy(console, 'log');

console.log(spy2); // { count: 1 }
console.log(spy2); // { count: 2 }
console.log(spy2); // { count: 3 }
////////////////////////////////////////////////////////////////////
function Spy(obj, methodName) {
  this.count = 0;
  const method = obj[methodName];
  if (!method) {
    throw new Error('No such method!');
  }
  obj[methodName] = function (...args) {
    this.count++;
    //   return method.call(obj, ...args);
    return method.apply(obj, args);
  }.bind(this);
}
