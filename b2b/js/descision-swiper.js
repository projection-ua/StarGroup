new Swiper(".descision-swiper-container", {
  slidesPerView: 1.12,
  spaceBetween: 12,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
  },

  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
  },
});

new Swiper(".company-swiper-container", {
  slidesPerView: 6,
  spaceBetween: 0,

  // Плавний перехід
  speed: 1000, // Швидкість прокручування (тут 2 секунди)
  effect: "slide",

  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5.6,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-btn-next",
      },
    },
  },
});

new Swiper(".company-swiper-container-residential", {
  slidesPerView: 1.7,
  spaceBetween: 10,

  // Плавний перехід
  speed: 1000, // Швидкість прокручування (тут 2 секунди)
  effect: "slide",

  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5.6,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-btn-next",
      },
    },
  },
});


