// prevDefLinksHeadBot ===========================
function prevDefLinksHeadBot() {
  const headerBottom = document.querySelector('.header__bottom');

  if (headerBottom) {
    const links = headerBottom.querySelectorAll('.menu-item-has-children > a');

    links?.forEach(link => {
      if (link.getAttribute('href') === '#') {
        link.addEventListener('click', event => event.preventDefault());
      }
    });
  }
}

// setFooterNavMinHeight ===========================
function setFooterNavMinHeight() {
  const footerNav = document.querySelector('.footer__nav');
  const footerSubMenu = document.querySelectorAll('.footer__nav .sub-menu');
  const footerList = document.querySelector('.footer__list');

  if (!footerNav || footerSubMenu.length === 0 || !footerList) return;

  if (window.innerWidth > 365) {
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
