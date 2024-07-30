// const docBackdropBtn = document.querySelector(".backdrop-btn-container-JS");
// const backdropContainer = document.querySelector(
//   ".document-backdrop-container-JS"
// );

// docBackdropBtn.addEventListener("click", () => {
//   backdropContainer.classList.toggle("is-active");
// });

document
  .querySelector(".document-flex-container")
  .addEventListener("click", (event) => {
    if (event.target.closest(".backdrop-btn-container-JS")) {
      const btnContainer = event.target.closest(".backdrop-btn-container-JS");
      const backdropContainer = btnContainer.nextElementSibling;
      backdropContainer.classList.toggle("is-active");
    }
  });
