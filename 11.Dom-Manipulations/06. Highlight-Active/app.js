function focus() {
  // document.body.addEventListener('focus', (x) => {
  //     console.log(x);
  // });
  const inputs = document.querySelectorAll('input[type="text"]');
  //   inputs.forEach((x) =>
  //     x.addEventListener('focus', () => {
  //       console.log('f');
  //     })
  //   );
  function focusIn(x) {
    x.target.parentElement.classList.add('focused');
  }
  function focusOut(x) {
    x.target.parentElement.classList.remove('focused');
  }

  //   inputs.forEach((x) => {
  //     x.addEventListener('focus', focusIn);
  //     x.addEventListener('blur', focusOut);
  //   });

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', focusIn);
    inputs[i].addEventListener('blur', focusOut);
  }
}
