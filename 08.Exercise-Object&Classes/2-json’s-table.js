// function solve(input) {
//   const rows = [];
//   for (let line of input) {
//     const person = JSON.parse(line);
//     rows.push(createRow(person));
//   }
//   console.log('<table>');
//   console.log(rows.join('\n'));
//   console.log('</table>');

//   function createRow(person) {
//     return [
//       `\t<tr>`,
//       `\t\t<td>${person.name}</td>`,
//       `\t\t<td>${person.position}</td>`,
//       `\t\t<td>${person.salary}</td>`,
//       `\t</tr>`,
//     ].join('\n');
//   }
// }

// function solve(input) {
//     const arr = input.map(x => JSON.parse(x));
//     let result = '<table>';
//     result = arr.reduce((acc, curr) => {
//         const values = Object.values(curr);
//         return acc += '\n\t<tr>\n\t\t<td>' + values.join('</td>\n\t\t<td>') + '</td>\n\t</tr>';
//     }, result);
//     return result += '\n</table>';
// }

function solve(arr = []) {
    return `<table>\n` + arr
        .map(line => JSON.parse(line))
        .map(obj => `\t<tr>\n\t\t<td>${obj.name}</td>\n\t\t<td>${obj.position}</td>\n\t\t<td>${obj.salary}</td>\n\t</tr>`)
        .join('\n') + '\n</table>';
}

console.log(solve([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}',
]));
