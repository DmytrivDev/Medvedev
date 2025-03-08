const anchorBtns = document.querySelectorAll('.anchor');

anchorBtns?.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
