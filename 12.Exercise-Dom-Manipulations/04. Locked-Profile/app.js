function lockedProfile() {
  document.querySelector('main').addEventListener('click', onClick);

  function onClick(x) {
    if (x.target.nodeName === 'BUTTON') {
      const parent = x.target.parentNode;
      const lock = parent.querySelector('input[type="radio"][value="lock"]');
      if (lock.checked) {
        return;
      }
      const hiddenFields = [...parent.querySelectorAll('div')].filter((x) =>
        x.id.includes('HiddenFields')
      )[0];
      hiddenFields.style.display !== 'block'
        ? ((hiddenFields.style.display = 'block'),
          (x.target.textContent = 'Hide it'))
        : ((hiddenFields.style.display = 'none'),
          (x.target.textContent = 'Show more'));

      //   hiddenFields.style.display =
      //     hiddenFields.style.display === 'block' ? 'none' : 'block';
    }
  }
}
