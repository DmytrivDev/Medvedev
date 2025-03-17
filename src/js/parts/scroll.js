// scrollToElement ======================
import scrollToElement from 'scroll-to-element';

const anchorLinks = document.querySelectorAll('.anchor');

anchorLinks?.forEach(link => {
  link.addEventListener('click', event => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const href = link.getAttribute('href');

    if (href.startsWith('#')) {
      event.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        scrollToElement(targetElement, {
          offset: -headerHeight, // Смещение от элемента (если нужно добавить отступ)
          ease: 'inOutQuint', // Плавность анимации
          duration: 1000, // Длительность анимации (мс)
        });
      }
    }
  });
});

// scrollTop ======================
const scrollTop = document.querySelectorAll('.scrollTop');

scrollTop?.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
