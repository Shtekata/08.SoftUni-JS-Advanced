'use strict';

function solve([speed, area]) {
  const limits = { motorway: 130, interstate: 90, city: 50, residential: 20 };
  let output = '';

  let printMessage = (speed, limit) => {
    if (speed > limit + 40) {
      output = 'reckless driving';
    } else if (speed > limit + 20) {
      output = 'excessive speeding';
    } else if (speed > limit) {
      output = 'speeding';
    }
  };

  printMessage(speed, limits[area]);

  return output;
}

console.log(solve([40, 'city']));
console.log(solve([21, 'residential']));
console.log(solve([120, 'interstate']));
console.log(solve([200, 'motorway']));
