function solve() {
  const anchors = Array.from(document.querySelectorAll('a'));
  // const counters = new Array(anchors.length).fill(0);
  const counters = anchors.map(
    (x) => +x.nextElementSibling.innerText.split(' ')[1]
  );
  const container = document.querySelector('#page1 > .middled');
  container.addEventListener('click', function (x) {
    const target = x.target;
    const parent = x.target.parentElement;
    const notTargetAnchor = target.localName !== 'a';
    const notTargetParentAnchor = parent && parent.localName !== 'a';
    if (notTargetAnchor && notTargetParentAnchor) {
      return;
    }
    const targetAnchor = notTargetAnchor ? parent : target;
    const counterIndex = anchors.indexOf(targetAnchor);
    const arrValue = ++counters[counterIndex];
    const paragraph = targetAnchor.nextElementSibling;
    // const paragraphValueText = paragraph.innerText.substr(8);
    // const paragraphValues = paragraphValueText.split(' ');
    // const paragraphValue = +paragraphValues[0];
    // const value = arrValue + paragraphValue;
    // let anchorValue = paragraphValue + 1;
    // // paragraph.innerText = `visited ${value} times`;
    // paragraph.innerText = `visited ${anchorValue} times`;
    paragraph.innerText = `visited ${arrValue} times`;
  });
}
