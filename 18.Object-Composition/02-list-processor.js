function solve(commands) {
  const commandMap = {
    add: (x, word) => x.concat(word),
    remove: (x, word) => x.filter((x) => x !== word),
    print: (x) => {
      console.log(x);
      return x;
    },
  };

  return commands
    .reduce(function (x, y) {
      const [op, ...others] = y.split(' ');
      const word = others.join(' ');
        // if (op === 'add') {
        //   return x.concat(word);
        // } else if (op === 'remove') {
        //   return x.filter((x) => x !== word);
        // } else {
        //   console.log(x);
        //   return x;
        // }
      return commandMap[op](x, word);
    }, [])
    .join(',');
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
