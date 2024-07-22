const parentList = document.querySelector(".question-container");

parentList.addEventListener("click", (event) => {
  const target = event.target;

  const backdrop = target.closest(".question-item");

  backdrop
    .querySelector(".question-item-acardeon-text-JS")
    .classList.toggle("is-active");
});
