function solve() {
    const screen = document.querySelector('#expressionOutput');
    const output = document.querySelector('#resultOutput');
    document.querySelector('.clear').addEventListener('click', () => {
        screen.textContent = '';
        output.textContent = '';
        memory.first = '';
        memory.second = '';
        memory.operator = '';
    });

  [...document.querySelector('div.keys').querySelectorAll('button')].forEach(
    (x) => {
      x.addEventListener('click', onClick);
    }
  );

  const memory = {
    first: '',
    second: '',
    operator: '',
  };

  const operators = {
    '+': () => +memory.first + +memory.second,
    '-': () => +memory.first - +memory.second,
    '*': () => +memory.first * +memory.second,
    '/': () => +memory.first / +memory.second,
    '=': true,
  };

  function onClick(x) {
    const value = x.target.value;
    if (operators.hasOwnProperty(value)) {
      if (value === '=') {
        output.textContent = operators[memory.operator]();
      } else {
        memory.operator = value;
      }
    } else {
      if (memory.operator === '') {
        memory.first += value;
      } else {
        memory.second += value;
      }
    }
    screen.textContent = `${memory.first} ${memory.operator} ${memory.second}`;
  }
}
