function solve() {
  const tbody = document.querySelector('tbody');
  const items = tbody.querySelectorAll('tr');
  tbody.addEventListener('click', parseTable);

  function parseTable(x) {
    const row = x.target.parentNode;
    //  const items = row.parentNode.children;
    if (row.nodeName === 'TR') {
      if (row.style.backgroundColor !== '') {
        row.style.backgroundColor = '';
      } else {
        [...items].forEach((x) => {
          x.style.backgroundColor = '';
        });
        row.style.backgroundColor = '#413f5e';
      }
    }
  }
}
