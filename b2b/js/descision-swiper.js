new Swiper(".descision-swiper-container", {
  slidesPerView: 3.5,
  spaceBetween: 16,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
  },
});
