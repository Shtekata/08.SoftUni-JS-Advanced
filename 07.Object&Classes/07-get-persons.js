'use strict';

class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    const fN = this.firstName === undefined ? '' : this.firstName;
    const lN = this.lastName === undefined ? '' : ' ' + this.lastName;
    const aG = this.age === undefined ? '' : 'age: ' + this.age;
    const eM = this.email === undefined ? '' : 'email: ' + this.email;
    let res = '';
    if (aG !== '' && eM !== '') {
      res = ` (${aG}, ${eM})`;
    } else if (aG !== '') {
      res = ` (${aG})`;
    } else if (eM !== '') {
      res = ` (${eM})`;
    } else res = '';
    return `${fN}${lN}${res}`;
  }
}

function getPersons() {
  let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
  let person2 = new Person('SoftUni');
  let person3 = new Person('Stephan', 'Johnson', 25);
  let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

  const result = [
    person1.toString(),
    person2.toString(),
    person3.toString(),
    person4.toString(),
  ];

  return result;
}

console.log(getPersons());
