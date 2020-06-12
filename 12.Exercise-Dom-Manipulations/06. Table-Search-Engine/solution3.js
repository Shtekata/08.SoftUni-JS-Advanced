function solve() {
  const inputText = document.getElementById('searchField');
  const table = document.querySelector('tbody');
  document.getElementById('searchBtn').addEventListener('click', (x) => {
    Array.from(table.rows, (x) => {
      if (
        x.textContent
          .toLocaleLowerCase()
          .includes(inputText.value.toLocaleLowerCase())
      ) {
        x.classList.add('select');
      } else {
        x.classList.remove('select');
      }
    });
    inputText.value = '';
  });
}
