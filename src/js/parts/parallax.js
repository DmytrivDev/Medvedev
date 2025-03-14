const parallaxSections = document.querySelectorAll('.prllx');

function applyParallaxEffect() {
  const headerHeight =
    document.querySelector('.header__main')?.offsetHeight || 0;

  parallaxSections.forEach(section => {
    const parallaxBox = section.querySelector('.prllx-box');

    if (!parallaxBox) return;

    const sectionRect = section.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    if (!parallaxBox.classList.contains('isOpened') && windowWidth > 768) {
      parallaxBox.classList.add('isOpened');
    }

    // Перевірка, чи секція видна на екрані
    if (
      sectionRect.bottom < headerHeight ||
      sectionRect.top > window.innerHeight
    ) {
      return;
    }

    // Расчёт смещения от центра экрана (-1 до 1)
    const offset = (sectionRect.top - headerHeight) / sectionRect.height;
    console.log(offset);

    // Смещение в пределах [-4.375rem, 4.375rem] (по желанию можно увеличить)
    const shiftMultiplier = windowWidth < 768 ? 3 : 4.375;
    const shift = offset * shiftMultiplier;

    const items = parallaxBox.querySelectorAll(':scope > div');

    items[0].style.transform = `translateY(${shift}rem)`;
    items[1].style.transform = `translateY(${shift * -1}rem)`;
  });
}

window.addEventListener('scroll', applyParallaxEffect);
window.addEventListener('resize', applyParallaxEffect);
document.addEventListener('DOMContentLoaded', applyParallaxEffect);
