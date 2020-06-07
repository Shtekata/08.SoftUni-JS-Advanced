function solve() {
  // document.querySelector('button').addEventListener('click', () => {});
  document.querySelector('button').addEventListener('click', onClick);
  const list = {};
  // const items = document.querySelectorAll('ol > li');
  // const items = document.querySelector('ol').childNodes;
  const items = document.querySelector('ol').querySelectorAll('li');

  [...items].forEach((x) => {
    if (x.textContent.trim().length == 0) {
      return;
    }
    const letter = x.textContent[0].toLocaleUpperCase();
    list[letter] = x.textContent;
  });

  function onClick() {
    const input = document.querySelector('input');
    const value = input.value;
    const letter = value[0].toLocaleUpperCase();

    if (!list.hasOwnProperty(letter)) {
      list[letter] = value;
    } else {
      list[letter] = list[letter] + ', ' + value;
    }

    const index = letter.charCodeAt() - 65;
    // items[index * 2 + 1].textContent = list[letter];
    items[index].textContent = list[letter];

    input.value = '';
  }
}
