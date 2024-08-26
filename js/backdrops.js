// Header tel numbers backdrop

const telBackdropBtn = document.querySelector(".address-tel-number");
const telBackdrop = document.querySelector(".addres-tel-number-backdrop-list");
const telNumbersContainer = document.querySelector(
  ".header-tel-numbers-container"
);

telBackdropBtn.addEventListener("click", () => {
    telBackdrop.classList.toggle("active");
    telNumbersContainer.classList.toggle("active");
});
