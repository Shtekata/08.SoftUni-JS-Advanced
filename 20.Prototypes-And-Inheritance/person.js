function Person(name, email) {
  this.email = email;

  this.getName = function () {
    return name;
  };

  this.setName = function (newName) {
    name = newName;
    return name;
  };
}

Person.prototype.getAllData = function () {
  return {
    name: this.getName(),
    email: this.email,
  };
};

const ivan = new Person('Ivan', 'ivan@gmail.com');
// console.log(ivan);
// console.log(ivan.getName());
// ivan.setName('Iva');
// console.log(ivan.getName());
// console.log(ivan.getAllData());

function Teacher(name, email, subject) {
  Person.call(this, name, email); // super
  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype); // extends
Teacher.prototype.getAllData = function () {
  //   const proto = Object.getPrototypeOf(this);
  //   const protoProto = Object.getPrototypeOf(proto);
  return {
    // ...protoProto.getAllData.call(this),
    ...Person.prototype.getAllData.call(this), // super.getAllData();
    subject: this.subject,
  };
};

const pesho = new Teacher('Pesho', 'pesho@gmail.com', 'Math');
console.log(pesho.getName());
console.log(pesho.getAllData());
