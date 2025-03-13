const copyBtns = document.querySelectorAll('.clipboard');

copyBtns?.forEach(btn => {
  btn.addEventListener('click', event => {
    if (btn.classList.contains('isCopy')) return;

    const copyBox = event.target.closest('.copyBox');
    const textToCopy = btn.dataset.copy;

    if (copyBox && textToCopy) {
      const copyElem = copyBox.querySelector('.copyElem');
      const textDef = btn.textContent.trim();

      if (copyElem) {
        const textElem = copyElem.textContent.trim();

        navigator.clipboard
          .writeText(textElem)
          .then(() => {
            if (!copyBox.timer) {
              copyBox.timer = null;
            }

            btn.classList.add('isCopy');
            btn.textContent = textToCopy;

            if (copyBox.timer) {
              clearTimeout(copyBox.timer);
            }

            copyBox.timer = setTimeout(() => {
              btn.textContent = textDef;
              btn.classList.remove('isCopy');
              copyBox.timer = null;
            }, 1000);
          })
          .catch(err => {
            console.error('Помилка при копіюванні: ', err);
          });
      }
    }
  });
});
