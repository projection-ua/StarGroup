new Swiper(".we-can-swiper-container", {
  slidesPerView: 1.1,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});
