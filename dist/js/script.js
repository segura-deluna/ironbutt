document.addEventListener('DOMContentLoaded', () => {
  // * Burger ================
  document.querySelector('.burger__button').onclick = function () {
    document.querySelector('.burger__button-icon').classList.toggle('active');
    document.querySelector('.burger__menu').classList.toggle('active');
  };

  // * Dropdown ===========================
  const accordions = document.querySelectorAll('.dropdown');
  for (item of accordions) {
    item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        for (el of accordions) {
          el.classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }

  // * Tooltip-menu =======================

  // function toolTip() {
  //   const menu = document.querySelector('.header-desktop__menu-tooltip');

  //   document.querySelector('#tooltip').onmouseover = function (event) {
  //     const target = event.target;
  //     if (target.nextElementSibling == menu) return;
  //     menu.classList.add('visible');
  //     if (target.nextElementSibling != menu) return;
  //     menu.classList.remove('visible');
  //   };
  // }

  // toolTip();
});
