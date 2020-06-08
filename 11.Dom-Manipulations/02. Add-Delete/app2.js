const itemsList = document.getElementById('items');
const textInput = document.getElementById('newText');
itemsList.addEventListener('click', (x) => {
  const { target } = x;
  if (target.nodeName !== 'A') {
    return;
  }
  x.preventDefault();
  target.parentElement.remove();
});

function addItem() {
  const textInputValue = textInput.value;

  if (!textInputValue) {
    return;
  }
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.innerText = '[Delete]';
  a.href = '#';
  const text = document.createTextNode(textInputValue);
  li.appendChild(text);
  li.appendChild(a);

  // li.innerText = textInputValue;
  itemsList.appendChild(li);
  textInput.value = '';
}
