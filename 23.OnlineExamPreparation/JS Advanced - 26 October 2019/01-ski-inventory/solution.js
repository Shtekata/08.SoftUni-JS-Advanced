function solve() {
  const products = document.querySelector('#products > ul');
  const order = document.querySelector('#myProducts > ul');

  const form = document.querySelector('#add-new').children;
  const inputName = form[1];
  const inputQty = form[2];
  const inputPrice = form[3];
  form[4].addEventListener('click', addProduct);

  const filterInput = document.querySelector('#filter');
  document.querySelector('.filter > button').addEventListener('click', filter);

   const priceTag = document.querySelectorAll('h1')[1];
   let currentPrice = 0;
   document.querySelector('#myProducts > button').addEventListener('click', () => {
      currentPrice = 0;
      priceTag.textContent = `Total Price: ${currentPrice.toFixed(2)}`;
      Array.from(order.children).forEach(x => x.remove());
   })
   
  function addProduct(x) {
    x.preventDefault();

    const name = inputName.value;
    let qty = +inputQty.value;
    const price = +inputPrice.value;
    const qtyStrong = el('strong', `Available: ${qty}`);
    const addBtn = el('button', `Add to Client's List`);

    const product = el('li', [
      el('span', name),
      qtyStrong,
      el('div', [el('strong', price.toFixed(2)), addBtn]),
    ]);

    addBtn.addEventListener('click', () => {
      addToCard(name, price);
      qty--;
      if (qty === 0) {
        product.remove();
      } else {
        qtyStrong.textContent = `Available: ${qty}`;
      }
    });
     products.appendChild(product);
     
     inputName.value = '';
     inputPrice.value = '';
     inputQty.value = '';
  }

   function addToCard(name, price) {
      currentPrice += price;
      priceTag.textContent = `Total Price: ${currentPrice.toFixed(2)}`;
    order.appendChild(el('li', [name, el('strong', price.toFixed(2))]));
  }

  function filter() {
    const query = filterInput.value.trim().toLowerCase();
    const items = Array.from(products.querySelectorAll('li'));
    items.forEach((x) => {
      if (x.children[0].textContent.toLowerCase().includes(query)) {
        x.style.display = '';
      } else {
        x.style.display = 'none';
      }
    });
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
