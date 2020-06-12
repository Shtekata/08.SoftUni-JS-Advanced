function attachEventsListeners() {
  const ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function convert(value, from) {
    const inDays = value / ratios[from];
    return {
      days: inDays * ratios.days,
      hours: inDays * ratios.hours,
      minutes: inDays * ratios.minutes,
      seconds: inDays * ratios.seconds,
    };
  }

  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');

  document.querySelector('main').addEventListener('click', onClick);

  function onClick(x) {
    if (x.target.type === 'button') {
      const el = x.target.parentNode.querySelectorAll('input[type="text"]')[0];
      const id = el.id;
      const value = +el.value;
      const convertedValues = convert(value, id);
      display(convertedValues);
    }
  }

  function display(values) {
    days.value = values.days;
    hours.value = values.hours;
    minutes.value = values.minutes;
    seconds.value = values.seconds;

    setTimeout(() => {
        days.value = '';
        hours.value = '';
        minutes.value = '';
        seconds.value = '';
    }, 3000);
  }
}
