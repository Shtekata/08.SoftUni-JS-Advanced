function addItem() {
  const itemsList = document.getElementById('items');
  const textInput = document.getElementById('newItemText');
  const textInputValue = textInput.value;

  if (!textInputValue) {
    return;
  }
  const li = document.createElement('li');
  li.innerText = textInputValue;
  itemsList.appendChild(li);
  textInput.value = '';
}

const div = document.getElementsByTagName('input')[1];
div.style.color = 'blue';
div.style.backgroundColor = 'yellow';
div.addEventListener('mouseover', divMouseOver);
function divMouseOver(x) {
  //   const currentTarget = x.currentTarget.style.backgroundColor || 'white';
  //   let {
  //     currentTarget: {
  //       style: { backgroundColor },
  //     },
  //   } = x;
  const { currentTarget } = x;
  let {
    style: { backgroundColor },
  } = currentTarget;
  if (backgroundColor === 'yellow') {
    currentTarget.style.backgroundColor = 'blue';
    currentTarget.style.color = 'yellow';
  } else {
    currentTarget.style.backgroundColor = 'yellow';
    currentTarget.style.color = 'blue';
    }
    
    console.log('1');
    const id = setTimeout(() => {
        console.log('Hello!');
    }, 1000);
    console.log('2');

    const id2 = setInterval(() => {
        console.log('Asen');
    }, 2000);
    setTimeout(() => {
        clearInterval(id2);
    }, 12000);
}

const input = document.querySelector('input[type="text"]');
input.addEventListener('mouseover', () => {
    // clearTimeout(id);
})
