function solve() {
  const petsForAdoption = document.querySelector('#adoption > ul');
  const pet = document.querySelector('#container');
  const petsAdopted = document.querySelector('#adopted > ul');

  const petInput = pet.children;
  const inputName = petInput[0];
  const inputAge = petInput[1];
  const inputKind = petInput[2];
  const inputCurrentOwner = petInput[3];
  petInput[4].addEventListener('click', addPet);

  function addPet(x) {
    x.preventDefault();

    const name = inputName.value;
    const age = +inputAge.value;
    const kind = inputKind.value;
    const currentOwner = inputCurrentOwner.value;

    if (
      name !== '' &&
      typeof age === 'number' &&
      kind !== '' &&
      currentOwner !== ''
    ) {
      const currentOwnerEl = el('span', `Owner: ${currentOwner}`);
      const contactWithOwnerBtn = el('button', `Contact with owner`);
      const newOwnerInput = el('input', '', {
        type: 'text',
        placeholder: 'Enter your names',
      });
      const takePetBtn = el('button', 'Yes! I take it!');

      const pet = el('li', [
        el('p', [
          el('strong', name),
          ' is a ',
          el('strong', age),
          ' year old ',
          el('strong', kind),
        ]),
        currentOwnerEl,
        contactWithOwnerBtn,
      ]);

      petsForAdoption.appendChild(pet);

      const contactDiv = el('div', [newOwnerInput, takePetBtn]);
      const checkedBtn = el('button', 'Checked');

      inputName.value = '';
      inputAge.value = '';
      inputKind.value = '';
      inputCurrentOwner.value = '';

      contactWithOwnerBtn.addEventListener('click', () => {
        contactWithOwnerBtn.remove();
        pet.appendChild(contactDiv);
      });

      takePetBtn.addEventListener('click', () => {
        if (newOwnerInput.value !== '') {
          currentOwnerEl.textContent = `New Owner: ${newOwnerInput.value}`;
          contactDiv.remove();
          pet.appendChild(checkedBtn);
          petsAdopted.appendChild(pet);
        }
      });

      checkedBtn.addEventListener('click', () => {
        pet.remove();
      });
    }
  }

  function el(type, content, attributes) {
    const result = document.createElement(type);
    if (attributes !== undefined) {
      Object.assign(result, attributes);
    }
    if (Array.isArray(content)) {
      content.forEach(append);
    } else {
      append(content);
    }
    function append(node) {
      if (typeof node === 'string' || typeof node === 'number') {
        node = document.createTextNode(node);
      }
      result.appendChild(node);
    }
    return result;
  }
}
