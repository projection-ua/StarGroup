import { Autoplay, Pagination } from "swiper/modules";
import Swiper from "swiper";
import "../node_modules/swiper/swiper-bundle.min.css";

new Swiper(".universal-swiper-container", {
  modules: [Autoplay, Pagination],

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
