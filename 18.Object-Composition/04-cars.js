function solve(commands) {
  const commandMap = {
    create: (x, name, _, inheritName) => {
      if (!inheritName) {
        x[name] = {};
        return x;
      }
      const parrent = x[inheritName];
      x[name] = Object.create(parrent);
      return x;
    },
    set: (x, name, propName, propValue) => {
      x[name][propName] = propValue;
      return x;
    },
    print: (x, name) => {
      let result = [];
      for (const key in x[name]) {
        result.push(`${key}:${x[name][key]}`);
      }
      console.log(result.join(', '));
      return x;
    },
  };

  return commands.reduce((x, y) => {
    const [op, v1, v2, v3] = y.split(' ');
    return commandMap[op](x, v1, v2, v3);
  }, {});
}

solve([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
