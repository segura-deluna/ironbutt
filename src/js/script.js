document.addEventListener('DOMContentLoaded', () => {
  // * Sliders ================
  const ironSlider = new Swiper('.slider__iron', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  // * TABS ===========================
  const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
      content.forEach((item) => {
        item.style.display = 'none';
      });

      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      content[i].style.display = 'block';
      tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();
    responce();
    header.addEventListener('click', (e) => {
      const target = e.target;
      if (
        target &&
        (target.classList.contains(tabSelector.replace(/\./, '')) ||
          target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
      ) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  };

  tabs('.tab-triggers', '.tab-trigger', '.tab-item', 'active');

  // * Dropdown ===========================
  // const accordions = document.querySelectorAll('.dropdown');
  // for (item of accordions) {
  //   item.addEventListener('click', function () {
  //     if (this.classList.contains('active')) {
  //       this.classList.remove('active');
  //     } else {
  //       for (el of accordions) {
  //         el.classList.remove('active');
  //       }
  //       this.classList.add('active');
  //     }
  //   });
  // }
  //
  // * Burger ================
  document.querySelector('.burger__button').onclick = function () {
    document.querySelector('.burger__button-icon').classList.toggle('active');
    document.querySelector('.burger__menu').classList.toggle('active');
  };
});
