new Swiper(".main-tariff-swiper-container", {
  slidesPerView: 1.1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
