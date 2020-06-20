function solve() {
  //   const proto = {};
  //   const instance = Object.create(proto);
  //   instance.extend = function (template) {
  //     for (const prop in template) {
  //       if (typeof template[prop] === 'function') {
  //         proto[prop] = template[prop];
  //       } else {
  //         instance[prop] = template[prop];
  //       }
  //     }
  //   };
  //   return instance;

  const instance = Object.create({});
  const proto = Object.getPrototypeOf(instance);
  instance.extend = function (template) {
    for (const prop in template) {
      if (typeof template[prop] === 'function') {
        proto[prop] = template[prop];
      } else {
        instance[prop] = template[prop];
      }
    }
  };
  return instance;
}

// Object.setPrototypeOf(obj, proto);

const myInstance = solve();
myInstance.extend({
  extensionMethod: function () {},
  extensionProperty: 'someString',
});
console.log(myInstance);
console.log(Object.getPrototypeOf(myInstance));
