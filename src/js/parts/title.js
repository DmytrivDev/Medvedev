function initTalent() {
  const section = document.querySelector('.covers');

  if (section) {
    const title = document.querySelector('.heading .tl1 > span');
    const letters = title.textContent.split(''); // Розбиваємо текст на букви
    title.innerHTML = letters.map(letter => `<span>${letter}</span>`).join(''); // Обгортаємо кожну букву в <span>

    const spans = title.querySelectorAll('span');

    window.addEventListener('scroll', () => {
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Обчислюємо прогрес скролу: 0 коли верх секції торкається верхнього краю екрану,
      // і 1 коли низ секції торкається нижнього краю екрану
      const progress = Math.min(
        Math.max(
          (windowHeight - sectionRect.bottom + 100) /
            (windowHeight - sectionRect.height),
          0
        ),
        1
      );

      // Кількість букв для замальовування
      const lettersToPaint = Math.floor(progress * spans.length);

      // Замальовуємо відповідну кількість букв
      spans.forEach((span, index) => {
        if (index >= spans.length - lettersToPaint) {
          span.style.color = 'rgba(255, 255, 255, 0.4)'; // Повертаємо в сірий
        } else {
          span.style.color = '#fff'; // Замальовуємо в чорний
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', initTalent);
