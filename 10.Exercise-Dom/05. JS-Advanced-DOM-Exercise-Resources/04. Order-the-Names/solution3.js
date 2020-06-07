function solve() {
  document.getElementsByTagName('button')[0].onclick = () => {
    const nameNode = document.getElementsByTagName('input')[0];
    const name = nameNode.value;
    const modifiedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

    const index = modifiedName.charCodeAt(0) - 65;

    let row = document.getElementsByTagName('li')[index];
    row.textContent == ''
      ? (row.textContent = modifiedName)
      : (row.textContent = row.textContent + ', ' + modifiedName);

    nameNode.value = '';
  };
}
