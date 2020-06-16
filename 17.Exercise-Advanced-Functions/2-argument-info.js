function solve() {
  //   const argTypes = {};

  //   for (const arg of arguments) {
  //     const type = typeof arg;
  //     console.log(`${type}: ${arg}`);
  //     // if (argTypes.hasOwnProoerty(type))
  //     if (argTypes[type] === undefined) {
  //       argTypes[type] = 0;
  //     }
  //     argTypes[type]++;
  //   }

  //    const argTypes = Array.from(arguments).reduce((p, c) => {
  //      const type = typeof c;
  //      console.log(`${type}: ${c}`);

  //      if (!p[type]) {
  //        p[type] = 0;
  //      }
  //      p[type]++;
  //      return p;
  //    }, {});
  /////////////////////////////////////////////////////////////////////////////////////////
  //   const argTypes = [];
  //   const index = {};
  //   const result = {};

  //   for (const arg of arguments) {
  //     const type = typeof arg;
  //     console.log(`${type}: ${arg}`);

  //     let argIndex = index[type];
  //     if (argIndex === undefined) {
  //       argIndex = argTypes.length;
  //       argTypes.push(0);
  //       index[type] = argIndex;
  //     }
  //     argTypes[argIndex]++;
  //   }

  //   function print(index, argTypes) {
  //     Object.keys(index).forEach((x) => {
  //       result[x] = argTypes[index[x]];
  //     });
  //     Object.entries(result).sort((x, y) => y[1] - x[1])
  //       .forEach(([x, y]) => {
  //          console.log(`${x} = ${y}`);
  //       });
  //   }
  //   print(index, argTypes);
  /////////////////////////////////////////////////////////////////////////////////
  const argTypes = [];
  const index = {};

  for (const arg of arguments) {
    const type = typeof arg;
    console.log(`${type}: ${arg}`);

    let argIndex = index[type];
    if (argIndex === undefined) {
      argIndex = argTypes.length;
      argTypes.push({
        type,
        count: 0,
      });
      index[type] = argIndex;
    }
    argTypes[argIndex].count++;
  }

  argTypes
    .sort((x, y) => y.count - x.count)
    .forEach((x) => console.log(`${x.type} = ${x.count}`));
}

// solve(
//   'peter',
//   5,
//   { propName: 'propValue' },
//   function () {
//     console.log('Hello word!');
//   },
//   () => {}
// );

solve(
  'cat',
  'ghj',
  42,
  5,
  89,
  function () {
    console.log('Hello world!');
  },
  'dfg',
  () => {},
  9,
  5
);
