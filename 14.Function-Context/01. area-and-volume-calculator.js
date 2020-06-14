function area() {
  return this.x * this.y;
}

function vol() {
  return this.x * this.y * this.z;
}

function solve(area, vol, inputJSON) {
  const objectArray = JSON.parse(inputJSON);
  return objectArray.map((x) => {
    const a = Math.abs(area.call(x));
    const v = Math.abs(vol.call(x));
    return { area: a, volume: v };
  });
}

const jsonString =
    '[{"x":1,"y":2,"z":3},{"x":4,"y":5,"z":6},{"x":7,"y":8,"z":9}]';
console.log(solve(area, vol, jsonString));
