function solve() {
  // console.log(data);
  const tbody = document.querySelector('tbody');
  const [generate, buy] = [...document.querySelectorAll('button')];
  const [input, output] = [...document.querySelectorAll('textarea')];
  output.value = '';
  generate.addEventListener('click', onGenerate);
  buy.addEventListener('click', onBuy);

  function onGenerate(x) {
    const data = JSON.parse(input.value);
    for (const item of data) {
      const row = document.createElement('tr');
      const html = `<td><img src="${item.img}"/></td><td><p>${item.name}</
      p></td><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></
      td><td><input type="checkbox" /></td>`;
      row.innerHTML = html;
      tbody.appendChild(row);
    }
  }

  function onBuy(x) {
    const boughtItems = [...tbody.querySelectorAll('input')]
      .filter((x) => x.checked)
      .map((x) => x.parentNode.parentNode)
      .map((x) => ({
        name: x.children[1].textContent.trim(),
        price: +x.children[2].textContent,
        decFactor: +x.children[3].textContent,
      }));

    const result = [
      `Bought furniture: ${boughtItems.map((x) => x.name).join(', ')}`,
      `Total price: ${boughtItems
        .reduce((acc, curr) => (acc += curr.price), 0)
        .toFixed(2)}`,
      `Average decoration factor: ${
        boughtItems.reduce((acc, curr) => (acc += curr.decFactor), 0) /
        boughtItems.length
      }`,
    ];

    output.value = result.join('\n');
  }
}
