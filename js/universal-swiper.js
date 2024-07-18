// import { Autoplay, Pagination } from "../node_modules/swiper/modules";
// import Swiper from "../node_modules/swiper";
// import "../node_modules/swiper/swiper-bundle.min.css";

new Swiper(".universal-swiper-container", {
  // modules: [Autoplay, Pagination],

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
