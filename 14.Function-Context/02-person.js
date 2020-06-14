function Person(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    set(newFullName) {
      if (newFullName.split(' ').length == 2) {
        [this.firstName, this.lastName] = newFullName.split(' ');
      }
    },
    get() {
      return this.firstName + ' ' + this.lastName;
    },
  });
}

class Person2 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  set fullName(newFullName) {
    if (newFullName.split(' ').length == 2) {
      [this.firstName, this.lastName] = newFullName.split(' ');
    }
  }
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

let person = new Person('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = 'George';
console.log(person.fullName); //George Ivanov
person.lastName = 'Peterson';
console.log(person.fullName); //George Peterson
person.fullName = 'Nikola Tesla';
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
let person2 = new Person2('Albert', 'Simpson');
console.log(person2.fullName); //Albert Simpson
person2.firstName = 'Simon';
console.log(person2.fullName); //Simon Simpson
person2.fullName = 'Peter';
console.log(person2.firstName); // Simon
console.log(person2.lastName); // Simpson
