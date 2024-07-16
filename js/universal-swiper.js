new Swiper(".universal-swiper-container", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
