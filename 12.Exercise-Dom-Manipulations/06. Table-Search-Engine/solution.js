function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onSearch);
  const input = document.querySelector('#searchField');

  function onSearch(x) {
    const query = input.value.trim().toLocaleLowerCase();
    if (query.trim().length > 0) {
      const tbody = document.querySelector('tbody');

      [...tbody.querySelectorAll('tr')].forEach((x) => {
        x.classList.remove('select');
      });

      [...tbody.querySelectorAll('td')].forEach((x) => {
        if (x.textContent.trim().toLocaleLowerCase().includes(query)) {
          x.parentNode.classList.add('select');
        }
      });

      input.value = '';
    }
  }
}
