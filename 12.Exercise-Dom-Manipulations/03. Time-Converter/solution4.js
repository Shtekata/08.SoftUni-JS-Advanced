window.addEventListener('load', attachEventsListeners);

function attachEventsListeners() {
  document.querySelector('main').addEventListener('click', mainFunc);

  function mainFunc(x) {
    const value = x.target.parentNode.children[1].value;
    const fromUnit = x.target.parentNode.children[1].id;
    const btn = x.target.id;

    if (btn.includes('Btn') && value !== '') {
      addResult(fromUnit, value);
    }
  }

  function addResult(fromUnit, value) {
    Array.from(document.getElementsByTagName('input'))
      .filter((x) => x.type === 'text')
      .forEach((x) => (x.value = convertFromDaysTo(fromUnit, value, x.id)));
  }

  function convertFromDaysTo(from, value, to) {
    const units = {
      days: 1,
      hours: 24,
      minutes: 1440,
      seconds: 86400,
    };

    return ((units['days'] * value) / units[from]) * units[to];
  }
}
