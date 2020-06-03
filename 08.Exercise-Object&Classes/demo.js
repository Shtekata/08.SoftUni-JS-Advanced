class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._ssn = undefined;
  }

  get hello() {
    return `${this.name} is ${this.age} years old and says Hello!`;
  }

  get SSN() {
    return this._ssn;
  }

  set SSN(value) {
    if (value > 1000000 && value < 9999999) {
      this._ssn = value;
    } else throw new Error('Value must be between 1000000 and 9999999');
  }

  sayHallo() {
    console.log(`${this.name} is ${this.age} years old and says Hello!`);
  }
}

const myPerson = new Person('Peter', 29);
myPerson.sayHallo();
console.log(myPerson.hello);
myPerson.name = 'Gosho';
console.log(myPerson.hello);

console.log(myPerson.SSN);
myPerson.SSN = 1894567;
console.log(myPerson.SSN);

const database = [
  {
    id: 1234,
    prop: 'string',
  },
  {
    id: 412,
    prop: 'string',
  },
  {
    id: 223,
    prop: 'string',
  },
];

const catalog = {
  1234: {
    id: 1234,
    prop: 'string',
  },
  412: {
    id: 412,
    prop: 'string',
  },
  223: {
    id: 223,
    prop: 'string',
  },
};

catalog['412'].id;