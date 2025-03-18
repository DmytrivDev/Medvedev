// prevDefLinksHeadBot ===========================
function prevDefLinksHeadBot() {
  const headerBottom = document.querySelector('.header__bottom');

  if (headerBottom) {
    const menuItems = headerBottom.querySelectorAll('.menu-item-has-children');

    menuItems?.forEach(menuItem => {
      const link = menuItem.querySelector('& > a');

      link.addEventListener('click', event => {
        event.preventDefault();

        menuItem.classList.toggle('isOpened');

        menuItems.forEach(otherItem => {
          if (otherItem !== menuItem) {
            otherItem.classList.remove('isOpened');
          }
        });

        document.addEventListener('click', handleOutsideClick);
      });
    });

    function handleOutsideClick(event) {
      const isClickInsideMenu = headerBottom.contains(event.target);

      if (!isClickInsideMenu || event.target.closest('.sub-menu a')) {
        menuItems.forEach(menuItem => menuItem.classList.remove('isOpened'));
        document.removeEventListener('click', handleOutsideClick);
      }
    }
  }
}

// setFooterNavMinHeight ===========================
function setFooterNavMinHeight() {
  const footerNav = document.querySelector('.footer__nav');
  const footerSubMenu = document.querySelectorAll('.footer__nav .sub-menu');
  const footerList = document.querySelector('.footer__list');

  if (!footerNav || footerSubMenu.length === 0 || !footerList) return;

  if (window.innerWidth > 480) {
    const maxSubMenuHeightPx = Math.max(
      ...[...footerSubMenu].map(menu => menu.offsetHeight)
    );
    const footerListHeightPx = footerList.offsetHeight;

    const htmlFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const totalHeightRem =
      (maxSubMenuHeightPx + footerListHeightPx) / htmlFontSize;

    footerNav.style.minHeight = `${totalHeightRem}rem`;
  } else {
    footerNav.style.minHeight = '';
  }
}

// EventListener ===========================
window.addEventListener('resize', setFooterNavMinHeight);

document.addEventListener('DOMContentLoaded', () => {
  prevDefLinksHeadBot();
  setFooterNavMinHeight();
});
