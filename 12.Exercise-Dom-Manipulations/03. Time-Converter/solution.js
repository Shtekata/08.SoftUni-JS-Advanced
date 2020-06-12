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

    document.querySelector('#daysBtn').addEventListener('click', convertDays);
    document.querySelector('#hoursBtn').addEventListener('click', convertHours);
    document.querySelector('#minutesBtn').addEventListener('click', convertMinutes);
    document.querySelector('#secondsBtn').addEventListener('click', convertSeconds);

    function convertDays(e) {
        const value = +days.value;
        const convertedValues = convert(value, 'days');
        display(convertedValues);
    }

    function convertHours(e) {
      const value = +hours.value;
      const convertedValues = convert(value, 'hours');
      display(convertedValues);
    }

    function convertMinutes(e) {
      const value = +minutes.value;
      const convertedValues = convert(value, 'minutes');
      display(convertedValues);
    }

    function convertSeconds(e) {
      const value = +seconds.value;
      const convertedValues = convert(value, 'seconds');
      display(convertedValues);
    }

    function display(values) {
        days.value = values.days;
        hours.value = values.hours;
        minutes.value = values.minutes;
        seconds.value = values.seconds;
    }
}
