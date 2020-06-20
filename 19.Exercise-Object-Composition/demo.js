const a = {
  propA: 5,
  propB: 'MyString',
};

const b = {
  someFunc: function () {
    console.log('hi! ' + this.propB);
  },
};

Object.assign(a, b);
a.someFunc();

const c = Object.assign({}, a, b);
c.someFunc();
console.log(c);

const d = Object.create(a);
d.instanceProp = 'on instance';
a.someFunc();
console.log(d);
console.log(d.__proto__);

const e = Object.create(Object.assign(a));

class Parrent {}
class Child extends Parrent {}

console.log('Properties of child:');
for (const prop in d) {
  console.log(prop, d[prop]);
}
console.log('Properties of child:');
for (const prop in d) {
  if (d.hasOwnProperty(prop)) {
    console.log(prop, d[prop]);
  }
}
Object.entries(d);
Object.keys(d);
