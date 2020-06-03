// function solve(input) {
//   const catalog = {};

//   for (let line of input) {
//     // const arr = line.split(' : ');
//     // const product = line[0];
//     // const price = line[1];
//     const [product, price] = line.split(' : ');
//     const letter = product[0];
//     if (catalog.hasOwnProperty(letter) === false) {
//       catalog[letter] = {};
//     }
//     catalog[letter][product] = price;
//   }

//   const sortedKeys = Object.keys(catalog).sort((x, y) => x.localeCompare(y));
//   for (let key of sortedKeys) {
//     console.log(key);
//     const sortedProducts = Object.keys(catalog[key]).sort((x, y) =>
//       x.localeCompare(y)
//     );
//       for (let product of sortedProducts) {
//           console.log(`  ${product}: ${catalog[key][product]}`);
//     }
//   }
// }

function solve(input) {
    let sortedArr = input.sort();

    let firstLetter = sortedArr[0][0];
    console.log(firstLetter);
    for (let string of sortedArr) {
        if (string[0] !== firstLetter) {
            firstLetter = string[0];
            console.log(firstLetter);
        }
        let [key, value] = string.split(' : ');
        console.log(` ${key}: ${value}`);
    }
}

solve([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
