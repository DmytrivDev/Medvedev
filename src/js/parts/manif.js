const manif = document.querySelectorAll('.manif');

function initManif() {
  manif?.forEach(section => {
    const sectionRect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const headerHeight = document.querySelector('.header').offsetHeight;

    const headingTl = section.querySelector('.heading .tl1 span');
    if (!headingTl) return;

    const divisionHeight = windowWidth < 365 ? 4 : 2;

    // Проверяем, что секция видима хотя бы частично
    const centerOfViewport = viewportHeight / 2;
    const distanceToCenter = centerOfViewport - sectionRect.top + headerHeight;
    let visibilityPercentage =
      (distanceToCenter / (sectionRect.height / divisionHeight)) * 100;

    // Обмежуємо значення від 0% до 100%
    visibilityPercentage = Math.max(0, Math.min(visibilityPercentage, 100));

    // Плавный переход от 0.4 до 1
    const opacityValue = (0.4 + (visibilityPercentage / 100) * 0.6).toFixed(2);

    headingTl.style.opacity = opacityValue;
  });
}

window.addEventListener('resize', initManif);
document.addEventListener('scroll', initManif);
document.addEventListener('DOMContentLoaded', initManif);
