function solve() {
  const dd = document.querySelector('#dropdown-ul');
  const box = document.querySelector('#box');

  window.addEventListener('click', (x) => {
    if (x.target.id === 'dropdown') {
      if (dd.style.display === 'block') {
        dd.style.display = 'none';
        box.style.color = 'white';
        box.style.backgroundColor = 'black';
        return;
      }
      dd.style.display = 'block';
    }
    if (x.target.nodeName === 'LI') {
      box.style.color = 'black';
      box.style.backgroundColor = x.target.innerText;
    }
    return;
  });
}
