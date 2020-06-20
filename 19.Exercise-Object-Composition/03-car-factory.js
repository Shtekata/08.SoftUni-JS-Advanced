function solve({ model, power, color, carriage, wheelsize }) {
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  const car = {
    model,
    carriage: {
      type: carriage,
      color,
    },
  };

  //   for (const engine of engines) {
  //     if (engine.power >= descriptor.power) {
  //       car.engine = Object.assign(engine);
  //       break;
  //     }
  //   }
  //   car.engine = engines.filter((x) => x.power >= descriptor.power)[0];
  car.engine = engines.find((x) => x.power >= power);

  let wheels = 0;
  wheelsize % 2 ? (wheels = wheelsize) : (wheels = wheelsize - 1);
  car.wheels = new Array(4).fill(wheels);

  return car;
}

const car = solve({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 16,
});
console.log(car);
