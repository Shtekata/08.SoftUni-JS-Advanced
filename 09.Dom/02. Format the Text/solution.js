function solve() {
  const inputParagraph = document.querySelector('#input');
  const outputDiv = document.querySelector('#output');

  const paragrarhContent = inputParagraph.innerText;

  const sentenceArray = paragrarhContent.split('. ');
  let counter = 0;
  let currentParagraph = document.createElement('p');

  for (let i = 0; i < sentenceArray.length; i++) {
    counter++;
    currentParagraph.innerText += sentenceArray[i] + '.';
    // if (i % 3 === 0)
    if (counter === 3) {
      outputDiv.appendChild(currentParagraph);
      currentParagraph = document.createElement('p');
      counter = 0;
    }
  }

  if (counter !== 0) {
    outputDiv.appendChild(currentParagraph);
  }
}
