const mapworldSection = document.querySelector('.mapworld');
const mapCountries = document.querySelectorAll('.mapworld__country.isCurrent');

let animationTriggered = false;

function getRandomDelay(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomAmount(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateCountries() {
  if (!mapworldSection || !mapCountries.length || animationTriggered) return;
  const sectionRect = mapworldSection.getBoundingClientRect();
  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
  const viewportCenter = window.innerHeight / 2;
  const sectionCenter = sectionRect.top + sectionRect.height / 2;

  // Проверяем, что секция находится по центру экрана (с учетом хедера)
  if (Math.abs(sectionCenter - viewportCenter - headerHeight) <= 100) {
    animationTriggered = true;

    const shuffledCountries = [...mapCountries].sort(() => Math.random() - 0.5);

    const randomCount = getRandomAmount(4, shuffledCountries.length);

    shuffledCountries.slice(0, randomCount).forEach((country, index) => {
      setTimeout(() => {
        country.classList.add('showed');
      }, getRandomDelay(100, 200) * index);
    });
  }
}

window.addEventListener('scroll', animateCountries);
document.addEventListener('DOMContentLoaded', animateCountries);
