const personPrototype = {
  getName() {
    return this.name;
  },
};

function createPerson(name) {
  const obj = Object.create(personPrototype);
  obj.name = name;
  return obj;
}

const ivan = createPerson('Ivan');
const ivan2 = createPerson('Ivan2');
console.log(ivan.getName());
console.log(ivan2.getName());
