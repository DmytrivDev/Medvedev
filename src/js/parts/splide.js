import { initSlider } from './splidecust';

const confernSplide = document.querySelector('.confern');
if (confernSplide) {
  initSlider(confernSplide, {
    type: 'fade',
    perPage: 1,
  });
}
