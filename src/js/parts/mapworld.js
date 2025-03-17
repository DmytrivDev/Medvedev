const mapworldSection = document.querySelector('.mapworld');
const mapCountries = document.querySelectorAll('.mapworld__country.isCurrent');

let animationTriggered = false;

function getRandomDelay(min, max) {
  return Math.random() * (max - min) + min;
}

function animateCountries() {
  if (!mapworldSection || !mapCountries.length || animationTriggered) return;

  const sectionRect = mapworldSection.getBoundingClientRect();
  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
  const viewportCenter = window.innerHeight;
  const sectionCenter = sectionRect.top + sectionRect.height / 2;

  if (
    sectionCenter - headerHeight <= viewportCenter &&
    sectionCenter - headerHeight >= 0
  ) {
    animationTriggered = true;

    // Копируем массив стран и перемешиваем его случайным образом
    const shuffledCountries = [...mapCountries].sort(() => Math.random() - 0.5);

    shuffledCountries.forEach((country, index) => {
      setTimeout(() => {
        country.classList.add('showed');
      }, getRandomDelay(50, 100) * index); // Рандомная задержка
    });
  }
}

window.addEventListener('scroll', animateCountries);
document.addEventListener('DOMContentLoaded', animateCountries);
