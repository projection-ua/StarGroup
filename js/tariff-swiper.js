// import { Pagination } from "../node_modules/swiper/modules";

// import Swiper from "../node_modules/swiper";
// import "../node_modules/swiper/swiper-bundle.min.css";

new Swiper(".tariff-swiper-container", {
  // modules: [Pagination],

  slidesPerView: 1,
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
