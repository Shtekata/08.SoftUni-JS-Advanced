function solve() {
  const inputField = document.querySelector('#searchField');
  const searchButton = document.querySelector('#searchBtn');
  const tr = Array.from(document.querySelectorAll('tbody > tr'));

  searchButton.addEventListener('click', (x) => {
    const word = inputField.value.trim().toLocaleLowerCase();
    if (word == '') {
      return;
    }
    inputField.value = '';
    tr.forEach((x) => x.removeAttribute('class'));

    tr.forEach((x) => {
      Array.from(x.children).forEach((y) =>
        y.textContent.trim().toLocaleLowerCase().includes(word)
          ? x.setAttribute('class', 'select')
          : 'pass'
      );
    });
  });
}
