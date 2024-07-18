import { Autoplay, Pagination } from "swiper/modules";
import Swiper from "swiper";
import "./node_modules/swiper/swiper-bundle.min.css";

new Swiper(".hero-swiper-container", {
  modules: [Autoplay, Pagination],

  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
