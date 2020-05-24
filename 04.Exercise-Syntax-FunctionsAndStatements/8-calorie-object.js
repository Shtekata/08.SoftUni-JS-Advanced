'use strict';

function solve(input) {
    const calorieCatalog = {};

  for (let i = 0; i < input.length - 1; i+=2) {
      const propName = input[i];
      const value = +input[i + 1];
      calorieCatalog[propName] = value;
  }

    return calorieCatalog;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(
  solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
);
