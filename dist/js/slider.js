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

  const mileSlider = new Swiper('.mile__slider', {
    spaceBetween: 10,

    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
});
