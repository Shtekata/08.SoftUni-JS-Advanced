'use strict';

function solve(steps, footprint, speed) {
  const distance = steps * footprint;
  let time = Math.round((distance / speed) * 3.6);
  time += Math.floor(distance / 500) * 60;

  const seconds = time % 60;
  time -= seconds;
  time /= 60;
  const minutes = time % 60;
  time -= minutes;
  time /= 60;
  const hourse = time;

  function pad(num) {
      return ('0' + num).slice(-2);
  }

  return `${pad(hourse)}:${pad(minutes)}:${pad(seconds)}`;
}

console.log(solve(40123, 0.6, 5));
console.log(solve(2564, 0.7, 5.5));
