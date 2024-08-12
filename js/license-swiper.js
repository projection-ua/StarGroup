new Swiper(".swiper-license-container", {
  slidesPerView: 1.1,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
      },
    },
  },
});
