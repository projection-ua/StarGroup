new Swiper(".catalog-swiper-container", {
  slidesPerView: 1.1,
  loop: true,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
  },
});
