function toggle() {
  const div = document.querySelector('#extra');
  // const btn = document.getElementsByClassName('button')[0];
  // const btn = document.querySelectorAll('.button')[0];
  const btn = document.querySelector('#accordion .head .button');

  //   if (div.style.display === 'block') {
  if (btn.textContent === 'Less') {
    div.style.display = 'none';
    //   div.style.display = '';
    btn.textContent = 'More';
  } else {
    div.style.display = 'block';
    btn.textContent = 'Less';
  }
}
