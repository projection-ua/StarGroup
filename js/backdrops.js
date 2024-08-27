// Header tel numbers backdrop
const telBackdropBtn = document.querySelector(".address-tel-number");
const telBackdrop = document.querySelector(".addres-tel-number-backdrop-list");
const telNumbersContainer = document.querySelector(
  ".header-tel-numbers-container"
);

// Додавання або зняття класу active при кліку на кнопку
telBackdropBtn.addEventListener("click", (event) => {
  telBackdrop.classList.toggle("active");
  telNumbersContainer.classList.toggle("active");
  event.stopPropagation(); // Запобігає спрацюванню події на документі
});

// Закриття при кліку за межами контейнера
document.addEventListener("click", (event) => {
  const isClickInside = telNumbersContainer.contains(event.target);

  if (!isClickInside) {
    telBackdrop.classList.remove("active");
    telNumbersContainer.classList.remove("active");
  }
});