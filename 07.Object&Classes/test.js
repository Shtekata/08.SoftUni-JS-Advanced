'use strict';

const obj = {};
const key = 'key';
const value = 'value';
function setProp(obj, key, value) {
  return (obj[key] = value);
}
// console.log(obj.key);
setProp(obj, key, value);
console.log(obj.key);
////////////////////////////////////////////////////////////////////////////////
let obj1 = {
  getName: function () {},
};

let obj2 = {
  getName() {},
};
///////////////////////////////////////////////////////////////////////////////
Object.defineProperty(obj2, 'readonly', {
  value: 1000,
  writable: false,
});

let _readonly;
Object.defineProperty(obj2, 'readonly2', {
  // set: function (newValue) {
  //     _readonly = newValue;
  // },
  get() {
    return _readonly;
  },
});

Object.defineProperties(obj2, {});

function counter(count = 0) {
  if (count === 1000) {
    return count;
  }
  return counter(count + 1);
}

const result = counter();
console.log(result);
/////////////////////////////////////////////////////////////////////////////
function setMinValue(obj3, key, min) {
  let _value;
  Object.defineProperty(obj3, key, {
    set(newValue1) {
      if (newValue1 < min) {
        return;
      }
      _value = newValue1;
    },
    get() {
      return _value;
    },
  });
}

const obj3 = {};

setMinValue(obj3, 'num', 5);

obj3.num = 10;
console.log(obj3.num);
obj3.num = 1;
console.log(obj3.num);
///////////////////////////////////////////////////////////////////////
let obj4 = { name: 'Ivan' };
let a = JSON.stringify(obj4);
let b = JSON.stringify(obj4, null, 2);
console.log(a);
console.log(b);
///////////////////////////////////////////////////////////////////////
function createPerson(name, age) {
  return {
    name,
    getAge() {
      return age;
    },
  };
}

const ivanVan = createPerson('IvanVan', 35);
console.log(ivanVan.getAge());

function Person(name, age) {
  this.name = name;
  //   this.age = age;
  this.getAge = function () {
    return age;
  };
}

Person.test = 123;
// Person.prototype.test = 123;

Person.prototype.getData = function () {
  return this.name + ' ' + this.age;
};

const ivan = new Person('Ivan', 30);
// console.log(ivan.age);
console.log(ivan.getAge());
console.log(ivan.getData());
console.log(Person.test);

class Person2 {
  #prop;

  static test = 123;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getData() {
    return this.name + ' ' + this.age;
  }
}

let ivan2 = new Person2('Ivan2', 55);
let varTest = Person2.test;
console.log(ivan2.name);
console.log(ivan2.getData());
console.log(varTest);

class Test {
  prop = 135;
}
const test = new Test();
console.log(test.prop);
//////////////////////////////////////////////////////////////////////////////
Person.method = function (params) {
    this.method2();
};
Person.method2();