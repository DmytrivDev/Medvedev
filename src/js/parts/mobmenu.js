import { lockScroll, unlockScroll } from './lockscroll.js';

const headerMain = document.querySelector('.header__main');
const burger = document.querySelector('.burger');
const mobMenu = document.querySelector('.mobmenu');
const mobMenuBody = document.querySelector('.mobmenu__body');
const mobNavLinks = document.querySelectorAll('.mobmenu .navmenu__list a');
const mobAnchorLinks = document.querySelectorAll('.mobmenu .anchor');

let isMenuOpened = false;

function toggleMenu() {
  if (burger && mobMenu) {
    isMenuOpened = !isMenuOpened;
    burger.classList.toggle('isOpened');
    mobMenu.classList.toggle('isOpened');
    headerMain.classList.toggle('isOpened');

    if (isMenuOpened) {
      lockScroll(mobMenuBody);
    } else {
      unlockScroll();
    }
  }
}

function closeMenu() {
  if (burger && mobMenu && isMenuOpened) {
    isMenuOpened = false;
    burger.classList.remove('isOpened');
    mobMenu.classList.remove('isOpened');
    headerMain.classList.toggle('isOpened');
    unlockScroll();
  }
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeMenu();
  }
}

function initMenu() {
  if (burger && mobMenu) {
    window.addEventListener('resize', handleResize);
    burger.addEventListener('click', toggleMenu);
  }

  if (mobAnchorLinks) {
    mobAnchorLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }
  if (mobNavLinks) {
    mobNavLinks.forEach(link => {
      link.addEventListener('click', event => {
        const target = event.target;
        const itemChildren = target.closest('.menu-item');
        const subMenu = target.closest('.sub-menu');

        const hasItemChildren = itemChildren?.classList.contains(
          'menu-item-has-children'
        );
        const subMenuLink = subMenu?.querySelectorAll('a');

        if (!hasItemChildren || subMenuLink) {
          closeMenu();
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', initMenu);
