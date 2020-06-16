function solve() {
  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
      order: ['carbohydrate', 'flavour'],
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
      order: ['carbohydrate', 'flavour'],
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
      order: ['carbohydrate', 'fat', 'flavour'],
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
      order: ['protein', 'fat', 'flavour'],
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
      order: ['protein', 'carbohydrate', 'fat', 'flavour'],
    },
  };

  const microelements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const operations = {
    restock,
    prepare,
    report,
  };

  function restock(element, qty) {
    microelements[element] += qty;
    return 'Success';
  }

  function prepare(recipe, qty) {
    const required = Object.assign({}, recipes[recipe]);
    // Object.keys(required).forEach((x) => {
    //   if (key !== 'order') {
    //     required[x] *= qty;
    //   }
    // });
    required.order.forEach((x) => required[x] *= qty);

    for (const element of required.order) {
      if (microelements[element] < required[element]) {
        return `Error: not enough ${element} in stock`;
      }
    }

    // Object.keys(required).forEach((x) => {
    //   if (x !== 'order') {
    //     microelements[x] - required[x];
    //   }
    // });
    required.order.forEach((x) => microelements[x] -= required[x]);

    return 'Success';
  }

  function report() {
    return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
  }

  function manager(command) {
      const tokens = command.split(' ');
      return operations[tokens[0]](tokens[1], +tokens[2]);
  }

  return manager;
}

// const manager = solve();
// const manager2 = new Manager();
// class Manager {}

let manager = solve();
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));
console.log(manager('restock protein 100'));
console.log(manager('restock carbohydrate 100'));
console.log(manager('restock fat 100'));
console.log(manager('restock flavour 100'));
console.log(manager('report'));
// 'protein=100 carbohydrate=100 fat=100 flavour=100'
console.log(manager('prepare apple 2'));
console.log(manager('report'));
// 'protein=100 carbohydrate=98 fat=100 flavour=96'
console.log(manager('prepare apple 1'));
console.log(manager('report'));
// 'protein=100 carbohydrate=97 fat=100 flavour=94'
