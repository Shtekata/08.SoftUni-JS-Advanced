function stopwatch() {
  let seconds = 0;
  let minutes = 0;
  let intervalId;
  const timeDiv = document.getElementById('time');
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');

  function formatOutput(x) {
    let text = x.toString();
    if (x < 10) {
      text = '0' + text;
    }
    return text;
  }

  function setTimeDiv(minutes, seconds) {
    let minutesText = formatOutput(minutes);
    let secondsText = formatOutput(seconds);
    timeDiv.innerText = `${minutesText}:${secondsText}`;
  }

  function startBtnHandler(x) {
    minutes = 0;
    seconds = 0;
    setTimeDiv(minutes, seconds);

    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');

    intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      setTimeDiv(minutes, seconds);
    }, 1000);
  }

  function stopBtnHandler(x) {
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
  }

  startBtn.addEventListener('click', startBtnHandler);
  stopBtn.addEventListener('click', stopBtnHandler);
}
