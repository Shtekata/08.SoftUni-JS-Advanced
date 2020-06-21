let bar = {
  me: `I'm b1`,
  speak: function () {
    console.log(`Hello, ${this.me}.`);
  },
};
bar.speak();

function Bar(name) {
  this.me = `I'm ${name}`;
  this.speak = function () {
    console.log(`Hello, ${this.me}.`);
  };
}
let b1 = new Bar('b1');
b1.speak();
