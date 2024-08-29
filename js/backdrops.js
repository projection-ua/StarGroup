// Вибір всіх кнопок і контейнерів
const telBackdropBtns = document.querySelectorAll(".address-tel-number");
const telBackdrops = document.querySelectorAll(
  ".addres-tel-number-backdrop-list"
);
const telNumbersContainers = document.querySelectorAll(
  ".header-tel-numbers-container"
);

// Додавання або зняття класу active при кліку на кнопку для кожного випадку
telBackdropBtns.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    telBackdrops[index].classList.toggle("active");
    telNumbersContainers[index].classList.toggle("active");
    event.stopPropagation(); // Запобігає спрацюванню події на документі
  });
});

// Закриття при кліку за межами контейнера
document.addEventListener("click", (event) => {
  telNumbersContainers.forEach((container, index) => {
    const isClickInside = container.contains(event.target);

    if (!isClickInside) {
      telBackdrops[index].classList.remove("active");
      container.classList.remove("active");
    }
  });
});
