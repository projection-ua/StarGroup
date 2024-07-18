import { Pagination } from "../node_modules/swiper/modules";

import Swiper from "../node_modules/swiper";
import "../node_modules/swiper/swiper-bundle.min.css";

new Swiper(".tariff-swiper-container", {
  modules: [Pagination],

  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
});
