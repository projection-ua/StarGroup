new Swiper(".special-swiper-container", {
  slidesPerView: 1,
  spaceBetween: 12,

  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 3,
    },
  },
});
