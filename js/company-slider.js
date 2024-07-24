const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const paginationItems = document.querySelectorAll(".pagination-custom div");
paginationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    swiper.slideToLoop(index);
    paginationItems.forEach((img) => img.classList.remove("active"));
    item.classList.add("active");
  });
});

swiper.on("slideChange", () => {
  paginationItems.forEach((img) => img.classList.remove("active"));
  paginationItems[swiper.realIndex].classList.add("active");
});
