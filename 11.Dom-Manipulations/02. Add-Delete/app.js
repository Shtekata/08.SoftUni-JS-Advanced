function addItem() {
  const itemsList = document.getElementById('items');
  const textInput = document.getElementById('newText');
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
    a.addEventListener('click', (x) => {
        x.preventDefault();
        x.target.parentElement.remove();
    })
  // li.innerText = textInputValue;
  itemsList.appendChild(li);
  textInput.value = '';
}
