'use strict';

function JSONToHTMLTable(jsonString) {
  let result = '<table>\n';
  const arr = JSON.parse(jsonString);
  const titleSet = new Set(arr.map((x) => Object.keys(x)).flat());
  const titleArray = Array.from(titleSet);
  result += '<tr><th>' + titleArray.join('</th><th>') + '</th></tr>\n';

  result = arr.reduce((acc, currItem) => {
    let innerResult = titleArray.reduce((titleAcc, currTitle) => {
      let value = currItem[currTitle];
      value =
        value === undefined
          ? ''
          : typeof value === 'number'
          ? value
          : value
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;');

      return titleAcc + '<td>' + value + '</td>';
    }, '');
    if (innerResult === '') return acc;
    return acc + '<tr>' + innerResult + '</tr>\n';
  }, result);

  return (result = result + '</table>');
}

const res = JSONToHTMLTable(
  '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"Aaa","Price":1.11}]'
);
console.log(res);
