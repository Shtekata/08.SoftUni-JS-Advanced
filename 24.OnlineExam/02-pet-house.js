function solve() {
  class Pet {
    constructor(owner, name) {
      this.owner = owner;
      this.name = name;
      this.comments = [];
    }

    addComment(comment) {
      const isExist = this.comments.find((x) => x === comment);
      if (isExist === undefined) {
        this.comments.push(comment);
        return 'Comment is added.';
      } else {
        return 'This comment is already added!';
      }
    }

    feed() {
      return `${this.name} is fed`;
    }

    toString() {
      const resultLine1 = [`Here is ${this.owner}'s pet ${this.name}.`];
      const resultLine2 = [];
      if (this.comments.length > 0) {
        this.comments.forEach((x) => resultLine2.push(x));
        resultLine1.push('Special requirements: ' + resultLine2.join(', '));
      }
      return resultLine1.join('\n');
    }
  }

  class Cat extends Pet {
    constructor(owner, name, insideHabits, scratching) {
      super(owner, name);
      this.insideHabits = insideHabits;
      this.scratching = scratching;
    }

    feed() {
      return super.feed() + ', happy and purring.';
    }

    toString() {
      const result = [super.toString()];
      result.push('Main information:');
      const resutLine =
        `${this.name} is a cat with ${this.insideHabits}` +
        (this.scratching === true ? ', but beware of scratches.' : '');
      result.push(resutLine);
      return result.join('\n');
    }
  }

  class Dog extends Pet {
    constructor(owner, name, runningNeeds, trainability) {
      super(owner, name);
      this.runningNeeds = runningNeeds;
      this.trainability = trainability;
    }

    feed() {
      return super.feed() + ', happy and wagging tail.';
    }

    toString() {
      const result = [super.toString()];
      result.push('Main information:');
      const resutLine =
        `${ this.name } is a dog with need of ${ this.runningNeeds }km running every day and ${ this.trainability } trainability.`;
      result.push(resutLine);
      return result.join('\n');
    }
  }

  return {
    Pet,
    Cat,
    Dog,
  };
}

let classes = solve();
// let pet = new classes.Pet('Ann', 'Merry');
// console.log(pet.addComment('likes bananas'));
// console.log(pet.addComment('likes sweets'));
// console.log(pet.addComment('likes sweets'));
// console.log(pet.feed());
// console.log(pet.toString());

// let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
// console.log(cat.addComment('likes to be brushed'));
// console.log(cat.addComment('sleeps a lot'));
// console.log(cat.feed());
// console.log(cat.toString());

let dog = new classes.Dog('Susan', 'Max', 5, 'good');
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());
