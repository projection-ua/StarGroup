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

new Swiper(".we-can-swiper-container-short", {
  slidesPerView: 1.1,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

new Swiper(".we-can-swiper-container-short2", {
  slidesPerView: 1.1,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});
