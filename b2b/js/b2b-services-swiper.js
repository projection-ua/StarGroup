if (window.innerWidth > 1024) {
  new Swiper(".services-swiper-container", {
    slidesPerView: 7,
    spaceBetween: 0,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4.9,
        spaceBetween: 10,
      },
    },
  });
}
