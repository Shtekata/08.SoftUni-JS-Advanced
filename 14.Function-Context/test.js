function fullName() {
  return this.firstName + ' ' + this.lastName;
}

const ivan = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  // fullName:fullName,
  fullName,
};
console.log(ivan.fullName());

const test = {
  firstName: 'test1',
  lastName: 'test2',
  fullName,
};
console.log(test.fullName());
////////////////////////////////////////////////////////
const ivan2 = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  test: [1, 2, 3],
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(ivan2.fullName());

const test2 = {
  firstName: 'test1',
  lastName: 'test2',
  test: ivan.test,
  fullName: ivan2.fullName,
};
console.log(test.fullName());
////////////////////////////////////////////////////////
const fn = () => {
  console.log(this);
};
fn();
const test3 = {
  firstName: 'test1',
  lastName: 'test2',
  getName: () => {
    return this.firstName;
  },
};
console.log(test3.getName());
