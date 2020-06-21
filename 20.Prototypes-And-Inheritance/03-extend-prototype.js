function extendPrototype(Class) {
  Class.prototype.species = 'Human';
  Class.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  toString() {
    // const className = Object.getPrototypeOf(this).constructor.name;
    const className = this.constructor.name;
    return `${className} (name: ${this.name}, email: ${this.email})`;
  }
}

extendPrototype(Person);
const person = new Person('Pesho', 'r@gmail.com');
console.log(person.toSpeciesString());
