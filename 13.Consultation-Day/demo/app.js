app();

function app() {
    const list = document.querySelector('ol');
    const items = [...list.querySelectorAll('li')];

    items.sort((x, y) => x.textContent.localeCompare(y.textContent));
    items.forEach(x => list.appendChild(x));
}