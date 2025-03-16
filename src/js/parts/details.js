import { initSlider } from './splidecust';
import { openModal, closeModal } from './modal';

const modal = document.querySelector('.details');
const cards = document.querySelectorAll('.card-skill');

let splideInstance = null;

function openModalDetails(cardIndex) {
  if (!modal || !cards.length) return;

  const modalList = modal.querySelector('.splide__list');
  modalList.replaceChildren();

  cards.forEach(card => {
    const slide = document.createElement('li');
    slide.classList.add('splide__slide');
    slide.innerHTML = card.innerHTML;
    modalList.appendChild(slide);
  });

  if (!splideInstance) {
    splideInstance = initSlider(modal, {
      type: 'fade',
      perPage: 1,
    });
  } else {
    splideInstance.refresh();
  }

  splideInstance.go(cardIndex);
}

cards?.forEach((card, index) => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.id;
    if (modalId && window.innerWidth < 768) {
      openModalDetails(index);
      openModal(modalId);
    }
  });
});

window.addEventListener('resize', () => {
  const modal = document.getElementById('idDetails');
  if (modal) {
    const opened = modal.classList.contains('isOpened');
    if (opened && window.innerWidth > 768) {
      closeModal(modal);
    }
  }
});
