function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.compare = function (p1, p2) {
  return p1.name === p2.name && p1.age === p2.age;
};

class Person2 {
  static compare(p1, p2) {
    return p1.name === p2.name && p1.age === p2.age;
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.items = [];
  }

  get itemsCount() {
    return this.items.length;
  }
}

function createPerson(name, age) {
  const test = 123;
  const obj = {
    name,
    age,
    items: [],
    get test() {
      return test;
    },
  };
  Object.defineProperty(obj, 'itemsCount', {
    get() {
      return obj.items.length;
    },
  });
  return obj;
}

const ivan = createPerson('Ivan', 5);
ivan.items.push('item 1');
console.log(ivan.itemsCount);

const config = {};
Object.defineProperty(config, 'apiKey', { value: 'fasdhjfk', writable: false });
