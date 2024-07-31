new Swiper(".main-tariff-swiper-container", {
  slidesPerView: 1,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 4,
    },
  },
});
