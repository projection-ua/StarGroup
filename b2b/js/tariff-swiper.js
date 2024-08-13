new Swiper(".b2b-tariffes-swiper-container", {
  slidesPerView: 1.06,
  spaceBetween: 12,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
