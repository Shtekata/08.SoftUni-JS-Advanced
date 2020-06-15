function test(fn) {
  const a = 50;
  return function () {
    console.log(a);
  };
}

test(() => console.log(1))();

const sayHallo = function () {
  return function () {
    console.log('Hello!');
  };
};

const myFunc = sayHallo();
myFunc();

const identity = (x) => x;
console.log([true, false, true, true].filter(identity));
console.log([{}, '', null, []].filter(identity));

function pure(x, y) {
  return x + y;
}
/////////////////////////////////////////////////////////////////////////
// function curry(fn) {}

// function getProp(propName, obj) {
//   let a = [];
//   obj.forEach((x) => {
//     a.push(x[propName]);
//   });
//   return a;
// }

// // const cGetProp = curry(getProp);
// // const getName = cGetProp('name');

// function getName(obj) {
//   return getProp('name', obj);
// }

// function getUsersNames(arry) {
//   return getName(arry);
// }

// let b = getUsersNames([
//   { name: 'Ivan', age: 20 },
//   { name: 'Test', age: 30 },
// ]);

// return b;

// const userNames=compose(getName, )
//////////////////////////////////////////////////////////////////
function curry(fn) {}

function getProp(propName, obj) {
  return obj[propName] || null;
}

// const cGetProp = curry(getProp);
// const getName = cGetProp('name');

function getName(obj) {
  return getProp('name', obj);
}

function getUsersNames(arry) {
  return arry.map(getName);
}

let a = getUsersNames([
  { name: 'Ivan', age: 20 },
  { name: 'Test', age: 30 },
]);

console.log(a);
////////////////////////////////////////////////////////////////////////
(function () {})();

// const myLib = (function (global) {

//     function add(x, y) { return x + y; }
//     function sub(x, y) { return x - y; }

//     //...

//     return {
//         add,
//         sub
//     };

// }(window||global))

// console.log(myLib.add(4, 89));

const currentConfig = { initialValue: 100 };
const myLib = (function (global, config) {
    let someValue =
        typeof config.initialValue === 'number' ? config.initialValue : 100;

    function add(x, y) {
        return x + y + someValue;
    }
    function sub(x, y) {
        return x - y - someValue;
    }

    //...

    return {
        add,
        sub,
        changeSomeValue(newValue) {
            someValue = newValue;
        },
    };
})(global, currentConfig);
// not change... closure
currentConfig.initialValue = 1000;

console.log(myLib.add(4, 89));
myLib.changeSomeValue(50);
console.log(myLib.sub(4, 89));

const f = (function () {
  let counter = 0;
  return function () {
    console.log(counter++);
  };
})();

f();
f();
f();
